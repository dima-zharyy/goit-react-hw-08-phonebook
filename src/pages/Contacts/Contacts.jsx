import { Container } from '@mui/system';
import { ContactList, Filter, Loader } from 'components';
import { useGetContactsQuery } from 'redux/contacts/contactsApi';

export const Contacts = () => {
  const { isFetching } = useGetContactsQuery();

  return (
    <Container sx={{ pb: 2 }}>
      {isFetching ? (
        <Loader />
      ) : (
        <>
          <Filter />
          <ContactList />
        </>
      )}
    </Container>
  );
};
