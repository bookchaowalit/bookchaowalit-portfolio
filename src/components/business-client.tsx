"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MixedTypographyTitle, NotebookSectionHeader } from "@/components/ui/mixed-typography";
import { NotebookPaper, SketchyFrame } from "@/components/ui/notebook-elements";
import { motion } from "framer-motion";

// Business data - you can move this to a separate data file later
const businesses = [
  {
    title: "BookChaowa Tech Solutions",
    description: "Full-stack development services specializing in AI integration, SEO optimization, and modern web applications. Helping businesses digitize and scale with intelligent solutions.",
    category: "Tech Development",
    services: ["AI Integration", "Full-Stack Development", "SEO Optimization", "Web Analytics", "Shopify Development"],
    socialMedia: {
      website: "https://bookchaowatech.com",
      linkedin: "https://linkedin.com/in/chaowalit-greepoke",
      github: "https://github.com/bookchaowalit"
    },
    status: "Active"
  },
  {
    title: "AI Analytics Consulting",
    description: "Specialized consulting for businesses looking to implement AI-driven analytics and data insights. Transform your data into actionable intelligence.",
    category: "AI Consulting",
    services: ["Data Analytics", "AI Strategy", "Business Intelligence", "Performance Optimization", "ROI Analysis"],
    socialMedia: {
      linkedin: "https://linkedin.com/in/chaowalit-greepoke",
      email: "bookchaowalit@gmail.com"
    },
    status: "Active"
  },
  {
    title: "Bangkok Freelance Network",
    description: "Building a network of skilled freelancers in Bangkok, connecting local talent with international opportunities in tech and digital services.",
    category: "Network Building",
    services: ["Talent Matching", "Project Management", "Quality Assurance", "Cross-cultural Communication"],
    socialMedia: {
      linkedin: "https://linkedin.com/in/chaowalit-greepoke",
      twitter: "https://twitter.com/bookchaowalit"
    },
    status: "Growing"
  }
];

