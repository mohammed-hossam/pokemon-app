import { useSearch } from '@tanstack/react-router';
import { ErrorView } from '@main/components';
import { PokemonDetailsCard, usePokemonDetails } from '@main/views';
import type { SearchQueries } from '@main/global.types';

export function PokemonDetails() {
  const search: SearchQueries = useSearch({ from: '/details' });
  const id = search.id;
  const { data, isLoading, isFetching, isError, error, refetch } = usePokemonDetails({ id });
  console.log(isError);
  const poke = data?.data;
  if (isLoading || isFetching) {
    return (
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-6">
        <p>loading....</p>
      </div>
    );
  }

  if (!id || !poke) {
    return (
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-6 space-y-4">
        <ErrorView message={'No Data Found'} onRetry={refetch} />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-6 space-y-4">
        <ErrorView message={error?.message ?? 'Unknown error'} onRetry={refetch} />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-6">
      <PokemonDetailsCard poke={poke} />
    </div>
  );
}
