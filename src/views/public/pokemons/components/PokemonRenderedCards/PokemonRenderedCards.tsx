import {
  PokemonCard,
  PokemonRenderedSkeletonCards,
  type PokemonRenderedCardsProps,
} from '@main/views';

function PokemonRenderedCards({
  data,
  loading,
  isPageMode = true,
  pageSize,
}: PokemonRenderedCardsProps) {
  if (loading && isPageMode)
    return (
      <>
        <PokemonRenderedSkeletonCards count={isPageMode ? pageSize : 12} />
      </>
    );
  if (!data?.length) return <></>;
  return (
    <ul
      className="
          grid gap-4 sm:gap-5
          grid-cols-2
          sm:grid-cols-3
          md:grid-cols-4
          lg:grid-cols-5
          xl:grid-cols-6 overflow-auto pr-1
        max-h-[50svh]
        sm:max-h-[60svh]
        md:max-h-[60svh]
        lg:max-h-[60svh]
        xl:max-h-[60svh]
        "
    >
      {data.map((p) => (
        <PokemonCard p={p} key={p.id} />
      ))}
    </ul>
  );
}

export { PokemonRenderedCards };
