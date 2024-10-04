import React from 'react';
import { Game } from './screens';
import { ThemeProvider } from '@emotion/react';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Game />
    </ThemeProvider>
  );
}

export default App;
