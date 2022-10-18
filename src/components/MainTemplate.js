import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../Theme/GlobalStyle';
import { theme } from '../Theme/mainTheme';

const MainTemplate = ({ children }) => (
  <div>
    <GlobalStyle />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </div>
);

export default MainTemplate;
