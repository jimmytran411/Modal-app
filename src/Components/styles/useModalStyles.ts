import { createUseStyles } from 'react-jss';

export const useModalStyles = createUseStyles({
  body: {
    minWidth: 750,
    minHeight: 300,
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 4,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
  },

  head: {
    display: 'flex',
    justifyContent: 'space-between',
  },

  title: {
    backgroundColor: '#d4dcfd',
    color: '#4d69f1',
    fontWeight: 600,
    padding: '4px 10px',
    borderRadius: 4,
  },

  closeBtn: {
    padding: 4,
    borderRadius: '50%',
    display: 'inline-block',
    width: '1rem',
    height: '1rem',
    boxSizing: 'content-box',
    cursor: 'pointer',
    color: 'rgba(0, 0, 0, 0.87)',
    '&:hover': {
      opacity: 0.9,
      backgroundColor: '#edececeb',
    },
  },
});
