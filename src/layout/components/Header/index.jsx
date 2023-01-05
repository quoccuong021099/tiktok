import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Tooltip,
} from '@mui/material';
import { Link } from 'react-router-dom';
import images from '~/assets/images';
import { LoginIcon, TelegramIcon, UploadIcon } from '~/components/icons';
import ListMenu from './ListMenu';
import SearchInput from './SearchInput';

export default function Header() {
  const isLogin = true;

  const navItems = [
    {
      link: '/upload',
      component: (
        <Button variant='outlined' startIcon={<UploadIcon />}>
          Upload
        </Button>
      ),
    },
    !isLogin && {
      link: '/login',
      component: (
        <Button variant='outlined' startIcon={<LoginIcon />} color='secondary'>
          Login
        </Button>
      ),
    },
    isLogin && {
      link: '/messenger',
      component: (
        <Tooltip title='Messenger'>
          <IconButton color='primary' variant='outlined'>
            <TelegramIcon fontSize='large' />
          </IconButton>
        </Tooltip>
      ),
    },
    {
      link: '/',
      component: <ListMenu isLogin={isLogin} />,
    },
  ];

  return (
    <AppBar
      component='nav'
      color='white'
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        boxSizing: 'border-box',
      }}
    >
      <Toolbar
        sx={(theme) => ({
          display: 'flex',
          justifyContent: 'space-between',
          width: theme.palette.LAYOUT_WIDTH,
          height: theme.palette.HEADER_HEIGHT,
          padding: '0px !important',
        })}
      >
        <Link to='/'>
          <img src={images.logo} alt='Tiktok' />
        </Link>

        <SearchInput />

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {navItems.map((item, index) => {
            return (
              <Box sx={{ marginLeft: '8px' }} key={index}>
                {item.component}
              </Box>
            );
          })}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
