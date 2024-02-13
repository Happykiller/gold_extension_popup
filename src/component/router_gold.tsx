import * as React from 'react';

import { Home } from '@component/home';
import { Login } from '@component/login';
import { Guard } from '@component/guard';
import { routerStore } from '@component/routerStore';

export const RouterGold = () => {
  const routeur = routerStore();
  console.log(routeur)
  switch (routeur.route) {
    case '/':
      return <div><Guard/><Home /></div>
    case '/login':
      return <Login />
    default:
      return <div><Guard/><Home /></div>
  }
};
