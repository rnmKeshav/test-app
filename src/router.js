import React from "react";
import UniversalRouter from "universal-router";

import getUserData from "./actions/get_user_data";

import Main from "./containers/main";

const routes = [
  {
    path: "/home",
    action: context => {
      let { dispatch } = context.store;

      //return dispatch(getUserData()).then(() => {
      return <Main />;
      //});
    }
  }
];

const routerWithContext = store => {
  let context = { store };

  return new UniversalRouter(routes, { context });
};

const onClientNavigation = (store, appRendered) => pathname => {
  let router = routerWithContext(store);

  router.resolve(pathname).then(
    result => {
      appRendered(result);
    },
    err => {
      return err;
    }
  );
};

export default onClientNavigation;
