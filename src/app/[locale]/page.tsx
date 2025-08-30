"use client";

import { HeroSection } from '@/components/lazy/hero-section';
import { SkillsSection } from '@/components/lazy/skills-section';
import { FeaturedProjects } from '@/components/lazy/featured-projects';
import { AboutSection } from '@/components/lazy/about-section';
import { BlogSection } from '@/components/lazy/blog-section';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-16">
      <HeroSection />
      <SkillsSection />
      <FeaturedProjects />
      <AboutSection />
      <BlogSection />
    </div>
  );
}