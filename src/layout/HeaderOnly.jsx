import Sidebar from '~/layout/components/Sidebar';
import Header from '~/layout/components/Header';
import { Box } from '@mui/material';

export default function HeaderOnly({ children }) {
  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Header />
      <Box
        sx={(theme) => ({
          width: theme.palette.LAYOUT_WIDTH,
          minHeight: theme.palette.MIN_HEIGHT,
          backgroundColor: theme.palette.white.primary,
          marginTop: theme.palette.HEADER_HEIGHT,
          display: 'flex',
        })}
      >
        <Box sx={{ flex: 1 }}>{children}</Box>
      </Box>
    </Box>
  );
}
