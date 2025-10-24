import { Layout, DetailsLayout } from '@main/components';
import type { RootConfig } from '@main/router';
import { PokemonDetails, PokemonsList } from '@main/views';
import { Outlet } from '@tanstack/react-router';

export const appRoutes: RootConfig = {
  component: () => <Outlet />,
  children: [
    {
      id: 'home',
      path: '',
      component: Layout,
      children: [{ path: '/', component: PokemonsList }],
    },
    {
      path: 'details',
      component: DetailsLayout,
      children: [{ path: '/', component: PokemonDetails }],
    },
  ],
} satisfies RootConfig;
