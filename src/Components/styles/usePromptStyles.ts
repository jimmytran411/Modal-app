import { createUseStyles } from 'react-jss';

export const usePropmtStyles = createUseStyles({
  title: {
    backgroundColor: '#d4dcfd',
    color: '#1976d2',
    fontWeight: 600,
    padding: '16px',
    borderRadius: 4,
  },

  btnGroup: {
    display: 'flex',
    justifyContent: 'space-evenly',
    padding: 24,
  },

  btn: {
    padding: '7px 21px',
    borderRadius: 4,
    display: 'inline-block',
    boxSizing: 'content-box',
    cursor: 'pointer',
    fontWeight: 700,
    '&:hover': {
      opacity: 0.8,
    },
  },

  yesBtn: {
    backgroundColor: '#1976d2',
    color: '#fff',
  },
  noBtn: {
    border: '1px solid #1976d2',
    color: '#1976d2',
  },
});
