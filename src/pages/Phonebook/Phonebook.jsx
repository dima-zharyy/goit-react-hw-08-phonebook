import { Drawer, Toolbar, Box, Typography } from '@mui/material';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import { Outlet, NavLink } from 'react-router-dom';
import { drawerStyles, linkBoxStyles, linkStyles } from './styles';

// width: { xs: '100%', sm: '70%', lg: '50%' },

export const Phonebook = () => {
  return (
    <>
      <Drawer as="aside" variant="permanent" sx={drawerStyles}>
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <Box to="contacts" as={NavLink} sx={linkBoxStyles}>
            <PeopleOutlineIcon />
            <Typography sx={linkStyles}>Contacts</Typography>
          </Box>
          <Box to="add-contact" as={NavLink} sx={linkBoxStyles}>
            <PersonAddAltIcon />
            <Typography sx={linkStyles}>Add contact</Typography>
          </Box>
        </Box>
      </Drawer>

      <Outlet />
    </>
  );
};
