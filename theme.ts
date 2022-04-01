import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  spacing: (factor: number) => `${2 * factor}px`,
  shape: {
    borderRadius: 10,
  },
  typography: {
    allVariants: {
      fontFamily: "'Mulish', sans-serif",
      lineHeight: '21px',
    },
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    fontSize: 14,
  },
  palette: {
    background: {
      paper: '#fff',
    },
    primary: {
      main: '#2622b5',
    },
    info: {
      main: '#5287ed',
      500: '#5287ed',
    },
    grey: {
      200: 'rgba(239, 241, 244, 1)',
      300: '#dfe3e9',
      500: '#858798',
      600: '#f8f9fb',
      700: '#dcdfee',
      900: '#232747',
    },
    text: {
      primary: '#0b0f32',
    }
  },
});

export default createTheme(theme, {
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: theme.palette.grey[600],
          fontFamily: theme.typography.body1.fontFamily,
        },
      },
    },
    // MuiTextField: {
    //   variants: [
    //     {
    //       props: { variant: 'outlined' },
    //       style: {
            
    //       }
    //     }
    //   ]
    // }
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
