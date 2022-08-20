import { Box, Button, TextField, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';
import {
  titleStyles,
  formStyles,
  fieldStyles,
  buttonStyles,
} from './styles.js';
import { useDispatch } from 'react-redux';
import { signIn } from 'redux/auth/authOperations.js';
import { useNavigate } from 'react-router-dom';

export const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      await dispatch(signIn({ email, password }));
      navigate('/phonebook/contacts');
    } catch (error) {
      alert(error);
    }

    setEmail('');
    setPassword('');
  };

  return (
    <>
      <Typography variant="h5" as="h2" sx={titleStyles}>
        Sign in your Phonebook
      </Typography>
      <Box as="form" autoComplete="off" onSubmit={handleSubmit} sx={formStyles}>
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
          Sign in
        </Button>
      </Box>
    </>
  );
};
