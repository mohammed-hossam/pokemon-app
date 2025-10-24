import type { UseQueryOptions, QueryKey } from '@tanstack/react-query';
export interface GetObjectByIdProps {
  id?: string;
}

export interface PagingProps {
  page?: number;
  size?: number;
}

export type QueryOpts<Data, Key extends QueryKey = QueryKey, Err = Error> = Omit<
  UseQueryOptions<Data, Err, Data, Key>,
  'queryKey' | 'queryFn'
>;
