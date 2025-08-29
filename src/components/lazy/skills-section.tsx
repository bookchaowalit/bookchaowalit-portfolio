import { Badge } from "@/components/ui/badge";
import { useTranslations } from 'next-intl';

export function SkillsSection() {
  const t = useTranslations('home');
  
  return (
    <section className="space-y-8">
      <h2 className="text-3xl font-bold text-center">{t('skillsTitle')}</h2>
      <div className="flex flex-wrap justify-center gap-2">
        {[
          "React", "Next.js", "TypeScript", "FastAPI", "Python",
          "PostgreSQL", "LlamaIndex", "LangChain", "Shopify", "SEO",
          "AI/RAG", "Facebook API", "Google Analytics", "Data Analysis", "Multi-agent Systems"
        ].map((skill) => (
          <Badge key={skill} variant="secondary" className="text-sm py-1 px-3">
            {skill}
          </Badge>
        ))}
      </div>
    </section>
  );
}