import { Upload, Sparkles, Download } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const HowItWorks = () => {
  const steps = [
    {
      icon: Upload,
      title: "Upload Student Work",
      description: "Simply upload essays, assignments, or any written work. Clario supports multiple file formats and batch uploads for efficiency.",
      color: "text-accent"
    },
    {
      icon: Sparkles,
      title: "Receive AI-Powered Scores",
      description: "Our advanced AI analyzes structure, grammar, thesis clarity, evidence, and rubric alignment to provide detailed, consistent scoring.",
      color: "text-primary"
    },
    {
      icon: Download,
      title: "Customize Feedback & Export",
      description: "Review AI suggestions, add personal comments, and export professional feedback reports for students and administrators.",
      color: "text-accent"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How <span className="text-primary">Clario</span> Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From upload to feedback in three simple steps. Transform your grading process today.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="card-hover h-full">
                <CardContent className="p-8 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-background shadow-card mb-6 ${step.color}`}>
                    <step.icon className="w-8 h-8" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  
                  {/* Step number */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                </CardContent>
              </Card>

              {/* Connector line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};