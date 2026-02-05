import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { MapPin, Server, Zap, Globe, Shield, Check } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';

export function DataCenterHighlight() {
  const t = useTranslations('datacenters');
  const locale = useLocale();
  const localePath = `/${locale}`;

  const features = [
    { key: 'tier3', icon: Server },
    { key: 'power', icon: Zap },
    { key: 'network', icon: Globe },
    { key: 'latency', icon: MapPin },
  ];

  return (
    <Section variant="muted">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map Visualization */}
          <div className="relative">
            <div className="aspect-[4/3] bg-slate-100 dark:bg-slate-800 rounded-2xl overflow-hidden relative">
              {/* Simplified Europe Map SVG */}
              <svg viewBox="0 0 400 300" className="w-full h-full">
                {/* Background */}
                <rect fill="currentColor" className="text-slate-200 dark:text-slate-700" width="400" height="300" />

                {/* Simplified Europe continent shape */}
                <path
                  d="M150 80 L200 60 L250 70 L280 90 L290 130 L270 160 L280 180 L260 200 L220 220 L180 200 L150 210 L120 180 L100 140 L120 100 Z"
                  fill="currentColor"
                  className="text-slate-300 dark:text-slate-600"
                />

                {/* Poland highlight */}
                <ellipse
                  cx="240"
                  cy="120"
                  rx="25"
                  ry="20"
                  className="fill-primary-cyan/20 dark:fill-primary-cyan-dark/20"
                />
                <ellipse
                  cx="240"
                  cy="120"
                  rx="15"
                  ry="12"
                  className="fill-primary-cyan/40 dark:fill-primary-cyan-dark/40"
                />

                {/* Warsaw dot */}
                <circle
                  cx="240"
                  cy="120"
                  r="8"
                  className="fill-primary-cyan dark:fill-primary-cyan-dark"
                />
                <circle
                  cx="240"
                  cy="120"
                  r="12"
                  fill="none"
                  strokeWidth="2"
                  className="stroke-primary-cyan dark:stroke-primary-cyan-dark animate-ping"
                  style={{ animationDuration: '2s' }}
                />

                {/* Connection lines to major cities */}
                <g className="stroke-primary-cyan/30 dark:stroke-primary-cyan-dark/30" strokeWidth="1" strokeDasharray="4 4">
                  <line x1="240" y1="120" x2="180" y2="140" /> {/* Berlin */}
                  <line x1="240" y1="120" x2="160" y2="160" /> {/* Paris */}
                  <line x1="240" y1="120" x2="140" y2="90" /> {/* London */}
                  <line x1="240" y1="120" x2="220" y2="180" /> {/* Vienna */}
                  <line x1="240" y1="120" x2="280" y2="100" /> {/* Stockholm */}
                </g>

                {/* City dots */}
                <circle cx="180" cy="140" r="4" className="fill-slate-400 dark:fill-slate-500" />
                <circle cx="160" cy="160" r="4" className="fill-slate-400 dark:fill-slate-500" />
                <circle cx="140" cy="90" r="4" className="fill-slate-400 dark:fill-slate-500" />
                <circle cx="220" cy="180" r="4" className="fill-slate-400 dark:fill-slate-500" />
                <circle cx="280" cy="100" r="4" className="fill-slate-400 dark:fill-slate-500" />

                {/* Warsaw label */}
                <text x="240" y="145" textAnchor="middle" className="fill-primary-cyan dark:fill-primary-cyan-dark text-xs font-semibold">
                  {t('poland.cityLabel')}
                </text>
              </svg>

              {/* Overlay badge */}
              <div className="absolute top-4 left-4">
                <Badge variant="success" className="flex items-center gap-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
                  </span>
                  {t('highlight.online')}
                </Badge>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary dark:text-text-primary-dark">
              {t('title')}
            </h2>
            <p className="mt-4 text-lg text-text-secondary dark:text-text-secondary-dark">
              {t('subtitle')}
            </p>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-text-primary dark:text-text-primary-dark flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary-cyan dark:text-primary-cyan-dark" />
                {t('poland.title')}
              </h3>
              <p className="mt-2 text-text-secondary dark:text-text-secondary-dark">
                {t('poland.description')}
              </p>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              {features.map(({ key, icon: Icon }) => (
                <div key={key} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary-cyan/10 dark:bg-primary-cyan-dark/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary-cyan dark:text-primary-cyan-dark" />
                  </div>
                  <span className="text-sm font-medium text-text-primary dark:text-text-primary-dark">
                    {t(`poland.features.${key}`)}
                  </span>
                </div>
              ))}
            </div>

            {/* Compliance badges */}
            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
              <div className="flex flex-wrap gap-3">
                <Badge variant="info" className="flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5" />
                  {t('highlight.euDataSovereignty')}
                </Badge>
                <Badge variant="success" className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5" />
                  {t('highlight.gdprCompliant')}
                </Badge>
              </div>
            </div>

            <div className="mt-6">
              <Link
                href={`${localePath}/data-centers`}
                className="inline-flex items-center gap-2 text-primary-cyan dark:text-primary-cyan-dark font-medium hover:underline"
              >
                {t('highlight.learnMore')} →
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
