import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { Check } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { VPS_PLANS } from '@/lib/constants';
import { cn } from '@/lib/utils';

export function PricingPreview() {
  const t = useTranslations('pricing');
  const locale = useLocale();
  const localePath = `/${locale}`;

  // Show first 3 plans for preview
  const previewPlans = VPS_PLANS.slice(0, 3);

  const includedFeatures = t.raw('previewFeatures') as string[];

  return (
    <Section>
      <Container>
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary dark:text-text-primary-dark">
            {t('title')}
          </h2>
          <p className="mt-4 text-lg text-text-secondary dark:text-text-secondary-dark max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {previewPlans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                'relative bg-white dark:bg-surface-dark rounded-2xl p-6 lg:p-8',
                'border-2 transition-all duration-300',
                plan.popular
                  ? 'border-primary-cyan dark:border-primary-cyan-dark shadow-lg scale-105 z-10 pt-10 lg:pt-12'
                  : 'border-slate-200 dark:border-slate-700 hover:border-primary-cyan/50 dark:hover:border-primary-cyan-dark/50'
              )}
            >
              {plan.popular && (
                <Badge
                  variant="info"
                  className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary-blue to-primary-cyan dark:from-primary-blue-dark dark:to-primary-cyan-dark text-white border-0"
                >
                  {t('mostPopular')}
                </Badge>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-text-primary dark:text-text-primary-dark">
                  {plan.name}
                </h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-text-primary dark:text-text-primary-dark">
                    €{plan.price}
                  </span>
                  <span className="text-text-secondary dark:text-text-secondary-dark">
                    {t('perMonth')}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2 text-sm text-text-secondary dark:text-text-secondary-dark">
                  <span className="font-medium text-text-primary dark:text-text-primary-dark">{plan.vcpu}</span> vCPU
                </li>
                <li className="flex items-center gap-2 text-sm text-text-secondary dark:text-text-secondary-dark">
                  <span className="font-medium text-text-primary dark:text-text-primary-dark">{plan.ram} GB</span> RAM
                </li>
                <li className="flex items-center gap-2 text-sm text-text-secondary dark:text-text-secondary-dark">
                  <span className="font-medium text-text-primary dark:text-text-primary-dark">{plan.storage} GB</span> NVMe SSD
                </li>
                <li className="flex items-center gap-2 text-sm text-text-secondary dark:text-text-secondary-dark">
                  <span className="font-medium text-text-primary dark:text-text-primary-dark">{plan.bandwidth} TB</span> Bandwidth
                </li>
              </ul>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                <ul className="space-y-2">
                  {includedFeatures.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-text-secondary dark:text-text-secondary-dark">
                      <Check className="w-4 h-4 text-success flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <Link href={`${localePath}/pricing`}>
                  <Button
                    variant={plan.popular ? 'primary' : 'secondary'}
                    className="w-full"
                  >
                    {t('getStarted')}
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href={`${localePath}/pricing`}
            className="inline-flex items-center gap-2 text-primary-cyan dark:text-primary-cyan-dark font-medium hover:underline"
          >
            {t('compare')} →
          </Link>
          <p className="mt-2 text-sm text-text-secondary dark:text-text-secondary-dark">
            {t('vat')}
          </p>
        </div>
      </Container>
    </Section>
  );
}
