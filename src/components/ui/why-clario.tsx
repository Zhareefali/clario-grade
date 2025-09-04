import { Clock, Target, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const WhyClario = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Save Time",
      description: "Reduce grading time by up to 75% while maintaining quality. Spend more time teaching, less time on paperwork.",
      stat: "75%",
      statLabel: "Time Saved"
    },
    {
      icon: Target,
      title: "Improve Feedback Quality",
      description: "Consistent, detailed feedback that helps students understand their strengths and areas for improvement.",
      stat: "9.2/10",
      statLabel: "Teacher Rating"
    },
    {
      icon: Users,
      title: "Built for Teachers",
      description: "Designed by educators, for educators. Intuitive interface that fits seamlessly into your existing workflow.",
      stat: "10K+",
      statLabel: "Projected Teachers"
    }
  ];

  return (
    <section id="why-clario" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose <span className="text-primary">Clario</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of educators who have transformed their grading process with AI-powered precision.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card key={index} className="card-hover text-center">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6">
                  <benefit.icon className="w-8 h-8" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{benefit.description}</p>
                
                {/* Statistics */}
                <div className="pt-4 border-t border-border">
                  <div className="text-3xl font-bold text-primary mb-1">{benefit.stat}</div>
                  <div className="text-sm text-muted-foreground">{benefit.statLabel}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional benefits grid */}

      </div>
    </section>
  );
};