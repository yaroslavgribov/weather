import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Link, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux';

import Header from './header/Header'
import App from './App'

import store from './createStore.js'

import registerServiceWorker from './registerServiceWorker';

import './index.css';

ReactDOM.render(
  <Provider store={store}> 
    <BrowserRouter basename="cities">
      <main>
        <Header />
        <App />
      </main>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
