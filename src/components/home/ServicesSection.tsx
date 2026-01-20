import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Globe,
  Bot,
  TrendingUp,
  Code,
  Rocket,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "IT Consultancy & Digital Transformation",
    description:
      "Technology advisory and digital infrastructure planning for SMEs, startups, and government institutions.",
    features: ["Process Optimization", "Digital Infrastructure", "IT Strategy"],
    link: "/services",
  },
  {
    icon: Bot,
    title: "AI Automation Services",
    description:
      "Intelligent agents and workflow automation to eliminate bottlenecks and reduce overhead.",
    features: ["AI Agents for Support", "CRM Automation", "Data-Driven Tools"],
    link: "/ai-solutions",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing & Growth",
    description:
      "Strategic branding and sales optimization designed to convert high-value leads into loyal customers.",
    features: ["Brand Positioning", "Sales Funnel Design", "Growth Marketing"],
    link: "/services",
  },
  {
    icon: Code,
    title: "Software, Web & App Development",
    description:
      "Custom-built applications, business management systems, and e-commerce platforms.",
    features: ["Custom Software", "Mobile Apps", "Automation Dashboards"],
    link: "/services",
  },
  {
    icon: Rocket,
    title: "Startup, SME & Enterprise Solutions",
    description:
      "Business structuring and tech enablement specifically tailored for growth-stage companies.",
    features: ["Growth Strategy", "Automation Readiness", "Tech Enablement"],
    link: "/services",
  },
  {
    icon: GraduationCap,
    title: "Training & Ecosystem Programs",
    description:
      "Incubating the next generation of innovators through digital skills training and tech empowerment.",
    features: ["AI Workshops", "Startup Incubation", "Tech Empowerment"],
    link: "/portfolio",
  },
];

export function ServicesSection() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-semibold uppercase tracking-wider text-sm mb-4">
            Our Core Services
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
            Comprehensive Solutions to{" "}
            <span className="gradient-text">Automate & Grow.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We provide a holistic approach to business growth, combining IT consultancy with
            cutting-edge AI automation and ecosystem programs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-8 bg-card rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-card"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon size={24} className="text-primary" />
              </div>

              <h3 className="text-lg font-display font-semibold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>

              <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                {service.description}
              </p>

              {/* Feature List */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 size={14} className="text-primary shrink-0" />
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                to={service.link}
                className="inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all"
              >
                Learn Details <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <Link to="/services">
              View All Services
              <ArrowRight size={18} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
