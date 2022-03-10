import { createUseStyles } from 'react-jss';

export const useDraftFormStyles = createUseStyles({
  form: {
    display: 'flex',
    flexDirection: 'column',
    padding: '16px 0',
    flexGrow: 2,
    justifyContent: 'space-between',
    fontFamily: "'Titillium Web', sans-serif",
  },

  input: {
    border: 'none',
    padding: '8px 0',
    margin: '8px 0px',
    '&:focus-visible': {
      outline: 'none',
    },
  },

  title: {
    fontSize: 26,
  },

  description: {
    fontSize: 18,
  },

  label: {
    display: 'none',
  },

  divider: {
    width: '100%',
    margin: '16px 0',
  },

  footer: {
    display: 'flex',
    flexDirection: 'column',
  },

  submitBtn: {
    alignSelf: 'flex-end',
    border: 'none',
    padding: '10px 21px',
    borderRadius: 4,
    display: 'inline-block',
    cursor: 'pointer',
    backgroundColor: '#1976d2',
    color: '#fff',
    fontSize: 18,
    fontWeight: 700,
    '&:hover': {
      opacity: 0.8,
    },
  },
});
