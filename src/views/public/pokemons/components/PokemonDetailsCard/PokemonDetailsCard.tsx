import { formatId } from '@main/utils';
import type { PokemonDetailsCardProps } from '@main/views';

function PokemonDetailsCard({ poke }: PokemonDetailsCardProps) {
  const name = poke.name ? poke.name.charAt(0).toUpperCase() + poke.name.slice(1) : '';
  const img = poke.sprites ? poke.sprites.other?.['official-artwork']?.front_default : '';
  const heightM = ((poke.height ?? 11) / 10).toFixed(1) + ' m';
  const weightKg = ((poke.weight ?? 200) / 10).toFixed(1) + ' kg';

  const statMap: Record<string, string> = {
    hp: 'HP',
    attack: 'Attack',
    defense: 'Defense',
    'special-attack': 'Sp. Attack',
    'special-defense': 'Sp. Defense',
    speed: 'Speed',
  };

  return (
    <article className="rounded-xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
      <header className="rounded-t-xl bg-gradient-to-r from-pink-500 to-violet-500 px-6 py-5 text-center text-white">
        <h1 className="text-2xl font-bold tracking-tight">
          <span className="mr-2">⚡</span> {name}
        </h1>
        <p className="mt-1 text-sm opacity-90">{formatId(poke?.id)}</p>
      </header>

      <div className="grid gap-8 p-6 sm:grid-cols-2">
        <section aria-labelledby="pokemon-visual">
          <h2 id="pokemon-visual" className="sr-only">
            Pokemon image & measurements
          </h2>

          <div className="mx-auto aspect-square max-w-[320px] rounded-full bg-zinc-100 p-6 dark:bg-zinc-800">
            {img ? (
              <img src={img} alt={`${name} artwork`} className="h-full w-full object-contain" />
            ) : (
              <div className="h-full w-full rounded-full bg-zinc-200 dark:bg-zinc-700" />
            )}
          </div>

          {/* types chips */}
          <div className="mt-4 flex justify-center gap-2">
            {poke?.types?.map((t) => (
              <span
                key={t?.type?.name}
                className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
              >
                {t?.type?.name}
              </span>
            ))}
          </div>

          {/* measurements cards */}
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="rounded-lg p-4 dark:border-zinc-800 bg-zinc-100">
              <div className="text-sm text-zinc-500">Height</div>
              <div className="mt-1 text-lg font-semibold">{heightM}</div>
            </div>
            <div className="rounded-lg p-4 dark:border-zinc-800 bg-zinc-100">
              <div className="text-sm text-zinc-500">Weight</div>
              <div className="mt-1 text-lg font-semibold">{weightKg}</div>
            </div>
          </div>
        </section>

        {/* right: stats & abilities & base exp */}
        <section aria-labelledby="pokemon-stats" className="text-left">
          <h2 id="pokemon-stats" className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            Base Stats
          </h2>

          <div className="mt-4 space-y-3">
            {poke.stats?.map((s) => (
              <StatRow
                key={s.stat?.name}
                label={statMap[s.stat?.name ?? 'HP'] ?? s.stat?.name}
                value={s.base_stat ?? 0}
              />
            ))}
          </div>

          <h3 className="mt-6 text-lg font-semibold text-zinc-900 dark:text-zinc-100">Abilities</h3>
          <div className="mt-2 flex flex-wrap gap-2">
            {poke?.abilities?.map((a) => (
              <span
                key={a?.ability?.name}
                className="rounded-full border border-zinc-200 bg-white px-2.5 py-1 text-xs font-medium text-zinc-700 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200"
              >
                {a?.ability?.name} {a?.is_hidden && <span className="opacity-60">(Hidden)</span>}
              </span>
            ))}
          </div>

          <div className="mt-6">
            <div className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
              Base Experience
            </div>
            <div className="mt-1 text-xl font-extrabold text-indigo-600 dark:text-indigo-400">
              {poke.base_experience} <span className="font-semibold">XP</span>
            </div>
          </div>
        </section>
      </div>
    </article>
  );
}

export { PokemonDetailsCard };

function StatRow({ label, value }: { label: string; value: number }) {
  const pct = Math.min(100, value);
  return (
    <div className="grid grid-cols-[1fr_auto] items-center gap-3">
      <div>
        <div className="text-sm font-medium text-zinc-800 dark:text-zinc-100">{label}</div>
        <div
          aria-label="HP progress"
          className="mt-1 h-2 rounded bg-zinc-200 dark:bg-zinc-800"
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div className="h-2 rounded bg-zinc-900 dark:bg-zinc-100" style={{ width: `${pct}%` }} />
        </div>
      </div>
      <div className="text-sm tabular-nums text-zinc-600 dark:text-zinc-400">{value}</div>
    </div>
  );
}
