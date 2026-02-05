import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { COMPANY_INFO } from '@/lib/constants';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('legal.sla');
  return {
    title: t('title'),
    description: t('intro'),
  };
}

export default async function SLAPage() {
  const t = await getTranslations('legal');

  return (
    <Section>
      <Container size="narrow">
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <h1>{t('sla.title')}</h1>
          <p className="text-text-secondary dark:text-text-secondary-dark">
            {t('lastUpdated')}: January 1, 2024
          </p>

          <p className="lead">{t('sla.intro')}</p>

          <h2>1. Service Availability Commitment</h2>
          <h3>1.1 Uptime Guarantee</h3>
          <table>
            <thead>
              <tr>
                <th>Service Type</th>
                <th>Monthly Uptime</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Cloud VPS</td>
                <td>99.9%</td>
              </tr>
              <tr>
                <td>Dedicated CPU VPS</td>
                <td>99.9%</td>
              </tr>
              <tr>
                <td>Dedicated Servers</td>
                <td>99.9%</td>
              </tr>
              <tr>
                <td>Object Storage</td>
                <td>99.9%</td>
              </tr>
              <tr>
                <td>Network Connectivity</td>
                <td>99.99%</td>
              </tr>
            </tbody>
          </table>

          <h3>1.2 Monthly Uptime Calculation</h3>
          <p>
            Monthly Uptime Percentage = ((Total Minutes in Month - Downtime Minutes) / Total Minutes in Month) × 100
          </p>

          <h2>2. Definitions</h2>
          <ul>
            <li><strong>Downtime:</strong> Period when the service is unavailable or materially degraded, as measured by our monitoring systems</li>
            <li><strong>Available:</strong> Service responds to health checks and processes requests normally</li>
            <li><strong>Scheduled Maintenance:</strong> Planned maintenance communicated in advance</li>
            <li><strong>Emergency Maintenance:</strong> Unplanned maintenance required for security or stability</li>
          </ul>

          <h2>3. Service Credits</h2>
          <h3>3.1 Credit Schedule</h3>
          <table>
            <thead>
              <tr>
                <th>Monthly Uptime</th>
                <th>Service Credit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>99.0% - 99.9%</td>
                <td>10% of monthly fee</td>
              </tr>
              <tr>
                <td>95.0% - 99.0%</td>
                <td>25% of monthly fee</td>
              </tr>
              <tr>
                <td>90.0% - 95.0%</td>
                <td>50% of monthly fee</td>
              </tr>
              <tr>
                <td>Below 90.0%</td>
                <td>100% of monthly fee</td>
              </tr>
            </tbody>
          </table>

          <h3>3.2 Credit Limits</h3>
          <ul>
            <li>Maximum credit per month: 100% of affected service&apos;s monthly fee</li>
            <li>Credits apply to future invoices only (no cash refunds)</li>
            <li>Credits do not carry over beyond 12 months</li>
          </ul>

          <h3>3.3 Claiming Credits</h3>
          <p>To claim a service credit:</p>
          <ol>
            <li>Submit a request within 30 days of the incident</li>
            <li>Include the affected service(s) and dates</li>
            <li>Provide your own logs or evidence if available</li>
            <li>Email your claim to: <a href={`mailto:${COMPANY_INFO.support}`}>{COMPANY_INFO.support}</a></li>
          </ol>
          <p>
            We will respond within 5 business days with our determination.
          </p>

          <h2>4. Exclusions</h2>
          <p>The following are not considered downtime for SLA purposes:</p>
          <ul>
            <li><strong>Scheduled Maintenance:</strong> Maintenance notified at least 48 hours in advance</li>
            <li><strong>Emergency Maintenance:</strong> Urgent maintenance required for security or stability</li>
            <li><strong>Customer Actions:</strong> Downtime caused by customer configuration, applications, or requests</li>
            <li><strong>Force Majeure:</strong> Events beyond our control (natural disasters, war, government actions)</li>
            <li><strong>Third-Party Issues:</strong> Issues with third-party services or upstream providers</li>
            <li><strong>DDoS Attacks:</strong> Service degradation during attack mitigation</li>
            <li><strong>Abuse/Violation:</strong> Suspension due to Terms of Service or AUP violations</li>
            <li><strong>Beta Services:</strong> Services explicitly marked as beta or preview</li>
          </ul>

          <h2>5. Maintenance</h2>
          <h3>5.1 Scheduled Maintenance</h3>
          <ul>
            <li>Standard maintenance window: Tuesdays and Thursdays, 02:00-06:00 CET</li>
            <li>Notification: At least 48 hours in advance via email</li>
            <li>Expected duration included in notification</li>
            <li>Emergency scheduling available with 24-hour notice</li>
          </ul>

          <h3>5.2 Emergency Maintenance</h3>
          <ul>
            <li>May be performed without advance notice when required for security or stability</li>
            <li>Post-incident notification within 24 hours</li>
            <li>Root cause analysis provided for significant incidents</li>
          </ul>

          <h2>6. Support Response Times</h2>
          <table>
            <thead>
              <tr>
                <th>Priority</th>
                <th>Definition</th>
                <th>Response Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Critical</td>
                <td>Service completely unavailable</td>
                <td>30 minutes</td>
              </tr>
              <tr>
                <td>High</td>
                <td>Service significantly degraded</td>
                <td>2 hours</td>
              </tr>
              <tr>
                <td>Medium</td>
                <td>Partial functionality affected</td>
                <td>8 hours</td>
              </tr>
              <tr>
                <td>Low</td>
                <td>General questions, minor issues</td>
                <td>24 hours</td>
              </tr>
            </tbody>
          </table>
          <p>
            Response times are during business hours (24/7 for Critical and High priority).
          </p>

          <h2>7. Monitoring</h2>
          <p>We monitor service availability using:</p>
          <ul>
            <li>External monitoring from multiple geographic locations</li>
            <li>Internal infrastructure monitoring</li>
            <li>Automated alerting systems</li>
            <li>24/7 operations team</li>
          </ul>
          <p>
            Service status is available at: <a href="https://status.giveme.cloud" target="_blank" rel="noopener noreferrer">status.giveme.cloud</a>
          </p>

          <h2>8. Data Durability (Object Storage)</h2>
          <p>
            For Object Storage services, we provide:
          </p>
          <ul>
            <li><strong>Durability:</strong> 99.999999999% (11 nines) annual durability</li>
            <li><strong>Replication:</strong> Data replicated across multiple storage nodes</li>
            <li><strong>Integrity:</strong> Checksums verified on all read/write operations</li>
          </ul>

          <h2>9. Customer Responsibilities</h2>
          <p>To benefit from this SLA, you must:</p>
          <ul>
            <li>Maintain current contact information for notifications</li>
            <li>Implement appropriate backups for your data</li>
            <li>Report issues promptly through proper channels</li>
            <li>Cooperate with troubleshooting efforts</li>
          </ul>

          <h2>10. Changes to SLA</h2>
          <p>
            We may modify this SLA with 30 days notice. Changes will not reduce commitments for active service terms.
          </p>

          <h2>11. Contact</h2>
          <p>
            For SLA-related inquiries or to report an incident:
          </p>
          <p>
            <strong>Support:</strong> <a href={`mailto:${COMPANY_INFO.support}`}>{COMPANY_INFO.support}</a><br />
            <strong>Status Page:</strong> <a href="https://status.giveme.cloud" target="_blank" rel="noopener noreferrer">status.giveme.cloud</a>
          </p>
        </div>
      </Container>
    </Section>
  );
}
