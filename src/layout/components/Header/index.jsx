import { Logout, Settings } from '@mui/icons-material';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import LoginIcon from '@mui/icons-material/Login';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import TelegramIcon from '@mui/icons-material/Telegram';
import {
  AppBar,
  Avatar,
  Box,
  Button,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  TextField,
  Toolbar,
  Tooltip,
} from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import images from '~/assets/images';

export default function Header() {
  const isLogin = false;

  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const navItems = [
    {
      link: '/upload',
      component: (
        <Button variant='outlined' startIcon={<FileUploadIcon />}>
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
      link: '/messenger',
      component: (
        <div>
          <IconButton onClick={handleClick}>
            {isLogin ? <Avatar /> : <MoreVertIcon />}
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            id='account-menu'
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem>
              <ListItemIcon>
                <Settings fontSize='small' />
              </ListItemIcon>
              Settings
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <Logout fontSize='small' />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </div>
      ),
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
        <Box sx={{ minWidth: '400px' }}>
          <TextField
            fullWidth
            size='small'
            placeholder='Tìm kiếm tài khoản hoặc video'
            InputProps={{
              endAdornment: (
                <IconButton>
                  <SearchIcon />
                </IconButton>
              ),
            }}
          />
        </Box>
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
