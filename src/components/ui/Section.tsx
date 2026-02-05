import { cn } from '@/lib/utils';
import { type HTMLAttributes } from 'react';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  variant?: 'default' | 'muted' | 'gradient';
}

export function Section({ className, variant = 'default', children, ...props }: SectionProps) {
  const variants = {
    default: '',
    muted: 'bg-slate-50 dark:bg-slate-900/50',
    gradient: 'bg-gradient-subtle dark:bg-gradient-to-b dark:from-slate-900 dark:to-background-dark',
  };

  return (
    <section
      className={cn('py-16 sm:py-20 lg:py-24', variants[variant], className)}
      {...props}
    >
      {children}
    </section>
  );
}
