import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Prompt } from '../Prompt';

test('Prompt should lift true or false state upon confirmation', async () => {
  const handleConfirmation = jest.fn();
  render(<Prompt message={'Are you sure this is a prompt component?'} handleConfirmation={handleConfirmation} />);

  screen.getByText(/Are you sure this is a prompt component/i);
  userEvent.click(screen.getByRole('button', { name: /yes/i }));
  expect(handleConfirmation).toHaveBeenCalledTimes(1);
  expect(handleConfirmation).toHaveBeenCalledWith(true);

  userEvent.click(screen.getByRole('button', { name: /no/i }));
  expect(handleConfirmation).toHaveBeenCalledWith(false);
});
