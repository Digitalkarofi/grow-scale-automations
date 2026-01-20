import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Bot,
  Zap,
  MessageSquare,
  BarChart3,
  Workflow,
  Users,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const solutions = [
  {
    icon: Workflow,
    title: "Workflow Automation",
    description:
      "Automate repetitive tasks and streamline business processes to boost productivity and reduce operational costs.",
  },
  {
    icon: MessageSquare,
    title: "AI Customer Support",
    description:
      "Deploy intelligent chatbots and AI agents that provide 24/7 customer support with human-like interactions.",
  },
  {
    icon: BarChart3,
    title: "Sales & CRM Automation",
    description:
      "Automate your sales pipeline, lead scoring, and CRM workflows to close deals faster.",
  },
  {
    icon: Zap,
    title: "Marketing Automation",
    description:
      "Create automated marketing campaigns, email sequences, and personalized customer journeys.",
  },
  {
    icon: Users,
    title: "AI Agents for Operations",
    description:
      "Intelligent agents that handle complex operational tasks, from scheduling to data processing.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Decision Tools",
    description:
      "Leverage AI analytics to gain insights and make smarter, data-backed business decisions.",
  },
];

const benefits = [
  "Reduce operational costs by up to 60%",
  "24/7 availability without human intervention",
  "Scale operations without increasing headcount",
  "Eliminate human errors in repetitive tasks",
  "Faster response times and improved customer satisfaction",
  "Real-time insights and predictive analytics",
];

const AISolutions = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-hero-bg section-padding relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="container-wide relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-8">
              <Sparkles size={16} className="text-primary" />
              <span>AI-Powered Solutions</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
              Intelligent Automation for{" "}
              <span className="gradient-text">Modern Business</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Transform your operations with AI agents, workflow automation, and intelligent 
              systems that work 24/7 to grow your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Get AI Solutions
                  <ArrowRight size={20} />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/services">All Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-primary font-semibold mb-4">Our AI Solutions</p>
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">
              Automation That Drives Results
            </h2>
            <p className="text-muted-foreground">
              From customer-facing AI to backend automation, we implement intelligent 
              solutions that transform how your business operates.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution) => (
              <div
                key={solution.title}
                className="p-8 bg-card rounded-2xl border border-border hover:border-primary/30 transition-all hover:shadow-card group"
              >
                <div className="w-14 h-14 gradient-bg rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <solution.icon size={28} className="text-primary-foreground" />
                </div>
                <h3 className="text-xl font-display font-semibold mb-3">
                  {solution.title}
                </h3>
                <p className="text-muted-foreground">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-muted/50">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary font-semibold mb-4">Why AI Automation?</p>
              <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">
                Transform Your Business with{" "}
                <span className="gradient-text">Intelligent Systems</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                AI automation isn't just about efficiency — it's about unlocking new 
                possibilities for growth, customer experience, and competitive advantage.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckCircle2 size={22} className="text-primary shrink-0 mt-0.5" />
                    <span className="font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card rounded-3xl p-8 shadow-card border border-border">
              <div className="text-center mb-8">
                <Bot size={48} className="text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-display font-bold mb-2">
                  Ready to Automate?
                </h3>
                <p className="text-muted-foreground">
                  Let's identify the best automation opportunities for your business.
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-secondary/50">
                  <p className="font-semibold mb-1">Free Automation Audit</p>
                  <p className="text-sm text-muted-foreground">
                    We'll analyze your workflows and identify automation opportunities.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-secondary/50">
                  <p className="font-semibold mb-1">Custom Implementation</p>
                  <p className="text-sm text-muted-foreground">
                    Tailored AI solutions designed for your specific business needs.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-secondary/50">
                  <p className="font-semibold mb-1">Ongoing Support</p>
                  <p className="text-sm text-muted-foreground">
                    Continuous optimization and maintenance for peak performance.
                  </p>
                </div>
              </div>

              <Button variant="hero" className="w-full mt-6" size="lg" asChild>
                <Link to="/contact">
                  Book Free Consultation
                  <ArrowRight size={18} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AISolutions;
