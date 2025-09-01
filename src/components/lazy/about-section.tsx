"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import { useTranslations } from 'next-intl';
import { MixedTypographyTitle } from "@/components/ui/mixed-typography";
import { NotebookPaper, SketchyFrame } from "@/components/ui/notebook-elements";

export function AboutSection() {
  const t = useTranslations('home');
  
  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="space-y-8"
    >
      <div className="text-center">
        <MixedTypographyTitle 
          words={[
            { text: "About", style: "cursive", color: "text-blue-700", size: "lg" },
            { text: "Me", style: "bubble", color: "text-green-600", size: "lg" },
            { text: "👨‍💻", style: "block", size: "md" }
          ]}
          className="mb-6"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9, rotate: -1 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <SketchyFrame variant="dashed">
          <NotebookPaper className="p-8">
            <div className="space-y-6">
              <div className="flex flex-wrap justify-center gap-3 mb-6">
                <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                  🇹🇭 Bangkok Based
                </Badge>
                <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                  💼 3+ Years Experience
                </Badge>
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  🚀 Tech Generalist
                </Badge>
              </div>
              
              <p className="text-center text-slate-700 max-w-3xl mx-auto text-lg font-[family-name:var(--font-doodle)] leading-relaxed">
                {t('aboutDescription')}
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="space-y-1">
                  <div className="text-2xl">🤖</div>
                  <p className="text-sm font-[family-name:var(--font-comic)] font-bold text-slate-700">AI Integration</p>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl">📊</div>
                  <p className="text-sm font-[family-name:var(--font-comic)] font-bold text-slate-700">Data Analytics</p>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl">🌐</div>
                  <p className="text-sm font-[family-name:var(--font-comic)] font-bold text-slate-700">Full-Stack Dev</p>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl">📈</div>
                  <p className="text-sm font-[family-name:var(--font-comic)] font-bold text-slate-700">SEO & Growth</p>
                </div>
              </div>
              
              <div className="text-center pt-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" asChild>
                    <Link href="/about">{t('learnMore')}</Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </NotebookPaper>
        </SketchyFrame>
      </motion.div>
    </motion.section>
  );
}