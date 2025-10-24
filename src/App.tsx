import { createRouter, RouterProvider } from '@tanstack/react-router';
import { appRoutes, buildRouterTree } from '@main/router';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@main/lib';

const { routeTree } = buildRouterTree(appRoutes);
const router = createRouter({ routeTree });

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
}

export default App;
