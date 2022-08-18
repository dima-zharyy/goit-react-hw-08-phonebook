import { Box, TextField } from '@mui/material';
import { filterBoxStyles } from './styles';

export const Filter = () => {
  return (
    <Box sx={filterBoxStyles}>
      <TextField
        autoComplete="off"
        id="contact-search"
        label="Type to find a contact"
        type="search"
      />
    </Box>
  );
};
