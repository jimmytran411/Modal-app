import { createUseStyles } from 'react-jss';
export const useAppStyles = createUseStyles({
  newDraftBtn: {
    boxShadow: 'rgb(0 0 0 / 6%) 0px 0px 0.125rem 0px, rgb(0 0 0 / 12%) 0px 0.125rem 0.125rem 0px',
    padding: 16,
    backgroundColor: '#fff',

    fontSize: '1.25rem',
    fontWeight: 500,
    borderRadius: 4,
    margin: 16,
    border: 'none',
    cursor: 'pointer',
    '&:hover': {
      opacity: 0.75,
    },
  },

  cardGroup: {
    display: 'flex',
    flexWrap: 'wrap',
  },
});
