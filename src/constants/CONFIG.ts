const pageSize = 25;

type ModeValue = 'page' | 'infinite';

export const MODES = {
  PAGE: 'page',
  INFINITE: 'infinite',
} as const satisfies Record<string, ModeValue>;

export type Mode = ModeValue;

export { pageSize };
// export type { Mode };
