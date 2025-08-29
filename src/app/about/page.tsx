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
          <AvatarImage src="/profile.jpg" alt="Profile" />
          <AvatarFallback className="text-3xl">YN</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate full-stack developer with X years of experience building
            modern web applications and solving complex problems.
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
              I started my journey in web development X years ago and have been
              passionate about creating digital solutions ever since. My background
              in [Your Background] has given me a unique perspective on problem-solving
              and user experience design.
            </p>
            <p className="text-muted-foreground">
              When I'm not coding, you can find me [Your Hobbies/Interests].
              I believe that diverse experiences make me a better developer and
              help me approach problems from different angles.
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
                  "Tailwind CSS", "HTML5", "CSS3", "Sass"
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
                  "Node.js", "Python", "Express.js", "FastAPI",
                  "PostgreSQL", "MongoDB", "Redis", "REST APIs", "GraphQL"
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
                  "Git", "Docker", "AWS", "Vercel", "Jest",
                  "Cypress", "Figma", "VS Code"
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
                <h4 className="font-semibold">Senior Full Stack Developer</h4>
                <p className="text-sm text-muted-foreground">Company Name • 2022 - Present</p>
                <p className="text-sm mt-2">
                  Lead development of modern web applications using React, Next.js, and Node.js.
                  Collaborated with cross-functional teams to deliver high-quality software solutions.
                </p>
              </div>
              
              <Separator />
              
              <div>
                <h4 className="font-semibold">Full Stack Developer</h4>
                <p className="text-sm text-muted-foreground">Previous Company • 2020 - 2022</p>
                <p className="text-sm mt-2">
                  Developed and maintained web applications, implemented new features,
                  and improved application performance.
                </p>
              </div>
              
              <Separator />
              
              <div>
                <h4 className="font-semibold">Junior Developer</h4>
                <p className="text-sm text-muted-foreground">First Company • 2019 - 2020</p>
                <p className="text-sm mt-2">
                  Started my professional journey building responsive websites
                  and learning modern development practices.
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
              <h4 className="font-semibold">Degree in [Your Degree]</h4>
              <p className="text-sm text-muted-foreground">University Name • Year</p>
            </div>
            
            <Separator />
            
            <div>
              <h4 className="font-semibold">Relevant Certifications</h4>
              <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                <li>• AWS Certified Developer</li>
                <li>• Google Analytics Certified</li>
                <li>• [Other Relevant Certifications]</li>
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
              <li>🎵 I love listening to music while coding</li>
              <li>☕ Coffee enthusiast - can't start the day without it</li>
              <li>📚 Always reading tech blogs and staying updated with latest trends</li>
              <li>🌱 Enjoy learning new technologies and experimenting with side projects</li>
              <li>🎮 Gaming in my free time helps me relax and think creatively</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}