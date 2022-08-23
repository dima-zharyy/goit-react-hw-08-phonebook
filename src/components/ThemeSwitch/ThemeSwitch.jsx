import { useState } from 'react';
import { FormGroup, FormControlLabel, Switch } from '@mui/material';

// const light = {
//   palette: {
//     mode: 'light',
//   },
// };

// const dark = {
//   palette: {
//     mode: 'dark',
//   },
// };

export const ThemeSwitch = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <FormGroup>
      <FormControlLabel
        control={<Switch checked={isDarkTheme} onChange={changeTheme} />}
        label="Dark Theme"
      />
    </FormGroup>
  );
};
