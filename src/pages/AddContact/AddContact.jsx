import { ContactForm } from 'components';
import { Container } from '@mui/material';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';

export const AddContact = () => {
  return (
    <Container sx={{ pb: 2 }}>
      <ContactForm
        formText="Add new contact to your Phonebook"
        buttonText="Add contact"
        endIcon={<PersonAddAltIcon />}
      />
    </Container>
  );
};
