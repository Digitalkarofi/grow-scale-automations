import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "FinTech Platform Automation",
    category: "AI Automation",
    description:
      "Implemented end-to-end workflow automation for a leading fintech startup, reducing manual processes by 75%.",
    image: "gradient-bg",
    tags: ["AI", "Automation", "FinTech"],
  },
  {
    title: "E-commerce Growth Platform",
    category: "Digital Marketing",
    description:
      "Complete digital transformation including e-commerce development and marketing automation for an SME.",
    image: "gradient-bg",
    tags: ["E-commerce", "Marketing", "Growth"],
  },
  {
    title: "Government Digital Services",
    category: "Web Development",
    description:
      "Developed a citizen services portal with integrated payment systems for a government institution.",
    image: "gradient-bg",
    tags: ["Government", "Web", "Integration"],
  },
  {
    title: "Startup Incubator Platform",
    category: "Software Development",
    description:
      "Built a comprehensive platform for startup incubation including mentorship matching and progress tracking.",
    image: "gradient-bg",
    tags: ["Startup", "Platform", "Innovation"],
  },
  {
    title: "AI Customer Service Bot",
    category: "AI Solutions",
    description:
      "Deployed an intelligent chatbot handling 80% of customer inquiries for a retail company.",
    image: "gradient-bg",
    tags: ["AI", "Chatbot", "Customer Service"],
  },
  {
    title: "Enterprise CRM Integration",
    category: "Automation",
    description:
      "Integrated multiple business systems into a unified CRM with automated workflows.",
    image: "gradient-bg",
    tags: ["CRM", "Integration", "Enterprise"],
  },
];

const Portfolio = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-hero-bg section-padding">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-primary font-semibold mb-4">Our Portfolio</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
              Projects That Drive{" "}
              <span className="gradient-text">Real Results</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our work across industries — from startups to enterprises, 
              we've delivered solutions that transform businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-card transition-all"
              >
                <div className={`aspect-video ${project.image} relative`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl font-display font-bold text-primary-foreground opacity-30">
                      {index + 1}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-primary font-medium mb-2">
                    {project.category}
                  </p>
                  <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 bg-secondary text-secondary-foreground rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
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
            Have a Project in Mind?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how we can bring your vision to life with our expertise 
            in technology, automation, and innovation.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">
              Start Your Project
              <ArrowRight size={20} />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
