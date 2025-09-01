import { Metadata } from "next";
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { BusinessClient } from "@/components/business-client";

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  const seoTitles = {
    en: "My Businesses - Book (Chaowalit Greepoke) | Solopreneur Journey Bangkok",
    th: "ธุรกิจของฉัน - บุ๊ค (เชาวลิต กรีโภค) | การเดินทางของ Solopreneur กรุงเทพฯ"
  };
  
  const seoDescriptions = {
    en: "Discover the businesses and ventures I've built as a solopreneur. From tech solutions to innovative services, explore my entrepreneurial journey in Bangkok, Thailand.",
    th: "ค้นพบธุรกิจและกิจการที่ผมสร้างขึ้นในฐานะ solopreneur จากโซลูชันเทคโนโลยีไปจนถึงบริการที่นวัตกรรม สำรวจการเดินทางการเป็นผู้ประกอบการของผมในกรุงเทพฯ ประเทศไทย"
  };
  
  return {
    title: seoTitles[locale as keyof typeof seoTitles] || seoTitles.en,
    description: seoDescriptions[locale as keyof typeof seoDescriptions] || seoDescriptions.en,
    openGraph: {
      title: seoTitles[locale as keyof typeof seoTitles] || seoTitles.en,
      description: seoDescriptions[locale as keyof typeof seoDescriptions] || seoDescriptions.en,
      type: 'website',
      locale: locale,
    },
    twitter: {
      card: 'summary_large_image',
      title: seoTitles[locale as keyof typeof seoTitles] || seoTitles.en,
      description: seoDescriptions[locale as keyof typeof seoDescriptions] || seoDescriptions.en,
    },
  };
}

export default function Business() {
  return <BusinessClient />;
}