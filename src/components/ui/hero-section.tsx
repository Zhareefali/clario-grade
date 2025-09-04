import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";
import { ArrowRight, PlayCircle } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Teachers using AI-powered grading tools" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32 text-center max-w-6xl">
        <div className="space-y-8 fade-in-up animate">
          {/* Badge */}

          {/* Main headline */}
          <h1 className="hero-text">
            Grade with
            <br />
            <span className="text-primary">Clario</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The AI-powered feedback tool built for today's classrooms.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button size="lg" className="btn-primary text-lg px-8 py-6 h-auto">
              Try Clario
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="btn-outline text-lg px-8 py-6 h-auto">
              <PlayCircle className="mr-2 h-5 w-5" />
              See How it Works
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="pt-12 opacity-75">
            <p className="text-sm text-muted-foreground mb-4">Trusted by educators at</p>
            <div className="flex flex-wrap items-center justify-center gap-8 text-muted-foreground">
              <span className="text-lg font-medium">Thames Valley District School Board</span>
              <span className="text-lg font-medium">London Catholic District School Board</span>

            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};