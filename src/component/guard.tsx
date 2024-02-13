import * as React from 'react';
import { useLocation, Navigate } from "react-router-dom";

import { ContextStore, contextStore } from '@component/contextStore';

export function Guard({ children }: { children: JSX.Element }) {
  let location = useLocation();
  
  const context:ContextStore = contextStore();

  if (!context.code) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  } else {
    return children;
  }
}