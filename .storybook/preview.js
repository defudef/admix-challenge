import theme from '../theme';
import { ThemeProvider } from '@mui/material/styles';
import { ThemeProvider as Emotion10ThemeProvider } from 'emotion-theming';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const withThemeProvider = (Story, context) => (
  <Emotion10ThemeProvider theme={theme}>
    <ThemeProvider theme={theme}>
      <Story {...context} />
    </ThemeProvider>
  </Emotion10ThemeProvider>
);


export const decorators = [withThemeProvider];
// export const decorators = [muiTheme([theme])];
