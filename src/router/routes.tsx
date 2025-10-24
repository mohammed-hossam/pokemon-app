import { Layout } from '@main/components';
import type { RootConfig } from '@main/router';
import { PokemonsList } from '@main/views';

export const appRoutes: RootConfig = {
  component: Layout,
  children: [
    {
      path: '/',
      component: PokemonsList,
      // component: Home,
    },
    {
      path: 'pokemons-list-pagination',
      // path: 'pokemons-list-showmore',
      component: PokemonsList,
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
