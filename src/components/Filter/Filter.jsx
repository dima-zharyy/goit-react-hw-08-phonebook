import { Box, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filter/filterSlice';
import { filterBoxStyles } from './styles';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <Box sx={filterBoxStyles}>
      <TextField
        autoComplete="off"
        id="contact-search"
        label="Type to find a contact"
        type="search"
        onChange={e => dispatch(changeFilter(e.target.value))}
      />
    </Box>
  );
};
