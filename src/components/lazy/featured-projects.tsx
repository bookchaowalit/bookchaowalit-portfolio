import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { useTranslations } from 'next-intl';

export function FeaturedProjects() {
  const t = useTranslations('home');

  return (
    <section className="space-y-8">
      <h2 className="text-3xl font-bold text-center">{t('featuredProjectsTitle')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            title: "AI-Powered Analytics Platform",
            description: "Integrated AI solutions using RAG with LlamaIndex and multi-agent systems for enhanced decision-making",
            tech: ["Next.js", "FastAPI", "LlamaIndex", "LangChain", "PostgreSQL"]
          },
          {
            title: "Shopify E-commerce Solutions",
            description: "Custom e-commerce websites with Shopify Liquid programming and theme customization",
            tech: ["Shopify", "Liquid", "JavaScript", "CSS", "HTML"]
          },
          {
            title: "SEO Analytics Dashboard",
            description: "Comprehensive SEO analysis tools with social media data integration and automated reporting",
            tech: ["React", "Facebook API", "Google Analytics", "Python", "Data Visualization"]
          }
        ].map((project, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <Badge key={tech} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="text-center">
        <Button variant="outline" asChild>
          <Link href="/projects">{t('viewAllProjects')}</Link>
        </Button>
      </div>
    </section>
  );
}