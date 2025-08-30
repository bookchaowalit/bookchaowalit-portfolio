"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { projects } from "@/data/projects";
import { MixedTypographyTitle, NotebookSectionHeader } from "@/components/ui/mixed-typography";
import { NotebookPaper, SketchyFrame } from "@/components/ui/notebook-elements";
import { motion } from "framer-motion";

export default function Projects() {
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div 
        className="text-center space-y-8 mb-12"
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
              { text: "My", style: "cursive", color: "text-primary", size: "xl" },
              { text: "Amazing", style: "bubble", size: "xl" },
              { text: "Projects", style: "filled", size: "xl" },
              { text: "✨", style: "block", size: "lg" }
            ]}
            className="mb-6"
          />
        </motion.div>
        
        <motion.div
          className="max-w-lg mx-auto"
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "backOut" }}
        >
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
            <p className="text-slate-700 text-center">
              A showcase of different technologies and creative approaches to problem-solving 🚀
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Featured Projects */}
      <NotebookPaper className="mb-16 py-8">
        <NotebookSectionHeader 
          title="Featured Projects" 
          subtitle="My best work - the projects I'm most proud of"
          className="mb-8"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: 1.0 + (index * 0.15),
                ease: [0.25, 0.1, 0.25, 1]
              }}
              whileHover={{ 
                y: -12,
                scale: 1.02,
                transition: { 
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }
              }}
              style={{ willChange: 'transform' }}
            >
              <Card className="h-full flex flex-col border-l-4 border-l-primary/20 hover:border-l-primary hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 ease-out group">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <Badge variant="outline" className="ml-2">Featured</Badge>
                </div>
                <CardDescription className="text-sm">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-4">
                    {project.longDescription}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2">
                  <motion.div 
                    whileHover={{ scale: 1.05, y: -2 }} 
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Button size="sm" asChild className="group-hover:shadow-md transition-all duration-300">
                      <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        Live Demo
                      </Link>
                    </Button>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.05, y: -2 }} 
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Button variant="outline" size="sm" asChild className="group-hover:shadow-md transition-all duration-300">
                      <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        GitHub
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
            </motion.div>
          ))}
        </div>
      </NotebookPaper>

      {/* Other Projects */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.6 }}
      >
        <motion.h2 
          className="text-2xl font-bold mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1.8, ease: "easeOut" }}
        >
          Other Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: 2.0 + (index * 0.1),
                ease: [0.25, 0.1, 0.25, 1]
              }}
              whileHover={{ 
                y: -8,
                scale: 1.01,
                transition: { 
                  type: "spring",
                  stiffness: 300,
                  damping: 25
                }
              }}
              style={{ willChange: 'transform' }}
            >
              <Card className="h-full flex flex-col border-l-4 border-l-secondary/20 hover:border-l-secondary hover:shadow-lg hover:shadow-secondary/5 transition-all duration-400 ease-out group">
              <CardHeader>
                <CardTitle className="text-lg">{project.title}</CardTitle>
                <CardDescription className="text-sm">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <motion.div 
                    whileHover={{ scale: 1.05, y: -2 }} 
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Button size="sm" variant="outline" asChild className="group-hover:shadow-md transition-all duration-300">
                      <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        Demo
                      </Link>
                    </Button>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.05, y: -2 }} 
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Button size="sm" variant="outline" asChild className="group-hover:shadow-md transition-all duration-300">
                      <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        Code
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section 
        className="text-center mt-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2.5, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <SketchyFrame variant="double" className="py-12">
          <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-lg p-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.8 }}
            >
              <MixedTypographyTitle 
                words={[
                  { text: "Let's", style: "cursive", color: "text-primary", size: "lg" },
                  { text: "Work", style: "block", color: "text-secondary", size: "lg" },
                  { text: "Together!", style: "bubble", size: "lg" }
                ]}
                className="mb-6"
              />
            </motion.div>
            
            <motion.div
              className="max-w-md mx-auto mb-6"
              initial={{ opacity: 0, scale: 0.9, rotate: -1 }}
              animate={{ opacity: 1, scale: 1, rotate: 1 }}
              transition={{ duration: 0.8, delay: 3.0, ease: "backOut" }}
            >
              <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
                <p className="text-slate-700 text-center">
                  Always excited to collaborate on new projects and bring creative ideas to life! 🎆
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 3.2, ease: "backOut" }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button asChild size="lg" className="shadow-lg hover:shadow-xl transition-all duration-300 font-[family-name:var(--font-comic)]">
                <Link href="/contact">Get In Touch</Link>
              </Button>
            </motion.div>
          </div>
        </SketchyFrame>
      </motion.section>
    </div>
  );
}