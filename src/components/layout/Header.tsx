'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { Menu, X, ChevronDown, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useTheme } from '@/components/ui/ThemeProvider';
import { EXTERNAL_LINKS } from '@/lib/constants';
import { cn } from '@/lib/utils';

export function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const { resolvedTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const localePath = `/${locale}`;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const productLinks = [
    { href: `${localePath}/products/vps`, label: t('vps') },
    { href: `${localePath}/products/dedicated`, label: t('dedicated') },
    { href: `${localePath}/products/storage`, label: t('storage') },
  ];

  const navLinks = [
    { href: `${localePath}/pricing`, label: t('pricing') },
    { href: `${localePath}/data-centers`, label: t('dataCenters') },
    { href: `${localePath}/about`, label: t('about') },
  ];

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-all duration-200',
        isScrolled
          ? 'bg-white/90 dark:bg-background-dark/90 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href={localePath} className="flex-shrink-0">
            <Image
              src={resolvedTheme === 'dark' ? '/logos/logo-dark.svg' : '/logos/logo-light.svg'}
              alt="Giveme Cloud"
              width={160}
              height={40}
              className="hidden sm:block h-8 w-auto"
              priority
            />
            <Image
              src="/logos/icon.svg"
              alt="Giveme Cloud"
              width={40}
              height={40}
              className="sm:hidden h-8 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* Products Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsProductsOpen(!isProductsOpen)}
                onMouseEnter={() => setIsProductsOpen(true)}
                className={cn(
                  'flex items-center gap-1 px-3 py-2 rounded-lg font-medium',
                  'text-slate-600 hover:text-primary-cyan hover:bg-slate-100',
                  'dark:text-slate-300 dark:hover:text-primary-cyan-dark dark:hover:bg-slate-800',
                  'transition-colors duration-200'
                )}
              >
                {t('products')}
                <ChevronDown className={cn('w-4 h-4 transition-transform', isProductsOpen && 'rotate-180')} />
              </button>

              {isProductsOpen && (
                <div
                  onMouseLeave={() => setIsProductsOpen(false)}
                  className="absolute left-0 mt-1 w-56 py-2 bg-white dark:bg-surface-dark rounded-lg shadow-lg border border-slate-200 dark:border-slate-700"
                >
                  {productLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2 text-slate-600 dark:text-slate-300 hover:text-primary-cyan dark:hover:text-primary-cyan-dark hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                      onClick={() => setIsProductsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'px-3 py-2 rounded-lg font-medium',
                  'text-slate-600 hover:text-primary-cyan hover:bg-slate-100',
                  'dark:text-slate-300 dark:hover:text-primary-cyan-dark dark:hover:bg-slate-800',
                  'transition-colors duration-200'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Right Side */}
          <div className="hidden lg:flex items-center gap-3">
            <LanguageSwitcher />
            <ThemeToggle />
            <Link
              href={EXTERNAL_LINKS.login}
              className={cn(
                'px-4 py-2 rounded-lg font-medium',
                'text-slate-600 hover:text-primary-cyan hover:bg-slate-100',
                'dark:text-slate-300 dark:hover:text-primary-cyan-dark dark:hover:bg-slate-800',
                'transition-colors duration-200'
              )}
            >
              {t('login')}
            </Link>
            <Link href={EXTERNAL_LINKS.register}>
              <Button size="sm">{t('register')}</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-background-dark border-t border-slate-200 dark:border-slate-700">
          <div className="px-4 py-4 space-y-2">
            {/* Products Section */}
            <div className="space-y-1">
              <p className="px-3 py-2 text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                {t('products')}
              </p>
              {productLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="h-px bg-slate-200 dark:bg-slate-700 my-2" />

            {/* Main Navigation */}
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <div className="h-px bg-slate-200 dark:bg-slate-700 my-2" />

            {/* Language Switcher */}
            <div className="px-3 py-2">
              <LanguageSwitcher />
            </div>

            <div className="h-px bg-slate-200 dark:bg-slate-700 my-2" />

            {/* Auth Buttons */}
            <div className="flex flex-col gap-2 px-3 pt-2">
              <Link
                href={EXTERNAL_LINKS.login}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-300 hover:border-primary-cyan hover:text-primary-cyan transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('login')}
                <ExternalLink className="w-4 h-4" />
              </Link>
              <Link href={EXTERNAL_LINKS.register} onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full">
                  {t('register')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
