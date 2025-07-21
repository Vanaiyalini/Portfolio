import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Code, Target } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-card">
      <div className="container-width">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a dedicated IT student with a passion for technology and problem-solving. 
            My journey in computer science has equipped me with both theoretical knowledge and practical skills.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="transition-smooth hover:scale-105 shadow-elegant">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <GraduationCap className="h-12 w-12 mx-auto text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Education</h3>
              <p className="text-muted-foreground">
                3rd Year IT Undergraduate with strong academic performance and active participation in tech communities.
              </p>
            </CardContent>
          </Card>

          <Card className="transition-smooth hover:scale-105 shadow-elegant">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <Code className="h-12 w-12 mx-auto text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Experience</h3>
              <p className="text-muted-foreground">
                Hands-on experience through personal projects, coursework, and collaborative development initiatives.
              </p>
            </CardContent>
          </Card>

          <Card className="transition-smooth hover:scale-105 shadow-elegant">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <Target className="h-12 w-12 mx-auto text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Goals</h3>
              <p className="text-muted-foreground">
                Seeking a Software Engineering internship to apply my skills and contribute to innovative projects.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-secondary rounded-lg p-8 md:p-12">
          <h3 className="text-2xl font-semibold mb-6 text-center">My Journey</h3>
          <p className="text-muted-foreground text-lg leading-relaxed text-center max-w-4xl mx-auto">
            From my first "Hello World" program to building full-stack applications, my journey in technology has been 
            driven by curiosity and a desire to create meaningful solutions. I'm constantly learning new technologies, 
            participating in coding challenges, and working on projects that challenge me to grow as a developer. 
            My goal is to contribute to innovative software solutions that make a positive impact on users' lives.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;