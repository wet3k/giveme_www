import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { COMPANY_INFO } from '@/lib/constants';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('legal.cookies');
  return {
    title: t('title'),
    description: t('intro'),
  };
}

export default async function CookiesPage() {
  const t = await getTranslations('legal');

  return (
    <Section>
      <Container size="narrow">
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <h1>{t('cookies.title')}</h1>
          <p className="text-text-secondary dark:text-text-secondary-dark">
            {t('lastUpdated')}: January 1, 2024
          </p>

          <p className="lead">{t('cookies.intro')}</p>

          <h2>1. What Are Cookies?</h2>
          <p>
            Cookies are small text files stored on your device when you visit a website. They help websites remember your preferences, keep you logged in, and understand how you use the site.
          </p>

          <h2>2. How We Use Cookies</h2>
          <p>
            We use cookies and similar technologies to:
          </p>
          <ul>
            <li>Keep you signed in to your account</li>
            <li>Remember your preferences (language, theme)</li>
            <li>Understand how visitors use our website</li>
            <li>Improve our services based on usage patterns</li>
            <li>Protect against security threats</li>
          </ul>

          <h2>3. Types of Cookies We Use</h2>

          <h3>3.1 Strictly Necessary Cookies</h3>
          <p>
            These cookies are essential for the website to function and cannot be disabled. They do not require your consent.
          </p>
          <table>
            <thead>
              <tr>
                <th>Cookie Name</th>
                <th>Purpose</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>session_id</td>
                <td>Maintains your session while browsing</td>
                <td>Session</td>
              </tr>
              <tr>
                <td>csrf_token</td>
                <td>Security token to prevent cross-site attacks</td>
                <td>Session</td>
              </tr>
              <tr>
                <td>cookie-consent</td>
                <td>Remembers your cookie preferences</td>
                <td>1 year</td>
              </tr>
            </tbody>
          </table>

          <h3>3.2 Functional Cookies</h3>
          <p>
            These cookies enable enhanced functionality and personalization.
          </p>
          <table>
            <thead>
              <tr>
                <th>Cookie Name</th>
                <th>Purpose</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>locale</td>
                <td>Remembers your language preference</td>
                <td>1 year</td>
              </tr>
              <tr>
                <td>theme</td>
                <td>Remembers your theme preference (light/dark)</td>
                <td>1 year</td>
              </tr>
            </tbody>
          </table>

          <h3>3.3 Analytics Cookies</h3>
          <p>
            We use privacy-focused analytics to understand how visitors use our website. These cookies require your consent.
          </p>
          <table>
            <thead>
              <tr>
                <th>Service</th>
                <th>Purpose</th>
                <th>Privacy</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Plausible Analytics</td>
                <td>Anonymous website analytics</td>
                <td>EU-hosted, no personal data collected, no cookies by default</td>
              </tr>
            </tbody>
          </table>
          <p>
            <strong>Note:</strong> We use Plausible Analytics, which is privacy-focused and does not use cookies by default. It collects only anonymous aggregate data.
          </p>

          <h3>3.4 Marketing Cookies</h3>
          <p>
            We currently do not use marketing or advertising cookies. If this changes, we will update this policy and request your consent.
          </p>

          <h2>4. Third-Party Cookies</h2>
          <p>
            Some third-party services may set cookies when you interact with them on our website:
          </p>
          <ul>
            <li><strong>Payment Providers:</strong> Stripe may set cookies for fraud prevention when processing payments</li>
            <li><strong>Embedded Content:</strong> If we embed content from other services (e.g., videos), those services may set their own cookies</li>
          </ul>

          <h2>5. Managing Cookies</h2>
          <h3>5.1 Cookie Banner</h3>
          <p>
            When you first visit our website, you will see a cookie banner that allows you to:
          </p>
          <ul>
            <li>Accept all cookies</li>
            <li>Reject all non-essential cookies</li>
            <li>Customize your preferences by category</li>
          </ul>
          <p>
            You can change your preferences at any time by clicking &quot;Cookie Settings&quot; in the website footer.
          </p>

          <h3>5.2 Browser Settings</h3>
          <p>
            You can also manage cookies through your browser settings:
          </p>
          <ul>
            <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
            <li><a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
            <li><a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a></li>
            <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
          </ul>

          <h3>5.3 Do Not Track</h3>
          <p>
            We respect the Do Not Track (DNT) browser setting. When DNT is enabled, we disable analytics tracking.
          </p>

          <h2>6. Local Storage</h2>
          <p>
            In addition to cookies, we use browser local storage to store:
          </p>
          <ul>
            <li>Your theme preference (light/dark mode)</li>
            <li>Cookie consent preferences</li>
            <li>Other user interface preferences</li>
          </ul>
          <p>
            Local storage data can be cleared through your browser settings.
          </p>

          <h2>7. Updates to This Policy</h2>
          <p>
            We may update this Cookie Policy to reflect changes in our practices or for legal reasons. Significant changes will be communicated through our website.
          </p>

          <h2>8. Contact Us</h2>
          <p>
            If you have questions about our use of cookies:
          </p>
          <p>
            <strong>Email:</strong> <a href={`mailto:${COMPANY_INFO.privacy}`}>{COMPANY_INFO.privacy}</a>
          </p>
          <address className="not-italic">
            {COMPANY_INFO.name}<br />
            {COMPANY_INFO.address}
          </address>
        </div>
      </Container>
    </Section>
  );
}
