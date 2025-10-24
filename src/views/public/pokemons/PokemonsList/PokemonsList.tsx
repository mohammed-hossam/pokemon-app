import { pageSize } from '@main/constants';
import { usePokemons } from '@main/views';
import { useState } from 'react';

function PokemonsList() {
  const [page, setPage] = useState(1);
  const offset = (page - 1) * pageSize;
  const {
    data: pokemonsList,
    isLoading,
    isFetching,
    isError,
    error,
  } = usePokemons({
    pageSize: 25,
    offset,
  });
  console.log(pokemonsList);
  return <div>welcome</div>;
}

export { PokemonsList };
