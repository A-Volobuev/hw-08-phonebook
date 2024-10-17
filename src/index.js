import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/system';
import { PersistGate } from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import {theme} from './utils/theme';
import {store, persistor} from './redux'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/hw-08-phonebook">
          <ThemeProvider theme={theme}>
            <App/>
          </ThemeProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

