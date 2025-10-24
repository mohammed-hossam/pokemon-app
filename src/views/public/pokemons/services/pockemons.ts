import { BASE_URLS } from '@main/constants';
import { axiosInstance } from '@main/lib';
import { idFromUrl } from '@main/utils';
import type {
  GetQueryPokemonParams,
  GetQueryPokemonResponse,
  GetQueryPokemonsParams,
  GetQueryPokemonsResponse,
  Pockemon,
} from '@main/views';
import type { AxiosResponse } from 'axios';

const queryPokemons = {
  async getList(params: GetQueryPokemonsParams) {
    const res = await axiosInstance.get<GetQueryPokemonsResponse>(
      BASE_URLS.pokemons.POKEMONS_LIST(),
      { params },
    );

    const items: Pockemon[] = res.data.results.map((r) => {
      const id = idFromUrl(r.url);
      return { id, name: r.name, image: BASE_URLS.pokemons.POKEMON_PIC(id), ...r };
    });
    return {
      ...res,
      data: { ...res.data, results: items },
    } as AxiosResponse<GetQueryPokemonsResponse>;
  },

  async getOne(params: GetQueryPokemonParams) {
    const res = await axiosInstance.get<GetQueryPokemonResponse>(
      BASE_URLS.pokemons.POKEMON_DETAILS(params.id),
    );
    return res;
  },
};
export { queryPokemons };
