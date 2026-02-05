'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { X, Settings } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

const COOKIE_CONSENT_KEY = 'cookie-consent';

export function CookieBanner() {
  const t = useTranslations('cookies.banner');
  const tc = useTranslations('cookies.categories');
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      // Small delay to prevent flash
      setTimeout(() => setIsVisible(true), 500);
    }
  }, []);

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(prefs));
    setIsVisible(false);
  };

  const handleAcceptAll = () => {
    const allAccepted = { necessary: true, analytics: true, marketing: true };
    setPreferences(allAccepted);
    savePreferences(allAccepted);
  };

  const handleRejectAll = () => {
    const onlyNecessary = { necessary: true, analytics: false, marketing: false };
    setPreferences(onlyNecessary);
    savePreferences(onlyNecessary);
  };

  const handleSavePreferences = () => {
    savePreferences(preferences);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 p-4 md:p-6">
      <div className="max-w-4xl mx-auto bg-white dark:bg-surface-dark rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
        {/* Main Banner */}
        <div className={cn('p-4 md:p-6', showSettings && 'border-b border-slate-200 dark:border-slate-700')}>
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-text-primary dark:text-text-primary-dark mb-2">
                {t('title')}
              </h3>
              <p className="text-sm text-text-secondary dark:text-text-secondary-dark">
                {t('description')}
              </p>
            </div>
            <button
              onClick={() => setIsVisible(false)}
              className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="mt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <Button onClick={handleAcceptAll} size="sm">
              {t('acceptAll')}
            </Button>
            <Button onClick={handleRejectAll} variant="outline" size="sm">
              {t('rejectAll')}
            </Button>
            <button
              onClick={() => setShowSettings(!showSettings)}
              className={cn(
                'flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium',
                'text-slate-600 dark:text-slate-300 hover:text-primary-cyan dark:hover:text-primary-cyan-dark',
                'transition-colors'
              )}
            >
              <Settings className="w-4 h-4" />
              {t('customize')}
            </button>
          </div>
        </div>

        {/* Settings Panel */}
        {showSettings && (
          <div className="p-4 md:p-6 bg-slate-50 dark:bg-slate-800/50">
            <div className="space-y-4">
              {/* Necessary Cookies */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-text-primary dark:text-text-primary-dark">
                    {tc('necessary.title')}
                  </p>
                  <p className="text-sm text-text-secondary dark:text-text-secondary-dark">
                    {tc('necessary.description')}
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <input
                    type="checkbox"
                    checked={preferences.necessary}
                    disabled
                    className="w-5 h-5 rounded border-slate-300 text-primary-cyan focus:ring-primary-cyan cursor-not-allowed opacity-60"
                  />
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-text-primary dark:text-text-primary-dark">
                    {tc('analytics.title')}
                  </p>
                  <p className="text-sm text-text-secondary dark:text-text-secondary-dark">
                    {tc('analytics.description')}
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                    className="w-5 h-5 rounded border-slate-300 text-primary-cyan focus:ring-primary-cyan cursor-pointer"
                  />
                </div>
              </div>

              {/* Marketing Cookies */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-text-primary dark:text-text-primary-dark">
                    {tc('marketing.title')}
                  </p>
                  <p className="text-sm text-text-secondary dark:text-text-secondary-dark">
                    {tc('marketing.description')}
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <input
                    type="checkbox"
                    checked={preferences.marketing}
                    onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                    className="w-5 h-5 rounded border-slate-300 text-primary-cyan focus:ring-primary-cyan cursor-pointer"
                  />
                </div>
              </div>
            </div>

            <div className="mt-6">
              <Button onClick={handleSavePreferences} size="sm">
                {t('save')}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
