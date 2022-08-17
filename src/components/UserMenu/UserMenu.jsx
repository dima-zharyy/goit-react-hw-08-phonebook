import { Avatar, Box, Typography, Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { lime } from '@mui/material/colors';

const userName = 'Dima Zharyy';

export const UserMenu = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Avatar color="secondary" sx={{ bgcolor: lime[500], mr: 1 }}>
        {userName[0]}
      </Avatar>
      <Typography
        variant="body2"
        as="h2"
        sx={{ whiteSpace: 'nowrap', mr: 1 }}
      >{`${userName}`}</Typography>

      <Button
        disableElevation
        variant="contained"
        size="small"
        endIcon={<LogoutIcon />}
        sx={{ border: '1px solid #fff', whiteSpace: 'nowrap' }}
      >
        Sign out
      </Button>
    </Box>
  );
};
