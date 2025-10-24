import { Button, ErrorView, Pagination } from '@main/components';
import { MODES, pageSize } from '@main/constants';
import type { SearchQueries } from '@main/global.types';
import {
  PokemonRenderedCards,
  PokemonRenderedSkeletonCards,
  usePokemons,
  usePokemonsInfinite,
  type Pokemon,
} from '@main/views';
import { useNavigate, useSearch } from '@tanstack/react-router';
import { ErrorBoundary } from 'react-error-boundary';

function PokemonsList() {
  const search: SearchQueries = useSearch({ from: '/' });
  const navigate = useNavigate({ from: '/' });

  const mode = search.mode ?? MODES.PAGE;
  const page = Math.max(1, Number(search.page ?? 1));
  const offset = (page - 1) * pageSize;
  const isPageMode = mode === MODES.PAGE;

  const setPage = (next: number) =>
    void navigate({
      to: '/',
      search: (prev: SearchQueries) => ({ ...prev, page: next }),
    });

  const pageQuery = usePokemons({ limit: pageSize, offset }, { enabled: isPageMode });

  const infiniteQuery = usePokemonsInfinite(pageSize, { enabled: !isPageMode });

  const isLoading = isPageMode ? pageQuery.isLoading : infiniteQuery.isLoading;
  const isFetching = isPageMode ? pageQuery.isFetching : infiniteQuery.isFetching;
  const isError = isPageMode ? pageQuery.isError : infiniteQuery.isError;
  const error = (isPageMode ? pageQuery.error : infiniteQuery.error) as Error | undefined;
  const refetch = isPageMode ? pageQuery.refetch : infiniteQuery.refetch;

  // console.log(infiniteQuery.data); // this gives an array of the responses of every page
  const listData: Pokemon[] = isPageMode
    ? (pageQuery.data?.data.results ?? [])
    : (infiniteQuery.data?.pages.flatMap((p) => p.data.results) ?? []);

  const totalCount = isPageMode
    ? (pageQuery.data?.data.count ?? 0)
    : (infiniteQuery.data?.pages.at(-1)?.data.count ?? 0);

  const totalPages = Math.max(1, Math.ceil(totalCount / pageSize));
  const hasNextPage = isPageMode ? page < totalPages : Boolean(infiniteQuery.hasNextPage);

  return (
    <section className="mt-8" aria-labelledby="pokemon-grid" aria-busy={isLoading || isFetching}>
      <h2 id="pokemon-grid" className="sr-only">
        Pokemon list
      </h2>

      <p role="status" aria-live="polite" className="sr-only">
        {isLoading
          ? 'Loading Pokemons'
          : `${listData.length} result${listData.length === 1 ? '' : 's'}`}
      </p>

      {isError ? (
        <ErrorView message={error?.message ?? 'Unknown error'} onRetry={refetch} />
      ) : isLoading || isFetching ? (
        <PokemonRenderedSkeletonCards count={isPageMode ? pageSize : 12} />
      ) : (
        <>
          <ErrorBoundary fallback={'error'}>
            <PokemonRenderedCards data={listData} />
          </ErrorBoundary>

          {isPageMode ? (
            <div className="mt-6 flex flex-col items-center gap-3">
              <Pagination
                page={page}
                totalPages={totalPages}
                onChange={setPage}
                isDisabled={isFetching || isLoading}
              />
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Page <span className="font-medium">{page}</span> of{' '}
                <span className="font-medium">{totalPages}</span> (
                <span className="font-medium">{listData.length}</span> Pokémon shown)
              </p>
            </div>
          ) : (
            <div className="mt-6 flex flex-col items-center gap-3">
              <Button
                type="button"
                onClick={() => void infiniteQuery.fetchNextPage()}
                disabled={isFetching || isLoading || !hasNextPage}
              >
                {hasNextPage
                  ? infiniteQuery.isFetchingNextPage
                    ? 'Loading…'
                    : 'Show more'
                  : 'No more Pokémon'}
              </Button>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Showing <span className="font-medium">{listData.length}</span> of{' '}
                <span className="font-medium">{totalCount}</span>
              </p>
            </div>
          )}
        </>
      )}
    </section>
  );
}

export { PokemonsList };
