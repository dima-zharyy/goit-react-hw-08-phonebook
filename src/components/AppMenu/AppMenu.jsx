import { Outlet, NavLink } from 'react-router-dom';
import { AppBar, Box, Container, Toolbar } from '@mui/material';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import { UserMenu } from 'components';
import {
  navStyles,
  navLinkStyles,
  appBarStyles,
  logoStyles,
  logoBoxStyles,
  outletBoxStyles,
} from './styles.js';

export const AppMenu = () => {
  return (
    <>
      <AppBar position="fixed" sx={appBarStyles}>
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <UserMenu />

            <Box as="nav" sx={navStyles}>
              <Box to="/" as={NavLink} sx={logoBoxStyles}>
                <ImportContactsIcon sx={logoStyles} />
              </Box>

              <Box to="/" as={NavLink} sx={{ ...navLinkStyles, mr: 2 }}>
                Home
              </Box>

              <Box to="/phonebook" as={NavLink} sx={navLinkStyles}>
                Phonebook
              </Box>

              <Box
                to="/sign-in"
                as={NavLink}
                sx={{ ...navLinkStyles, ml: 'auto', mr: 2 }}
              >
                Sign In
              </Box>

              <Box to="/sign-up" as={NavLink} sx={navLinkStyles}>
                Sign Up
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Box sx={outletBoxStyles}>
        <Outlet />
      </Box>
    </>
  );
};
