import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <img src={logo} alt="Africtune" className="h-14 md:h-16 mb-4" />
            <p className="text-sm text-muted-foreground">
              Empowering African artists through transparent and efficient royalty collection.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-accent">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-colors">Services</Link></li>
              <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/how-to-register" className="hover:text-accent transition-colors">How to Register</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-accent">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/track-performance" className="hover:text-accent transition-colors">Track Performance</Link></li>
              <li><Link to="/royalty-collection" className="hover:text-accent transition-colors">Royalty Collection</Link></li>
              <li><a href="https://www.namsa.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Apply for License</a></li>
              <li><a href="https://portal.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Login / Register</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-accent">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>123 Music Street, Windhoek, Namibia</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@africtune.com" className="hover:text-accent transition-colors">info@africtune.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+264812320168" className="hover:text-accent transition-colors">+264 812 320 168</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Africtune. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-accent transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              <Youtube className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
