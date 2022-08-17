import { Drawer, Toolbar, Box, Typography } from '@mui/material';
import { Outlet, NavLink } from 'react-router-dom';

const drawerWidth = '15%';
const styles = {
  p: 2,
  display: 'block',
  color: 'inherit',
  textDecoration: 'none',
  '&.active': {
    color: 'white',
    bgcolor: 'primary.main',
  },
};

export const Phonebook = () => {
  return (
    <>
      <Drawer
        as="aside"
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <Box to="contacts" as={NavLink} sx={{ ...styles }}>
            <Typography>Contacts</Typography>
          </Box>
          <Box to="add-contact" as={NavLink} sx={{ ...styles }}>
            <Typography> Add contact</Typography>
          </Box>
        </Box>
      </Drawer>

      <Outlet />
    </>
  );
};
