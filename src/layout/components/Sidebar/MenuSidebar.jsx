import {
  PeopleAltIcon,
  HomeIcon,
  PhotoCameraFrontIcon,
} from '~/components/icons';
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const StyledListItem = styled(ListItem)(({ theme, selected }) => ({
  backgroundColor: '#fff !important',
  color: selected ? theme.palette.secondary.main : theme.palette.text.primary,
}));

const listLink = [
  {
    to: '/',
    text: 'For you',
    icon: HomeIcon,
  },
  {
    to: '/following',
    text: 'Following',
    icon: PeopleAltIcon,
  },
  {
    to: '/live',
    text: 'Live',
    icon: PhotoCameraFrontIcon,
  },
];

export default function MenuSidebar() {
  const { pathname } = useLocation();

  const [active, setActive] = useState('/');

  const handleChangeTab = (text) => {
    setActive(text);
  };

  useEffect(() => {
    if (pathname) {
      setActive(pathname);
    }
  }, [pathname]);

  return (
    <List>
      {listLink?.map((item, index) => {
        const IconItem = item.icon;
        const text = item.text;
        const urlPath = item.to;
        return (
          <StyledListItem
            disablePadding
            key={index}
            selected={urlPath === active}
            onClick={() => handleChangeTab(urlPath)}
            component={Link}
            to={urlPath}
          >
            <ListItemButton
              sx={(theme) => ({
                borderLeft: `3px solid ${
                  urlPath === active
                    ? theme.palette.secondary.main
                    : 'transparent'
                }`,
                p: 1,
                backgroundColor: theme.palette.white.main,
              })}
            >
              <ListItemIcon>
                <IconItem color={urlPath === active ? 'secondary' : ''} />
              </ListItemIcon>
              <ListItemText
                disableTypography
                primary={
                  <Typography
                    variant='subtitle1'
                    sx={{ textTransform: 'uppercase', fontWeight: '600' }}
                  >
                    {text}
                  </Typography>
                }
              />
            </ListItemButton>
          </StyledListItem>
        );
      })}
    </List>
  );
}
