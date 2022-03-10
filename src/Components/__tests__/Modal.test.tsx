import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Modal } from '../Modal';

describe('<Modal />', () => {
  it('Should render or not according to open state', () => {
    const handleClose = jest.fn();
    const { rerender } = render(
      <Modal open={true} handleClose={handleClose} title="test title">
        <div>Foo</div>
      </Modal>
    );

    const children = screen.getByText(/foo/i);
    const title = screen.getByText(/test title/i);

    userEvent.click(screen.getByTestId(/close-btn/i));

    const propmtMessage = screen.getByText(/Are you sure you want to quit this operation?/i);
    // Confirm yes when prompt open
    userEvent.click(screen.getByRole('button', { name: /yes/i }));
    expect(propmtMessage).not.toBeInTheDocument();
    expect(handleClose).toBeCalledTimes(1);

    rerender(
      <Modal open={false} handleClose={handleClose} title="test title">
        <div>Foo</div>
      </Modal>
    );
    expect(children).not.toBeInTheDocument();
    expect(title).not.toBeInTheDocument();
  });
});
