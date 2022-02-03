import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import setupInterceptors from "./services/setupInterceptors";

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
<React.Fragment>
    <App />
  </React.Fragment>
  </Provider>
  </React.StrictMode>
  ,
  document.getElementById('root')
)

setupInterceptors(store);