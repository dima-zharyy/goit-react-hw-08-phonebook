import { Box, Button, TextField, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    console.log({ name, phone });
  };

  return (
    <>
      <Typography
        variant="h5"
        as="h2"
        sx={{ textAlign: 'center', mb: 3, fontWeight: 700 }}
      >
        Sign in your Phonebook
      </Typography>
      <Box
        as="form"
        autoComplete="off"
        onSubmit={handleSubmit}
        sx={{
          width: { xs: '100%', sm: '70%', lg: '50%' },
          m: '0 auto',
        }}
      >
        <TextField
          fullWidth
          required
          label="Name"
          type="text"
          variant="outlined"
          value={name}
          onChange={e => setName(e.target.value)}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          required
          label="Phone"
          variant="outlined"
          type="text"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          sx={{ mb: 2 }}
        />
        <Button
          type="submit"
          variant="contained"
          endIcon={<SendIcon />}
          sx={{ display: 'flex', m: '0 auto' }}
        >
          Add contact
        </Button>
      </Box>
    </>
  );
};
