// import { useDeleteContactMutation } from 'redux/contacts/contactsApi';
import PropTypes from 'prop-types';
import {
  Box,
  Typography,
  IconButton,
  Card,
  CardContent,
  CardActions,
  Paper,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const itemStyles = {
  display: 'flex',
  gap: '8px',
  alignItems: 'center',
  justifyContent: 'space-between',
};

const contentBoxStyles = {
  width: '100%',
  display: 'flex',
  gap: '8px',
  flexDirection: { xs: 'column', sm: 'row' },
  alignItems: { xs: 'flex-start', sm: 'center' },
  justifyContent: 'space-between',
};

const contentStyles = {
  fontWeight: '700',
};

export const ContactListItem = ({ name, phone, id }) => {
  // const [deleteContact, { isLoading }] = useDeleteContactMutation();

  return (
    <Paper as="li" elevation={2} sx={{ ...itemStyles }}>
      <CardContent sx={{ ...contentBoxStyles }}>
        <Typography variant="body2" sx={{ ...contentStyles }}>
          {name}
        </Typography>
        <Typography variant="body2">{phone}</Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="edit" size="small">
          <EditIcon fontSize="inherit" />
        </IconButton>
        <IconButton aria-label="delete" size="small">
          <DeleteIcon fontSize="inherit" />
        </IconButton>
      </CardActions>
    </Paper>

    // <ContactItem>
    //   <ContactTextWrapper>
    //     <ContactName>{name}:</ContactName> <span>{phone}</span>
    //   </ContactTextWrapper>
    //   <Button
    //     type="button"
    //     // disabled={isLoading}
    //     // onClick={() => deleteContact(id)}
    //   >
    //     {/* {isLoading ? 'Deleting...' : 'Delete'} */}
    //   </Button>
    // </ContactItem>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
