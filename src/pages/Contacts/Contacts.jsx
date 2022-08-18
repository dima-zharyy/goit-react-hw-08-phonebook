import { Container } from '@mui/system';
import { ContactList } from 'components';

export const Contacts = () => {
  return (
    <Container sx={{ pb: 2 }}>
      <ContactList />
    </Container>
  );
};
