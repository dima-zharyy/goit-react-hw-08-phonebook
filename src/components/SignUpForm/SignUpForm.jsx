import { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import {
  titleStyles,
  formStyles,
  fieldStyles,
  buttonStyles,
} from './styles.js';

export const SignUpForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();

    setName('');
    setPassword('');
    setEmail('');
  };

  return (
    <>
      <Typography variant="h5" as="h2" sx={titleStyles}>
        Get access to the Phonebook
      </Typography>
      <Box as="form" autoComplete="off" onSubmit={handleSubmit} sx={formStyles}>
        <TextField
          fullWidth
          required
          label="Login"
          type="text"
          variant="outlined"
          value={name}
          onChange={e => setName(e.target.value)}
          sx={fieldStyles}
        />
        <TextField
          fullWidth
          required
          label="Email"
          type="email"
          variant="outlined"
          value={email}
          onChange={e => setEmail(e.target.value)}
          sx={fieldStyles}
        />
        <TextField
          fullWidth
          required
          label="Password"
          variant="outlined"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          sx={fieldStyles}
        />
        <Button
          type="submit"
          variant="contained"
          endIcon={<SendIcon />}
          sx={buttonStyles}
        >
          Sign up
        </Button>
      </Box>
    </>
  );
};
