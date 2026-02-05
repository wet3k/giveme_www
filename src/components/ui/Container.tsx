import { cn } from '@/lib/utils';
import { type HTMLAttributes } from 'react';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'default' | 'wide' | 'narrow';
}

export function Container({ className, size = 'default', children, ...props }: ContainerProps) {
  const sizes = {
    default: 'max-w-6xl',
    wide: 'max-w-7xl',
    narrow: 'max-w-3xl',
  };

  return (
    <div
      className={cn('mx-auto px-4 sm:px-6 lg:px-8', sizes[size], className)}
      {...props}
    >
      {children}
    </div>
  );
}
