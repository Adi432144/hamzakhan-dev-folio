import { ArrowDown, Github, Linkedin, Mail, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero opacity-90" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center animate-fade-in-up">
          <div className="mb-6 inline-block">
            <div className="w-32 h-32 mx-auto rounded-full bg-accent/20 backdrop-blur-sm p-1 shadow-accent">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center text-primary-foreground text-4xl font-bold">
                MHK
              </div>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-4">
            Mohd Hamza Khan
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl text-primary-foreground/90 mb-6 font-light">
            Full-Stack Developer | Data Analyst | ML Engineer
          </p>

          <p className="text-base sm:text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8 leading-relaxed">
            Transforming ideas into scalable solutions through innovative development,
            data-driven insights, and cutting-edge machine learning applications.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-accent transition-smooth hover:scale-105"
              asChild
            >
              <a href="#projects">
                View My Work
                <ArrowDown className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 transition-smooth hover:scale-105"
              asChild
            >
              <a href="#contact">
                <FileDown className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center">
            <Button
              variant="ghost"
              size="icon"
              className="text-primary-foreground hover:text-accent hover:bg-primary-foreground/10 transition-smooth hover:scale-110"
              asChild
            >
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-primary-foreground hover:text-accent hover:bg-primary-foreground/10 transition-smooth hover:scale-110"
              asChild
            >
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-primary-foreground hover:text-accent hover:bg-primary-foreground/10 transition-smooth hover:scale-110"
              asChild
            >
              <a href="mailto:hamza@example.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-primary-foreground/60" />
      </div>
    </section>
  );
}
