import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

import { usePortalStyles } from './styles/usePortalStyles';

interface PortalProps {
  className?: string;
}

export const Portal = ({ children, className }: React.PropsWithChildren<PortalProps>) => {
  const { root } = usePortalStyles();

  const elRef = useRef<HTMLDivElement | null>(null);
  if (!elRef.current) {
    const div = document.createElement('div');
    div.id = 'modal';
    div.className = className ?? root;
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
