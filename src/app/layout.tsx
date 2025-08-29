import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chaowalit Greepoke - Portfolio",
  description: "Tech Generalist - Full-stack Developer, AI Developer & SEO Specialist from Bangkok, specializing in Next.js, React, AI integration, and data analytics",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}