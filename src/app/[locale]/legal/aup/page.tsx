import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { COMPANY_INFO } from '@/lib/constants';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('legal.aup');
  return {
    title: t('title'),
    description: t('intro'),
  };
}

export default async function AUPPage() {
  const t = await getTranslations('legal');

  return (
    <Section>
      <Container size="narrow">
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <h1>{t('aup.title')}</h1>
          <p className="text-text-secondary dark:text-text-secondary-dark">
            {t('lastUpdated')}: January 1, 2024
          </p>

          <p className="lead">{t('aup.intro')}</p>

          <h2>1. Purpose</h2>
          <p>
            This Acceptable Use Policy (AUP) defines the acceptable and prohibited uses of Giveme Cloud services. All users must comply with this policy to ensure a safe and reliable environment for all customers.
          </p>

          <h2>2. Prohibited Content</h2>
          <p>You may not use our services to store, distribute, or transmit:</p>
          <ul>
            <li><strong>Illegal Content:</strong> Any content that violates Polish, EU, or applicable international law</li>
            <li><strong>Child Sexual Abuse Material (CSAM):</strong> Any content depicting child exploitation or abuse - this is strictly prohibited and will be reported to authorities immediately</li>
            <li><strong>Terrorism-Related Content:</strong> Content promoting terrorism or extremist violence</li>
            <li><strong>Hate Speech:</strong> Content promoting hatred or violence against individuals or groups</li>
            <li><strong>Malware:</strong> Viruses, trojans, ransomware, or other malicious software</li>
            <li><strong>Phishing:</strong> Fraudulent websites or emails designed to steal credentials</li>
            <li><strong>Copyright Infringement:</strong> Pirated software, media, or other copyrighted content without authorization</li>
            <li><strong>Defamatory Content:</strong> False statements harmful to others&apos; reputation</li>
          </ul>

          <h2>3. Prohibited Activities</h2>
          <p>You may not use our services to:</p>
          <ul>
            <li><strong>Launch Attacks:</strong> DDoS attacks, port scanning, or hacking attempts against any system</li>
            <li><strong>Send Spam:</strong> Unsolicited bulk email or messages</li>
            <li><strong>Mine Cryptocurrency:</strong> Without explicit written permission (high-resource usage)</li>
            <li><strong>Run Open Proxies:</strong> Without proper security measures</li>
            <li><strong>Distribute Malware:</strong> Host or distribute malicious software</li>
            <li><strong>Commit Fraud:</strong> Engage in fraudulent activities or identity theft</li>
            <li><strong>Violate Privacy:</strong> Collect personal data without consent or proper legal basis</li>
            <li><strong>Abuse Resources:</strong> Use resources in a way that impacts other customers</li>
          </ul>

          <h2>4. Network Security</h2>
          <p>You are responsible for:</p>
          <ul>
            <li>Securing your servers and applications against unauthorized access</li>
            <li>Keeping software updated with security patches</li>
            <li>Implementing proper firewalls and access controls</li>
            <li>Monitoring your services for security breaches</li>
            <li>Promptly addressing any vulnerabilities</li>
          </ul>

          <h2>5. Resource Usage</h2>
          <ul>
            <li>Do not exceed the resource limits of your plan</li>
            <li>Do not use excessive bandwidth or CPU that impacts other customers</li>
            <li>Do not create artificial load or stress tests without prior approval</li>
            <li>Contact us before running high-resource applications</li>
          </ul>

          <h2>6. Abuse Reporting</h2>
          <p>
            To report abuse of our services, contact us at:
          </p>
          <p>
            <strong>Email:</strong> <a href={`mailto:${COMPANY_INFO.abuse}`}>{COMPANY_INFO.abuse}</a>
          </p>
          <p>
            We commit to responding to abuse reports within 24 hours during business days.
          </p>

          <h2>7. Consequences of Violations</h2>
          <p>Violations of this AUP may result in:</p>
          <ol>
            <li><strong>Warning:</strong> First-time minor violations may receive a warning with time to correct</li>
            <li><strong>Service Suspension:</strong> Immediate suspension for serious violations pending investigation</li>
            <li><strong>Service Termination:</strong> Permanent termination for repeated or severe violations</li>
            <li><strong>Legal Action:</strong> Reporting to law enforcement and potential civil action for illegal activities</li>
          </ol>
          <p>
            We reserve the right to take immediate action without prior notice for severe violations that threaten our infrastructure or other customers.
          </p>

          <h2>8. CSAM Specific Policy</h2>
          <p>
            In accordance with Polish and EU law, we have zero tolerance for Child Sexual Abuse Material (CSAM):
          </p>
          <ul>
            <li>Any suspected CSAM will be immediately reported to law enforcement</li>
            <li>Services will be terminated without prior notice</li>
            <li>We cooperate with INHOPE and relevant authorities</li>
            <li>No refunds will be provided for terminated accounts</li>
          </ul>

          <h2>9. Cooperation with Authorities</h2>
          <p>
            We cooperate with law enforcement and regulatory authorities when legally required. This may include:
          </p>
          <ul>
            <li>Responding to valid legal requests for information</li>
            <li>Preserving data when required by law</li>
            <li>Reporting illegal activities to appropriate authorities</li>
          </ul>

          <h2>10. Your Responsibilities</h2>
          <p>You agree to:</p>
          <ul>
            <li>Comply with all applicable laws and regulations</li>
            <li>Monitor content and activities on your services</li>
            <li>Respond promptly to abuse complaints</li>
            <li>Implement appropriate security measures</li>
            <li>Report any security incidents to us</li>
          </ul>

          <h2>11. Changes to This Policy</h2>
          <p>
            We may update this AUP as needed to address new threats and technologies. Material changes will be communicated via email or website notice.
          </p>

          <h2>12. Contact</h2>
          <p>
            For questions about this policy or to report violations:
          </p>
          <p>
            <strong>Abuse Reports:</strong> <a href={`mailto:${COMPANY_INFO.abuse}`}>{COMPANY_INFO.abuse}</a><br />
            <strong>General Inquiries:</strong> <a href={`mailto:${COMPANY_INFO.email}`}>{COMPANY_INFO.email}</a>
          </p>
        </div>
      </Container>
    </Section>
  );
}
