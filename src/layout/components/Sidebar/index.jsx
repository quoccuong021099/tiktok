import { Box, Button, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import MenuSidebar from './MenuSidebar';
import SuggestAccount from './SuggestAccount';
const StyledButton = styled(Button)(() => ({
  textTransform: 'none',
  padding: 0,
  '&:hover': {
    backgroundColor: 'white',
    textDecoration: 'underline',
  },
}));
const StyledB = styled('b')(({ theme }) => ({
  color: theme.palette.text.secondary,
}));

export default function Sidebar() {
  return (
    <Box
      component='nav'
      sx={(theme) => ({
        width: theme.palette.SIDEBAR_WIDTH,
        minHeight: theme.palette.MIN_HEIGHT,
        backgroundColor: theme.palette.white.primary,
      })}
    >
      <MenuSidebar />
      <Divider />
      <SuggestAccount
        title={<StyledB>Suggested accounts</StyledB>}
        action={<StyledButton color='secondary'>See all</StyledButton>}
      />
      <Divider />
      <SuggestAccount
        title={<StyledB>Suggested following</StyledB>}
        action={<StyledButton color='secondary'>See more</StyledButton>}
      />
    </Box>
  );
}
