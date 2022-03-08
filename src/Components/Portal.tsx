import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  className?: string;
}

export const Portal = ({ children, className }: React.PropsWithChildren<PortalProps>) => {
  const elRef = useRef<HTMLDivElement | null>(null);
  if (!elRef.current) {
    const div = document.createElement('div');
    div.id = 'modal';
    className && (div.className = className);
    elRef.current = div;
  }

  useEffect(() => {
    elRef.current && document.body.appendChild(elRef.current);

    return () => {
      elRef.current && document.body.removeChild(elRef.current);
    };
  }, []);

  return createPortal(<React.Fragment>{children}</React.Fragment>, elRef.current);
};
