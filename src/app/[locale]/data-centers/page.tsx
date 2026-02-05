import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import { MapPin, Server, Zap, Globe, Shield, Check, Network } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('datacenters');
  return {
    title: t('title'),
    description: t('subtitle'),
  };
}

export default async function DataCentersPage() {
  const t = await getTranslations('datacenters');

  const dcFeatures = [
    { icon: Server, label: t('poland.features.tier3') },
    { icon: Zap, label: t('poland.features.power') },
    { icon: Network, label: t('poland.features.network') },
    { icon: Globe, label: t('poland.features.latency') },
  ];

  const networkPeers = [
    'Telia', 'Cogent', 'Level 3', 'GTT', 'DE-CIX', 'AMS-IX', 'PLIX'
  ];

  const specifications = t.raw('specifications') as { label: string; value: string }[];

  return (
    <>
      {/* Hero */}
      <Section>
        <Container>
          <div className="max-w-3xl">
            <Badge variant="success" className="mb-4">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
              </span>
              {t('status.operational')}
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-text-primary dark:text-text-primary-dark">
              {t('title')}
            </h1>
            <p className="mt-4 text-xl text-text-secondary dark:text-text-secondary-dark">
              {t('subtitle')}
            </p>
          </div>
        </Container>
      </Section>

      {/* Warsaw Data Center */}
      <Section variant="muted">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Map */}
            <div className="bg-white dark:bg-surface-dark rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
              <div className="aspect-video bg-slate-100 dark:bg-slate-800 rounded-xl overflow-hidden relative">
                <svg viewBox="0 0 400 250" className="w-full h-full">
                  <rect fill="currentColor" className="text-slate-200 dark:text-slate-700" width="400" height="250" />
                  <path
                    d="M150 60 L200 40 L250 50 L280 70 L290 110 L270 140 L280 160 L260 180 L220 200 L180 180 L150 190 L120 160 L100 120 L120 80 Z"
                    fill="currentColor"
                    className="text-slate-300 dark:text-slate-600"
                  />
                  <ellipse cx="240" cy="100" rx="30" ry="25" className="fill-primary-cyan/20 dark:fill-primary-cyan-dark/20" />
                  <circle cx="240" cy="100" r="10" className="fill-primary-cyan dark:fill-primary-cyan-dark" />
                  <text x="240" y="140" textAnchor="middle" className="fill-primary-cyan dark:fill-primary-cyan-dark text-sm font-bold">
                    {t('poland.cityLabel')}
                  </text>

                  {/* Connection lines */}
                  <g className="stroke-primary-cyan/30 dark:stroke-primary-cyan-dark/30" strokeWidth="1" strokeDasharray="4 4">
                    <line x1="240" y1="100" x2="160" y2="120" />
                    <line x1="240" y1="100" x2="140" y2="140" />
                    <line x1="240" y1="100" x2="120" y2="70" />
                    <line x1="240" y1="100" x2="200" y2="160" />
                    <line x1="240" y1="100" x2="300" y2="80" />
                  </g>

                  <circle cx="160" cy="120" r="5" className="fill-slate-400" />
                  <circle cx="140" cy="140" r="5" className="fill-slate-400" />
                  <circle cx="120" cy="70" r="5" className="fill-slate-400" />
                  <circle cx="200" cy="160" r="5" className="fill-slate-400" />
                  <circle cx="300" cy="80" r="5" className="fill-slate-400" />
                </svg>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                {dcFeatures.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary-cyan/10 dark:bg-primary-cyan-dark/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary-cyan dark:text-primary-cyan-dark" />
                    </div>
                    <span className="text-sm font-medium text-text-primary dark:text-text-primary-dark">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Specs */}
            <div>
              <h2 className="text-2xl font-bold text-text-primary dark:text-text-primary-dark flex items-center gap-2 mb-6">
                <MapPin className="w-6 h-6 text-primary-cyan dark:text-primary-cyan-dark" />
                {t('poland.title')}
              </h2>
              <p className="text-text-secondary dark:text-text-secondary-dark mb-8">
                {t('poland.description')}
              </p>

              <div className="space-y-3">
                {specifications.map(({ label, value }) => (
                  <div key={label} className="flex justify-between py-3 border-b border-slate-200 dark:border-slate-700 last:border-0">
                    <span className="text-text-secondary dark:text-text-secondary-dark">{label}</span>
                    <span className="font-medium text-text-primary dark:text-text-primary-dark">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Network */}
      <Section>
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary dark:text-text-primary-dark">
              {t('network.title')}
            </h2>
            <p className="mt-4 text-text-secondary dark:text-text-secondary-dark">
              {t('network.bandwidth')} · {t('network.peering')}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="text-center">
              <div className="text-3xl font-bold text-primary-cyan dark:text-primary-cyan-dark">10+ Gbps</div>
              <p className="text-sm text-text-secondary dark:text-text-secondary-dark mt-1">{t('network.stats.uplinkCapacity')}</p>
            </Card>
            <Card className="text-center">
              <div className="text-3xl font-bold text-primary-cyan dark:text-primary-cyan-dark">&lt;5ms</div>
              <p className="text-sm text-text-secondary dark:text-text-secondary-dark mt-1">{t('network.stats.latencyFrankfurt')}</p>
            </Card>
            <Card className="text-center">
              <div className="text-3xl font-bold text-primary-cyan dark:text-primary-cyan-dark">&lt;10ms</div>
              <p className="text-sm text-text-secondary dark:text-text-secondary-dark mt-1">{t('network.stats.latencyAmsterdam')}</p>
            </Card>
            <Card className="text-center">
              <div className="text-3xl font-bold text-primary-cyan dark:text-primary-cyan-dark">7+</div>
              <p className="text-sm text-text-secondary dark:text-text-secondary-dark mt-1">{t('network.stats.tier1Carriers')}</p>
            </Card>
          </div>

          <div className="text-center">
            <h3 className="text-lg font-semibold text-text-primary dark:text-text-primary-dark mb-4">
              {t('network.partners')}
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {networkPeers.map((peer) => (
                <span key={peer} className="px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-sm text-text-secondary dark:text-text-secondary-dark">
                  {peer}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Compliance */}
      <Section variant="muted">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary dark:text-text-primary-dark mb-4">
              {t('compliance.title')}
            </h2>
            <p className="text-text-secondary dark:text-text-secondary-dark mb-8">
              {t('compliance.description')}
            </p>

            <div className="grid sm:grid-cols-3 gap-6">
              <Card className="text-center">
                <Shield className="w-10 h-10 text-primary-cyan dark:text-primary-cyan-dark mx-auto mb-3" />
                <h3 className="font-semibold text-text-primary dark:text-text-primary-dark">{t('compliance.cards.gdpr.title')}</h3>
                <p className="text-sm text-text-secondary dark:text-text-secondary-dark mt-1">
                  {t('compliance.cards.gdpr.description')}
                </p>
              </Card>
              <Card className="text-center">
                <Globe className="w-10 h-10 text-primary-cyan dark:text-primary-cyan-dark mx-auto mb-3" />
                <h3 className="font-semibold text-text-primary dark:text-text-primary-dark">{t('compliance.cards.sovereignty.title')}</h3>
                <p className="text-sm text-text-secondary dark:text-text-secondary-dark mt-1">
                  {t('compliance.cards.sovereignty.description')}
                </p>
              </Card>
              <Card className="text-center">
                <Check className="w-10 h-10 text-primary-cyan dark:text-primary-cyan-dark mx-auto mb-3" />
                <h3 className="font-semibold text-text-primary dark:text-text-primary-dark">{t('compliance.cards.iso27001.title')}</h3>
                <p className="text-sm text-text-secondary dark:text-text-secondary-dark mt-1">
                  {t('compliance.cards.iso27001.description')}
                </p>
              </Card>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
