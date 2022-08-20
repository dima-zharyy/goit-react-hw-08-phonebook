import { useState } from 'react';
import { Box, Modal } from '@mui/material';
import { EditContactForm, ContactListItem } from 'components';
import { modalStyles, listStyles } from './styles';
import { useGetContactsQuery } from 'redux/contacts/contactsApi';

export const ContactList = () => {
  const [showModal, setShowModal] = useState(false);
  const [editName, setEditName] = useState('');
  const [editNumber, setEditNumber] = useState('');
  const [editId, setEditId] = useState('');
  const { data: contacts } = useGetContactsQuery();

  const handleOpenModal = (id, name, number) => {
    setEditName(name);
    setEditNumber(number);
    setEditId(id);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Box maxWidth={500} as="ul" sx={listStyles}>
        {contacts?.map(({ id, name, number }) => {
          return (
            <ContactListItem
              key={id}
              name={name}
              number={number}
              id={id}
              onClick={handleOpenModal}
            />
          );
        })}
      </Box>

      {showModal && (
        <Modal open={showModal} onClose={handleCloseModal}>
          <Box sx={modalStyles}>
            <EditContactForm
              editId={editId}
              editName={editName}
              editNumber={editNumber}
              onClose={handleCloseModal}
            />
          </Box>
        </Modal>
      )}
    </>
  );
};
