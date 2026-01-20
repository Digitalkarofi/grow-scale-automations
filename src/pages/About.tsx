import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Target,
  Eye,
  Heart,
  Users,
  Lightbulb,
  Shield,
  Rocket,
} from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Constantly exploring new technologies and approaches to solve complex business challenges.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "Building trust through transparency, honesty, and ethical business practices.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working as true partners with our clients to achieve shared success.",
  },
  {
    icon: Rocket,
    title: "Excellence",
    description: "Delivering high-quality solutions that exceed expectations every time.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-hero-bg section-padding">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-primary font-semibold mb-4">About Us</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
              Empowering Businesses Through{" "}
              <span className="gradient-text">Technology & Innovation</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Creanova Technologies Limited is more than an IT company — we're your 
              strategic partner in digital transformation, automation, and sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary font-semibold mb-4">Our Story</p>
              <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">
                A Vision for Business Transformation
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded with a mission to bridge the gap between technology and business growth, 
                  Creanova Technologies Limited has evolved into a trusted partner for startups, 
                  SMEs, enterprises, and government institutions.
                </p>
                <p>
                  We recognized that many businesses struggle to leverage technology effectively — 
                  not for lack of solutions, but for lack of strategic guidance and practical implementation.
                </p>
                <p>
                  That's why we combine strategy, creativity, technology, and AI-powered automation 
                  to deliver measurable results that truly impact our clients' bottom line.
                </p>
              </div>
            </div>
            <div className="bg-card rounded-3xl p-8 shadow-card border border-border">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-muted rounded-2xl">
                  <p className="text-4xl font-display font-bold text-primary mb-2">5+</p>
                  <p className="text-sm text-muted-foreground">Years of Excellence</p>
                </div>
                <div className="text-center p-6 bg-muted rounded-2xl">
                  <p className="text-4xl font-display font-bold text-primary mb-2">100+</p>
                  <p className="text-sm text-muted-foreground">Projects Delivered</p>
                </div>
                <div className="text-center p-6 bg-muted rounded-2xl">
                  <p className="text-4xl font-display font-bold text-primary mb-2">50+</p>
                  <p className="text-sm text-muted-foreground">Happy Clients</p>
                </div>
                <div className="text-center p-6 bg-muted rounded-2xl">
                  <p className="text-4xl font-display font-bold text-primary mb-2">10+</p>
                  <p className="text-sm text-muted-foreground">Team Members</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-muted/50">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-3xl p-8 shadow-card border border-border">
              <div className="w-14 h-14 gradient-bg rounded-xl flex items-center justify-center mb-6">
                <Target size={28} className="text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To empower businesses of all sizes to achieve sustainable growth through 
                strategic technology adoption, intelligent automation, and innovative solutions 
                that deliver measurable results.
              </p>
            </div>
            <div className="bg-card rounded-3xl p-8 shadow-card border border-border">
              <div className="w-14 h-14 gradient-bg rounded-xl flex items-center justify-center mb-6">
                <Eye size={28} className="text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To become Africa's leading business growth and automation partner, driving 
                digital transformation and innovation across industries while fostering 
                a thriving technology ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-primary font-semibold mb-4">Our Values</p>
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">
              The Principles That Guide Us
            </h2>
            <p className="text-muted-foreground">
              Our core values shape every decision we make and every solution we deliver.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="text-center p-8 bg-card rounded-2xl border border-border hover:border-primary/30 transition-all hover:shadow-card"
              >
                <div className="w-14 h-14 gradient-bg rounded-xl flex items-center justify-center mx-auto mb-6">
                  <value.icon size={28} className="text-primary-foreground" />
                </div>
                <h3 className="text-xl font-display font-semibold mb-3">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-muted/50">
        <div className="container-wide text-center">
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">
            Ready to Partner with Us?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help your business grow through technology and innovation.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">
              Get in Touch
              <ArrowRight size={20} />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;
