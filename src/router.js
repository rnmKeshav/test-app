import React from 'react';
import UniversalRouter from 'universal-router';

import Home from './components/home';

const routes = [
  {
    path: '/home',
    action: () => {
      return (<Home />);
    }
  }
];

const routerWithContext = (store) => {
  let context = {store};
  
  return new UniversalRouter(routes, {context});
};

const onClientNavigation = (store, appRendered) => (pathname) => {
  let router = routerWithContext(store);

  router
    .resolve(pathname)
      .then((result) => {

        appRendered(result);
      }, (err) => {
        throw new Error(err);
      });
};

export default onClientNavigation;
