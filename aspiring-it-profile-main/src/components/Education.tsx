import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Information Technology",
      institution: "Srilanka Institude of Information Technology",
      period: "2023 - 2025",
      gpa: "3.51/4.0",
      status: "Currently in 3rd Year",
      coursework: [
        "Data Structures & Algorithms",
        "Database Management Systems",
        "Web Development",
        "Object-Oriented Programming",
        "Software Engineering",
        "Computer Networks"
      ]
    }
  ];

  const achievements = [
    {
      title: "Dean's List",
      description: "Academic excellence recognition for maintaining high GPA",
      icon: Award
    },
    {
      title: "Programming Contest",
      description: "Top 10 finish in university programming competition",
      icon: Award
    },
    {
      title: "Tech Club Leader",
      description: "Leading university technology club initiatives",
      icon: BookOpen
    }
  ];

  const certifications = [
    " Introduction to Front-End Development - Coursera ",
    " Introduction to Back-End Development - Coursera",
    " Python programming (Ongoing)",
    " Introduction to Javascript (Ongoing)"
  ];

  return (
    <section id="education" className="section-padding">
      <div className="container-width">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Education & Achievements
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My academic journey and continuous learning through formal education and self-directed study.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Education Details */}
          <Card className="shadow-elegant">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-full bg-primary/10">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold">{educationData[0].degree}</h3>
                  <p className="text-muted-foreground">{educationData[0].institution}</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="font-medium">Period:</span>
                  <span className="text-muted-foreground">{educationData[0].period}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">GPA:</span>
                  <span className="text-primary font-semibold">{educationData[0].gpa}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Status:</span>
                  <Badge variant="secondary">{educationData[0].status}</Badge>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Relevant Coursework:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {educationData[0].coursework.map((course, index) => (
                    <Badge key={index} variant="outline" className="text-xs justify-start">
                      {course}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Achievements */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6">Achievements & Leadership</h3>
            {achievements.map((achievement, index) => (
              <Card key={index} className="transition-smooth hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-full bg-primary/10">
                      <achievement.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{achievement.title}</h4>
                      <p className="text-sm text-muted-foreground">{achievement.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <Card className="gradient-secondary">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold mb-6 text-center">Certifications & Online Learning</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-background/10">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span className="text-sm">{cert}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-muted-foreground mt-6">
              Continuously expanding knowledge through online courses and industry certifications
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Education;