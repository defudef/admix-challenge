import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import InputBase, { InputBaseProps } from '@mui/material/InputBase';
import { styled } from '@mui/material/styles';

export type TextFieldProps = InputBaseProps & {
  label?: string;
};

const StyledInputLabel = styled(InputLabel)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightBold,
  fontSize: '13px',
  transform: 'none',
  color: theme.palette.text.primary,

  '&.Mui-focused': {
    color: theme.palette.text.primary,
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  border: `1px solid ${theme.palette.grey[700]}`,
  borderRadius: theme.shape.borderRadius,
  backgroundColor: 'white',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row-reverse',

  'label + &': {
    marginTop: theme.spacing(14),
  },

  '&.Mui-focused': {
    borderColor: theme.palette.primary.main,
  },

  '& .MuiInputBase-input': {
    padding: theme.spacing(6, 7),
    fontSize: '14px',
    fontWeight: theme.typography.fontWeightMedium,
    color: theme.palette.text.primary,

    '&::placeholder': {
      color: theme.palette.grey[500],
      fontWeight: theme.typography.fontWeightRegular,
      opacity: 1,
      fontSize: '14px',
    },
  },
}));

const TextField = ({ label, ...props }: TextFieldProps) => (
  <FormControl variant="standard">
    {label && (
      <StyledInputLabel shrink disableAnimation margin="dense">{label}</StyledInputLabel>
    )}
    <StyledInputBase {...props} />
  </FormControl>
);

export default TextField;
