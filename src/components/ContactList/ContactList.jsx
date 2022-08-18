import { useState } from 'react';
import { Box, Modal } from '@mui/material';
import { EditContactForm, ContactListItem } from 'components';
import { modalStyles, listStyles } from './styles';
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

// const isLoading = false;

export const ContactList = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = id => {
    console.log(id);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  // const { data: contacts, isLoading } = useGetContactsQuery();
  // const filter = useSelector(getFilter);
  // const filteredContacts = !isLoading
  //   ? contacts.filter(contact =>
  //       contact.name.toLowerCase().includes(filter.toLowerCase())
  //     )
  //   : null;

  return (
    <>
      <Box maxWidth={500} as="ul" sx={listStyles}>
        {contacts.map(({ id, name, phone }) => {
          return (
            <ContactListItem
              key={id}
              name={name}
              phone={phone}
              id={id}
              onClick={handleOpenModal}
            />
          );
        })}
      </Box>

      {showModal && (
        <Modal open={showModal} onClose={handleCloseModal}>
          <Box sx={modalStyles}>
            <EditContactForm />
          </Box>
        </Modal>
      )}
    </>
  );
  // formText,  firstButtonText,  secondButtonText,  firstEndIcon,  secondEndIcon,
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
