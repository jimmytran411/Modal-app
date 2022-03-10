import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DraftForm } from '../DraftForm';

it('User should be able to type in title, description, select option and submit form', async () => {
  const handleSubmit = jest.fn();
  render(<DraftForm formSubmit={handleSubmit} />);

  const title = screen.getByLabelText(/title/i);
  userEvent.type(title, 'test title');

  const description = screen.getByLabelText(/description/i);
  userEvent.type(description, 'test description');

  const submitBtn = screen.getByRole('button', { name: /submit/i });
  userEvent.click(submitBtn);

  await waitFor(() => {
    expect(handleSubmit).toHaveBeenCalledTimes(1);
    expect(handleSubmit).toHaveBeenCalledWith({
      description: 'test description',
      title: 'test title',
    });
  });
});

test('DraftForm title and description field should return errors if there are', async () => {
  const handleSubmit = jest.fn();
  render(<DraftForm formSubmit={handleSubmit} />);

  const submitBtn = screen.getByRole('button', { name: /submit/i });
  userEvent.click(submitBtn);

  await waitFor(() => {
    expect(screen.getByText(/title is required/i)).toBeInTheDocument();
    expect(screen.getByText(/description is required/i)).toBeInTheDocument();
  });
});
