import type { GetObjectByIdProps } from '@main/global.types';

// export interface PokemonDetailsProps {}

export interface GetQueryPokemonsParams {
  pageSize?: number;
  offset?: number;
}
export interface GetQueryPokemonsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pockemon[];
}

// export type PokemonListData = Omit<GetQueryPokemonsResponse, 'results'> & {
//   results: Pockemon[];
// };

export type GetQueryPokemonParams = GetObjectByIdProps;
export interface GetQueryPokemonResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pockemon[];
}

export interface Pockemon {
  id?: string;
  name?: string;
  image?: string;
  url?: string;
}
