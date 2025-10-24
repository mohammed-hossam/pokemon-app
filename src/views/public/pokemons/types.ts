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
  results: Pokemon[];
}

// export type PokemonListData = Omit<GetQueryPokemonsResponse, 'results'> & {
//   results: Pokemon[];
// };

export type GetQueryPokemonParams = GetObjectByIdProps;
export interface GetQueryPokemonResponse {
  count: number;
  next: string | null;
  // previous: string | null;
  // results: Pokemon[];
}

export interface Pokemon {
  id?: string;
  name?: string;
  image?: string;
  url?: string;
}
