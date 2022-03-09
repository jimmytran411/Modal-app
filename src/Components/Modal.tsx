import React, { PropsWithChildren, useEffect, useRef } from 'react';

import { useSwitch } from '../customHooks/useSwitch';
import { Portal } from './Portal';
import { Prompt } from './Prompt';

interface ModalProps {
  title?: string;
  open: boolean;
  handleClose: () => void;
  className?: string;
}

export const Modal = ({ title, open, handleClose, children, className }: PropsWithChildren<ModalProps>) => {
  const { open: isPromptOpen, handleClose: handleClosePrompt, handleOpen: handleOpenPrompt } = useSwitch(false);

  const ref = useRef<HTMLDivElement>(null);

  const handleHide = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      handleOpenPrompt();
    }
  };

  const handleClickOutside = (event: Event) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      handleOpenPrompt();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleHide, true);
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('keydown', handleHide, true);
      document.removeEventListener('click', handleClickOutside, true);
    };
  });

  const handleConfirmation = (confirmation: boolean) => {
    confirmation && handleClose();
    handleClosePrompt();
  };

  return (
    <React.Fragment>
      {open && (
        <Portal className={className}>
          <div ref={ref}>
            <div>
              <span>{title}</span>
              <svg
                role="button"
                onClick={handleOpenPrompt}
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                tabIndex={-1}
                data-testid="close-btn"
              >
                <path
                  d="M19 6.41 17.59 5 12 10.59 6.41 5 
                5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 
                17.59 19 19 17.59 13.41 12z"
                />
              </svg>
            </div>
            {children}
          </div>
        </Portal>
      )}
      {isPromptOpen && (
        <Prompt message="Are you sure you want to quit this operation?" handleConfirmation={handleConfirmation} />
      )}
    </React.Fragment>
  );
};
