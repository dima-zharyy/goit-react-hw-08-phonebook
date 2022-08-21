import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import {
  buttonStyles,
  titleStyles,
  boxStyles,
  linkBoxStyles,
  wrapBox,
} from './styles';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';

export const EmptyPhonebookMsg = () => {
  return (
    <Box sx={wrapBox}>
      <Box as="div" sx={boxStyles}>
        <Typography variant="h5" as="h2" sx={titleStyles}>
          Your phone book is empty
        </Typography>
        <Box to="/phonebook/add-contact" as={Link} sx={linkBoxStyles}>
          <Button
            type="button"
            variant="contained"
            endIcon={<PersonAddAltIcon />}
            sx={buttonStyles}
          >
            Add new contact
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
