import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { TrendingUp, Bot, Zap, Globe } from "lucide-react";
import heroImage from "@/assets/hero-team.jpg";

const features = [
  {
    icon: TrendingUp,
    title: "Business Strategy",
    description: "Aligning tech with high-level business expansion.",
  },
  {
    icon: Bot,
    title: "AI-Powered Systems",
    description: "Intelligent automation to drive operational excellence.",
  },
  {
    icon: Zap,
    title: "Creativity & Branding",
    description: "Marketing optimization and brand positioning.",
  },
  {
    icon: Globe,
    title: "Ecosystem Growth",
    description: "Tech enablement for startups and young innovators.",
  },
];

export function StrategicPartnerSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image with Stats Overlay */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={heroImage}
                alt="Strategic business partnership"
                className="w-full h-auto object-cover grayscale-[30%]"
              />
              {/* Stats Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="bg-card/95 backdrop-blur-sm rounded-xl p-6 shadow-elevated flex items-center justify-around">
                  <div className="text-center">
                    <p className="text-3xl font-display font-bold text-primary">500+</p>
                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
                      Growth Partners Empowered
                    </p>
                  </div>
                  <div className="w-px h-12 bg-border" />
                  <div className="text-center">
                    <p className="text-3xl font-display font-bold gradient-text">AI-First</p>
                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
                      Automation Strategy
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="flex items-center gap-2 text-primary text-sm font-semibold uppercase tracking-wider mb-4">
              <Zap size={16} />
              <span>More Than Just IT</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6 leading-tight">
              A Strategic{" "}
              <span className="gradient-text">Partner</span> for the Future.
            </h2>

            <p className="text-lg text-muted-foreground mb-10">
              Creanova Technologies Limited combines strategy, creativity, and technology to 
              deliver measurable results for entrepreneurs, government agencies, and creatives.
            </p>

            {/* Feature Grid */}
            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                    <feature.icon size={22} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Row */}
            <div className="flex items-center gap-6">
              <Button variant="hero" size="lg" asChild>
                <Link to="/about">Our Full Vision</Link>
              </Button>
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-primary/20 border-2 border-background" />
                  <div className="w-8 h-8 rounded-full bg-accent/20 border-2 border-background" />
                  <div className="w-8 h-8 rounded-full bg-secondary border-2 border-background" />
                </div>
                <p className="text-sm text-muted-foreground">
                  Trusted by <span className="font-semibold text-foreground">1k+</span> Innovators
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
