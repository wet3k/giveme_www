import { useTranslations } from 'next-intl';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { EXTERNAL_LINKS } from '@/lib/constants';

export function FinalCTA() {
  const t = useTranslations('cta');

  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-blue to-primary-cyan dark:from-primary-blue-dark dark:to-primary-cyan-dark" />

      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOCAxOC04LjA1OSAxOC0xOC04LjA1OS0xOC0xOC0xOHptMCAzMmMtNy43MzIgMC0xNC02LjI2OC0xNC0xNHM2LjI2OC0xNCAxNC0xNCAxNCA2LjI2OCAxNCAxNC02LjI2OCAxNC0xNCAxNHoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjA1Ii8+PC9nPjwvc3ZnPg==')] opacity-30" />

      <Container className="relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            {t('title')}
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-white/80">
            {t('subtitle')}
          </p>

          <div className="mt-10">
            <a href={EXTERNAL_LINKS.register}>
              <Button
                size="lg"
                className="bg-white text-primary-blue hover:bg-slate-100 dark:bg-white dark:text-primary-blue-dark"
              >
                {t('button')}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
            <p className="mt-4 text-sm text-white/70">
              {t('note')}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
