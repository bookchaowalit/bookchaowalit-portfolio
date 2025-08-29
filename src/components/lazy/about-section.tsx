import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { useTranslations } from 'next-intl';

export function AboutSection() {
  const t = useTranslations('home');
  
  return (
    <section className="bg-muted/50 rounded-lg p-8 space-y-6">
      <h2 className="text-3xl font-bold text-center">{t('aboutTitle')}</h2>
      <p className="text-center text-muted-foreground max-w-3xl mx-auto text-lg">
        {t('aboutDescription')}
      </p>
      <div className="text-center">
        <Button variant="outline" asChild>
          <Link href="/about">{t('learnMore')}</Link>
        </Button>
      </div>
    </section>
  );
}