import { ErrorView, Pagination } from '@main/components';
import { pageSize } from '@main/constants';
import type { SearchQueries } from '@main/global.types';
import { PokemonRenderedCards, usePokemons } from '@main/views';
import { useNavigate, useSearch } from '@tanstack/react-router';
import { ErrorBoundary } from 'react-error-boundary';

function PokemonsList() {
  // const [page, setPage] = useState(1);
  // const offset = (page - 1) * pageSize;

  const search: SearchQueries = useSearch({ from: '/' });
  const navigate = useNavigate({ from: '/' });

  const page = Math.max(1, Number(search.page ?? 1));
  const offset = (page - 1) * pageSize;
  const setPage = (next: number) => {
    void navigate({
      to: '/',
      search: (prev: SearchQueries) => ({ ...prev, page: next }),
    });
  };
  const {
    data: pokemonsList,
    isLoading,
    refetch,
    isFetching,
    isError,
    error,
  } = usePokemons({
    limit: pageSize,
    offset,
  });
  console.log(pokemonsList);
  const data = pokemonsList?.data.results ?? [];
  const totalCount = pokemonsList?.data.count ?? 0;
  const totalPages = Math.max(1, Math.ceil(totalCount / pageSize));

  return (
    <section className="mt-8" aria-labelledby="pokemon-grid" aria-busy={isLoading || isFetching}>
      <h2 id="pokemon-grid" className="sr-only">
        Pokemon list
      </h2>

      <p role="status" aria-live="polite" className="sr-only">
        {isLoading ? 'Loading Pokemons' : `${data.length} result${data.length === 1 ? '' : 's'}`}
      </p>

      {isError ? (
        <ErrorView message={error?.message ?? 'Unknown error'} onRetry={refetch} />
      ) : isLoading ? (
        ' loading'
      ) : (
        <>
          {isFetching && (
            <div
              aria-hidden="true"
              className="mb-3 h-1 w-full overflow-hidden rounded bg-zinc-200 dark:bg-zinc-800"
              title="Refreshing…"
            >
              <div className="h-full w-1/3 animate-[loading_1.2s_ease-in-out_infinite] bg-indigo-500/70" />
            </div>
          )}
          <ErrorBoundary fallback={'error'}>
            <PokemonRenderedCards data={data} />
          </ErrorBoundary>

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
              <span className="font-medium">{data.length}</span> Pokemon shown)
            </p>
          </div>
        </>
      )}
    </section>
  );
}

export { PokemonsList };
