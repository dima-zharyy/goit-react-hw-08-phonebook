import { Container } from '@mui/material';
import { SignInForm } from 'components';

export const SignIn = () => {
  return (
    <Container sx={{ pb: 2 }}>
      <SignInForm />
    </Container>
  );
};
