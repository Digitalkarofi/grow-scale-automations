import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import logo from "@/assets/logo.jpg";
export function HeroSection() {
  return (
    <section className="relative gradient-hero-bg overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container-wide relative">
        <div className="min-h-[90vh] flex items-center py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
            {/* Content */}
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-8 animate-fade-up">
                <Sparkles size={16} className="text-primary" />
                <span>Your Business Growth & Automation Partner</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6 animate-fade-up animation-delay-100">
                Transform Your Business with{" "}
                <span className="gradient-text">AI & Automation</span>
              </h1>

              <p className="text-lg text-muted-foreground mb-8 max-w-lg animate-fade-up animation-delay-200">
                We help startups, SMEs, and enterprises grow and scale efficiently 
                using cutting-edge technology, intelligent automation, and innovative solutions.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 animate-fade-up animation-delay-300">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/contact">
                    Get Started
                    <ArrowRight size={20} />
                  </Link>
                </Button>
                <Button variant="outline" size="xl" asChild>
                  <Link to="/services">Explore Services</Link>
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-border animate-fade-up animation-delay-400">
                <div>
                  <p className="text-3xl font-display font-bold text-primary">100+</p>
                  <p className="text-sm text-muted-foreground">Projects Delivered</p>
                </div>
                <div>
                  <p className="text-3xl font-display font-bold text-primary">50+</p>
                  <p className="text-sm text-muted-foreground">Happy Clients</p>
                </div>
                <div>
                  <p className="text-3xl font-display font-bold text-primary">5+</p>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
              </div>
            </div>

            {/* Visual */}
            <div className="relative hidden lg:block animate-fade-up animation-delay-200">
              <div className="relative">
                {/* Floating Cards */}
                <div className="absolute -top-8 -left-8 w-48 p-4 bg-card rounded-xl shadow-card animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center">
                      <Sparkles size={20} className="text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">AI Automation</p>
                      <p className="text-xs text-muted-foreground">Active</p>
                    </div>
                  </div>
                </div>

                {/* Main Visual */}
                <div className="aspect-square max-w-md mx-auto gradient-bg rounded-3xl p-1">
                  <div className="w-full h-full bg-card rounded-[22px] flex items-center justify-center">
                    <div className="text-center p-8">
                      <img 
                        src={logo} 
                        alt="Creanova Technologies Limited" 
                        className="max-w-[280px] mx-auto"
                      />
                    </div>
                  </div>
                </div>

                {/* Bottom Card */}
                <div className="absolute -bottom-4 -right-4 w-56 p-4 bg-card rounded-xl shadow-card animate-float" style={{ animationDelay: '1s' }}>
                  <p className="text-sm font-semibold mb-2">Growth Analytics</p>
                  <div className="flex gap-1">
                    {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                      <div
                        key={i}
                        className="w-4 gradient-bg rounded-sm"
                        style={{ height: `${h}%`, minHeight: '20px', maxHeight: '60px' }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
