import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center section-padding relative overflow-hidden">
      <div className="container-width text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Vanaiyalini Kirupagaran
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8">
            IT Student & Aspiring Software Engineer
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            3rd year IT undergraduate passionate about creating innovative solutions. 
            Currently seeking internship opportunities in Software Engineering to apply my skills and grow professionally.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="gradient-primary glow transition-smooth hover:scale-105"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="transition-smooth hover:scale-105"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
          </div>
          
          <div className="flex justify-center gap-6">
            <a href="https://github.com/Vanaiyalini" target="_blank" rel="noopener noreferrer" 
               className="p-3 rounded-full bg-secondary hover:bg-primary transition-smooth hover:scale-110">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/vanaiyalini-kirupagaran-743923269/" target="_blank" rel="noopener noreferrer"
               className="p-3 rounded-full bg-secondary hover:bg-primary transition-smooth hover:scale-110">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="mailto:kyalini2001@gmail.com"
               className="p-3 rounded-full bg-secondary hover:bg-primary transition-smooth hover:scale-110">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown 
          className="h-6 w-6 text-muted-foreground cursor-pointer transition-smooth hover:text-primary"
          onClick={() => scrollToSection('about')}
        />
      </div>
      
      {/* Background decorations */}
      <div className="absolute top-20 left-20 w-72 h-72 gradient-primary rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-glow-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 gradient-secondary rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
    </section>
  );
};

export default Hero;