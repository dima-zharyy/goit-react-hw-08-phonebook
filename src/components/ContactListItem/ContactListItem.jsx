// import { useDeleteContactMutation } from 'redux/contacts/contactsApi';
import PropTypes from 'prop-types';
import {
  Typography,
  IconButton,
  CardContent,
  CardActions,
  Paper,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  itemStyles,
  contentBoxStyles,
  contentStyles,
  phoneLinkStyles,
} from './styles.js';

export const ContactListItem = ({ name, phone, id, onClick }) => {
  // const [deleteContact, { isLoading }] = useDeleteContactMutation();

  return (
    <Paper as="li" elevation={2} sx={itemStyles}>
      <CardContent sx={contentBoxStyles}>
        <Typography variant="body2" sx={contentStyles}>
          {name}
        </Typography>
        <Typography
          as="a"
          href={`tel:${phone}`}
          sx={phoneLinkStyles}
          color="primary"
          variant="body2"
        >
          {phone}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton onClick={() => onClick(id)} aria-label="edit" size="small">
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
