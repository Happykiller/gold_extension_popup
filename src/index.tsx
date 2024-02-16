import * as React from 'react';
import { CssBaseline } from '@mui/material';
import { createRoot } from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import '@src/i18n';
import '@src/index.scss';
import { RouterGold } from '@component/router_gold';

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
    <div className='index'>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <RouterGold />
      </ThemeProvider>
    </div>
  </React.StrictMode>
);
