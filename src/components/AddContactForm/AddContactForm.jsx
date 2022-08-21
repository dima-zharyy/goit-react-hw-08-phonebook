import { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import { titleStyles, formStyles, fieldStyles, buttonStyles } from './styles';
import { useAddContactMutation } from 'redux/contacts/contactsApi';
import { useNavigate } from 'react-router-dom';

export const AddContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [addContact] = useAddContactMutation();
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await addContact({ name, number });
      navigate('/phonebook/contacts', { replace: true });
    } catch (error) {}

    setName('');
    setNumber('');
  };

  return (
    <>
      <Typography variant="h5" as="h2" sx={titleStyles}>
        Add new contact to your Phonebook
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
          label="Number"
          variant="outlined"
          type="text"
          value={number}
          onChange={e => setNumber(e.target.value)}
          sx={fieldStyles}
        />
        <Button
          type="submit"
          variant="contained"
          endIcon={<PersonAddAltIcon />}
          sx={buttonStyles}
        >
          Add contact
        </Button>
      </Box>
    </>
  );
};
