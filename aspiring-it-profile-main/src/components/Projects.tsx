import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Online Auction",
      description: "Auctio application built with HTML and CSS, featuring user authentication, payment integration, and admin dashboard.",
      technologies: ["HTML", "CSS", "PHP", "Mysql", "Javascript"],
      githubUrl: "https://github.com/Vanaiyalini",
      liveUrl: "https://example.com",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop"
    },
    {
      title: "Task Management App",
      description: "A responsive task management application with filter functionality, real-time updates, and team collaboration features.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
      githubUrl: "https://github.com/Vanaiyalini",
      liveUrl: "https://example.com",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop"
    },
    {
      title: "Event Management",
      description: "A modern Event Management System offering event scheduling, attendee management, and real-time updates with a clean, user-friendly interface.",
      technologies: ["Java", "JSP", "Servlet", "HTML", "CSS", "Bootstrap"],
      githubUrl: "https://github.com/Vanaiyalini",
      liveUrl: "https://example.com",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=300&fit=crop"
    },
    {
      title: "Online Hospital Management",
      description: "A responsive Hospital Management System designed to streamline operations and improve efficiency, built with modern web technologies and optimized for performance.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
      githubUrl: "https://github.com/Vanaiyalini",
      liveUrl: "https://example.com",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-card">
      <div className="container-width">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work demonstrating my skills in full-stack development, 
            problem-solving, and attention to detail.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="transition-smooth hover:scale-105 shadow-elegant overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-smooth hover:scale-110"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-4 pt-4">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex items-center gap-2 transition-smooth hover:scale-105"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="h-4 w-4" />
                    Code
                  </Button>
                  {/* <Button 
                    size="sm" 
                    className="flex items-center gap-2 transition-smooth hover:scale-105"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    <ExternalLink className="h-4 w-4" />
                    Demo
                  </Button> */}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="transition-smooth hover:scale-105"
            onClick={() => window.open('https://github.com/Vanaiyalini', '_blank')}
          >
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;