import { useState } from 'react';
import { Box, Modal } from '@mui/material';
import { EditContactForm, ContactListItem } from 'components';
import { modalStyles, listStyles } from './styles';
import { useGetContactsQuery } from 'redux/contacts/contactsApi';
// import { useSelector } from 'react-redux';
// import { useGetContactsQuery } from 'redux/contacts/contactsApi';

export const ContactList = () => {
  const [showModal, setShowModal] = useState(false);
  const { data: contacts } = useGetContactsQuery();
  console.log(contacts);

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
        {contacts?.map(({ id, name, phone }) => {
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
