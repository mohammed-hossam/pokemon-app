// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';

import { createRouter, RouterProvider } from '@tanstack/react-router';
import { appRoutes, buildRouterTree } from '@main/router';

const { routeTree } = buildRouterTree(appRoutes);
const router = createRouter({ routeTree });

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
