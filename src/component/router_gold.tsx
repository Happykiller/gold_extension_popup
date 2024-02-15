import * as React from 'react';

import { Home } from '@component/home';
import { Login } from '@component/login';
import { Guard } from '@component/guard';
import { Background } from '@component/background';
import { routerStore } from '@component/routerStore';

export const RouterGold = () => {
  const routeur = routerStore();
  switch (routeur.route) {
    case '/':
    case '/hom':
      return <div><Guard/><Home /></div>
    case '/background':
      return <div><Guard/><Background /></div>
    case '/login':
      return <Login />
    default:
      return <div><Guard/><Home /></div>
  }
};
