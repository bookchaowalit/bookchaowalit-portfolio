"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { useTranslations } from 'next-intl';

// Mock blog posts for client component
const mockBlogPosts = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with Next.js and React",
    excerpt: "Learn how to build modern web applications with Next.js, React, and TypeScript.",
    publishedAt: "2024-01-15",
    readTime: "5 min read",
    tags: ["Next.js", "React", "TypeScript"]
  },
  {
    slug: "ai-development-guide", 
    title: "Building AI-Powered Applications",
    excerpt: "A comprehensive guide to integrating AI and machine learning into your web applications.",
    publishedAt: "2024-01-10",
    readTime: "8 min read",
    tags: ["AI", "Machine Learning", "Python"]
  },
  {
    slug: "seo-optimization-tips",
    title: "SEO Optimization for Modern Websites", 
    excerpt: "Best practices and strategies for improving your website's search engine ranking.",
    publishedAt: "2024-01-05",
    readTime: "6 min read",
    tags: ["SEO", "Web Development", "Marketing"]
  }
];

export function BlogSection() {
  const t = useTranslations('home');
  const blogPosts = mockBlogPosts;
  
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