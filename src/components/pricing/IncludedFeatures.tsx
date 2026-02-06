import { useTranslations } from 'next-intl';
import { Shield, Headphones, Clock, Wifi, Code, Users, BarChart3 } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { INCLUDED_FEATURES } from '@/lib/constants';
import type { IncludedFeatureKey } from '@/lib/cms-types';

const featureIcons = {
  ddosProtection: Shield,
  support247: Headphones,
  uptimeSla: Clock,
  freeBandwidth: Wifi,
  apiAccess: Code,
  teamAccess: Users,
  monitoring: BarChart3,
} as const;

type IncludedFeaturesProps = {
  features?: IncludedFeatureKey[];
};

export function IncludedFeatures({ features }: IncludedFeaturesProps) {
  const t = useTranslations('pricing');
  const tf = useTranslations('pricing.includedFeatures');
  const featureList = features?.length ? features : INCLUDED_FEATURES;

  return (
    <Section variant="muted">
      <Container>
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary dark:text-text-primary-dark">
            {t('allPlansInclude')}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {featureList.map((featureKey) => {
            const Icon = featureIcons[featureKey];
            return (
            <div
              key={featureKey}
              className="flex items-center gap-3 p-4 bg-white dark:bg-surface-dark rounded-lg"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
                <Icon className="w-5 h-5 text-success" />
              </div>
              <span className="text-sm font-medium text-text-primary dark:text-text-primary-dark">
                {tf(featureKey)}
              </span>
            </div>
          );
          })}
        </div>
      </Container>
    </Section>
  );
}
