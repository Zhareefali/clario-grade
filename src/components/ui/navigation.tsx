import { Button } from "@/components/ui/button";
import clarioLogo from "@/assets/ClarioSmall.png";

export const Navigation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img 
            src={clarioLogo} 
            alt="Clario - AI-Powered Academic Grading" 
            className="h-10 w-auto"
          />
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('how-it-works')}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            How It Works
          </button>
          <button 
            onClick={() => scrollToSection('why-clario')}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Why Clario
          </button>

          <Button className="btn-primary" size="sm">
            Try Clario
          </Button>
        </div>

        {/* Mobile menu button */}
        <Button variant="ghost" size="sm" className="md:hidden">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </Button>
      </div>
    </nav>
  );
};