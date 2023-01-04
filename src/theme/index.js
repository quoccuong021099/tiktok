import { red, grey } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#fe2c55',
    },
    error: {
      main: red.A400,
    },
    text: {
      primary: '#161823',
      secondary: grey[700],
      third: grey[500],
    },
    white: {
      primary: '#fff',
    },
    black: {
      primary: '#000',
    },
    HEADER_HEIGHT: '64px',
    LAYOUT_WIDTH: '1150px',
    SIDEBAR_WIDTH: '356px',
    MIN_HEIGHT: '1000px',
    SPACING: '24px',
  },
});

export default theme;
