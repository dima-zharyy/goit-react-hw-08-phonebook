import { Box, Button, TextField, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';

export const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    console.log({ email, password });
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
          label="Email"
          type="email"
          variant="outlined"
          value={email}
          onChange={e => setEmail(e.target.value)}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          required
          label="Password"
          variant="outlined"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          sx={{ mb: 2 }}
        />
        <Button
          type="submit"
          variant="contained"
          endIcon={<SendIcon />}
          sx={{ display: 'flex', m: '0 auto' }}
        >
          Sign up
        </Button>
      </Box>
    </>
  );
};
