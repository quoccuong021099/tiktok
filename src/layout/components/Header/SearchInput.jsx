import {
  Box,
  Divider,
  Fade,
  IconButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Paper,
  TextField,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { SearchIcon } from '~/components/icons';
import SuggestAccountItem from '~/components/SuggestAccount/SuggestAccountItem';
import { useDebounce } from '~/hooks/useDebounce';

const StyledB = styled('b')(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: 14,
}));

const listSuggest = [
  {
    avatarUrl: '/',
    displayName: 'Quốc Cường',
    name: 'quoccuong.99',
  },
  {
    avatarUrl: '/',
    displayName: 'Tảo Huỳnh',
    name: 'huynhtao.98',
  },
  {
    avatarUrl: '/',
    displayName: 'Bảo Thẻo',
    name: 'baotheo.99',
  },
  {
    avatarUrl: '/',
    displayName: 'Hòa Cộng',
    name: 'hoacong.99',
  },
];

export default function SearchInput() {
  const [open, setOpen] = useState(false);
  const [valueInput, setValueInput] = useState('');

  const value = useDebounce(valueInput, 300);

  useEffect(() => {
    if (value) {
      // .trim() khi call api
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [value]);

  const handleChangeSearch = (e) => {
    setValueInput(e.target.value);
  };
  return (
    <Box sx={{ minWidth: 400, position: 'relative' }}>
      <TextField
        fullWidth
        size='small'
        placeholder='Tìm kiếm tài khoản hoặc video'
        onChange={handleChangeSearch}
        onClick={() => (valueInput ? setOpen(true) : setOpen(false))}
        onBlur={() => setOpen(false)}
        InputProps={{
          endAdornment: (
            <IconButton>
              <SearchIcon />
            </IconButton>
          ),
        }}
      />
      <Fade in={open} sx={{ position: 'absolute', left: 0, right: 0 }}>
        <Paper sx={{ width: '100%' }}>
          <MenuList>
            <MenuItem>
              <ListItemIcon>
                <SearchIcon fontSize='small' />
              </ListItemIcon>
              <ListItemText>ahihi quoccuong</ListItemText>
            </MenuItem>
            <Divider />
            &nbsp; <StyledB>Suggested following</StyledB>
            {listSuggest.map((item, index) => (
              <SuggestAccountItem key={index} data={item} />
            ))}
          </MenuList>
        </Paper>
      </Fade>
    </Box>
  );
}
