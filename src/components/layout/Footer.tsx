import Link from 'next/link';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { Heart, ExternalLink } from 'lucide-react';
import { COMPANY_INFO, EXTERNAL_LINKS } from '@/lib/constants';
import { Container } from '@/components/ui/Container';

export function Footer() {
  const t = useTranslations();
  const locale = useLocale();
  const localePath = `/${locale}`;

  const productLinks = [
    { href: `${localePath}/products/vps`, label: t('nav.vps') },
    { href: `${localePath}/products/dedicated`, label: t('nav.dedicated') },
    { href: `${localePath}/products/storage`, label: t('nav.storage') },
    { href: `${localePath}/pricing`, label: t('nav.pricing') },
  ];

  const companyLinks = [
    { href: `${localePath}/about`, label: t('nav.about') },
    { href: `${localePath}/data-centers`, label: t('nav.dataCenters') },
    { href: `${localePath}/contact`, label: t('nav.contact') },
    { href: EXTERNAL_LINKS.status, label: t('nav.status'), external: true },
  ];

  const legalLinks = [
    { href: `${localePath}/legal/terms`, label: t('footer.terms') },
    { href: `${localePath}/legal/privacy`, label: t('footer.privacy') },
    { href: `${localePath}/legal/aup`, label: t('footer.aup') },
    { href: `${localePath}/legal/sla`, label: t('footer.sla') },
    { href: `${localePath}/legal/cookies`, label: t('footer.cookies') },
  ];

  const supportLinks = [
    { href: EXTERNAL_LINKS.docs, label: t('nav.docs'), external: true },
    { href: `${localePath}/contact`, label: t('nav.contact') },
    { href: `mailto:${COMPANY_INFO.support}`, label: COMPANY_INFO.support },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-slate-300">
      <Container size="wide" className="py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link href={localePath} className="inline-block mb-4">
              <Image
                src="/logos/logo-dark.svg"
                alt="Giveme Cloud"
                width={140}
                height={35}
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-sm text-slate-400 mb-4 max-w-xs">
              {t('footer.description')}
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-white mb-4">{t('footer.products')}</h3>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-primary-cyan-dark transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white mb-4">{t('footer.company')}</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-primary-cyan-dark transition-colors"
                    >
                      {link.label}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-primary-cyan-dark transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-white mb-4">{t('footer.legal')}</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-primary-cyan-dark transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-white mb-4">{t('footer.support')}</h3>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link.href}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-primary-cyan-dark transition-colors"
                    >
                      {link.label}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-primary-cyan-dark transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Company Legal Info - Required by Polish Law */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-xs text-slate-500 space-y-1">
              <p className="font-medium text-slate-400">{COMPANY_INFO.name}</p>
              <p>{COMPANY_INFO.address}</p>
              <p>KRS: {COMPANY_INFO.krs} | NIP: {COMPANY_INFO.nip} | REGON: {COMPANY_INFO.regon}</p>
            </div>
            <div className="text-xs text-slate-500 md:text-right">
              <p>{COMPANY_INFO.email}</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            &copy; {currentYear} {COMPANY_INFO.name}. {t('footer.allRights')}
          </p>
          <p className="text-sm text-slate-500 flex items-center gap-1">
            {t('footer.madeWith')} <Heart className="w-4 h-4 text-red-500 fill-current" /> {t('footer.inPoland')}
          </p>
        </div>
      </Container>
    </footer>
  );
}
