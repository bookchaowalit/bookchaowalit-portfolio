import { useTranslations } from 'next-intl';
import { Suspense, lazy } from 'react';

const HeroSection = lazy(() => import('@/components/lazy/hero-section').then(m => ({ default: m.HeroSection })));
const SkillsSection = lazy(() => import('@/components/lazy/skills-section').then(m => ({ default: m.SkillsSection })));
const FeaturedProjects = lazy(() => import('@/components/lazy/featured-projects').then(m => ({ default: m.FeaturedProjects })));
const AboutSection = lazy(() => import('@/components/lazy/about-section').then(m => ({ default: m.AboutSection })));
const BlogSection = lazy(() => import('@/components/lazy/blog-section').then(m => ({ default: m.BlogSection })));

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-16">
      <Suspense fallback={<div className="h-96 animate-pulse bg-muted/50 rounded-lg" />}>
        <HeroSection />
      </Suspense>

      <Suspense fallback={<div className="h-32 animate-pulse bg-muted/50 rounded-lg" />}>
        <SkillsSection />
      </Suspense>

      <Suspense fallback={<div className="h-96 animate-pulse bg-muted/50 rounded-lg" />}>
        <FeaturedProjects />
      </Suspense>

      <Suspense fallback={<div className="h-64 animate-pulse bg-muted/50 rounded-lg" />}>
        <AboutSection />
      </Suspense>

      <Suspense fallback={<div className="h-96 animate-pulse bg-muted/50 rounded-lg" />}>
        <BlogSection />
      </Suspense>
    </div>
  );
}