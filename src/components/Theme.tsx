import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import * as React from 'react';

interface ThemeProviderProps {
  children: React.ReactNode;
}

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Montserrat',
  },
  palette: {
    primary: {
      main: '#555',
    },
  },
});

const ThemeProvider = ({ children }: ThemeProviderProps) => (
  <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
);

export default ThemeProvider;
