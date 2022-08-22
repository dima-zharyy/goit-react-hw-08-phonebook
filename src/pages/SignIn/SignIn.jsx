import { Container } from '@mui/material';
import { SignInForm } from 'components';
import { useDocumentTitle } from 'hooks/useDocumentTitle';

export const SignIn = () => {
  useDocumentTitle('Sign in Phonebook');

  return (
    <Container sx={{ pb: 2 }}>
      <SignInForm />
    </Container>
  );
};
