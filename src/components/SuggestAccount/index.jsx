import { List, Typography } from '@mui/material';
import { Box } from '@mui/system';
import SuggestAccountItem from './SuggestAccountItem';

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
export default function SuggestAccount({ title, action }) {
  return (
    <Box
      sx={{
        padding: '8px 0',
      }}
    >
      <Typography variant='subtitle1' component='p'>
        {title}
      </Typography>
      <List>
        {listSuggest.map((item, index) => (
          <SuggestAccountItem key={index} data={item} />
        ))}
      </List>
      {action && action}
    </Box>
  );
}
