import { Outlet } from 'react-router-dom';
import { AppBar, Box, Container, Toolbar } from '@mui/material';
import { UserMenu, AuthNav, MainNav } from 'components';
import { navStyles, appBarStyles, outletBoxStyles } from './styles.js';

export const AppMenu = () => {
  return (
    <>
      <AppBar position="fixed" sx={appBarStyles}>
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Box as="nav" sx={navStyles}>
              <MainNav />
              <AuthNav />
            </Box>
            <UserMenu />
          </Toolbar>
        </Container>
      </AppBar>

      <Box sx={outletBoxStyles}>
        <Outlet />
      </Box>
    </>
  );
};
