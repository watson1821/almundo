import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import registerServiceWorker from './registerServiceWorker';

const noop = () => {};

ReactDOM.render(
  <Provider store={noop}>
    <App />
  </Provider>,
	document.getElementById('root')
);
registerServiceWorker();
