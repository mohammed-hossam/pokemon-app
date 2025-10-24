import { PokemonSkeletonCard } from '@main/views';

export function PokemonRenderedSkeletonCards({ count = 12 }: { count?: number }) {
  return (
    <ul
      className="
        grid gap-4 sm:gap-5
        grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6
      "
      aria-hidden="true"
    >
      {Array.from({ length: count }).map((_, i) => (
        <PokemonSkeletonCard key={i} />
      ))}
    </ul>
  );
}
