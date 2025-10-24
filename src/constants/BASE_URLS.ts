export const BASE_URLS = {
  pokemons: {
    POKEMONS_LIST: () => '/pokemon',
    POKEMON_DETAILS: (id?: string | number) => `/pokemon/${id ?? ''}`,
    POKEMON_PIC: (id?: string) => {
      return `${import.meta.env.VITE_PUBLIC_API_IMGS_URL}/${id ?? ''}.png`;
    },
  },
};
