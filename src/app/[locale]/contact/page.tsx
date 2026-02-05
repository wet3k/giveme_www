import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import { Mail, Headphones, MapPin, Clock } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { ContactForm } from '@/components/contact/ContactForm';
import { COMPANY_INFO } from '@/lib/constants';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('contact');
  return {
    title: t('title'),
    description: t('subtitle'),
  };
}

export default async function ContactPage() {
  const t = await getTranslations('contact');

  const contactInfo = [
    { icon: Mail, label: t('info.email'), value: COMPANY_INFO.email },
    { icon: Headphones, label: t('info.support'), value: COMPANY_INFO.support },
    { icon: MapPin, label: t('info.address'), value: COMPANY_INFO.address },
    { icon: Clock, label: t('info.hours'), value: t('info.hoursValue') },
  ];

  return (
    <>
      <Section>
        <Container>
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-text-primary dark:text-text-primary-dark">
              {t('title')}
            </h1>
            <p className="mt-4 text-xl text-text-secondary dark:text-text-secondary-dark">
              {t('subtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="p-6 md:p-8">
                <ContactForm />
              </Card>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-text-primary dark:text-text-primary-dark">
                {t('info.title')}
              </h2>

              {contactInfo.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary-cyan/10 dark:bg-primary-cyan-dark/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary-cyan dark:text-primary-cyan-dark" />
                  </div>
                  <div>
                    <p className="text-sm text-text-secondary dark:text-text-secondary-dark">{label}</p>
                    <p className="font-medium text-text-primary dark:text-text-primary-dark">{value}</p>
                  </div>
                </div>
              ))}

              {/* Company Legal Info */}
              <div className="pt-6 border-t border-slate-200 dark:border-slate-700">
                <h3 className="text-sm font-semibold text-text-primary dark:text-text-primary-dark mb-3">
                  {t('companyInfo.title')}
                </h3>
                <div className="text-sm text-text-secondary dark:text-text-secondary-dark space-y-1">
                  <p>{COMPANY_INFO.name}</p>
                  <p>KRS: {COMPANY_INFO.krs}</p>
                  <p>NIP: {COMPANY_INFO.nip}</p>
                  <p>REGON: {COMPANY_INFO.regon}</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
