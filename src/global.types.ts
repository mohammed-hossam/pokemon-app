import type {
  UseQueryOptions,
  QueryKey,
  UseInfiniteQueryOptions,
  InfiniteData,
} from '@tanstack/react-query';
import type { Mode } from '@main/constants';
export interface GetObjectByIdProps {
  id?: string;
}

export interface PagingProps {
  page?: number;
  limit?: number;
  offset?: number;
}

export type QueryOpts<Data, Key extends QueryKey = QueryKey, Err = Error> = Omit<
  UseQueryOptions<Data, Err, Data, Key>,
  'queryKey' | 'queryFn'
>;

export type InfiniteQueryOpts<
  TQueryFnData,
  TError = Error,
  TData = InfiniteData<TQueryFnData>,
  TQueryKey extends QueryKey = QueryKey,
  TPageParam = unknown,
> = Omit<
  UseInfiniteQueryOptions<TQueryFnData, TError, TData, TQueryKey, TPageParam>,
  'queryKey' | 'queryFn' | 'initialPageParam' | 'getNextPageParam'
>;

export interface SearchQueries extends PagingProps {
  mode?: Mode;
}
