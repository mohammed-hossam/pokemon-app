import type { VariantProps } from 'class-variance-authority';
import type { buttonVariants } from '@main/components';

export type ButtonProps = React.ComponentPropsWithoutRef<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };
