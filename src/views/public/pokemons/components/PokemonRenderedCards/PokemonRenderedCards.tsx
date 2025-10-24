import { PokemonCard, type PokemonRenderedCardsProps } from '@main/views';

function PokemonRenderedCards({ data }: PokemonRenderedCardsProps) {
  if (!data?.length) return <></>;

  return (
    <ul
      className="
            grid gap-4 sm:gap-5
            grid-cols-2
            sm:grid-cols-3
            md:grid-cols-4
            lg:grid-cols-5
            xl:grid-cols-6
          "
    >
      {data.map((p) => (
        <PokemonCard p={p} key={p.id} />
      ))}
    </ul>
  );
}

export { PokemonRenderedCards };
