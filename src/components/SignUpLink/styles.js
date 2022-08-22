import { theme } from 'styles/theme';

export const linkStyles = {
  display: 'flex',
  justifyContent: 'center',
  mt: 2,
  fontSize: { xs: '14px', sm: '16px' },
  textDecoration: 'none',
  transition: 'color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
  '&:hover': {
    color: theme.palette.primary.dark,
  },
};
