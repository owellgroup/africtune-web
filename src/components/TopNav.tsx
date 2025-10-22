import { Mail, Phone } from "lucide-react";

const TopNav = () => {
  return (
    <div className="bg-primary text-primary-foreground py-2 px-4 md:px-8">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-sm">
        <div className="flex items-center gap-2">
          <Mail className="h-4 w-4" />
          <a href="mailto:info@africtune.com" className="hover:text-accent transition-colors">
            info@africtune.com
          </a>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="h-4 w-4" />
          <a href="tel:+264812320168" className="hover:text-accent transition-colors">
            +264 812 320 168
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
