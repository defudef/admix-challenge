import { styled } from '@mui/material/styles';
import MuiSwitch from '@mui/material/Switch';

const Switch = styled(MuiSwitch)(({ theme }) => ({
  width: '30px',
  height: '16px',
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: '12px',
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(-2px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: theme.spacing(1),
    '&.Mui-checked': {
      transform: 'translateX(14px)',
      color: theme.palette.background.paper,
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.primary.main,
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0px 1px 1px 0px rgba(31, 12, 60, 0.12)',
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: 'rgba(223, 227, 233, 1)',
    boxSizing: 'border-box',
  }
}));

export default Switch;
