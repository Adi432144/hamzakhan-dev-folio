import { Code2, Database, Brain, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const highlights = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description: "Building scalable web applications with modern frameworks and best practices",
  },
  {
    icon: Database,
    title: "Data Analytics",
    description: "Transforming raw data into actionable insights using advanced analytics",
  },
  {
    icon: Brain,
    title: "Machine Learning",
    description: "Developing intelligent systems that learn and adapt from data",
  },
];

export function About() {
  return (
    <section id="about" className="py-20 gradient-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gradient">
            About Me
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center animate-fade-in-up">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I'm a passionate technologist with expertise spanning full-stack development,
              data analytics, and machine learning engineering. With a strong foundation in
              computer science and a problem-solving mindset, I specialize in creating
              innovative solutions that bridge the gap between complex technical challenges
              and user-friendly applications.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              My approach combines technical excellence with creative thinking, enabling me
              to deliver high-quality solutions that make a real impact. Whether it's
              architecting scalable systems, uncovering insights from data, or building
              intelligent AI models, I'm committed to pushing the boundaries of what's possible.
            </p>
            <Button
              className="bg-accent hover:bg-accent/90 shadow-soft transition-smooth hover:scale-105"
              asChild
            >
              <a href="#contact">
                <FileDown className="mr-2 h-4 w-4" />
                Download CV
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
            {highlights.map((highlight, index) => (
              <Card
                key={index}
                className="p-6 shadow-soft hover:shadow-medium transition-smooth hover:-translate-y-1 bg-card border-border"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <highlight.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{highlight.title}</h3>
                <p className="text-muted-foreground">{highlight.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
