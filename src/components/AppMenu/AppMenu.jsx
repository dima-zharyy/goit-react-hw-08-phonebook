import { Outlet, Link } from 'react-router-dom';
import * as React from 'react';
import { AppBar, Box, Container, Toolbar } from '@mui/material';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import { NavLink } from 'react-router-dom';

export const AppMenu = () => {
  return (
    <>
      <AppBar position="static">
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Box
              as="nav"
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}
            >
              <Box to="/" as={Link} mr={2} sx={{ color: 'inherit' }}>
                <ImportContactsIcon sx={{ width: '100%' }} />
              </Box>

              <Box
                to="/"
                as={NavLink}
                mr={2}
                sx={{
                  color: 'inherit',
                  textDecoration: 'none',
                  '&.active': {
                    color: 'lime',
                  },
                }}
              >
                Home
              </Box>

              <Box
                to="/phonebook"
                as={NavLink}
                sx={{
                  color: 'inherit',
                  textDecoration: 'none',
                  '&.active': {
                    color: 'lime',
                  },
                }}
              >
                Phonebook
              </Box>

              <Box
                to="/sign-in"
                as={NavLink}
                mr={2}
                sx={{
                  color: 'inherit',
                  ml: 'auto',
                  whiteSpace: 'nowrap',
                  textDecoration: 'none',
                  '&.active': {
                    color: 'lime',
                  },
                }}
              >
                Sign In
              </Box>

              <Box
                to="/sign-up"
                as={NavLink}
                sx={{
                  color: 'inherit',
                  whiteSpace: 'nowrap',
                  textDecoration: 'none',
                  '&.active': {
                    color: 'lime',
                  },
                }}
              >
                Sign Up
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Outlet />
    </>
  );
};
