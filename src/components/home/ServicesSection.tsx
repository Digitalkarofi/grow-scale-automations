import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Lightbulb,
  Bot,
  TrendingUp,
  Code,
  Rocket,
  GraduationCap,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Lightbulb,
    title: "IT Consultancy",
    description:
      "Strategic technology advisory and digital infrastructure planning for sustainable business growth.",
    link: "/services",
  },
  {
    icon: Bot,
    title: "AI Automation",
    description:
      "Intelligent workflow automation, AI agents, and data-driven decision tools for operational excellence.",
    link: "/ai-solutions",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description:
      "Brand strategy, growth marketing, and sales funnel optimization to accelerate your revenue.",
    link: "/services",
  },
  {
    icon: Code,
    title: "Software Development",
    description:
      "Custom web, mobile, and enterprise applications built with modern technologies.",
    link: "/services",
  },
  {
    icon: Rocket,
    title: "Startup & SME Solutions",
    description:
      "Business structuring, tech enablement, and automation readiness for growing companies.",
    link: "/services",
  },
  {
    icon: GraduationCap,
    title: "Training & Innovation",
    description:
      "Digital skills training, AI workshops, and startup incubation programs.",
    link: "/services",
  },
];

export function ServicesSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-semibold mb-4">Our Services</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
            Comprehensive Solutions for{" "}
            <span className="gradient-text">Modern Businesses</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From strategic consulting to hands-on implementation, we provide end-to-end 
            technology solutions that drive real business results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Link
              key={service.title}
              to={service.link}
              className="group p-8 bg-card rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 gradient-bg rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon size={28} className="text-primary-foreground" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <span className="inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                Learn more <ArrowRight size={16} />
              </span>
            </Link>
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
