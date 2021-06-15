import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.dark.less';
import './index.css';
import getStore from "./store";

import { Provider } from 'react-redux';
import ReactGA from "react-ga";
import { PersistGate } from "redux-persist/integration/react";
import AppRouter from "./AppRouter";
import { HelmetProvider } from 'react-helmet-async';
import reportWebVitals from './reportWebVitals';

ReactGA.initialize(process.env.REACT_APP_GA_ID);

export const { store, persistor } = getStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HelmetProvider>
        <PersistGate loading={null} persistor={persistor}>
          <AppRouter />
        </PersistGate>
      </HelmetProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