export function BusinessClient() {

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <motion.div 
        className="text-center space-y-8 mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <MixedTypographyTitle 
            words={[
              { text: "My", style: "cursive", color: "text-purple-700", size: "xl" },
              { text: "Business", style: "bubble", color: "text-blue-600", size: "xl" },
              { text: "Journey", style: "filled", color: "text-green-700", size: "xl" },
              { text: "🚀", style: "block", size: "lg" }
            ]}
            className="mb-6"
          />
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.9, rotate: -1 }}
          animate={{ opacity: 1, scale: 1, rotate: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "backOut" }}
        >
          <SketchyFrame variant="dashed">
            <NotebookPaper className="p-8">
              <div className="space-y-6">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Badge variant="secondary" className="bg-purple-100 text-purple-800 text-lg px-4 py-2">
                    💼 Solopreneur
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800 text-lg px-4 py-2">
                    🇹🇭 Bangkok Based
                  </Badge>
                </div>
                
                <h2 className="text-2xl font-[family-name:var(--font-script)] font-bold text-slate-800 mb-4">
                  Building Multiple Ventures with Passion
                </h2>
                
                <p className="text-lg text-slate-700 font-[family-name:var(--font-doodle)] leading-relaxed">
                  As a <strong>solopreneur</strong>, I'm passionate about creating innovative solutions that solve real problems. 
                  From tech development to consulting, I build businesses that combine <strong>cutting-edge technology</strong> with 
                  <strong>genuine value creation</strong>. Each venture reflects my commitment to excellence and my belief in 
                  the power of technology to transform businesses.
                </p>

                <div className="flex flex-wrap gap-3 justify-center">
                  <Badge variant="outline" className="font-[family-name:var(--font-comic)] text-sm">
                    🤖 AI Integration
                  </Badge>
                  <Badge variant="outline" className="font-[family-name:var(--font-comic)] text-sm">
                    📊 Data Analytics
                  </Badge>
                  <Badge variant="outline" className="font-[family-name:var(--font-comic)] text-sm">
                    🌐 Full-Stack Development
                  </Badge>
                  <Badge variant="outline" className="font-[family-name:var(--font-comic)] text-sm">
                    📈 Business Growth
                  </Badge>
                </div>
              </div>
            </NotebookPaper>
          </SketchyFrame>
        </motion.div>
      </motion.div>

      {/* Business Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mb-16"
      >
        <NotebookSectionHeader 
          title="My Active Ventures" 
          subtitle="Each business represents a unique approach to solving market challenges"
          className="mb-8"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {businesses.map((business, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: 1 + index * 0.2,
                ease: "backOut"
              }}
            >
              <SketchyFrame variant="double" className="h-full">
                <NotebookPaper className="p-6 h-full">
                  <div className="flex flex-col h-full">
                    <div className="space-y-4 flex-1">
                      <div className="flex items-center justify-between">
                        <Badge 
                          variant="secondary" 
                          className={`${
                            business.status === 'Active' 
                              ? 'bg-green-100 text-green-800 border-green-300' 
                              : 'bg-yellow-100 text-yellow-800 border-yellow-300'
                          }`}
                        >
                          {business.status}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {business.category}
                        </Badge>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-[family-name:var(--font-script)] font-bold text-slate-800 mb-2">
                          {business.title}
                        </h3>
                        <p className="text-slate-600 font-[family-name:var(--font-doodle)] leading-relaxed text-sm">
                          {business.description}
                        </p>
                      </div>
                      
                      <div className="space-y-3">
                        <h4 className="font-[family-name:var(--font-comic)] font-bold text-slate-700 uppercase text-xs tracking-wide">
                          Services
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {business.services.map((service) => (
                            <Badge key={service} variant="outline" className="text-xs font-[family-name:var(--font-doodle)]">
                              {service}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <h4 className="font-[family-name:var(--font-comic)] font-bold text-slate-700 uppercase text-xs tracking-wide">
                          Connect
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {business.socialMedia.website && (
                            <Button size="sm" variant="outline" asChild>
                              <Link href={business.socialMedia.website} target="_blank">
                                🌐 Website
                              </Link>
                            </Button>
                          )}
                          {business.socialMedia.linkedin && (
                            <Button size="sm" variant="outline" asChild>
                              <Link href={business.socialMedia.linkedin} target="_blank">
                                💼 LinkedIn
                              </Link>
                            </Button>
                          )}
                          {business.socialMedia.github && (
                            <Button size="sm" variant="outline" asChild>
                              <Link href={business.socialMedia.github} target="_blank">
                                🐙 GitHub
                              </Link>
                            </Button>
                          )}
                          {business.socialMedia.twitter && (
                            <Button size="sm" variant="outline" asChild>
                              <Link href={business.socialMedia.twitter} target="_blank">
                                🐦 Twitter
                              </Link>
                            </Button>
                          )}
                          {business.socialMedia.email && (
                            <Button size="sm" variant="outline" asChild>
                              <Link href={`mailto:${business.socialMedia.email}`}>
                                📧 Email
                              </Link>
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </NotebookPaper>
              </SketchyFrame>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 2 }}
        className="text-center space-y-6"
      >
        <NotebookPaper className="p-8 max-w-3xl mx-auto">
          <h2 className="text-3xl font-[family-name:var(--font-script)] font-bold text-slate-800 mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-slate-600 font-[family-name:var(--font-doodle)] mb-6 leading-relaxed">
            Whether you need AI integration, full-stack development, or strategic consulting, 
            I'm here to help your business grow. Let's discuss how we can create value together!
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" asChild>
                <Link href="/contact">Get In Touch</Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" size="lg" asChild>
                <Link href="/projects">View My Projects</Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" size="lg" asChild>
                <Link href="/about">Learn More About Me</Link>
              </Button>
            </motion.div>
          </div>
        </NotebookPaper>
      </motion.div>
    </div>
  );
}