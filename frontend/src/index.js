import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import { Provider } from 'react-redux';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import store from './store';


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <ColorModeScript />
    <Provider store={store}>
    <App />
    </Provider>
  </StrictMode>
);

