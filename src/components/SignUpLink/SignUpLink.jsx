import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { linkStyles } from './styles';

export const SignUpLink = () => {
  return (
    <Typography
      to="/sign-up"
      as={Link}
      color="primary"
      align="center"
      sx={linkStyles}
    >
      Haven't Phonebook yet? Click to sign up
    </Typography>
  );
};
