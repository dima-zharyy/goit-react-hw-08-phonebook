export const navStyles = {
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
};

export const navLinkStyles = {
  color: 'inherit',
  whiteSpace: 'nowrap',
  textDecoration: 'none',
  '&.active': {
    color: 'lime',
    borderBottom: '2px solid lime',
  },
};

export const appBarStyles = {
  zIndex: theme => theme.zIndex.drawer + 1,
};

export const logoStyles = { width: '100%' };

export const logoBoxStyles = { color: 'inherit', mr: 2 };

export const outletBoxStyles = {
  display: 'flex',
  pt: 8,
};
