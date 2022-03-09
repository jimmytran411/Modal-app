import { Portal } from './Portal';
import { usePortalStyles } from './styles/usePortalStyles';
import { usePropmtStyles } from './styles/usePromptStyles';

interface PromptProps {
  message: string;
  handleConfirmation: (confirm: boolean) => void;
}

export const Prompt = ({ message, handleConfirmation }: PromptProps) => {
  const { root, body } = usePortalStyles();
  const { title, btnGroup, btn, yesBtn, noBtn } = usePropmtStyles();
  return (
    <Portal className={root}>
      <div className={body}>
        <span className={title}>{message}</span>
        <div className={btnGroup}>
          <span role="button" className={`${btn} ${yesBtn}`} onClick={() => handleConfirmation(true)}>
            Yes
          </span>
          <span role="button" className={`${btn} ${noBtn}`} onClick={() => handleConfirmation(false)}>
            No
          </span>
        </div>
      </div>
    </Portal>
  );
};
