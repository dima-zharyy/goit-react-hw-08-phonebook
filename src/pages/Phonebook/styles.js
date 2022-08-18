export const drawerWidth = { xs: '60px', sm: '30%', lg: '20%' };
export const linkStyles = {
  p: 2,
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  color: 'inherit',
  textDecoration: 'none',
  '&.active': {
    color: 'white',
    bgcolor: 'primary.main',
  },
};
export const drawerStyles = {
  width: drawerWidth,
  flexShrink: 0,
  [`& .MuiDrawer-paper`]: {
    width: drawerWidth,
    boxSizing: 'border-box',
  },
};
