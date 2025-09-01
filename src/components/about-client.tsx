"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { MixedTypographyTitle, NotebookSectionHeader, StudyGuideBox } from "@/components/ui/mixed-typography";
import { NotebookPaper, StickyNote, HandDrawnHighlight } from "@/components/ui/notebook-elements";
import { motion } from "framer-motion";

export function AboutClient() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Hero Section */}
      <motion.div 
        className="text-center space-y-8 py-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
        >
          <Avatar className="w-32 h-32 mx-auto">
            <AvatarImage src="/profile.webp" alt="Profile" />
            <AvatarFallback className="text-3xl">CG</AvatarFallback>
          </Avatar>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <MixedTypographyTitle 
            words={[
              { text: "About", style: "cursive", color: "text-purple-700", size: "xl" },
              { text: "Me", style: "bubble", color: "text-blue-600", size: "xl" },
              { text: "👨‍💻", style: "block", size: "lg" }
            ]}
            className="mb-6"
          />
        </motion.div>
        
        <motion.div
          className="max-w-lg mx-auto"
          initial={{ opacity: 0, scale: 0.9, rotate: -1 }}
          animate={{ opacity: 1, scale: 1, rotate: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "backOut" }}
        >
          <StickyNote color="green" rotation={1} className="text-center">
            <p className="text-sm text-slate-800">
              <HandDrawnHighlight color="yellow">
                Tech Generalist
              </HandDrawnHighlight>
              {" "}with 3+ years of experience in{" "}
              <HandDrawnHighlight color="blue">
                full-stack development, AI integration
              </HandDrawnHighlight>
              {" "}and{" "}
              <HandDrawnHighlight color="pink">
                SEO optimization
              </HandDrawnHighlight>
              {" "}from Bangkok 🇹🇭
            </p>
          </StickyNote>
        </motion.div>
      </motion.div>

      <div className="space-y-12">
        {/* Bio Section */}
        <NotebookPaper className="py-8">
          <NotebookSectionHeader 
            title="My Story" 
            subtitle="How I became a tech generalist"
            className="mb-6"
          />
          <div className="space-y-6">
            <StudyGuideBox title="Background" type="note">
              <p className="text-slate-800 leading-relaxed">
                Hello, I'm <HandDrawnHighlight color="yellow">Book</HandDrawnHighlight>—a Tech Generalist specializing in website development,
                AI development, and SEO with strong website analysis skills. I have
                experience working with <HandDrawnHighlight color="green">Shopify, React.js, Next.js</HandDrawnHighlight>, and utilizing tools
                like <HandDrawnHighlight color="blue">Google Analytics</HandDrawnHighlight> to analyze websites and extract insights that help
                clients' sites grow and reach a wider audience.
              </p>
            </StudyGuideBox>
            
            <StudyGuideBox title="Expertise" type="tip">
              <p className="text-slate-800 leading-relaxed">
                Additionally, I have expertise in <HandDrawnHighlight color="pink">analyzing data from various social media
                platforms</HandDrawnHighlight> to optimize marketing strategies for greater effectiveness. My
                background in <HandDrawnHighlight color="green">electronics and data center operations</HandDrawnHighlight> has given me a unique
                perspective on both hardware and software solutions.
              </p>
            </StudyGuideBox>
          </div>
        </NotebookPaper>

        {/* Skills Section */}
        <NotebookPaper className="py-8">
          <NotebookSectionHeader 
            title="Technical Skills" 
            subtitle="Technologies and tools I work with regularly"
            className="mb-6"
          />
          <div className="space-y-6">
            <StudyGuideBox title="Frontend Technologies" type="tip">
              <div className="flex flex-wrap gap-2">
                {[
                  "React", "Next.js", "TypeScript", "JavaScript",
                  "Tailwind CSS", "HTML5", "CSS3", "Shopify Liquid"
                ].map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Badge 
                      variant="secondary" 
                      className="font-[family-name:var(--font-doodle)] border border-green-300"
                      style={{ transform: `rotate(${(index % 2 === 0 ? 1 : -1) * 0.5}deg)` }}
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </StudyGuideBox>
            
            <StudyGuideBox title="Backend & AI" type="note">
              <div className="flex flex-wrap gap-2">
                {[
                  "FastAPI", "Python", "PostgreSQL", "LlamaIndex",
                  "LangChain", "RAG", "Multi-agent Systems", "REST APIs", "AI Integration"
                ].map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.05 }}
                  >
                    <Badge 
                      variant="secondary" 
                      className="font-[family-name:var(--font-doodle)] border border-blue-300"
                      style={{ transform: `rotate(${(index % 2 === 0 ? -1 : 1) * 0.5}deg)` }}
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </StudyGuideBox>
            
            <StudyGuideBox title="Tools & Analytics" type="important">
              <div className="flex flex-wrap gap-2">
                {[
                  "Google Analytics", "Facebook API", "SEO", "Git",
                  "Data Analysis", "Social Media Analytics", "A/B Testing", "ETL"
                ].map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.05 }}
                  >
                    <Badge 
                      variant="secondary" 
                      className="font-[family-name:var(--font-doodle)] border border-red-300"
                      style={{ transform: `rotate(${(index % 2 === 0 ? 1 : -1) * 0.3}deg)` }}
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </StudyGuideBox>
          </div>
        </NotebookPaper>

        {/* Experience Section */}
        <Card>
          <CardHeader>
            <CardTitle>Professional Experience</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">Full-stack Developer</h4>
                <p className="text-sm text-muted-foreground">Turfmapp • Jan 2024 - May 2025</p>
                <p className="text-sm mt-2">
                  Integrated AI solutions using RAG with LlamaIndex and LangChain, implementing
                  multi-agent systems with ReAct method. Developed front-end with Next.js and
                  back-end with FastAPI. Created analytics tools using Facebook Graph API.
                </p>
              </div>
              
              <Separator />
              
              <div>
                <h4 className="font-semibold">SEO Specialist & Data Analyst</h4>
                <p className="text-sm text-muted-foreground">Turfmapp • May 2022 - Jan 2024</p>
                <p className="text-sm mt-2">
                  Conducted SEO research to optimize website performance, drove improved search
                  rankings and organic traffic. Analyzed social media data for strategic marketing
                  decisions using A/B testing and experimental approaches.
                </p>
              </div>
              
              <Separator />
              
              <div>
                <h4 className="font-semibold">Data Center Technician</h4>
                <p className="text-sm text-muted-foreground">JasTel Network Co. Ltd. • May 2021 - Apr 2022</p>
                <p className="text-sm mt-2">
                  Connected servers to cables and fiber optic lines, monitored and maintained
                  data center operations to ensure optimal performance and uptime.
                </p>
              </div>
              
              <Separator />
              
              <div>
                <h4 className="font-semibold">Technical Staff (Apprenticeship)</h4>
                <p className="text-sm text-muted-foreground">True Corporation • Oct 2020 - Feb 2021</p>
                <p className="text-sm mt-2">
                  Serviced customers to troubleshoot internet problems, including router changes,
                  fiber optic repairs, and cable splicing using fusion splicers.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Education Section */}
        <Card>
          <CardHeader>
            <CardTitle>Education & Certifications</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold">High Vocational Certificate in Electronics</h4>
              <p className="text-sm text-muted-foreground">Chitralada Technology Institute</p>
            </div>
            
            <Separator />
            
            <div>
              <h4 className="font-semibold">Certifications</h4>
              <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                <li>• Secure BigLake Data Skill Badge - Google (Mar 2025)</li>
                <li>• Google Analytics Certified</li>
                <li>• Facebook Graph API Integration</li>
                <li>• ETL and Data Pipeline Management</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Fun Facts */}
        <Card>
          <CardHeader>
            <CardTitle>Fun Facts</CardTitle>
            <CardDescription>A few things about me outside of coding</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-muted-foreground">
              <li>🤖 Passionate about AI research and implementing cutting-edge AI models</li>
              <li>📊 Love analyzing data patterns and extracting meaningful insights</li>
              <li>🌐 Always exploring new web technologies and development frameworks</li>
              <li>🛠️ Enjoy building automated systems and data pipelines</li>
              <li>🇹🇭 Based in Bangkok, Thailand - embracing the vibrant tech scene</li>
              <li>💡 Born August 22, 2000 - Gen Z perspective on technology and innovation</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}