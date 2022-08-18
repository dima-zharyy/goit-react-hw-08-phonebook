import { NavLink } from 'react-router-dom';
import { Box } from '@mui/material';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import { navLinkStyles, logoStyles, logoBoxStyles } from './styles.js';

export const MainNav = () => {
  return (
    <>
      <Box to="/" as={NavLink} sx={logoBoxStyles}>
        <ImportContactsIcon sx={logoStyles} />
      </Box>
      <Box to="/" as={NavLink} sx={{ ...navLinkStyles, mr: 2 }}>
        Home
      </Box>
      <Box to="/phonebook" as={NavLink} sx={navLinkStyles}>
        Phonebook
      </Box>
    </>
  );
};
