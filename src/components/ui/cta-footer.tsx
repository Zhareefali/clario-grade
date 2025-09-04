import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Twitter, Linkedin } from "lucide-react";

export const CTAFooter = () => {
  return (
    <>
      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Join Thousands of Teachers
              <br />
              Using <span className="text-primary-light">Clario</span>
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 leading-relaxed">
              Transform your grading process today. Grade with Clario and see the difference AI-powered grading can make.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button 
                size="lg" 
                variant="secondary"
                className="text-lg px-8 py-6 h-auto hover:scale-105 transition-transform"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 h-auto bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all"
          >
            Schedule Demo
          </Button>


            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-primary-foreground/75 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>10x faster than manual grading</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>No setup required</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Works with any rubric</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Clario</h3>
              <p className="text-background/70 mb-6 leading-relaxed">
                AI-powered grading made clear. Helping educators provide better feedback faster, 
                so they can focus on what matters most — teaching.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-background/70">
                <li><a href="#" className="hover:text-background transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-background transition-colors">API</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Integrations</a></li>
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-background/70">
                <li><a href="#" className="hover:text-background transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Status</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom footer */}
          <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-background/70 text-sm">
              © 2025 Clario. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-background/70 mt-4 md:mt-0">
              <a href="#" className="hover:text-background transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-background transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-background transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};