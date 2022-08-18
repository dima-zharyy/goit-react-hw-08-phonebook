import { Drawer, Toolbar, Box, Typography, Icon } from '@mui/material';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import { Outlet, NavLink } from 'react-router-dom';

// width: { xs: '100%', sm: '70%', lg: '50%' },

const drawerWidth = { xs: '60px', sm: '30%', lg: '20%' };
const stylesLink = {
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
const stylesDrawer = {
  width: drawerWidth,
  flexShrink: 0,
  [`& .MuiDrawer-paper`]: {
    width: drawerWidth,
    boxSizing: 'border-box',
  },
};

export const Phonebook = () => {
  return (
    <>
      <Drawer as="aside" variant="permanent" sx={{ ...stylesDrawer }}>
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <Box to="contacts" as={NavLink} sx={{ ...stylesLink }}>
            <PeopleOutlineIcon />
            <Typography sx={{ display: { xs: 'none', sm: 'block' } }}>
              Contacts
            </Typography>
          </Box>
          <Box to="add-contact" as={NavLink} sx={{ ...stylesLink }}>
            <PersonAddAltIcon />
            <Typography sx={{ display: { xs: 'none', sm: 'block' } }}>
              Add contact
            </Typography>
          </Box>
        </Box>
      </Drawer>

      <Outlet />
    </>
  );
};
