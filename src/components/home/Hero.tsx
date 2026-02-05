import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';

export function Hero() {
  const t = useTranslations('hero');
  const locale = useLocale();
  const localePath = `/${locale}`;

  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-cyan-50 dark:from-slate-900 dark:via-background-dark dark:to-slate-900" />

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-primary-blue/5 to-primary-cyan/10 dark:from-primary-blue-dark/10 dark:to-primary-cyan-dark/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-primary-cyan/10 to-transparent dark:from-primary-cyan-dark/5 blur-3xl" />

      <Container size="wide" className="relative py-20 sm:py-28 lg:py-36">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-cyan/10 dark:bg-primary-cyan-dark/10 text-primary-cyan dark:text-primary-cyan-dark text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-cyan dark:bg-primary-cyan-dark opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-cyan dark:bg-primary-cyan-dark"></span>
            </span>
            {t('trustedBy')}
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="text-text-primary dark:text-text-primary-dark">{t('title')}</span>
            <br />
            <span className="bg-gradient-to-r from-primary-blue to-primary-cyan dark:from-primary-blue-dark dark:to-primary-cyan-dark bg-clip-text text-transparent">
              {t('titleAccent')}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg sm:text-xl text-text-secondary dark:text-text-secondary-dark max-w-2xl mx-auto">
            {t('subtitle')}
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href={`${localePath}/pricing`}>
              <Button size="lg">{t('cta')}</Button>
            </Link>
            <Link href={`${localePath}/products/vps`}>
              <Button variant="secondary" size="lg">{t('ctaSecondary')}</Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
