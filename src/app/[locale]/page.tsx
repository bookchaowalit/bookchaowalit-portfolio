import { Metadata } from 'next';
import { HeroSection } from '@/components/lazy/hero-section';
import { SkillsSection } from '@/components/lazy/skills-section';
import { AboutSection } from '@/components/lazy/about-section';
import { FeaturedProjects } from '@/components/lazy/featured-projects';
import { BusinessSection } from '@/components/lazy/business-section';
import { BlogSection } from '@/components/lazy/blog-section';
import { ContactSection } from '@/components/lazy/contact-section';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const seoTitles = {
    en: "Chaowalit Greepoke - Full-Stack Developer & AI Specialist | Tech Generalist Bangkok",
    th: "เชวลิต กรีโภค - นักพัฒนา Full-Stack และผู้เชี่ยวชาญด้าน AI | Tech Generalist กรุงเทพฯ"
  };

  const seoDescriptions = {
    en: "Expert Full-Stack Developer & AI Specialist from Bangkok, Thailand. Specialized in Next.js, React, AI integration, SEO optimization, and data analytics. 3+ years creating innovative web solutions that drive business growth.",
    th: "ผู้เชี่ยวชาญด้าน Full-Stack Development และ AI จากกรุงเทพฯ เชี่ยวชาญ Next.js, React, การรวม AI, การเพิ่มประสิทธิภาพ SEO และการวิเคราะห์ข้อมูล ประสบการณ์ 3+ ปีในการสร้างโซลูชันเว็บนวัตกรรม"
  };

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://chaowalitgreepoke.com'),
    title: seoTitles[locale as keyof typeof seoTitles] || seoTitles.en,
    description: seoDescriptions[locale as keyof typeof seoDescriptions] || seoDescriptions.en,
    keywords: [
      'Full-Stack Developer Bangkok',
      'AI Developer Thailand',
      'Next.js Developer',
      'React Developer',
      'SEO Specialist',
      'Data Analytics',
      'Web Development Thailand',
      'Tech Generalist',
      'Chaowalit Greepoke'
    ].join(', '),
    authors: [{ name: 'Chaowalit Greepoke' }],
    creator: 'Chaowalit Greepoke',
    publisher: 'Chaowalit Greepoke',
    robots: 'index, follow',
    alternates: {
      canonical: locale === 'en' ? '/' : `/${locale}`,
      languages: {
        'en': '/',
        'th': '/th',
        'x-default': '/'
      }
    },
    openGraph: {
      type: 'website',
      locale: locale,
      url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://chaowalitgreepoke.com'}/${locale === 'en' ? '' : locale}`,
      title: seoTitles[locale as keyof typeof seoTitles] || seoTitles.en,
      description: seoDescriptions[locale as keyof typeof seoDescriptions] || seoDescriptions.en,
      siteName: 'Chaowalit Greepoke Portfolio',
      images: [{
        url: '/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'Chaowalit Greepoke - Full-Stack Developer & AI Specialist'
      }]
    },
    twitter: {
      card: 'summary_large_image',
      title: seoTitles[locale as keyof typeof seoTitles] || seoTitles.en,
      description: seoDescriptions[locale as keyof typeof seoDescriptions] || seoDescriptions.en,
      creator: '@bookchaowalit',
      images: ['/og-home.jpg']
    },
    verification: {
      google: 'your-google-verification-code'
    }
  };
}

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-16 md:space-y-20 lg:space-y-24">
      <HeroSection />
      <SkillsSection />
      <AboutSection />
      <FeaturedProjects />
      <BusinessSection />
      <BlogSection />
      <ContactSection />
    </div>
  );
}
