import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { COMPANY_INFO } from '@/lib/constants';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('legal.terms');
  return {
    title: t('title'),
    description: t('intro'),
  };
}

export default async function TermsPage() {
  const t = await getTranslations('legal');

  return (
    <Section>
      <Container size="narrow">
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <h1>{t('terms.title')}</h1>
          <p className="text-text-secondary dark:text-text-secondary-dark">
            {t('lastUpdated')}: January 1, 2024
          </p>

          <p className="lead">{t('terms.intro')}</p>

          <h2>1. Definitions</h2>
          <ul>
            <li><strong>&quot;We&quot;, &quot;Us&quot;, &quot;Provider&quot;:</strong> {COMPANY_INFO.name}</li>
            <li><strong>&quot;You&quot;, &quot;Customer&quot;, &quot;User&quot;:</strong> The person or entity using our services</li>
            <li><strong>&quot;Services&quot;:</strong> Cloud hosting, VPS, dedicated servers, and related services</li>
            <li><strong>&quot;Account&quot;:</strong> Your registered account with Giveme Cloud</li>
          </ul>

          <h2>2. Service Description</h2>
          <p>
            Giveme Cloud provides cloud infrastructure services including but not limited to:
          </p>
          <ul>
            <li>Virtual Private Servers (VPS)</li>
            <li>Dedicated Servers</li>
            <li>Object Storage (S3-compatible)</li>
            <li>Related networking and support services</li>
          </ul>
          <p>
            Service specifications, availability, and performance are subject to our Service Level Agreement (SLA).
          </p>

          <h2>3. Account Registration</h2>
          <p>
            To use our services, you must:
          </p>
          <ul>
            <li>Be at least 18 years old or have legal capacity to enter contracts</li>
            <li>Provide accurate and complete registration information</li>
            <li>Maintain the security of your account credentials</li>
            <li>Promptly update any changes to your information</li>
          </ul>
          <p>
            You are responsible for all activities that occur under your account.
          </p>

          <h2>4. Pricing and Payment</h2>
          <h3>4.1 Pricing</h3>
          <ul>
            <li>Prices are displayed in EUR and exclude VAT unless otherwise stated</li>
            <li>We reserve the right to change prices with 30 days notice</li>
            <li>Price changes do not affect existing prepaid periods</li>
          </ul>

          <h3>4.2 Payment</h3>
          <ul>
            <li>Payment is due in advance for the selected billing period</li>
            <li>We accept credit cards, PayPal, and bank transfers</li>
            <li>Invoices are issued electronically and available in your account</li>
          </ul>

          <h3>4.3 Late Payment</h3>
          <ul>
            <li>Services may be suspended after 7 days of non-payment</li>
            <li>Data may be deleted after 30 days of suspension</li>
            <li>We may charge statutory interest on overdue amounts</li>
          </ul>

          <h2>5. Consumer Rights</h2>
          <p>
            If you are a consumer (individual not acting for business purposes):
          </p>
          <ul>
            <li>You have the right to withdraw from the contract within 14 days of purchase without giving any reason</li>
            <li>If you request immediate service activation, you acknowledge that you may lose the right to withdraw once the service is fully provided</li>
            <li>To exercise withdrawal, contact us at {COMPANY_INFO.email}</li>
          </ul>

          <h2>6. Acceptable Use</h2>
          <p>
            Use of our services is subject to our Acceptable Use Policy (AUP). You agree not to:
          </p>
          <ul>
            <li>Violate any applicable laws or regulations</li>
            <li>Infringe intellectual property rights</li>
            <li>Distribute malware, spam, or engage in phishing</li>
            <li>Launch attacks against other systems</li>
            <li>Host illegal content</li>
          </ul>
          <p>
            Violation of the AUP may result in immediate service termination.
          </p>

          <h2>7. Service Level Agreement</h2>
          <p>
            Our SLA provides:
          </p>
          <ul>
            <li>99.9% monthly uptime guarantee for VPS and dedicated servers</li>
            <li>Service credits for downtime exceeding the guarantee</li>
            <li>Exclusions for scheduled maintenance and force majeure</li>
          </ul>
          <p>
            Full SLA terms are available in our Service Level Agreement document.
          </p>

          <h2>8. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law:
          </p>
          <ul>
            <li>Our total liability is limited to the fees paid in the 12 months preceding the claim</li>
            <li>We are not liable for indirect, consequential, or punitive damages</li>
            <li>We are not liable for data loss - you are responsible for backups</li>
          </ul>
          <p>
            These limitations do not affect your statutory rights as a consumer.
          </p>

          <h2>9. Termination</h2>
          <h3>9.1 By Customer</h3>
          <ul>
            <li>You may cancel services at any time through your account dashboard</li>
            <li>Cancellation takes effect at the end of the current billing period</li>
            <li>No refunds for unused portions of prepaid periods (except as required by law)</li>
          </ul>

          <h3>9.2 By Provider</h3>
          <ul>
            <li>We may terminate for AUP violations with immediate effect</li>
            <li>We may terminate for non-payment after the notice period</li>
            <li>We may discontinue services with 30 days notice</li>
          </ul>

          <h3>9.3 Data After Termination</h3>
          <ul>
            <li>You have 7 days to download your data after termination</li>
            <li>After this period, data will be permanently deleted</li>
          </ul>

          <h2>10. Intellectual Property</h2>
          <ul>
            <li>You retain ownership of your data and content</li>
            <li>We retain ownership of our services, software, and documentation</li>
            <li>You grant us a limited license to host and transmit your content as necessary for service provision</li>
          </ul>

          <h2>11. Dispute Resolution</h2>
          <ul>
            <li><strong>Governing Law:</strong> These terms are governed by Polish law</li>
            <li><strong>Jurisdiction:</strong> Disputes shall be resolved by Polish courts</li>
            <li><strong>EU ODR:</strong> For EU consumers, the Online Dispute Resolution platform is available at <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr</a></li>
          </ul>

          <h2>12. Changes to Terms</h2>
          <ul>
            <li>We may modify these terms with 30 days notice</li>
            <li>Continued use after the notice period constitutes acceptance</li>
            <li>You may terminate if you disagree with changes</li>
          </ul>

          <h2>13. Miscellaneous</h2>
          <ul>
            <li><strong>Severability:</strong> If any provision is unenforceable, the remainder stays in effect</li>
            <li><strong>Entire Agreement:</strong> These terms, along with the Privacy Policy, AUP, and SLA, constitute the entire agreement</li>
            <li><strong>Assignment:</strong> You may not assign your rights without our consent</li>
          </ul>

          <h2>14. Contact</h2>
          <p>
            For questions about these terms:
          </p>
          <address className="not-italic">
            {COMPANY_INFO.name}<br />
            {COMPANY_INFO.address}<br />
            Email: <a href={`mailto:${COMPANY_INFO.email}`}>{COMPANY_INFO.email}</a>
          </address>
        </div>
      </Container>
    </Section>
  );
}
