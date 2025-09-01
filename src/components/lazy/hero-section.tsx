"use client";

import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { useTranslations } from 'next-intl';
import { HeroTypingText } from "@/components/ui/hero-typing-text";
import { MixedTypographyTitle } from "@/components/ui/mixed-typography";
import Image from 'next/image';
import { motion } from 'framer-motion';

export function HeroSection() {
  const t = useTranslations('home');
  
  return (
    <section className="text-center space-y-8 py-16">
      <motion.div 
        className="space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div 
          className="relative w-32 h-32 mx-auto"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.1
          }}
        >
          <Image
            src="/profile.webp"
            alt={t('heroAlt')}
            width={128}
            height={128}
            className="rounded-full object-cover"
            priority
            placeholder="blur"
            blurDataURL="data:image/webp;base64,UklGRpIAAABXRUJQVlA4WAoAAAAQAAAADwAADwAAQUxQSAwAAAABBxAREYiImP8AAFZQOCAYAAAANAEAnQEqEAAQAAUAAMACJbACdLoAAP7+FgAA"
          />
        </motion.div>
        
        <div className="relative">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight font-[family-name:var(--font-script)]">
            <HeroTypingText 
              greeting={t('greeting')}
              name={t('name')}
              delay={800}
              speed={80}
            />
          </h1>
        </div>
        
        <div className="relative space-y-6">
          <div>
            <MixedTypographyTitle 
              words={[
                { text: t('heroWord1'), style: "block", color: "text-primary", size: "lg" },
                { text: t('heroWord2'), style: "cursive", color: "text-secondary", size: "lg" },
                { text: t('heroWord3'), style: "outlined", size: "md" },
                { text: t('heroWord4'), style: "block", color: "text-green-700", size: "lg" },
                { text: t('heroWord5'), style: "shaded", color: "text-accent", size: "lg" }
              ]}
              className="mb-4"
            />
          </div>
          
          <div className="flex justify-center">
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg max-w-md">
              <p className="text-slate-700 text-center leading-relaxed" dangerouslySetInnerHTML={{ __html: t.raw('heroSubtitle') }} />
            </div>
          </div>
          
        </div>
      </motion.div>
      
      <div className="flex gap-4 justify-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button asChild size="lg">
            <Link href="/projects">{t('viewWork')}</Link>
          </Button>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button variant="outline" size="lg" asChild>
            <Link href="/contact">{t('getInTouch')}</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}