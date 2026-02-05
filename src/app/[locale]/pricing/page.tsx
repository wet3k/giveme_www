import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import { PricingTabs } from '@/components/pricing/PricingTabs';
import { IncludedFeatures } from '@/components/pricing/IncludedFeatures';
import { PricingFAQ } from '@/components/pricing/PricingFAQ';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('pricing');
  return {
    title: t('title'),
    description: t('subtitle'),
  };
}

export default async function PricingPage() {
  const t = await getTranslations('pricing');

  return (
    <>
      <Section>
        <Container>
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-text-primary dark:text-text-primary-dark">
              {t('title')}
            </h1>
            <p className="mt-4 text-lg text-text-secondary dark:text-text-secondary-dark max-w-2xl mx-auto">
              {t('subtitle')}
            </p>
          </div>

          <PricingTabs />
        </Container>
      </Section>

      <IncludedFeatures />
      <PricingFAQ />
    </>
  );
}
