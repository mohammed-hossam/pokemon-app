import type { UseQueryOptions, QueryKey } from '@tanstack/react-query';
import type { Mode } from '@main/constants';
export interface GetObjectByIdProps {
  id?: string;
}

export interface PagingProps {
  page?: number;
  limit?: number;
}

export type QueryOpts<Data, Key extends QueryKey = QueryKey, Err = Error> = Omit<
  UseQueryOptions<Data, Err, Data, Key>,
  'queryKey' | 'queryFn'
>;

export interface SearchQueries extends PagingProps {
  mode?: Mode;
}
