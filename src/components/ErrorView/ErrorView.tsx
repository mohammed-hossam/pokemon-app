import type { ErrorViewProps } from '@main/components';

function ErrorView({ message, onRetry }: ErrorViewProps) {
  return (
    <div
      role="alert"
      className="
        rounded-md border border-red-200 bg-red-50 p-4 text-sm text-red-800
        dark:border-red-900/40 dark:bg-red-950/40 dark:text-red-200
      "
    >
      <p className="font-medium">Something went wrong.</p>
      <p className="mt-1">{message}</p>
      <button
        type="button"
        onClick={onRetry}
        className="
          mt-3 inline-flex items-center rounded-md bg-red-600 px-3 py-1.5 text-white
          hover:bg-red-700 focus-visible:outline-none focus-visible:ring-2
          focus-visible:ring-red-500 focus-visible:ring-offset-2
        "
      >
        Try again
      </button>
    </div>
  );
}

export { ErrorView };
