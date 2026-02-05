import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import { Eye, Lock, Shield, Sparkles } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('about');
  return {
    title: t('title'),
    description: t('subtitle'),
  };
}

export default async function AboutPage() {
  const t = await getTranslations('about');

  const values = [
    { key: 'transparency', icon: Eye },
    { key: 'privacy', icon: Lock },
    { key: 'reliability', icon: Shield },
    { key: 'simplicity', icon: Sparkles },
  ];

  const whyPolandItems = t.raw('whyPoland.items') as { title: string; description: string }[];

  return (
    <>
      {/* Hero */}
      <Section>
        <Container size="narrow">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-text-primary dark:text-text-primary-dark">
              {t('title')}
            </h1>
            <p className="mt-4 text-xl text-text-secondary dark:text-text-secondary-dark">
              {t('subtitle')}
            </p>
          </div>
        </Container>
      </Section>

      {/* Story */}
      <Section variant="muted">
        <Container size="narrow">
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-text-primary dark:text-text-primary-dark mb-4">
              {t('story.title')}
            </h2>
            <p className="text-text-secondary dark:text-text-secondary-dark text-lg leading-relaxed">
              {t('story.content')}
            </p>
          </div>
        </Container>
      </Section>

      {/* Mission */}
      <Section>
        <Container size="narrow">
          <div className="bg-gradient-to-br from-primary-blue to-primary-cyan dark:from-primary-blue-dark dark:to-primary-cyan-dark rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              {t('mission.title')}
            </h2>
            <p className="text-lg text-white/90 leading-relaxed">
              {t('mission.content')}
            </p>
          </div>
        </Container>
      </Section>

      {/* Values */}
      <Section variant="muted">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary dark:text-text-primary-dark">
              {t('values.title')}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ key, icon: Icon }) => (
              <Card key={key} className="text-center p-8">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-primary-blue/10 to-primary-cyan/10 dark:from-primary-blue-dark/20 dark:to-primary-cyan-dark/20 mb-4">
                  <Icon className="w-7 h-7 text-primary-cyan dark:text-primary-cyan-dark" />
                </div>
                <h3 className="text-lg font-semibold text-text-primary dark:text-text-primary-dark mb-2">
                  {t(`values.${key}.title`)}
                </h3>
                <p className="text-sm text-text-secondary dark:text-text-secondary-dark">
                  {t(`values.${key}.description`)}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Why Poland */}
      <Section>
        <Container size="narrow">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary dark:text-text-primary-dark">
              {t('whyPoland.title')}
            </h2>
          </div>

          <div className="space-y-6">
            {whyPolandItems.map((item) => (
              <Card key={item.title}>
                <h3 className="font-semibold text-text-primary dark:text-text-primary-dark mb-2">
                  {item.title}
                </h3>
                <p className="text-text-secondary dark:text-text-secondary-dark">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
