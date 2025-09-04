import { Navigation } from "@/components/ui/navigation";
import { HeroSection } from "@/components/ui/hero-section";
import { HowItWorks } from "@/components/ui/how-it-works";
import { WhyClario } from "@/components/ui/why-clario";
import { ComparisonChart } from "@/components/ui/comparison-chart";
import { CTAFooter } from "@/components/ui/cta-footer";
import { useEffect } from "react";
import { OurStory } from "@/components/ui/our-story";

const Index = () => {
  useEffect(() => {
    // Animate elements on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.fade-in-up');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <HowItWorks />
      <WhyClario />
      <ComparisonChart />
      <OurStory />
      <CTAFooter />
    </main>
  );
};

export default Index;
