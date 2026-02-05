import { useTranslations } from 'next-intl';
import { Zap, Shield, Headphones, CreditCard } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';

const featureIcons = {
  performance: Zap,
  security: Shield,
  support: Headphones,
  pricing: CreditCard,
};

const featureKeys = ['performance', 'security', 'support', 'pricing'] as const;

export function Features() {
  const t = useTranslations('features');

  return (
    <Section variant="muted">
      <Container>
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary dark:text-text-primary-dark">
            {t('title')}
          </h2>
          <p className="mt-4 text-lg text-text-secondary dark:text-text-secondary-dark max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featureKeys.map((key) => {
            const Icon = featureIcons[key];
            return (
              <Card key={key} className="p-6 text-center group hover:-translate-y-1 transition-transform duration-200">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-primary-blue/10 to-primary-cyan/10 dark:from-primary-blue-dark/20 dark:to-primary-cyan-dark/20 mb-4 group-hover:scale-110 transition-transform duration-200">
                  <Icon className="w-7 h-7 text-primary-cyan dark:text-primary-cyan-dark" />
                </div>
                <h3 className="text-lg font-semibold text-text-primary dark:text-text-primary-dark mb-2">
                  {t(`${key}.title`)}
                </h3>
                <p className="text-sm text-text-secondary dark:text-text-secondary-dark">
                  {t(`${key}.description`)}
                </p>
              </Card>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
