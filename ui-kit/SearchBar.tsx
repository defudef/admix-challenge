import { ChangeEventHandler, memo } from 'react';
import { styled } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from './TextField';

const Svg = styled('svg')(({ theme }) => ({
  marginLeft: theme.spacing(6),
  width: '22px',
  height: '18px',

  '& path': {
    fill: theme.palette.grey[500],
  },
}));

const SearchTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(11),

  '& .MuiInputBase-input': {
    padding: theme.spacing(6, 2),
    
    '&::placeholder': {
      fontWeight: theme.typography.fontWeightMedium,
    },
  },
}));

const Icon = memo(() => (
  <Svg fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M2.5 7.75052C2.5 4.85074 4.85074 2.5 7.75052 2.5C10.6503 2.5 13.001 4.85074 13.001 7.75052C13.001 9.18635 12.4247 10.4876 11.4907 11.4355C11.4813 11.444 11.472 11.4528 11.4629 11.4619C11.4537 11.4711 11.4449 11.4804 11.4363 11.4899C10.4884 12.4243 9.18678 13.001 7.75052 13.001C4.85074 13.001 2.5 10.6503 2.5 7.75052ZM11.9647 13.0244C10.8098 13.9484 9.34467 14.501 7.75052 14.501C4.02231 14.501 1 11.4787 1 7.75052C1 4.02231 4.02231 1 7.75052 1C11.4787 1 14.501 4.02231 14.501 7.75052C14.501 9.34417 13.9488 10.8088 13.0252 11.9636L17.282 16.2203C17.5749 16.5132 17.5749 16.9881 17.282 17.281C16.9891 17.5739 16.5142 17.5739 16.2213 17.281L11.9647 13.0244Z" />
  </Svg>
));

interface Props {
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string;
}

const SearchBar = ({ onChange, value }: Props) => (
  <SearchTextField
    onChange={onChange}
    value={value}
    endAdornment={<InputAdornment position="start" component={Icon} />}
    fullWidth
    placeholder="Search app name"
  />
);

export default SearchBar;
