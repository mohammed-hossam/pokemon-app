// Layout.tsx
import { Outlet, Link, useSearch } from '@tanstack/react-router';
import { Button } from '@main/components';
import type { SearchQueries } from '@main/global.types';
import { MODES } from '@main/constants';

function Layout() {
  const search: SearchQueries = useSearch({ from: '/' });
  const currentMode = search.mode ?? MODES.PAGE;

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white dark:from-zinc-900 dark:to-zinc-950">
      <header className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 text-center space-y-2">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          <span className="mr-2">⚡</span> Pokédex
        </h1>
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
          Discover and explore Pokemon
        </p>

        <nav aria-label="View switch" className="mt-4">
          <ul className="inline-flex gap-2">
            <li>
              <Button
                asChild
                variant={currentMode === MODES.PAGE ? 'default' : 'outline'}
                size="sm"
              >
                <Link
                  to="/"
                  search={(prev: SearchQueries) => ({ ...prev, mode: MODES.PAGE })}
                  aria-current={currentMode === MODES.PAGE ? 'page' : undefined}
                >
                  Page Controls
                </Link>
              </Button>
            </li>

            <li>
              <Button
                asChild
                variant={currentMode === MODES.INFINITE ? 'default' : 'outline'}
                size="sm"
              >
                <Link
                  to="/"
                  search={(prev: SearchQueries) => ({ ...prev, mode: MODES.INFINITE })}
                  aria-current={currentMode === MODES.INFINITE ? 'page' : undefined}
                >
                  Infinite Scroll
                </Link>
              </Button>
            </li>
          </ul>
        </nav>
      </header>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-10">
        <section className="mt-8">
          <Outlet />
        </section>
      </main>
    </div>
  );
}

export { Layout };
