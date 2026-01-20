import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const capabilities = [
  "Customer Support Agents",
  "Sales Funnel AI",
  "Workflow Automation",
  "Predictive Analytics",
];

export function AIAutomationSection() {
  return (
    <section className="py-20 md:py-28 gradient-dark-bg text-primary-foreground">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-4">
              Innovation Highlight
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6 leading-tight">
              AI-Powered<br />
              Automation Systems
            </h2>

            <p className="text-primary-foreground/70 text-lg mb-8 max-w-lg">
              Deployment of intelligent agents, CRM integrations, and data-driven decision 
              tools designed to eliminate operational bottlenecks.
            </p>

            {/* Capabilities Grid */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {capabilities.map((capability) => (
                <div key={capability} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-accent shrink-0" />
                  <span className="text-primary-foreground/90 text-sm font-medium">
                    {capability}
                  </span>
                </div>
              ))}
            </div>

            <Button variant="hero" size="lg" asChild>
              <Link to="/ai-solutions">Automate Your Workflow</Link>
            </Button>
          </div>

          {/* AI Visual */}
          <div className="relative hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square">
              {/* Abstract AI Grid Background */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-primary/10 to-transparent" />
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--accent) / 0.3) 1px, transparent 0)`,
                    backgroundSize: "24px 24px",
                  }}
                />
              </div>

              {/* Large AI Text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[180px] font-display font-bold text-primary-foreground/10">
                  AI
                </span>
              </div>

              {/* Floating Accent Elements */}
              <div className="absolute top-8 right-8 w-20 h-20 rounded-2xl bg-accent/20 backdrop-blur-sm" />
              <div className="absolute bottom-12 left-12 w-16 h-16 rounded-xl bg-primary-foreground/10 backdrop-blur-sm" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
