"use client";

import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { NotebookSectionHeader, StudyGuideBox } from "@/components/ui/mixed-typography";
import { NotebookPaper } from "@/components/ui/notebook-elements";
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export function SkillsSection() {
  const t = useTranslations('home');
  
  return (
    <ScrollReveal>
      <NotebookPaper className="py-8">
        <NotebookSectionHeader 
          title={t('skillsTitle')} 
          subtitle="My current toolkit & technologies I work with"
        />
        <div className="space-y-6">
          <StudyGuideBox 
            title="Frontend & Framework Skills" 
            type="tip" 
            className="mb-4"
          >
            <div className="flex flex-wrap gap-2">
              {["React", "Next.js", "TypeScript"].map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 200,
                    damping: 15
                  }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <Badge 
                    variant="secondary" 
                    className="text-xs py-1 px-2 font-[family-name:var(--font-doodle)] border border-green-300"
                    style={{ transform: `rotate(${(index % 2 === 0 ? 1 : -1)}deg)` }}
                  >
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </StudyGuideBox>
          
          
          <StudyGuideBox 
            title="Backend & AI Technologies" 
            type="note" 
            className="mb-4"
          >
            <div className="flex flex-wrap gap-2">
              {["FastAPI", "Python", "PostgreSQL", "LlamaIndex", "LangChain", "AI/RAG", "Multi-agent Systems"].map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: 0.5 + index * 0.08,
                    type: "spring",
                    stiffness: 200,
                    damping: 15
                  }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <Badge 
                    variant="secondary" 
                    className="text-xs py-1 px-2 font-[family-name:var(--font-doodle)] border border-blue-300"
                    style={{ transform: `rotate(${(index % 2 === 0 ? -1 : 1)}deg)` }}
                  >
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </StudyGuideBox>
          
          <StudyGuideBox 
            title="Business & Analytics Tools" 
            type="important" 
            className="mb-4"
          >
            <div className="flex flex-wrap gap-2">
              {["Shopify", "SEO", "Facebook API", "Google Analytics", "Data Analysis"].map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: 1.0 + index * 0.1,
                    type: "spring",
                    stiffness: 200,
                    damping: 15
                  }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <Badge 
                    variant="secondary" 
                    className="text-xs py-1 px-2 font-[family-name:var(--font-doodle)] border border-red-300"
                    style={{ transform: `rotate(${(index % 2 === 0 ? 1 : -1) * 0.5}deg)` }}
                  >
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </StudyGuideBox>
        </div>
      </NotebookPaper>
    </ScrollReveal>
  );
}