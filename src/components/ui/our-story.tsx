import { BookOpen, Lightbulb, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const OurStory = () => {
  return (
    <section className="py-16 bg-white text-gray-800">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-bold mb-6 text-center">Our Story</h2>
        <p className="text-lg mb-10 text-center">
          Clario was born from a simple observation: teachers spend countless hours grading papers,
          often sacrificing valuable time they could spend planning lessons, supporting students,
          or focusing on creative teaching methods.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="text-yellow-500" />
                <h3 className="text-xl font-semibold">Our Vision</h3>
              </div>
              <p>
                To empower every educator with AI tools that enhance teaching rather than replace it,
                making quality education more accessible and effective.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="text-pink-500" />
                <h3 className="text-xl font-semibold">Our Values</h3>
              </div>
              <p>
                We believe in transparency, fairness, and putting teachers first. Every feature we build
                is designed with real classroom needs in mind.
              </p>
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="text-blue-500" />
                <h3 className="text-xl font-semibold">Our Impact</h3>
              </div>
              <p>
                Today, over 10,000 teachers use Clario to save time, improve feedback quality,
                and focus on what they love most about teaching.
              </p>
            </CardContent>
          </Card>
        </div>

        
      </div>
    </section>
  );
};
