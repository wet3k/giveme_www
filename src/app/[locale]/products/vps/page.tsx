import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import Link from 'next/link';
import { Cpu, HardDrive, Network, Monitor, Shield } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { VPS_PLANS } from '@/lib/constants';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('products.vps');
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function VPSPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations('products.vps');
  const tPricing = await getTranslations('pricing');
  const localePath = `/${locale}`;

  const features = [
    { icon: Cpu, label: t('features.cpu') },
    { icon: HardDrive, label: t('features.ram') },
    { icon: HardDrive, label: t('features.storage') },
    { icon: Network, label: t('features.network') },
    { icon: Monitor, label: t('features.os') },
    { icon: Shield, label: t('features.backup') },
  ];

  const useCases = t.raw('useCases') as { title: string; description: string }[];

  return (
    <>
      {/* Hero */}
      <Section>
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-text-primary dark:text-text-primary-dark">
              {t('title')}
            </h1>
            <p className="mt-4 text-xl text-text-secondary dark:text-text-secondary-dark">
              {t('subtitle')}
            </p>
            <p className="mt-6 text-text-secondary dark:text-text-secondary-dark">
              {t('description')}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href={`${localePath}/pricing`}>
                <Button>{t('ctaPricing')}</Button>
              </Link>
              <a href="https://billing.giveme.cloud/register">
                <Button variant="secondary">{t('ctaGetStarted')}</Button>
              </a>
            </div>
          </div>
        </Container>
      </Section>

      {/* Features Grid */}
      <Section variant="muted">
        <Container>
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary dark:text-text-primary-dark mb-8 text-center">
            {t('featuresTitle')}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(({ icon: Icon, label }, index) => (
              <Card key={index} className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-primary-blue/10 to-primary-cyan/10 dark:from-primary-blue-dark/20 dark:to-primary-cyan-dark/20 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary-cyan dark:text-primary-cyan-dark" />
                </div>
                <span className="font-medium text-text-primary dark:text-text-primary-dark">{label}</span>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Use Cases */}
      <Section>
        <Container>
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary dark:text-text-primary-dark mb-8 text-center">
            {t('useCasesTitle')}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <Card key={index}>
                <h3 className="font-semibold text-text-primary dark:text-text-primary-dark mb-2">
                  {useCase.title}
                </h3>
                <p className="text-sm text-text-secondary dark:text-text-secondary-dark">
                  {useCase.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Quick Pricing Preview */}
      <Section variant="muted">
        <Container>
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary dark:text-text-primary-dark mb-8 text-center">
            {t('plansTitle')}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {VPS_PLANS.map((plan) => (
              <div
                key={plan.name}
                className="bg-white dark:bg-surface-dark rounded-lg p-4 text-center border border-slate-200 dark:border-slate-700"
              >
                <h3 className="font-bold text-text-primary dark:text-text-primary-dark">{plan.name}</h3>
                <p className="text-2xl font-bold text-primary-cyan dark:text-primary-cyan-dark mt-2">€{plan.price}</p>
                <p className="text-xs text-text-secondary dark:text-text-secondary-dark">{tPricing('perMonth')}</p>
                <p className="text-xs text-text-secondary dark:text-text-secondary-dark mt-2">
                  {plan.vcpu} vCPU · {plan.ram}GB RAM
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href={`${localePath}/pricing`}>
              <Button>{t('viewAllPlans')}</Button>
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
