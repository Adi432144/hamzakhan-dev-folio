import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Full-Stack Development",
    color: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "PostgreSQL",
      "REST APIs",
      "GraphQL",
      "Docker",
      "AWS",
      "Git",
    ],
  },
  {
    title: "Data Analytics",
    color: "bg-purple-500/10 text-purple-500 border-purple-500/20",
    skills: [
      "Python",
      "SQL",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Power BI",
      "Tableau",
      "Excel",
      "Data Visualization",
      "Statistical Analysis",
      "ETL Pipelines",
    ],
  },
  {
    title: "Machine Learning",
    color: "bg-green-500/10 text-green-500 border-green-500/20",
    skills: [
      "Scikit-learn",
      "TensorFlow",
      "PyTorch",
      "NLP",
      "Computer Vision",
      "Deep Learning",
      "Model Deployment",
      "Feature Engineering",
      "MLOps",
      "Keras",
      "OpenCV",
      "Jupyter",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gradient">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, data-driven applications
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="p-6 shadow-soft hover:shadow-medium transition-smooth animate-fade-in bg-card border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-bold mb-6 text-center">{category.title}</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    className={`${category.color} hover:scale-105 transition-smooth cursor-default`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
