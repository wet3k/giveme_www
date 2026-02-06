import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import { PricingTabs } from '@/components/pricing/PricingTabs';
import { IncludedFeatures } from '@/components/pricing/IncludedFeatures';
import { PricingFAQ } from '@/components/pricing/PricingFAQ';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { getPricingContent } from '@/lib/cms';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('pricing');
  return {
    title: t('title'),
    description: t('subtitle'),
  };
}

export default async function PricingPage({ params }: { params: { locale: string } }) {
  const t = await getTranslations('pricing');
  const pricingContent = await getPricingContent(params.locale);
  const title = pricingContent.title ?? t('title');
  const subtitle = pricingContent.subtitle ?? t('subtitle');
  const vatNote = pricingContent.vatNote ?? t('vat');

  return (
    <>
      <Section>
        <Container>
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-text-primary dark:text-text-primary-dark">
              {title}
            </h1>
            <p className="mt-4 text-lg text-text-secondary dark:text-text-secondary-dark max-w-2xl mx-auto">
              {subtitle}
            </p>
          </div>

          <PricingTabs data={pricingContent} />
        </Container>
      </Section>

      <IncludedFeatures features={pricingContent.includedFeatures} />
      <PricingFAQ title={pricingContent.faqTitle} items={pricingContent.faqItems} />

      <Section>
        <Container>
          <p className="text-center text-sm text-text-secondary dark:text-text-secondary-dark">
            {vatNote}
          </p>
        </Container>
      </Section>
    </>
  );
}
