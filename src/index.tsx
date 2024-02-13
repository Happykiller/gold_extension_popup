import * as React from 'react';
import { CssBaseline } from '@mui/material';
import { createRoot } from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import '@src/i18n';
import '@src/index.scss';
import { Home } from '@component/home';
import { Login } from '@component/login';
import { Guard } from '@component/guard';

const root = createRoot(
  document.getElementById('root') as HTMLElement
);

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Guard><Home /></Guard>,
  },
  {
    path: "/login",
    element: <Login />,
  }
]);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
