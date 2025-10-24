import { QUERY_KEYS } from '@main/constants';
import type { QueryOpts } from '@main/global.types';
import { queryPokemons, type GetQueryPokemonsResponse } from '@main/views';
import { useQuery, type QueryKey } from '@tanstack/react-query';
import type { AxiosResponse } from 'axios';
type Data = AxiosResponse<GetQueryPokemonsResponse>;

export function usePokemons(
  params: Parameters<typeof queryPokemons.getList>[0],
  options?: QueryOpts<Data, QueryKey>,
) {
  return useQuery({
    queryKey: [QUERY_KEYS.pokemons.POKEMONS_LIST, { ...params }],
    queryFn: () => queryPokemons.getList(params),
    ...options,
  });
}

export function usePokemon(
  params: Parameters<typeof queryPokemons.getOne>[0],
  options?: QueryOpts<Data, QueryKey>,
) {
  return useQuery({
    queryKey: [QUERY_KEYS.pokemons.POKEMON_DETAILS, { ...params }],
    queryFn: () => queryPokemons.getOne(params),
    ...options,
  });
}
