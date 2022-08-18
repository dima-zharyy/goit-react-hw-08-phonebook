import { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { titleStyles, formStyles, fieldStyles, buttonStyles } from './styles';

export const AddContactForm = ({ formText, buttonText, endIcon }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    console.log({ name, phone });
  };

  return (
    <>
      <Typography variant="h5" as="h2" sx={titleStyles}>
        {formText}
      </Typography>
      <Box as="form" autoComplete="off" onSubmit={handleSubmit} sx={formStyles}>
        <TextField
          fullWidth
          required
          label="Name"
          type="text"
          variant="outlined"
          value={name}
          onChange={e => setName(e.target.value)}
          sx={fieldStyles}
        />
        <TextField
          fullWidth
          required
          label="Phone"
          variant="outlined"
          type="text"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          sx={fieldStyles}
        />
        <Button
          type="submit"
          variant="contained"
          endIcon={endIcon}
          sx={buttonStyles}
        >
          {buttonText}
        </Button>
      </Box>
    </>
  );
};
