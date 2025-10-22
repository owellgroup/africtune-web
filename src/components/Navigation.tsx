import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About Us", path: "/about" },
    { name: "How to Register", path: "/how-to-register" },
    { name: "Track Performance", path: "/track-performance" },
    { name: "Royalty Collection", path: "/royalty-collection" },
  ];

  return (
    <nav className="bg-secondary text-secondary-foreground sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo - Left */}
          <div className="flex items-center">
            <Link to="/">
              <img src={logo} alt="Africtune" className="h-16 md:h-20 w-auto" />
            </Link>
          </div>

          {/* Center Menu - Desktop */}
          <div className="hidden lg:flex items-center gap-6 justify-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-sm font-semibold tracking-wide uppercase hover:text-accent transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <a href="https://www.namsa.com" target="_blank" rel="noopener noreferrer">
              <Button variant="default" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Apply for License
              </Button>
            </a>
            <a href="https://portal.com" target="_blank" rel="noopener noreferrer">
              <Button variant="default" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Login / Register
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-secondary-foreground"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-sm font-medium hover:text-accent transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <a href="https://www.namsa.com" target="_blank" rel="noopener noreferrer">
              <Button variant="default" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                Apply for License
              </Button>
            </a>
            <a href="https://portal.com" target="_blank" rel="noopener noreferrer">
              <Button variant="default" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                Login / Register
              </Button>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
