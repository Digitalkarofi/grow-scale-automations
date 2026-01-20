import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, CheckCircle2, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-team.jpg";

export function HeroSection() {
  return (
    <section className="relative bg-background overflow-hidden">
      <div className="container-wide">
        <div className="min-h-[85vh] flex items-center py-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
            {/* Content */}
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-8 animate-fade-up">
                <Bot size={16} />
                <span>Your Business Growth & Automation Partner</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-[1.1] mb-6 animate-fade-up animation-delay-100">
                <span className="text-foreground italic">Grow.</span>{" "}
                <span className="text-foreground italic">Scale.</span>
                <br />
                <span className="gradient-text italic">Automate.</span>
              </h1>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed animate-fade-up animation-delay-200">
                We are not just an IT company — we are a strategic partner helping 
                startups, SMEs, and government institutions scale through technology, 
                AI, and innovation.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10 animate-fade-up animation-delay-300">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">
                    Start Scaling
                    <ArrowRight size={18} />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/services">Explore Solutions</Link>
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-6 animate-fade-up animation-delay-400">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 size={18} className="text-primary" />
                  <span>AI-Powered</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 size={18} className="text-primary" />
                  <span>Strategy Driven</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 size={18} className="text-primary" />
                  <span>Results Focused</span>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative hidden lg:block animate-fade-up animation-delay-200">
              <div className="relative rounded-2xl overflow-hidden shadow-elevated">
                <img 
                  src={heroImage} 
                  alt="Professional team collaborating in modern office" 
                  className="w-full h-auto object-cover"
                />
                
                {/* Floating Badge - Top */}
                <div className="absolute top-6 left-6 px-5 py-3 bg-navy text-primary-foreground rounded-xl shadow-lg">
                  <p className="text-xs font-medium opacity-80 mb-0.5">FOCUS AREA</p>
                  <p className="font-semibold">Innovation First</p>
                </div>

                {/* Floating Badge - Bottom */}
                <div className="absolute bottom-6 right-6 px-5 py-3 bg-card rounded-xl shadow-lg flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                    <TrendingUp size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium">GROWTH RESULT</p>
                    <p className="font-semibold text-foreground">Scale Faster</p>
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
