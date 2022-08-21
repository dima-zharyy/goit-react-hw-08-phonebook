import { Container, Typography } from '@mui/material';

export const Home = () => {
  return (
    <Container sx={{ width: '60%' }}>
      <Typography variant="h3" mb={3} sx={{ textAlign: 'center' }}>
        Page is under construct!
      </Typography>
      <Typography variant="h4" sx={{ textAlign: 'center' }}>
        Here will be a brief presentation of Phonebook functionality with
        screenshots
      </Typography>
    </Container>
  );
};
