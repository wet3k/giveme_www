'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Checkbox } from '@/components/ui/Checkbox';
import { Button } from '@/components/ui/Button';

export function ContactForm() {
  const t = useTranslations('contact.form');
  const locale = useLocale();
  const localePath = `/${locale}`;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
    privacyConsent: false,
    marketingConsent: false,
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.privacyConsent) {
      return;
    }

    setStatus('loading');

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // In production, you would send this to your backend
    console.log('Form submitted:', formData);

    setStatus('success');
    setFormData({
      name: '',
      email: '',
      company: '',
      subject: '',
      message: '',
      privacyConsent: false,
      marketingConsent: false,
    });

    // Reset success message after 5 seconds
    setTimeout(() => setStatus('idle'), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  if (status === 'success') {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-text-primary dark:text-text-primary-dark mb-2">
          {t('success')}
        </h3>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <Input
          id="name"
          name="name"
          label={t('name')}
          value={formData.name}
          onChange={handleChange}
          required
          placeholder={t('placeholders.name')}
        />
        <Input
          id="email"
          name="email"
          type="email"
          label={t('email')}
          value={formData.email}
          onChange={handleChange}
          required
          placeholder={t('placeholders.email')}
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <Input
          id="company"
          name="company"
          label={t('company')}
          value={formData.company}
          onChange={handleChange}
          placeholder={t('placeholders.company')}
        />
        <Input
          id="subject"
          name="subject"
          label={t('subject')}
          value={formData.subject}
          onChange={handleChange}
          required
          placeholder={t('placeholders.subject')}
        />
      </div>

      <Textarea
        id="message"
        name="message"
        label={t('message')}
        value={formData.message}
        onChange={handleChange}
        required
        placeholder={t('placeholders.message')}
        className="min-h-[150px]"
      />

      <div className="space-y-4">
        <Checkbox
          id="privacyConsent"
          name="privacyConsent"
          checked={formData.privacyConsent}
          onChange={handleChange}
          required
          label={
            t.rich('privacyConsent', {
              link: (chunks) => (
                <Link
                  href={`${localePath}/legal/privacy`}
                  className="text-primary-cyan dark:text-primary-cyan-dark hover:underline"
                >
                  {chunks}
                </Link>
              ),
            })
          }
        />

        <Checkbox
          id="marketingConsent"
          name="marketingConsent"
          checked={formData.marketingConsent}
          onChange={handleChange}
          label={t('marketingConsent')}
        />
      </div>

      <Button type="submit" disabled={status === 'loading' || !formData.privacyConsent}>
        {status === 'loading' ? t('sending') : t('submit')}
      </Button>

      {status === 'error' && (
        <p className="text-error text-sm">{t('error')}</p>
      )}
    </form>
  );
}
