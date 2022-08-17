import { Outlet, NavLink } from 'react-router-dom';
import * as React from 'react';
import { AppBar, Box, Container, Toolbar } from '@mui/material';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import {} from 'react-router-dom';
// import { UserMenu } from 'components';

const navStyle = {
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
};

const navLinkStyle = {
  color: 'inherit',
  whiteSpace: 'nowrap',
  textDecoration: 'none',
  '&.active': {
    color: 'lime',
    borderBottom: '2px solid lime',
  },
};

export const AppMenu = () => {
  return (
    <>
      <AppBar
        position="fixed"
        sx={{ zIndex: theme => theme.zIndex.drawer + 1 }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            {/* <UserMenu /> */}
            <Box as="nav" sx={{ ...navStyle }}>
              <Box to="/" as={NavLink} sx={{ color: 'inherit', mr: 2 }}>
                <ImportContactsIcon sx={{ width: '100%' }} />
              </Box>

              <Box to="/" as={NavLink} sx={{ ...navLinkStyle, mr: 2 }}>
                Home
              </Box>

              <Box to="/phonebook" as={NavLink} sx={{ ...navLinkStyle }}>
                Phonebook
              </Box>

              <Box
                to="/sign-in"
                as={NavLink}
                sx={{ ...navLinkStyle, ml: 'auto', mr: 2 }}
              >
                Sign In
              </Box>

              <Box to="/sign-up" as={NavLink} sx={{ ...navLinkStyle }}>
                Sign Up
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Box sx={{ display: 'flex', pt: 8 }}>
        <Outlet />
      </Box>
    </>
  );
};
