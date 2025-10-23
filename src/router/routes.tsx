import { Layout } from '@main/components';
import type { RootConfig } from '@main/router';

export const appRoutes: RootConfig = {
  component: Layout,
  children: [
    {
      path: '/',
      // component: Home,
    },
    {
      path: 'pokemons-list-pagination',
      // path: 'pokemons-list-showmore',
      // component: Home,
    },
    {
      path: 'pokemon-details',
      // component: About,
    },
    //     {
    //       path: '*',
    //       component: () => <h2>Not Found</h2>,
    //     },
  ],
} satisfies RootConfig;
