import type { Pokemon } from '@main/views';

export interface PokemonRenderedCardsProps {
  data?: Pokemon[];
  loading?: boolean;
  isPageMode?: boolean;
  pageSize?: number;
}
