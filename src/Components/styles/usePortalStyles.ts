import { createUseStyles } from 'react-jss';

export const usePortalStyles = createUseStyles({
  root: {
    backgroundColor: 'rgb(15 22 80 / 28%)',
    position: 'fixed',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    zIndex: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'auto',
  },

  body: {
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 4,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
});
