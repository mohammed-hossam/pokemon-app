import { pageSize, QUERY_KEYS } from '@main/constants';
import type { InfiniteQueryOpts, QueryOpts } from '@main/global.types';
import {
  queryPokemons,
  type GetQueryPokemonResponse,
  type GetQueryPokemonsResponse,
} from '@main/views';
import {
  useInfiniteQuery,
  useQuery,
  type InfiniteData,
  type QueryKey,
} from '@tanstack/react-query';
import type { AxiosResponse } from 'axios';
type Data = AxiosResponse<GetQueryPokemonsResponse>;
interface PageParam {
  offset: number;
  limit: number;
}

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

export function usePokemonsInfinite(
  limit = pageSize,
  options?: InfiniteQueryOpts<Data, Error, InfiniteData<Data>, QueryKey, PageParam>,
) {
  return useInfiniteQuery<Data, Error, InfiniteData<Data>, QueryKey, PageParam>({
    queryKey: [QUERY_KEYS.pokemons.POKEMONS_LIST, 'infinite', { limit }],
    initialPageParam: { offset: 0, limit },
    queryFn: ({ pageParam }) =>
      queryPokemons.getList({
        limit: pageParam.limit,
        offset: pageParam.offset,
      }),
    getNextPageParam: (lastPage, _allPages, lastPageParam) => {
      const count = lastPage.data.count;
      const nextOffset = lastPageParam.offset + lastPageParam.limit;
      return nextOffset < count ? { offset: nextOffset, limit: lastPageParam.limit } : undefined;
    },
    ...options,
  });
}

export function usePokemonDetails(
  params: Parameters<typeof queryPokemons.getOne>[0],
  options?: QueryOpts<AxiosResponse<GetQueryPokemonResponse>, QueryKey>,
) {
  return useQuery({
    queryKey: [QUERY_KEYS.pokemons.POKEMON_DETAILS, params.id],
    queryFn: () => queryPokemons.getOne(params),
    enabled: Boolean(params.id),
    ...options,
  });
}
