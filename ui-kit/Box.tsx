import MuiBox from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const Box = styled(MuiBox)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: Number(theme.shape.borderRadius) * 2,
  padding: theme.spacing(0, 4),
  boxShadow: '0px 1px 1px 0px rgba(11, 15, 50, 0.06)',
}));

export default Box;
