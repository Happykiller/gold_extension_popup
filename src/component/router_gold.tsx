import * as React from 'react';

import { Cb } from '@component/cb';
import { Home } from '@component/home';
import { Login } from '@component/login';
import { Background } from '@component/background';
import { routerStore } from '@component/routerStore';
import { ContextStore, contextStore } from '@component/contextStore';

export const RouterGold = () => {
  const routeur = routerStore();
  const context:ContextStore = contextStore();

  if (routeur.route && !context.id) {
    return <Login />
  }

  switch (routeur.route) {
    case '/':
    case '/home':
      return <div><Home /></div>
    case '/cb':
      return <div><Cb /></div>
    case '/background':
      return <div><Background /></div>
    case '/login':
      return <Login />
    default:
      return <div><Home /></div>
  }
};
