import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const listSuggest = [
  {
    avatarUrl: '/',
    displayName: 'Quốc Cường',
    name: 'quoccuong.99',
  },
];
export default function SuggestAccount({ title, action }) {
  return (
    <Box
      sx={{
        padding: '8px 0',
      }}
    >
      <Typography variant='subtitle1' component='div'>
        {title}
      </Typography>
      <List>
        {listSuggest.map((item, index) => (
          <ListItem alignItems='flex-start' disablePadding key={index}>
            <ListItemButton sx={{ p: '0 8px' }}>
              <ListItemAvatar>
                <Avatar alt={item.name} src={item.avatarUrl} />
              </ListItemAvatar>
              <ListItemText
                primary={<b>{item.name}</b>}
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
                      {item.displayName}
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      {action && action}
    </Box>
  );
}
