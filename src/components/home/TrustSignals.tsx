'use client';

import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

const stats = [
  { key: 'uptime', value: '99.9%' },
  { key: 'support', value: '24/7' },
  { key: 'datacenters', value: '1' },
  { key: 'customers', value: '500+' },
];

export function TrustSignals() {
  const t = useTranslations('trust');

  return (
    <Section>
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {stats.map(({ key, value }) => (
            <div key={key} className="text-center">
              <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary-blue to-primary-cyan dark:from-primary-blue-dark dark:to-primary-cyan-dark bg-clip-text text-transparent">
                {value}
              </div>
              <div className="mt-2 text-sm sm:text-base text-text-secondary dark:text-text-secondary-dark">
                {t(key)}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
