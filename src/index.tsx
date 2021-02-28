import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import store from './stores';
import { Toaster } from 'react-hot-toast';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{
            success: {
              duration: 3000,
            },
            loading: {
              duration: 10,
            },
          }} />
        <Routes />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
