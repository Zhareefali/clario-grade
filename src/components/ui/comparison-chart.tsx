import { Check, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const ComparisonChart = () => {
  const features = [
    { feature: "Grading Speed", traditional: "2-3 hours per assignment", clario: "15-30 minutes per assignment" },
    { feature: "Consistency", traditional: "Varies by mood & fatigue", clario: "100% consistent criteria" },
    { feature: "Detailed Feedback", traditional: "Limited by time", clario: "Comprehensive & personalized" },
    { feature: "Rubric Alignment", traditional: "Manual checking", clario: "Automatic alignment" },
    { feature: "Progress Tracking", traditional: "Manual spreadsheets", clario: "Automated analytics" },
    { feature: "Bulk Processing", traditional: "One-by-one grading", clario: "Batch upload & grade" },
    { feature: "Custom Rubrics", traditional: "Hard to standardize", clario: "Easy customization" }
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Clario vs. <span className="text-muted-foreground">Traditional Grading</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how Clario transforms every aspect of the grading process.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Traditional Grading */}
            <Card className="relative">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl">Traditional Grading</CardTitle>
                <div className="w-12 h-12 mx-auto bg-muted rounded-full flex items-center justify-center">
                  <X className="w-6 h-6 text-muted-foreground" />
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {features.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-border last:border-b-0">
                    <span className="font-medium text-sm">{item.feature}</span>
                    <span className="text-sm text-muted-foreground text-right">{item.traditional}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Clario */}
            <Card className="relative border-primary shadow-glow">
              <CardHeader className="text-center pb-6">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                  Recommended
                </div>
                <CardTitle className="text-2xl text-primary">Clario AI</CardTitle>
                <div className="w-12 h-12 mx-auto bg-primary rounded-full flex items-center justify-center">
                  <Check className="w-6 h-6 text-primary-foreground" />
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {features.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-border last:border-b-0">
                    <span className="font-medium text-sm">{item.feature}</span>
                    <span className="text-sm text-primary font-medium text-right">{item.clario}</span>
                  </div>
                ))}
                
                <div className="pt-6">
                  <Button className="w-full btn-primary">
                    Grade With Clario
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Bottom stats */}
          <div className="text-center bg-primary/5 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">The Results Speak for Themselves</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">10X</div>
                <div className="text-muted-foreground">Faster Grading</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">90%</div>
                <div className="text-muted-foreground">More Consistent</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">95%</div>
                <div className="text-muted-foreground">Teacher Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};