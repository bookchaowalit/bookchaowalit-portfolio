import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { getAllBlogPosts } from "@/lib/blog";
import { useTranslations } from 'next-intl';

export function BlogSection() {
  const t = useTranslations('home');
  const blogPosts = getAllBlogPosts().slice(0, 3);
  
  return (
    <section className="space-y-8">
      <h2 className="text-3xl font-bold text-center">{t('latestBlogTitle')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <Link key={index} href={{pathname: '/blog/[slug]', params: {slug: post.slug}}}>
            <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
              <CardHeader>
                <CardTitle className="text-lg line-clamp-2">{post.title}</CardTitle>
                <CardDescription className="line-clamp-2">{post.excerpt}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">
                    {new Date(post.publishedAt).toLocaleDateString()}
                  </p>
                  <p className="text-sm text-muted-foreground">{post.readTime}</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
      <div className="text-center">
        <Button variant="outline" asChild>
          <Link href="/blog">{t('readAllPosts')}</Link>
        </Button>
      </div>
    </section>
  );
}