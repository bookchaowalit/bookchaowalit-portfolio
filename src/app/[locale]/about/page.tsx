import { Metadata } from 'next';
import { AboutClient } from '@/components/about-client';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const seoTitles = {
    en: "About Chaowalit Greepoke - Tech Generalist & Full-Stack Developer from Bangkok",
    th: "เกี่ยวกับเชวลิต กรีโภค - Tech Generalist และ Full-Stack Developer จากกรุงเทพฯ"
  };

  const seoDescriptions = {
    en: "Meet Chaowalit Greepoke, a Tech Generalist with 3+ years experience in full-stack development, AI integration, and SEO optimization. From Bangkok, Thailand, specializing in Next.js, React, Python, and data analytics solutions.",
    th: "ทำความรู้จักเชวลิต กรีโภค Tech Generalist ที่มีประสบการณ์ 3+ ปีในด้าน full-stack development, การรวม AI และการเพิ่มประสิทธิภาพ SEO จากกรุงเทพฯ เชี่ยวชาญ Next.js, React, Python และโซลูชันการวิเคราะห์ข้อมูล"
  };

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://chaowalitgreepoke.com'),
    title: seoTitles[locale as keyof typeof seoTitles] || seoTitles.en,
    description: seoDescriptions[locale as keyof typeof seoDescriptions] || seoDescriptions.en,
    keywords: [
      'Chaowalit Greepoke',
      'About Tech Generalist Bangkok',
      'Full-Stack Developer Experience',
      'AI Developer Thailand',
      'React Next.js Specialist',
      'SEO Optimization Expert',
      'Python FastAPI Developer',
      'Bangkok Tech Professional',
      'Electronics Background Developer'
    ].join(', '),
    robots: 'index, follow',
    alternates: {
      canonical: locale === 'en' ? '/about' : `/${locale}/about`,
      languages: {
        'en': '/about',
        'th': '/th/about',
        'x-default': '/about'
      }
    },
    openGraph: {
      type: 'profile',
      locale: locale,
      url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://chaowalitgreepoke.com'}/${locale === 'en' ? '' : locale + '/'}about`,
      title: seoTitles[locale as keyof typeof seoTitles] || seoTitles.en,
      description: seoDescriptions[locale as keyof typeof seoDescriptions] || seoDescriptions.en,
      siteName: 'Chaowalit Greepoke Portfolio',
      images: [{
        url: '/og-about.jpg',
        width: 1200,
        height: 630,
        alt: 'About Chaowalit Greepoke - Tech Generalist from Bangkok'
      }]
    },
    twitter: {
      card: 'summary_large_image',
      title: seoTitles[locale as keyof typeof seoTitles] || seoTitles.en,
      description: seoDescriptions[locale as keyof typeof seoDescriptions] || seoDescriptions.en,
      creator: '@bookchaowalit',
      images: ['/og-about.jpg']
    }
  };
}

export default function About() {
  return <AboutClient />;
}