import { Outlet } from '@tanstack/react-router';
import React from 'react';

function Layout() {
  return (
    <div>
      <header>welcome</header>
      <main>
        <React.Suspense fallback={<div>Loading…</div>}>
          <Outlet />
        </React.Suspense>
      </main>
    </div>
  );
}

export { Layout };
