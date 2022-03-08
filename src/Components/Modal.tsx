import React from 'react';
import { Portal } from './Portal';

interface ModalProps {
  title: string;
  open: boolean;
  handleClose: () => void;
  className?: string;
}

export function Modal({ title, open, handleClose, children, className }: React.PropsWithChildren<ModalProps>) {
  return (
    <React.Fragment>
      {open && (
        <Portal className={className}>
          <div>
            <div>
              <span>{title}</span>
              <button onClick={handleClose}>X</button>
            </div>
            {children}
          </div>
        </Portal>
      )}
    </React.Fragment>
  );
}
