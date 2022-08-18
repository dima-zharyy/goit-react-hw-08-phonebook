import { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';
import {
  titleStyles,
  formStyles,
  fieldStyles,
  buttonsBoxStyles,
} from './styles';

export const EditContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    console.log({ name, phone });
  };

  return (
    <>
      <Typography variant="h5" as="h2" sx={titleStyles}>
        Edit your contact
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

        <Box sx={buttonsBoxStyles}>
          <Button
            type="submit"
            variant="contained"
            endIcon={<EditIcon />}
            sx={{ mr: 2 }}
          >
            Confirm
          </Button>

          <Button
            color="warning"
            type="button"
            variant="contained"
            endIcon={<ClearIcon />}
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </>
  );
};
