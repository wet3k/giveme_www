import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import Link from 'next/link';
import { Database, Cloud, Lock, Globe, Zap, Archive } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { STORAGE_PLANS } from '@/lib/constants';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('products.storage');
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function StoragePage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations('products.storage');
  const tp = await getTranslations('pricing.tabs');
  const tPricing = await getTranslations('pricing');
  const localePath = `/${locale}`;

  const features = [
    { icon: Database, key: 's3' },
    { icon: Lock, key: 'encrypted' },
    { icon: Globe, key: 'cdn' },
    { icon: Zap, key: 'performance' },
    { icon: Cloud, key: 'durability' },
    { icon: Archive, key: 'versioning' },
  ] as const;

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
            {features.map(({ icon: Icon, key }) => (
              <Card key={key}>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-blue/10 to-primary-cyan/10 dark:from-primary-blue-dark/20 dark:to-primary-cyan-dark/20 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary-cyan dark:text-primary-cyan-dark" />
                </div>
                <h3 className="font-semibold text-text-primary dark:text-text-primary-dark mb-2">{t(`features.${key}.title`)}</h3>
                <p className="text-sm text-text-secondary dark:text-text-secondary-dark">{t(`features.${key}.description`)}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Pricing Table */}
      <Section>
        <Container>
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary dark:text-text-primary-dark mb-8 text-center">
            {t('plansTitle')}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {STORAGE_PLANS.map((plan, index) => (
              <div
                key={plan.name}
                className={`bg-white dark:bg-surface-dark rounded-xl p-6 border border-slate-200 dark:border-slate-700 ${index === 0 ? 'border-dashed' : ''}`}
              >
                <h3 className="font-bold text-text-primary dark:text-text-primary-dark mb-2">
                  {plan.id ? tp(`storagePlanNames.${plan.id}`) : plan.name}
                </h3>
                <div className="text-2xl font-bold text-primary-cyan dark:text-primary-cyan-dark mb-4">
                  {typeof plan.price === 'number' ? `€${plan.price}` : plan.price}
                  {typeof plan.price === 'number' && <span className="text-sm font-normal text-text-secondary">{tPricing('perMonth')}</span>}
                </div>
                <ul className="space-y-2 text-sm mb-4">
                  <li className="flex justify-between">
                    <span className="text-text-secondary dark:text-text-secondary-dark">{tp('labels.storage')}</span>
                    <span className="font-medium text-text-primary dark:text-text-primary-dark">{plan.storage}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-text-secondary dark:text-text-secondary-dark">{tp('labels.egress')}</span>
                    <span className="font-medium text-text-primary dark:text-text-primary-dark">{plan.egress}</span>
                  </li>
                </ul>
                <a href="https://billing.giveme.cloud/register">
                  <Button variant="secondary" className="w-full" size="sm">
                    {t('ctaGetStarted')}
                  </Button>
                </a>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Use Cases */}
      <Section variant="muted">
        <Container>
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary dark:text-text-primary-dark mb-8 text-center">
            {t('useCasesTitle')}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <Card key={index}>
                <h3 className="font-semibold text-text-primary dark:text-text-primary-dark mb-2">{useCase.title}</h3>
                <p className="text-sm text-text-secondary dark:text-text-secondary-dark">{useCase.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Code Example */}
      <Section>
        <Container size="narrow">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary dark:text-text-primary-dark mb-8 text-center">
            {t('easeTitle')}
          </h2>
          <div className="bg-slate-900 rounded-xl p-6 overflow-x-auto">
            <pre className="text-sm text-slate-300">
              <code>{`# Using AWS CLI
aws s3 cp myfile.txt s3://mybucket/ \\
  --endpoint-url https://s3.giveme.cloud

# Using Python boto3
import boto3

s3 = boto3.client('s3',
    endpoint_url='https://s3.giveme.cloud',
    aws_access_key_id='YOUR_ACCESS_KEY',
    aws_secret_access_key='YOUR_SECRET_KEY'
)

s3.upload_file('myfile.txt', 'mybucket', 'myfile.txt')`}</code>
            </pre>
          </div>
        </Container>
      </Section>
    </>
  );
}
