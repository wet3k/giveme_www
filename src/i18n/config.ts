export const locales = ['en', 'pl', 'uk'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const localeNames: Record<Locale, string> = {
  en: 'English',
  pl: 'Polski',
  uk: 'Українська',
};

export const localeFlags: Record<Locale, string> = {
  en: '🇬🇧',
  pl: '🇵🇱',
  uk: '🇺🇦',
};
