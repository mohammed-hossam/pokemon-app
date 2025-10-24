import { cn } from '@main/utils';
import type { PageItem, PaginationProps } from '@main/components';

function buildPageItems(current: number, total: number, windowSize = 4): PageItem[] {
  const maxAll = windowSize + 2;
  if (total <= maxAll) return Array.from({ length: total }, (_, i) => i + 1);

  const items: PageItem[] = [1];

  let start = Math.max(2, current - Math.floor(windowSize / 2));
  const end = Math.min(total - 1, start + windowSize - 1);

  if (end - start + 1 < windowSize) {
    start = Math.max(2, end - windowSize + 1);
  }

  if (start > 2) items.push('…');
  for (let p = start; p <= end; p++) items.push(p);
  if (end < total - 1) items.push('…');

  items.push(total);
  return items;
}

export function Pagination({
  page,
  totalPages,
  onChange,
  isDisabled,
  windowSize = 4,
}: PaginationProps) {
  const items = buildPageItems(page, totalPages, windowSize);
  const go = (n: number) => () => {
    if (!isDisabled && n >= 1 && n <= totalPages && n !== page) onChange(n);
  };

  const baseBtn =
    'rounded-md border transition ' +
    'text-xs px-2 py-1 md:text-sm md:px-3 md:py-1.5 ' +
    'border-zinc-200 bg-white text-zinc-700 ' +
    'dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200';

  const activeBtn =
    'border-zinc-900 bg-zinc-900 text-white ' +
    'dark:border-zinc-100 dark:bg-zinc-100 dark:text-zinc-900';

  return (
    <nav
      className="mt-6 flex items-center justify-center gap-1.5 md:gap-2"
      role="navigation"
      aria-label="Pagination"
    >
      <button
        type="button"
        onClick={go(page - 1)}
        disabled={!!isDisabled || page <= 1}
        className={`${baseBtn} disabled:opacity-50`}
      >
        <span className="sm:hidden" aria-hidden>
          ‹
        </span>
        <span className="hidden sm:inline">Previous</span>
      </button>

      {items.map((it, i) =>
        it === '…' ? (
          <span
            key={`ellipsis-${i}`}
            className="px-1.5 md:px-2 text-zinc-500 select-none"
            aria-hidden
          >
            …
          </span>
        ) : (
          <button
            key={it}
            type="button"
            onClick={go(it)}
            aria-current={it === page ? 'page' : undefined}
            className={cn(baseBtn, it === page ? activeBtn : 'disabled:opacity-50')}
            disabled={!!isDisabled}
          >
            {it}
          </button>
        ),
      )}

      <button
        type="button"
        onClick={go(page + 1)}
        disabled={!!isDisabled || page >= totalPages}
        className={`${baseBtn} disabled:opacity-50`}
      >
        <span className="sm:hidden" aria-hidden>
          ›
        </span>
        <span className="hidden sm:inline">Next</span>
      </button>
    </nav>
  );
}
