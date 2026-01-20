import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Lightbulb,
  Bot,
  TrendingUp,
  Code,
  Rocket,
  GraduationCap,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    icon: Lightbulb,
    title: "IT Consultancy & Digital Transformation",
    description:
      "Strategic technology advisory to help your business navigate the digital landscape and achieve operational excellence.",
    features: [
      "Business process analysis and optimization",
      "Technology advisory for SMEs, startups, and government",
      "Digital infrastructure planning",
      "IT strategy and implementation",
    ],
  },
  {
    icon: Bot,
    title: "AI Automation Services",
    description:
      "Leverage intelligent automation to streamline operations, reduce costs, and enhance customer experiences.",
    features: [
      "Workflow automation for businesses",
      "AI agents for customer support, sales, and operations",
      "CRM automation and integrations",
      "Marketing automation systems",
    ],
    highlight: true,
    link: "/ai-solutions",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing & Business Growth",
    description:
      "Comprehensive marketing solutions to build your brand, generate leads, and accelerate revenue growth.",
    features: [
      "Brand strategy and positioning",
      "Digital marketing campaigns",
      "Sales funnel design and optimization",
      "Social media marketing and advertising",
    ],
  },
  {
    icon: Code,
    title: "Software, Web & App Development",
    description:
      "Custom software solutions built with modern technologies to power your business operations.",
    features: [
      "Custom software development",
      "Business management systems",
      "Web design and development",
      "E-commerce and mobile app development",
    ],
  },
  {
    icon: Rocket,
    title: "Startup, SME & Enterprise Solutions",
    description:
      "Tailored solutions for businesses at every stage, from early-stage startups to established enterprises.",
    features: [
      "Business structuring and growth strategy",
      "Automation readiness for SMEs",
      "Tech enablement for startups",
      "Corporate digital solutions",
    ],
  },
  {
    icon: GraduationCap,
    title: "Training, Innovation & Ecosystem Programs",
    description:
      "Empowering the next generation of innovators through education and community-driven initiatives.",
    features: [
      "Digital skills training",
      "AI & emerging tech workshops",
      "Startup incubation and acceleration",
      "Community tech empowerment initiatives",
    ],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-hero-bg section-padding">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-primary font-semibold mb-4">Our Services</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
              End-to-End Solutions for{" "}
              <span className="gradient-text">Business Growth</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From strategic consulting to hands-on implementation, we provide comprehensive 
              technology solutions that drive real, measurable business results.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid lg:grid-cols-2 gap-8 items-center p-8 rounded-3xl border ${
                  service.highlight
                    ? "bg-secondary/50 border-primary/20"
                    : "bg-card border-border"
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-14 h-14 gradient-bg rounded-xl flex items-center justify-center mb-6">
                    <service.icon size={28} className="text-primary-foreground" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-display font-bold mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  {service.link ? (
                    <Button variant="hero" asChild>
                      <Link to={service.link}>
                        Learn More
                        <ArrowRight size={18} />
                      </Link>
                    </Button>
                  ) : (
                    <Button variant="outline" asChild>
                      <Link to="/contact">
                        Get Started
                        <ArrowRight size={18} />
                      </Link>
                    </Button>
                  )}
                </div>
                <div className={`bg-muted/50 rounded-2xl p-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <h4 className="font-semibold mb-4">Key Offerings:</h4>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-primary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-muted/50">
        <div className="container-wide text-center">
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Every business is unique. Let's discuss your specific needs and create 
            a tailored solution that fits your goals.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">
              Book a Consultation
              <ArrowRight size={20} />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
