import { Portal } from './Portal';

interface PromptProps {
  message: string;
  handleConfirmation: (confirm: boolean) => void;
}

export const Prompt = ({ message, handleConfirmation }: PromptProps) => {
  return (
    <Portal>
      <div>
        <span>{message}</span>
        <div>
          <span role="button" onClick={() => handleConfirmation(true)}>
            Yes
          </span>
          <span role="button" onClick={() => handleConfirmation(false)}>
            No
          </span>
        </div>
      </div>
    </Portal>
  );
};
