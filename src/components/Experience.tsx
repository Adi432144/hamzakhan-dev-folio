import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Senior Full-Stack Developer",
    company: "Tech Innovations Inc.",
    period: "2023 - Present",
    description:
      "Lead development of enterprise-level web applications serving 100K+ users. Architected microservices infrastructure reducing deployment time by 60%.",
    achievements: [
      "Reduced API response time by 45% through optimization",
      "Mentored team of 5 junior developers",
      "Implemented CI/CD pipeline improving release frequency by 3x",
    ],
    tags: ["React", "Node.js", "AWS", "Docker", "MongoDB"],
  },
  {
    title: "Data Analyst & ML Engineer",
    company: "DataDrive Solutions",
    period: "2021 - 2023",
    description:
      "Developed predictive models and analytics solutions that drove $2M in cost savings. Built automated reporting systems processing 10TB+ data monthly.",
    achievements: [
      "Reduced data processing time by 40% using optimized SQL queries",
      "Created ML models improving forecast accuracy by 35%",
      "Designed interactive dashboards for C-suite executives",
    ],
    tags: ["Python", "TensorFlow", "SQL", "Power BI", "Pandas"],
  },
  {
    title: "Full-Stack Developer",
    company: "StartupLab",
    period: "2020 - 2021",
    description:
      "Built MVPs and production applications for early-stage startups. Collaborated with cross-functional teams to deliver 15+ successful projects.",
    achievements: [
      "Developed 8 full-stack applications from concept to deployment",
      "Integrated third-party APIs reducing development time by 50%",
      "Implemented responsive designs improving mobile engagement by 60%",
    ],
    tags: ["React", "Express", "PostgreSQL", "REST APIs", "Git"],
  },
  {
    title: "Data Analytics Intern",
    company: "FinanceMetrics Corp",
    period: "2019 - 2020",
    description:
      "Analyzed financial datasets to identify trends and patterns. Created visualization dashboards for stakeholder reporting.",
    achievements: [
      "Automated monthly reporting saving 20 hours per week",
      "Identified cost-saving opportunities worth $500K annually",
      "Built Excel macros improving data processing efficiency by 30%",
    ],
    tags: ["Python", "Excel", "SQL", "Tableau", "Statistics"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gradient">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            A track record of delivering impactful solutions and driving measurable results
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="p-6 shadow-soft hover:shadow-medium transition-smooth animate-fade-in bg-card border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-accent" />
                  </div>
                </div>

                <div className="flex-grow">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <div className="flex items-center text-muted-foreground text-sm mt-1 sm:mt-0">
                      <Calendar className="h-4 w-4 mr-1" />
                      {exp.period}
                    </div>
                  </div>

                  <p className="text-accent font-medium mb-3">{exp.company}</p>
                  <p className="text-muted-foreground mb-4">{exp.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-sm">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start">
                          <span className="text-accent mr-2">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
