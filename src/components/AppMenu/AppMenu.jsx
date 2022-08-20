import { Outlet } from 'react-router-dom';
import { AppBar, Box, Container, Toolbar } from '@mui/material';
import { UserMenu, AuthNav, MainNav, Loader } from 'components';
import { navStyles, appBarStyles, outletBoxStyles } from './styles.js';
import { getSignStatus } from 'redux/auth/authSlice.js';
import { useSelector } from 'react-redux';
import { Suspense } from 'react';

export const AppMenu = () => {
  const isSignedIn = useSelector(getSignStatus);

  return (
    <>
      <AppBar position="fixed" sx={appBarStyles}>
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Box as="nav" sx={navStyles}>
              <MainNav />
              {!isSignedIn && <AuthNav />}
            </Box>
            {isSignedIn && <UserMenu />}
          </Toolbar>
        </Container>
      </AppBar>

      <Box sx={outletBoxStyles}>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Box>
    </>
  );
};
