import { Layout } from '@main/components';
import type { RootConfig } from '@main/router';
import { PokemonsList } from '@main/views';

export const appRoutes: RootConfig = {
  component: Layout,
  children: [
    {
      path: '/',
      component: PokemonsList,
    },
    {
      path: '/details',
    },
  ],
} satisfies RootConfig;
