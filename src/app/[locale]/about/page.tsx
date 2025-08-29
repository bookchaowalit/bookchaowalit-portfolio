import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Hero Section */}
      <div className="text-center space-y-6 py-8">
        <Avatar className="w-32 h-32 mx-auto">
          <AvatarImage src="/profile.webp" alt="Profile" />
          <AvatarFallback className="text-3xl">CG</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tech Generalist with 3+ years of experience in full-stack development,
            AI integration, and SEO optimization. Based in Bangkok, Thailand.
          </p>
        </div>
      </div>

      <div className="space-y-12">
        {/* Bio Section */}
        <Card>
          <CardHeader>
            <CardTitle>My Story</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Hello, I'm Book—a Tech Generalist specializing in website development,
              AI development, and SEO with strong website analysis skills. I have
              experience working with Shopify, React.js, Next.js, and utilizing tools
              like Google Analytics to analyze websites and extract insights that help
              clients' sites grow and reach a wider audience.
            </p>
            <p className="text-muted-foreground">
              Additionally, I have expertise in analyzing data from various social media
              platforms to optimize marketing strategies for greater effectiveness. My
              background in electronics and data center operations has given me a unique
              perspective on both hardware and software solutions.
            </p>
          </CardContent>
        </Card>

        {/* Skills Section */}
        <Card>
          <CardHeader>
            <CardTitle>Technical Skills</CardTitle>
            <CardDescription>
              Technologies and tools I work with regularly
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-semibold mb-3">Frontend</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "React", "Next.js", "TypeScript", "JavaScript",
                  "Tailwind CSS", "HTML5", "CSS3", "Shopify Liquid"
                ].map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            
            <Separator />
            
            <div>
              <h4 className="font-semibold mb-3">Backend</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "FastAPI", "Python", "PostgreSQL", "LlamaIndex",
                  "LangChain", "RAG", "Multi-agent Systems", "REST APIs", "AI Integration"
                ].map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            
            <Separator />
            
            <div>
              <h4 className="font-semibold mb-3">Tools & Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Google Analytics", "Facebook API", "SEO", "Git",
                  "Data Analysis", "Social Media Analytics", "A/B Testing", "ETL"
                ].map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

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