import React from 'react';
import App from './App';
import { ThemeProvider } from '@mui/material';
import ReactDOM from 'react-dom/client';
import { theme } from './theme';
import { BrowserRouter } from 'react-router-dom';
import { persistor, store } from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </BrowserRouter>
);
