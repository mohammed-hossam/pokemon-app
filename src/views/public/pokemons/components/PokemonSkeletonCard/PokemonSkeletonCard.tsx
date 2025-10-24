export function PokemonSkeletonCard() {
  return (
    <li className="list-none">
      <div
        className="
          block rounded-lg border border-zinc-200 bg-white p-3 shadow-sm
          dark:border-zinc-800 dark:bg-zinc-900
        "
        aria-hidden="true"
      >
        <div className="aspect-square overflow-hidden rounded-md bg-zinc-100 dark:bg-zinc-800">
          <div className="h-full w-full animate-pulse bg-zinc-200 dark:bg-zinc-700" />
        </div>

        <div className="mt-2 space-y-2">
          <div className="h-4 w-3/5 animate-pulse rounded bg-zinc-200 dark:bg-zinc-700" />
          <div className="h-3 w-2/5 animate-pulse rounded bg-zinc-200 dark:bg-zinc-700" />
        </div>
      </div>
    </li>
  );
}
