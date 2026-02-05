'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Globe } from 'lucide-react';
import { locales, localeNames, localeFlags, type Locale } from '@/i18n/config';
import { cn } from '@/lib/utils';

export function LanguageSwitcher({ className }: { className?: string }) {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const switchLocale = (newLocale: Locale) => {
    const segments = pathname.split('/').filter(Boolean);
    const hasLocale = locales.includes(segments[0] as Locale);
    const rest = hasLocale ? segments.slice(1) : segments;
    const newPath = `/${[newLocale, ...rest].join('/')}`;

    router.push(newPath);
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className={cn('relative', className)}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'flex items-center gap-2 px-3 py-2 rounded-lg',
          'text-slate-600 hover:text-primary-cyan hover:bg-slate-100',
          'dark:text-slate-300 dark:hover:text-primary-cyan-dark dark:hover:bg-slate-800',
          'transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-cyan'
        )}
        aria-label="Select language"
      >
        <Globe className="w-4 h-4" />
        <span className="text-sm font-medium">{localeFlags[locale]}</span>
        <ChevronDown className={cn('w-4 h-4 transition-transform', isOpen && 'rotate-180')} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 py-1 bg-white dark:bg-surface-dark rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 z-50">
          {locales.map((loc) => (
            <button
              key={loc}
              onClick={() => switchLocale(loc)}
              className={cn(
                'w-full flex items-center gap-3 px-4 py-2 text-left',
                'hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors',
                loc === locale && 'bg-slate-50 dark:bg-slate-800 text-primary-cyan dark:text-primary-cyan-dark'
              )}
            >
              <span>{localeFlags[loc]}</span>
              <span className="text-sm">{localeNames[loc]}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
