import { ErrorView } from '@main/components';
import { pageSize } from '@main/constants';
import { PokemonRenderedCards, usePokemons } from '@main/views';
import { useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

function PokemonsList() {
  const [page, setPage] = useState(1);
  const offset = (page - 1) * pageSize;
  const {
    data: pokemonsList,
    isLoading,
    refetch,
    isFetching,
    isError,
    error,
  } = usePokemons({
    pageSize: 25,
    offset,
  });
  console.log(pokemonsList);
  const data = pokemonsList?.data.results ?? [];

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
        </>
      )}
    </section>
  );
}

export { PokemonsList };
