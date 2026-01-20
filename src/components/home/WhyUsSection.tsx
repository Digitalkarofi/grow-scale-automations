import { CheckCircle2, Users, Zap, Shield, Target, Clock } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Results-Driven Approach",
    description: "We focus on measurable outcomes that directly impact your bottom line.",
  },
  {
    icon: Zap,
    title: "Cutting-Edge Technology",
    description: "Leveraging AI, automation, and modern tools for maximum efficiency.",
  },
  {
    icon: Users,
    title: "Client-Centric Partnership",
    description: "We work as an extension of your team, not just another vendor.",
  },
  {
    icon: Shield,
    title: "Trusted & Reliable",
    description: "Building long-term relationships with transparency and integrity.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "Agile methodologies for quick delivery without compromising quality.",
  },
  {
    icon: CheckCircle2,
    title: "End-to-End Solutions",
    description: "From strategy to implementation, we cover the complete journey.",
  },
];

export function WhyUsSection() {
  return (
    <section className="section-padding bg-muted/50">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <p className="text-primary font-semibold mb-4">Why Choose Us</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
              Not Just an IT Company —{" "}
              <span className="gradient-text">Your Strategic Partner</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Creanova Technologies Limited combines strategy, creativity, technology, 
              and AI-powered automation to deliver measurable results. We help businesses 
              automate, grow, and scale through innovation.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.slice(0, 4).map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                    <feature.icon size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Card */}
          <div className="relative">
            <div className="bg-card rounded-3xl p-8 shadow-elevated border border-border">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4">
                  <Zap size={16} className="text-primary" />
                  <span>Why Businesses Choose Us</span>
                </div>
                <h3 className="text-2xl font-display font-bold">
                  Transform. Automate. Scale.
                </h3>
              </div>

              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div
                    key={feature.title}
                    className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-secondary transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center shrink-0">
                      <feature.icon size={20} className="text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{feature.title}</p>
                    </div>
                    <span className="text-xs font-medium text-primary bg-secondary px-2 py-1 rounded-full">
                      #{index + 1}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
