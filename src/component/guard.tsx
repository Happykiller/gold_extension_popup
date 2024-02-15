import * as React from 'react';

import { ContextStore, contextStore } from '@component/contextStore';
import { routerStore } from './routerStore';

export function Guard() {
  const routeur = routerStore();
  const context:ContextStore = contextStore();

  if (context && !context.code) {
    routeur.navigateTo('/login');
  }

  return (<div/>);
}