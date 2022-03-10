import { createUseStyles } from 'react-jss';
export const useDraftCardStyles = createUseStyles({
  card: {
    backgroundColor: '#001041',
    color: '#fff',
    transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    borderRadius: 4,
    boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
    overflow: 'hidden',
    minWidth: 275,
    maxWidth: 450,
    padding: 20,
    margin: 20,
    display: 'flex',
    flexDirection: 'column',
  },

  cardContent: {
    display: 'flex',
    flexDirection: 'column',
  },

  titleStyle: {
    padding: 8,
    fontSize: 24,
    fontWeight: 700,
    textTransform: 'capitalize',
  },

  descriptionStyle: {
    padding: 8,
    overflow: 'auto',
    minHeight: 150,
  },

  cardFooter: {
    padding: 16,
  },

  removeBtn: {
    boxShadow: 'rgb(0 0 0 / 6%) 0px 0px 0.125rem 0px, rgb(0 0 0 / 12%) 0px 0.125rem 0.125rem 0px',
    padding: '7px 21px',
    backgroundColor: '#10204d',
    color: 'red',
    fontWeight: 500,
    borderRadius: 4,
    margin: '0 auto',
    border: 'none',
    cursor: 'pointer',
    '&:hover': {
      opacity: 0.75,
    },
  },
});
