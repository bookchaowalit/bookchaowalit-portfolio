import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export function HeroSection() {
  const t = useTranslations('home');
  
  return (
    <section className="text-center space-y-8 py-16">
      <div className="space-y-4">
        <div className="relative w-32 h-32 mx-auto">
          <Image
            src="/profile.webp"
            alt="Chaowalit Greepoke - Tech Generalist"
            width={128}
            height={128}
            className="rounded-full object-cover"
            priority
            placeholder="blur"
            blurDataURL="data:image/webp;base64,UklGRpIAAABXRUJQVlA4WAoAAAAQAAAADwAADwAAQUxQSAwAAAABBxAREYiImP8AAFZQOCAYAAAANAEAnQEqEAAQAAUAAMACJbACdLoAAP7+FgAA"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          {t('greeting')} <span className="text-primary">{t('name')}</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          {t('subtitle')}
        </p>
      </div>
      <div className="flex gap-4 justify-center">
        <Button asChild size="lg">
          <Link href="/projects">{t('viewWork')}</Link>
        </Button>
        <Button variant="outline" size="lg" asChild>
          <Link href="/contact">{t('getInTouch')}</Link>
        </Button>
      </div>
    </section>
  );
}