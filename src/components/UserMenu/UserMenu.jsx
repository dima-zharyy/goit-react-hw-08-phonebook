import { Avatar, Box, Typography, Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import {
  menuWrapperStyles,
  avatarStyles,
  userNameStyles,
  buttonStyles,
  buttonTextStyles,
} from './styles';

const userName = 'Dima Zharyy';

export const UserMenu = () => {
  return (
    <Box sx={menuWrapperStyles}>
      <Avatar color="secondary" sx={avatarStyles}>
        {userName[0]}
      </Avatar>

      <Typography variant="body2" as="h2" sx={userNameStyles}>
        {`${userName}`}
      </Typography>

      <Button
        fullWidth
        disableElevation
        variant="contained"
        size="small"
        endIcon={<LogoutIcon />}
        sx={buttonStyles}
      >
        <Typography variant="body2" sx={buttonTextStyles}>
          Sign out
        </Typography>
      </Button>
    </Box>
  );
};
