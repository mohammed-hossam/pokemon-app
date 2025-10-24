import { Outlet } from '@tanstack/react-router';
import { Button } from '@main/components';

export function DetailsLayout() {
  const onBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white dark:from-zinc-900 dark:to-zinc-950">
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-10">
        <section className="pt-10">
          <Button variant="white" type="button" onClick={onBack} aria-label="Back to List">
            ← Back to List
          </Button>
          <Outlet />
        </section>
      </main>
    </div>
  );
}
