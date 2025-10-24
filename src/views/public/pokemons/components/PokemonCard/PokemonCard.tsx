import { formatId } from '@main/utils';
import type { Pokemon } from '@main/views';
import { Link } from '@tanstack/react-router';

function PokemonCard({ p }: { p: Pokemon }) {
  return (
    <li key={p.id} className="list-none">
      <Link
        to="/pokemon-details"
        search={{ id: String(p.id) }}
        aria-labelledby={`poke-${p.id}-name`}
        className="
                group block rounded-lg border border-zinc-200 bg-white p-3 shadow-sm
                hover:shadow-md focus:outline-none focus-visible:ring-2
                focus-visible:ring-indigo-500 focus-visible:ring-offset-2
                dark:border-zinc-800 dark:bg-zinc-900
                transition-shadow motion-reduce:transition-none
              "
      >
        <div className="aspect-square overflow-hidden rounded-md bg-zinc-100 dark:bg-zinc-800">
          <img
            src={p.image}
            alt={`${p.name} sprite`}
            className="h-full w-full object-contain"
            loading="lazy"
          />
        </div>

        <h3
          id={`poke-${p.id}-name`}
          className="mt-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100"
        >
          {p.name}
        </h3>

        <p className="text-xs text-zinc-500">{formatId(p.id)}</p>
      </Link>
    </li>
  );
}

export { PokemonCard };
