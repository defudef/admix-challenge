import MuiTextField, { BaseTextFieldProps } from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

const StyledMuiTextField = styled(MuiTextField)<BaseTextFieldProps>(({ theme }) => ({
  '& .MuiInputBase-root': {
    backgroundColor: theme.palette.background.paper,
    borderRadius: '10px',
    border: `1px solid ${theme.palette.grey['300']}`,
    padding: theme.spacing(6, 7),

    '&:hover': { borderColor: theme.palette.grey['300'] },
    '&.Mui-focused': {
      //@ts-ignore
      border: `1px solid ${theme.palette.primary['500']}`,
    },
  },
  '& .MuiInputBase-root:hover': {
    borderColor: `${theme.palette.grey['300']} !important`,
  },
  '& .MuiInputBase-input': {
    padding: theme.spacing(0),
  }
}));

const TextField = (props: BaseTextFieldProps) => (
  <StyledMuiTextField {...props} />
);

export default TextField;
