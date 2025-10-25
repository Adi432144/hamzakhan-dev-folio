import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "AI-Powered Sales Forecasting Platform",
    description:
      "Developed a machine learning platform that predicts sales trends with 95% accuracy using time series analysis and neural networks. Reduced forecasting errors by 40%.",
    tags: ["Python", "TensorFlow", "React", "PostgreSQL", "Docker"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Real-Time Analytics Dashboard",
    description:
      "Built a comprehensive analytics dashboard for monitoring business KPIs with real-time data visualization. Processed 1M+ data points daily with sub-second latency.",
    tags: ["Next.js", "Power BI", "MongoDB", "WebSocket", "D3.js"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "E-Commerce Platform with Recommendation Engine",
    description:
      "Full-stack e-commerce solution with ML-based product recommendations. Increased conversion rates by 35% through personalized shopping experiences.",
    tags: ["React", "Node.js", "Scikit-learn", "Redis", "AWS"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "NLP-Based Customer Support Chatbot",
    description:
      "Intelligent chatbot using natural language processing to handle customer inquiries. Automated 70% of support tickets, reducing response time from hours to seconds.",
    tags: ["Python", "NLP", "PyTorch", "FastAPI", "React"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Financial Data Pipeline & Analytics",
    description:
      "Engineered ETL pipeline processing 500GB+ financial data daily. Created automated reports saving 20 hours of manual work weekly.",
    tags: ["Python", "Apache Airflow", "Pandas", "SQL", "Tableau"],
    github: "https://github.com",
    demo: null,
  },
  {
    title: "Computer Vision Image Classification System",
    description:
      "Deep learning system for automated image classification and object detection. Achieved 98% accuracy on custom dataset with real-time processing capabilities.",
    tags: ["PyTorch", "OpenCV", "Flask", "Docker", "AWS"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 gradient-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gradient">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            A showcase of innovative solutions across web development, data analytics, and machine learning
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="p-6 shadow-soft hover:shadow-medium transition-smooth hover:-translate-y-2 bg-card border-border flex flex-col animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <Badge
                    key={tagIndex}
                    className="text-xs"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-2 pt-4 border-t border-border">
                <Button
                  className="flex-1 transition-smooth hover:scale-105 btn-outline"
                  asChild
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </a>
                </Button>
                {project.demo && (
                  <Button
                    className="flex-1 bg-accent hover:bg-accent/90 transition-smooth hover:scale-105"
                    asChild
                  >
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
