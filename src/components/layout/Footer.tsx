import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";
import logo from "@/assets/logo-clean.png";

const footerLinks = {
  company: [
    { name: "About Us", path: "/about" },
    { name: "Our Team", path: "/about" },
    { name: "Careers", path: "/contact" },
    { name: "Contact", path: "/contact" },
  ],
  services: [
    { name: "IT Consultancy", path: "/services" },
    { name: "AI Automation", path: "/ai-solutions" },
    { name: "Digital Marketing", path: "/services" },
    { name: "Software Development", path: "/services" },
  ],
  solutions: [
    { name: "Startup Solutions", path: "/services" },
    { name: "SME Solutions", path: "/services" },
    { name: "Enterprise", path: "/services" },
    { name: "Government", path: "/services" },
  ],
};

export function Footer() {
  return (
    <footer className="gradient-dark-bg text-primary-foreground">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center mb-6">
              <img 
                src={logo} 
                alt="Creanova Technologies Limited" 
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-primary-foreground/70 mb-6 max-w-sm">
              Your Business Growth & Automation Partner. Helping businesses automate, grow, and scale through technology, AI, and innovation.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/creanova-technologies-limited/?lipi=urn%3Ali%3Apage%3Ad_flagship3_detail_base%3B5JT1%2FyGKT4ub4m0MNq7K3w%3D%3D"
                target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://x.com/Creanovalab"
                target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://www.facebook.com/share/17qKdsvjrr/"
                target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-primary-foreground/70">
                <MapPin size={18} className="shrink-0 mt-0.5" />
                <span>Katsina, Nigeria</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Mail size={18} />
                <span>info@creanovatech.com.ng</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Phone size={18} />
                <span>+234(0)7085818980</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Creanova Technologies Limited. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-primary-foreground/60">
            <Link to="/privacy" className="hover:text-primary-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-primary-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
