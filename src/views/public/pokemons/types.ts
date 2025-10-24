import type { GetObjectByIdProps } from '@main/global.types';

export interface GetQueryPokemonsParams {
  limit?: number;
  offset?: number;
}
export interface GetQueryPokemonsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
}

export type GetQueryPokemonParams = GetObjectByIdProps;
export type GetQueryPokemonResponse = Pokemon;

export interface Pokemon {
  id?: string;
  name?: string;
  image?: string;
  url?: string;
  height?: number;
  weight?: number;
  base_experience?: number;
  sprites?: {
    other?: {
      ['official-artwork']?: {
        front_default?: string | null;
      };
    };
    front_default?: string | null;
  };
  types?: { slot?: number; type?: { name?: string } }[];
  abilities?: { is_hidden?: boolean; ability?: { name?: string } }[];
  stats?: { base_stat?: number; stat?: { name?: string } }[];
}
