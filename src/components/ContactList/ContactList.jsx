import { Box } from '@mui/material';
import { ContactListItem } from 'components';
// import { useSelector } from 'react-redux';
// import { useGetContactsQuery } from 'redux/contacts/contactsApi';
// import { getFilter } from 'redux/filter/filterSlice';

const contacts = [
  {
    id: '1',
    name: 'Di',
    phone: '050-40-40-346',
  },
  {
    id: '2',
    name: 'Dima Zharyysl;dвыа',
    phone: '050-40-40-346',
  },
  {
    id: '3',
    name: 'Dima Zharyy',
    phone: '050-40-40-346',
  },
  {
    id: '4',
    name: 'Dima Zharyy',
    phone: '050-40-40-346',
  },
  {
    id: '5',
    name: 'Dima Zharyy',
    phone: '050-40-40-346',
  },
  {
    id: '6',
    name: 'Dima Zharyy',
    phone: '050-40-40-346',
  },
  {
    id: '7',
    name: 'Dima Zharyy',
    phone: '050-40-40-346',
  },
  {
    id: '8',
    name: 'Dima Zharyy',
    phone: '050-40-40-346',
  },
  {
    id: '9',
    name: 'Dima Zharyy',
    phone: '050-40-40-346',
  },
  {
    id: '10',
    name: 'Dima Zharyy',
    phone: '050-40-40-346',
  },
  {
    id: '11',
    name: 'Dima Zharyy',
    phone: '050-40-40-346',
  },
  {
    id: '12',
    name: 'Dima Zharyy',
    phone: '050-40-40-346',
  },
  {
    id: '13',
    name: 'Dima Zharyy',
    phone: '050-40-40-346',
  },
  {
    id: '14',
    name: 'Dima Zharyy',
    phone: '050-40-40-346',
  },
];

const stylesList = {
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  m: '0 auto',
};

const isLoading = false;

export const ContactList = () => {
  // const { data: contacts, isLoading } = useGetContactsQuery();
  // const filter = useSelector(getFilter);
  // const filteredContacts = !isLoading
  //   ? contacts.filter(contact =>
  //       contact.name.toLowerCase().includes(filter.toLowerCase())
  //     )
  //   : null;

  return (
    <Box maxWidth={500} as="ul" sx={{ ...stylesList }}>
      {contacts.map(({ id, name, phone }) => {
        return <ContactListItem key={id} name={name} phone={phone} id={id} />;
      })}
    </Box>
  );

  // if (isLoading) {
  //   return <Loader />;
  // }

  // return contacts.length > 0 ? (
  //   <ul>
  //     {filteredContacts.map(({ id, name, phone }) => {
  //       return <ContactListItem key={id} name={name} phone={phone} id={id} />;
  //     })}
  //   </ul>
  // ) : (
  //   <p>Your contact book is empty</p>
  // );
};
