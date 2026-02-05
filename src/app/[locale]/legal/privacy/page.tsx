import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { COMPANY_INFO } from '@/lib/constants';
import { type Locale } from '@/i18n/config';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('legal.privacy');
  return {
    title: t('title'),
    description: t('intro'),
  };
}

export default async function PrivacyPolicyPage({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  const t = await getTranslations('legal');
  const localePath = `/${locale}`;

  return (
    <Section>
      <Container size="narrow">
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <h1>{t('privacy.title')}</h1>
          <p className="text-text-secondary dark:text-text-secondary-dark">
            {t('lastUpdated')}: January 1, 2024
          </p>

          <p className="lead">{t('privacy.intro')}</p>

          <h2>1. Data Controller</h2>
          <p>
            The data controller responsible for your personal data is:
          </p>
          <address className="not-italic">
            <strong>{COMPANY_INFO.name}</strong><br />
            {COMPANY_INFO.address}<br />
            Email: {COMPANY_INFO.privacy}<br />
            KRS: {COMPANY_INFO.krs}<br />
            NIP: {COMPANY_INFO.nip}
          </address>

          <h2>2. Categories of Personal Data</h2>
          <p>We collect and process the following categories of personal data:</p>
          <h3>2.1 Account Data</h3>
          <ul>
            <li>Name and surname</li>
            <li>Email address</li>
            <li>Password (hashed)</li>
            <li>Company name (if applicable)</li>
          </ul>

          <h3>2.2 Billing Data</h3>
          <ul>
            <li>Billing address</li>
            <li>Payment information (processed by our payment provider)</li>
            <li>VAT identification number (if applicable)</li>
            <li>Invoice history</li>
          </ul>

          <h3>2.3 Technical Data</h3>
          <ul>
            <li>IP addresses</li>
            <li>Server access logs</li>
            <li>Service usage data</li>
            <li>Device and browser information</li>
          </ul>

          <h3>2.4 Communication Data</h3>
          <ul>
            <li>Support tickets and correspondence</li>
            <li>Email communications</li>
            <li>Chat logs (if applicable)</li>
          </ul>

          <h2>3. Legal Basis for Processing</h2>
          <p>We process your personal data based on the following legal grounds under GDPR:</p>
          <ul>
            <li><strong>Contract Performance (Art. 6(1)(b)):</strong> Processing necessary for providing our services, managing your account, and fulfilling contractual obligations.</li>
            <li><strong>Legal Obligation (Art. 6(1)(c)):</strong> Processing required by law, such as maintaining accounting records and complying with tax regulations.</li>
            <li><strong>Legitimate Interests (Art. 6(1)(f)):</strong> Processing for security purposes, fraud prevention, and improving our services.</li>
            <li><strong>Consent (Art. 6(1)(a)):</strong> Processing based on your explicit consent, such as marketing communications.</li>
          </ul>

          <h2>4. Data Retention</h2>
          <p>We retain your personal data for the following periods:</p>
          <ul>
            <li><strong>Account data:</strong> Duration of your account plus 30 days after deletion request</li>
            <li><strong>Billing data:</strong> 5 years (as required by Polish accounting law)</li>
            <li><strong>Technical logs:</strong> 90 days</li>
            <li><strong>Marketing consent records:</strong> Duration of consent plus 3 years</li>
          </ul>

          <h2>5. Your Rights</h2>
          <p>Under GDPR, you have the following rights:</p>
          <ul>
            <li><strong>Right of Access (Art. 15):</strong> Request a copy of your personal data</li>
            <li><strong>Right to Rectification (Art. 16):</strong> Correct inaccurate personal data</li>
            <li><strong>Right to Erasure (Art. 17):</strong> Request deletion of your personal data</li>
            <li><strong>Right to Restrict Processing (Art. 18):</strong> Limit how we use your data</li>
            <li><strong>Right to Data Portability (Art. 20):</strong> Receive your data in a machine-readable format</li>
            <li><strong>Right to Object (Art. 21):</strong> Object to processing based on legitimate interests</li>
            <li><strong>Right to Withdraw Consent (Art. 7):</strong> Withdraw previously given consent at any time</li>
          </ul>
          <p>
            To exercise these rights, contact us at: <a href={`mailto:${COMPANY_INFO.privacy}`}>{COMPANY_INFO.privacy}</a>
          </p>

          <h2>6. Third-Party Processors</h2>
          <p>We use the following third-party processors:</p>
          <ul>
            <li><strong>Stripe:</strong> Payment processing (USA, EU-US Data Privacy Framework)</li>
            <li><strong>Plausible Analytics:</strong> Website analytics (EU-hosted, privacy-focused)</li>
            <li><strong>SendGrid:</strong> Transactional emails (USA, EU-US Data Privacy Framework)</li>
          </ul>

          <h2>7. International Transfers</h2>
          <p>
            Your data is primarily processed within the European Union. When data is transferred outside the EU/EEA, we ensure appropriate safeguards are in place, such as Standard Contractual Clauses (SCCs) or adequacy decisions.
          </p>

          <h2>8. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal data, including:
          </p>
          <ul>
            <li>Encryption in transit (TLS) and at rest (AES-256)</li>
            <li>Access controls and authentication</li>
            <li>Regular security audits</li>
            <li>Employee training on data protection</li>
          </ul>

          <h2>9. Cookies</h2>
          <p>
            For information about how we use cookies, please see our{' '}
            <Link href={`${localePath}/legal/cookies`}>Cookie Policy</Link>.
          </p>

          <h2>10. Complaints</h2>
          <p>
            If you believe your data protection rights have been violated, you have the right to lodge a complaint with the Polish Data Protection Authority (UODO):
          </p>
          <address className="not-italic">
            Urząd Ochrony Danych Osobowych<br />
            ul. Stawki 2<br />
            00-193 Warszawa<br />
            <a href="https://uodo.gov.pl" target="_blank" rel="noopener noreferrer">https://uodo.gov.pl</a>
          </address>

          <h2>11. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of significant changes via email or through our website. The current version is always available on this page.
          </p>

          <h2>12. Contact Us</h2>
          <p>
            For any questions about this Privacy Policy or our data practices, contact us at:
          </p>
          <p>
            Email: <a href={`mailto:${COMPANY_INFO.privacy}`}>{COMPANY_INFO.privacy}</a>
          </p>
        </div>
      </Container>
    </Section>
  );
}
