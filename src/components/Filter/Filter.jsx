import { Box, TextField } from '@mui/material';

const filterBoxStyles = { display: 'flex', justifyContent: 'center', mb: 2 };

export const Filter = () => {
  return (
    <Box sx={{ ...filterBoxStyles }}>
      <TextField
        id="contact-search"
        label="Type to find contact"
        type="search"
      />
    </Box>
  );
};
