'use client';

import { cn } from '@/lib/utils';
import { forwardRef, type ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-cyan focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
      primary: 'bg-gradient-to-r from-primary-blue to-primary-cyan hover:from-blue-800 hover:to-cyan-700 text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 dark:from-primary-blue-dark dark:to-primary-cyan-dark',
      secondary: 'border-2 border-primary-cyan text-primary-cyan hover:bg-cyan-50 dark:hover:bg-cyan-950',
      ghost: 'text-slate-600 hover:text-primary-cyan hover:bg-slate-100 dark:text-slate-300 dark:hover:text-primary-cyan-dark dark:hover:bg-slate-800',
      outline: 'border border-slate-300 text-slate-700 hover:border-primary-cyan hover:text-primary-cyan dark:border-slate-600 dark:text-slate-300',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
