import {
  Avatar,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
} from '@mui/material';
import React, { useState } from 'react';
import images from '~/assets/images';
import {
  LogoutIcon,
  MoreVertIcon,
  PersonIcon,
  SettingsIcon,
} from '~/components/icons';

const listItem = [
  {
    title: 'View profile',
    icon: PersonIcon,
  },
  {
    title: 'Setting',
    icon: SettingsIcon,
  },
  {
    title: 'Logout',
    icon: LogoutIcon,
  },
];

export default function ListMenu({ isLogin }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <IconButton onClick={handleClick}>
        {isLogin ? (
          <Avatar alt='Quốc Cường' src={images.iu1} />
        ) : (
          <MoreVertIcon />
        )}
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {listItem.map((item, index) => {
          const IconItem = item.icon;
          return (
            <div key={index}>
              {index === listItem.length - 1 && <Divider />}
              <MenuItem>
                <ListItemIcon>
                  <IconItem fontSize='small' />
                </ListItemIcon>
                <span>{item.title}</span>
              </MenuItem>
            </div>
          );
        })}
      </Menu>
    </div>
  );
}
