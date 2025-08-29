import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { getAllBlogPosts } from "@/lib/blog";

export default function Home() {
  const blogPosts = getAllBlogPosts().slice(0, 3);
  return (
    <div className="container mx-auto px-4 py-8 space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-8 py-16">
        <div className="space-y-4">
          <Avatar className="w-32 h-32 mx-auto">
            <AvatarImage src="/profile.jpg" alt="Profile" />
            <AvatarFallback className="text-2xl">YN</AvatarFallback>
          </Avatar>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Hello, I'm <span className="text-primary">Your Name</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A passionate full-stack developer creating amazing digital experiences
            with modern technologies
          </p>
        </div>
        <div className="flex gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/projects">View My Work</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/contact">Get In Touch</Link>
          </Button>
        </div>
      </section>

      {/* Skills Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Skills & Technologies</h2>
        <div className="flex flex-wrap justify-center gap-2">
          {[
            "React", "Next.js", "TypeScript", "Node.js", "Python",
            "PostgreSQL", "MongoDB", "AWS", "Docker", "Git",
            "Tailwind CSS", "GraphQL", "REST APIs", "Jest", "Cypress"
          ].map((skill) => (
            <Badge key={skill} variant="secondary" className="text-sm py-1 px-3">
              {skill}
            </Badge>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "E-Commerce Platform",
              description: "A full-stack e-commerce solution built with Next.js, Stripe, and PostgreSQL",
              tech: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"]
            },
            {
              title: "Task Management App",
              description: "A collaborative task management tool with real-time updates",
              tech: ["React", "Node.js", "Socket.io", "MongoDB"]
            },
            {
              title: "Weather Dashboard",
              description: "A beautiful weather app with forecasting and location-based data",
              tech: ["React", "OpenWeather API", "Chart.js"]
            }
          ].map((project, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <Button variant="outline" asChild>
            <Link href="/projects">View All Projects</Link>
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-muted/50 rounded-lg p-8 space-y-6">
        <h2 className="text-3xl font-bold text-center">About Me</h2>
        <p className="text-center text-muted-foreground max-w-3xl mx-auto text-lg">
          I'm a passionate developer with over X years of experience in creating
          web applications that solve real-world problems. I love learning new
          technologies and building projects that make a difference.
        </p>
        <div className="text-center">
          <Button variant="outline" asChild>
            <Link href="/about">Learn More About Me</Link>
          </Button>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Latest Blog Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <Link key={index} href={`/blog/${post.slug}`}>
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
            <Link href="/blog">Read All Posts</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}