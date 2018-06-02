import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import CSS from '../assets/stylesheets/main.scss';

import onClientNavigation from './router';
import rootReducer from './reducers/root_reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let myStore = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));
window.clientData = myStore;

let renderApp = (component) => {
  ReactDOM.render((
    <Provider store={myStore}>
      <div>
        {component}
      </div>
    </Provider>
  ), document.getElementById('app'));
}

let onNavigation = onClientNavigation(myStore, renderApp);

onNavigation(window.location.pathname);
