import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import '@src/i18n';
import '@src/index.scss';
import { App } from '@src/App';
import { CssBaseline } from '@mui/material';

const root = createRoot(
  document.getElementById('root') as HTMLElement
);

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
