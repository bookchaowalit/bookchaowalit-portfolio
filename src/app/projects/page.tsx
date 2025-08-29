import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution built with Next.js, featuring user authentication, payment processing with Stripe, product management, and order tracking. Includes admin dashboard and responsive design.",
    longDescription: "This comprehensive e-commerce platform showcases modern web development practices with a focus on user experience and performance. Built with Next.js and TypeScript for type safety, it features a PostgreSQL database for robust data management, Stripe integration for secure payments, and a custom admin panel for inventory management.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Tailwind CSS", "Prisma"],
    demoUrl: "https://demo-ecommerce.com",
    githubUrl: "https://github.com/yourusername/ecommerce-platform",
    imageUrl: "/project-1.jpg",
    featured: true
  },
  {
    title: "Task Management App",
    description: "A collaborative task management tool with real-time updates, team collaboration features, and project tracking. Built with React, Node.js, and Socket.io for live synchronization.",
    longDescription: "A comprehensive project management solution designed for teams of all sizes. Features include real-time collaboration, task assignment, progress tracking, file attachments, and customizable workflows. The application uses WebSocket connections for instant updates across all connected clients.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB", "Express.js", "Material-UI"],
    demoUrl: "https://demo-taskmanager.com",
    githubUrl: "https://github.com/yourusername/task-manager",
    imageUrl: "/project-2.jpg",
    featured: true
  },
  {
    title: "Weather Dashboard",
    description: "A beautiful weather application with detailed forecasting, location-based data, and interactive charts. Features weather maps, alerts, and historical data visualization.",
    longDescription: "An elegant weather dashboard that provides comprehensive weather information with beautiful visualizations. Integrates with multiple weather APIs to provide accurate forecasts, severe weather alerts, and historical weather patterns. Features include geolocation support, favorite locations, and responsive charts.",
    tech: ["React", "OpenWeather API", "Chart.js", "Tailwind CSS", "Vite"],
    demoUrl: "https://demo-weather.com",
    githubUrl: "https://github.com/yourusername/weather-dashboard",
    imageUrl: "/project-3.jpg",
    featured: true
  },
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website built with Next.js and shadcn/ui. Features a blog with CMS integration, contact form, and optimized performance.",
    longDescription: "This portfolio website demonstrates modern web development techniques with a focus on performance and user experience. Built with Next.js for optimal SEO and speed, it includes a content management system for easy blog updates, contact form with email integration, and fully responsive design.",
    tech: ["Next.js", "shadcn/ui", "Tailwind CSS", "MDX", "TypeScript"],
    demoUrl: "https://your-portfolio.com",
    githubUrl: "https://github.com/yourusername/portfolio",
    imageUrl: "/project-4.jpg",
    featured: false
  },
  {
    title: "Social Media Analytics",
    description: "A comprehensive analytics dashboard for social media metrics with data visualization, reporting features, and automated insights generation.",
    longDescription: "A powerful analytics platform that aggregates social media data from multiple platforms and provides actionable insights through interactive dashboards. Features include automated reporting, trend analysis, competitor tracking, and custom metric definitions.",
    tech: ["Vue.js", "Python", "FastAPI", "PostgreSQL", "D3.js", "Redis"],
    demoUrl: "https://demo-analytics.com",
    githubUrl: "https://github.com/yourusername/social-analytics",
    imageUrl: "/project-5.jpg",
    featured: false
  },
  {
    title: "Recipe Sharing App",
    description: "A community-driven recipe sharing platform with user profiles, recipe ratings, shopping lists, and meal planning features.",
    longDescription: "A vibrant community platform where cooking enthusiasts can share, discover, and organize recipes. Features include user profiles, recipe collections, nutritional information, shopping list generation, meal planning calendar, and social features like comments and ratings.",
    tech: ["React Native", "Firebase", "Node.js", "Expo", "TypeScript"],
    demoUrl: "https://demo-recipes.com",
    githubUrl: "https://github.com/yourusername/recipe-app",
    imageUrl: "/project-6.jpg",
    featured: false
  }
];

export default function Projects() {
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl font-bold">My Projects</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          A collection of projects I've worked on, showcasing different technologies
          and approaches to problem-solving.
        </p>
      </div>

      {/* Featured Projects */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
          Featured Projects
          <Badge variant="secondary">Highlights</Badge>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow h-full flex flex-col">
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
                  <Button size="sm" asChild>
                    <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      GitHub
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Other Projects */}
      <section>
        <h2 className="text-2xl font-bold mb-8">Other Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow h-full flex flex-col">
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
                  <Button size="sm" variant="outline" asChild>
                    <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      Demo
                    </Link>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      Code
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center mt-16 py-12 bg-muted/50 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Interested in Working Together?</h2>
        <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
          I'm always excited to work on new projects and collaborate with other developers.
          Let's discuss how we can bring your ideas to life!
        </p>
        <Button asChild size="lg">
          <Link href="/contact">Get In Touch</Link>
        </Button>
      </section>
    </div>
  );
}