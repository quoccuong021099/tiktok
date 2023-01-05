import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';
import React from 'react';

export default function SuggestAccountItem({ data }) {
  const { name, avatarUrl, displayName } = data;
  return (
    <ListItem alignItems='flex-start' disablePadding>
      <ListItemButton sx={{ p: '0 8px' }}>
        <ListItemAvatar>
          <Avatar alt={name} src={avatarUrl} />
        </ListItemAvatar>
        <ListItemText
          primary={<b>{name}</b>}
          secondary={
            <React.Fragment>
              <Typography
                sx={(theme) => ({
                  display: 'inline',
                  color: theme.palette.text.secondary,
                })}
                component='span'
                variant='body2'
              >
                {displayName}
              </Typography>
            </React.Fragment>
          }
        />
      </ListItemButton>
    </ListItem>
  );
}
