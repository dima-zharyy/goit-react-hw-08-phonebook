import { Container } from '@mui/system';
import { ContactList, Filter } from 'components';

export const Contacts = () => {
  return (
    <Container sx={{ pb: 2 }}>
      <Filter />
      <ContactList />
    </Container>
  );
};
