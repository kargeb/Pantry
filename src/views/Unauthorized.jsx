import React from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme, lightTheme } from '../themes/themes';
import GlobalStyle from '../themes/GlobalStyle';
import Login from './Login';

const Unauthorized = () => (
  <ThemeProvider theme={{ ...defaultTheme, ...lightTheme }}>
    <GlobalStyle />
    <Login />
  </ThemeProvider>
);

export default Unauthorized;
