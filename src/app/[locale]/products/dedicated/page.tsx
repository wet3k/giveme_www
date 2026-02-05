import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import Link from 'next/link';
import { Server, Cpu, HardDrive, Network, Shield, Wrench } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { DEDICATED_SERVERS } from '@/lib/constants';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('products.dedicated');
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function DedicatedPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations('products.dedicated');
  const tPricing = await getTranslations('pricing');
  const localePath = `/${locale}`;

  const features = [
    { icon: Server, key: 'bareMetal' },
    { icon: Cpu, key: 'cpu' },
    { icon: HardDrive, key: 'storage' },
    { icon: Network, key: 'bandwidth' },
    { icon: Shield, key: 'ddos' },
    { icon: Wrench, key: 'root' },
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
              <a href="mailto:hello@giveme.cloud">
                <Button variant="secondary">{t('ctaContactSales')}</Button>
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

      {/* Server Configurations */}
      <Section>
        <Container>
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary dark:text-text-primary-dark mb-8 text-center">
            {t('configurationsTitle')}
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-slate-200 dark:border-slate-700">
                  <th className="text-left py-4 px-4 font-semibold text-text-primary dark:text-text-primary-dark">{t('table.model')}</th>
                  <th className="text-left py-4 px-4 font-semibold text-text-primary dark:text-text-primary-dark">{t('table.cpu')}</th>
                  <th className="text-left py-4 px-4 font-semibold text-text-primary dark:text-text-primary-dark">{t('table.cores')}</th>
                  <th className="text-left py-4 px-4 font-semibold text-text-primary dark:text-text-primary-dark">{t('table.ram')}</th>
                  <th className="text-left py-4 px-4 font-semibold text-text-primary dark:text-text-primary-dark">{t('table.storage')}</th>
                  <th className="text-left py-4 px-4 font-semibold text-text-primary dark:text-text-primary-dark">{t('table.price')}</th>
                  <th className="py-4 px-4"></th>
                </tr>
              </thead>
              <tbody>
                {DEDICATED_SERVERS.map((server) => (
                  <tr key={server.name} className="border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="py-4 px-4 font-medium text-text-primary dark:text-text-primary-dark">{server.name}</td>
                    <td className="py-4 px-4 text-text-secondary dark:text-text-secondary-dark">{server.cpu}</td>
                    <td className="py-4 px-4 text-text-secondary dark:text-text-secondary-dark">{server.cores}</td>
                    <td className="py-4 px-4 text-text-secondary dark:text-text-secondary-dark">{server.ram} GB</td>
                    <td className="py-4 px-4 text-text-secondary dark:text-text-secondary-dark">{server.storage}</td>
                    <td className="py-4 px-4 font-bold text-primary-cyan dark:text-primary-cyan-dark">€{server.price}{tPricing('perMonth')}</td>
                    <td className="py-4 px-4">
                      <a href="https://billing.giveme.cloud/register">
                        <Button size="sm">{t('table.order')}</Button>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-center text-text-secondary dark:text-text-secondary-dark">
            {t.rich('customConfig', {
              link: (chunks) => (
                <a href="mailto:hello@giveme.cloud" className="text-primary-cyan dark:text-primary-cyan-dark hover:underline">
                  {chunks}
                </a>
              ),
            })}
          </p>
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
    </>
  );
}
