'use client';

import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';
import { forwardRef, type InputHTMLAttributes } from 'react';

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string | React.ReactNode;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, id, ...props }, ref) => {
    return (
      <div className="flex items-start gap-3">
        <div className="relative flex items-center justify-center">
          <input
            ref={ref}
            type="checkbox"
            id={id}
            className={cn(
              'peer h-5 w-5 cursor-pointer appearance-none rounded border border-slate-300 dark:border-slate-600',
              'bg-white dark:bg-slate-800 transition-colors duration-200',
              'checked:bg-primary-cyan checked:border-primary-cyan dark:checked:bg-primary-cyan-dark',
              'focus:outline-none focus:ring-2 focus:ring-primary-cyan focus:ring-offset-2',
              className
            )}
            {...props}
          />
          <Check className="absolute h-3.5 w-3.5 text-white pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity" />
        </div>
        {label && (
          <label
            htmlFor={id}
            className="text-sm text-text-secondary dark:text-text-secondary-dark cursor-pointer select-none"
          >
            {label}
          </label>
        )}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export { Checkbox };
