import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { GraphProvider } from './context/Graph';

const theme = createTheme()
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GraphProvider>
      <App />
      </GraphProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

