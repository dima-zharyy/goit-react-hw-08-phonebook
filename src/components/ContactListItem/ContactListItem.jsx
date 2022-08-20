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
  numberLinkStyles,
} from './styles.js';
import { useDeleteContactMutation } from 'redux/contacts/contactsApi.js';

export const ContactListItem = ({ name, number, id, onClick }) => {
  const [deleteContact] = useDeleteContactMutation();

  return (
    <Paper as="li" elevation={2} sx={itemStyles}>
      <CardContent sx={contentBoxStyles}>
        <Typography variant="body2" sx={contentStyles}>
          {name}
        </Typography>
        <Typography
          as="a"
          href={`tel:${number}`}
          sx={numberLinkStyles}
          color="primary"
          variant="body2"
        >
          {number}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton
          onClick={() => onClick(id, name, number)}
          aria-label="edit"
          size="small"
        >
          <EditIcon fontSize="inherit" />
        </IconButton>
        <IconButton
          onClick={() => deleteContact(id)}
          aria-label="delete"
          size="small"
        >
          <DeleteIcon fontSize="inherit" />
        </IconButton>
      </CardActions>
    </Paper>

    // <ContactItem>
    //   <ContactTextWrapper>
    //     <ContactName>{name}:</ContactName> <span>{number}</span>
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
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
