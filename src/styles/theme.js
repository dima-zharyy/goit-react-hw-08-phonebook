import { createTheme } from '@mui/material/styles';
import { teal, lime } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    primary: teal,
    secondary: lime,
  },
  mixins: {
    toolbar: {
      minHeight: 48,
    },
  },
});
