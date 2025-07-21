import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skills = [
    { name: "React", level: 85, category: "Frontend" },
    { name: "JavaScript", level: 80, category: "Frontend" },
    { name: "TypeScript", level: 75, category: "Frontend" },
    { name: "HTML/CSS", level: 90, category: "Frontend" },
    { name: "Python", level: 80, category: "Backend" },
    { name: "Java", level: 75, category: "Backend" },
    { name: "Node.js", level: 70, category: "Backend" },
    { name: "SQL", level: 75, category: "Database" },
    { name: "Git", level: 85, category: "Tools" },
    { name: "Docker", level: 60, category: "Tools" },
  ];

  const categories = ["Frontend", "Backend", "Database", "Tools"];

  return (
    <section id="skills" className="section-padding">
      <div className="container-width">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels across different technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <Card key={category} className="transition-smooth hover:scale-105 shadow-elegant">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 text-center text-primary">
                  {category}
                </h3>
                <div className="space-y-6">
                  {skills
                    .filter((skill) => skill.category === category)
                    .map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="gradient-secondary p-8">
            <h3 className="text-2xl font-semibold mb-4">Always Learning</h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              I'm constantly expanding my skill set by exploring new technologies, 
              taking online courses, and working on challenging projects. Currently learning 
              cloud technologies and advanced system design patterns.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;