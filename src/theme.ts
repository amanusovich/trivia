import {
  ThemeProvider,
  createTheme,
  PaletteColor,
  SimplePaletteColorOptions,
} from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    information: PaletteColor;
  }

  interface PaletteOptions {
    information: SimplePaletteColorOptions;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#8c63b8',
      light: '#bfa5d7',
    },
    information: {
      main: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    button: {
      textTransform: 'none',
      fontFamily: 'Ubuntu, sans-serif',
      fontWeight: 'bold',
    },
  },
});

export default theme;
