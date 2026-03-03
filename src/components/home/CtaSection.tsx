import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";

export function CtaSection() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="gradient-dark-bg rounded-3xl p-8 md:p-12 lg:p-16 text-center relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Let's discuss how our technology solutions and automation expertise 
              can help your business grow and scale efficiently.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button variant="hero" size="xl" className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90" asChild>
                <Link to="/contact">
                  Book a Consultation
                  <ArrowRight size={20} />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/services">Learn More</Link>
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 justify-center text-primary-foreground/80">
              <a href="tel:+2347085818980" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
                <Phone size={18} />
                <span>+234(0)7085818980</span>
              </a>
              <a href="mailto:info@creanovatech.com.ng" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
                <Mail size={18} />
                <span>info@creanovatech.com.ng</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
