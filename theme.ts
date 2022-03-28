import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  spacing: (factor: number) => `${2 * factor}px`,
  typography: {
    allVariants: {
      fontFamily: "'Mulish', sans-serif",
    },
  },
  palette: {
    background: {
      default: '#e5e5e5',
      paper: '#fff',
    },
    primary: {
      500: '#2622b5',
    },
    grey: {
      300: '#dfe3e9',
    },
  },
});

export default createTheme(theme, {
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          padding: '45px 77px',
        },
      },
    },
    // MuiTextField: {
    //   variants: [
    //     {
    //       props: { variant: 'outlined' },
    //       style: {
    //         backgroundColor: theme.palette.background.paper,
    //         padding: theme.spacing(6, 7),
    //         border: `1px solid ${theme.palette.grey['300']}`,
    //         borderRadius: '10px',
    //       },
    //     },
    //   ],
    // },
  }
});
