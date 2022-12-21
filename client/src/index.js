import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { configureStore } from '@reduxjs/toolkit';
import globalReducer from 'state';
import { Provider } from 'react-redux';

import { api } from "state/api";

const store = configureStore({
  reducer:  {
    global: globalReducer,
    // Add the generated reducer as a specific top-level slice
    [api.reducerPath]: api.reducer,

  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefault) => getDefault().concat(api.middleware),
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={ store }>
    <App />
    </Provider>
  </React.StrictMode>
);