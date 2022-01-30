import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import setupInterceptors from "./services/setupInterceptors";

ReactDOM.render(
  <Provider store = {store}>
<React.Fragment>
    <App />
  </React.Fragment>
  </Provider>,
  document.getElementById('root')
)

setupInterceptors(store);