import TopNav from "@/components/TopNav";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Music, Radio, Tv, Globe, Database, FileText } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Radio,
      title: "Radio Royalty Collection",
      description: "We monitor and collect royalties from radio stations across Africa whenever your music is played. Our advanced tracking system ensures no play goes unaccounted for.",
      features: ["Real-time monitoring", "Comprehensive coverage", "Automated collection"]
    },
    {
      icon: Tv,
      title: "TV Royalty Collection",
      description: "Track and collect royalties from television broadcasts, including music videos, background music, and theme songs across all major TV channels.",
      features: ["Multi-channel tracking", "Video content monitoring", "Sync licensing support"]
    },
    {
      icon: Globe,
      title: "Digital Platform Tracking",
      description: "Monitor your music's performance across digital streaming platforms and collect royalties from online plays, downloads, and user-generated content.",
      features: ["Streaming platforms", "Download stores", "Social media tracking"]
    },
    {
      icon: Database,
      title: "Comprehensive Database",
      description: "Maintain a complete database of your music catalog with detailed metadata, ensuring accurate identification and royalty collection.",
      features: ["Catalog management", "Metadata optimization", "Rights documentation"]
    },
    {
      icon: FileText,
      title: "Detailed Reporting",
      description: "Receive comprehensive reports on your music's performance, including play counts, earnings, and geographic distribution.",
      features: ["Monthly statements", "Performance analytics", "Custom reports"]
    },
    {
      icon: Music,
      title: "Artist Profile Management",
      description: "Create and manage your professional artist profile with all necessary documentation for seamless royalty collection.",
      features: ["Profile verification", "Document management", "Payment setup"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <TopNav />
      <Navigation />
      
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gradient">
            Our Services
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Comprehensive music royalty collection services designed to maximize your earnings and protect your rights
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover-lift border-2 border-transparent hover:border-accent transition-all duration-300">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                    <service.icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4 text-base">{service.description}</CardDescription>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Started Today</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Let us handle your royalty collection while you focus on creating great music
          </p>
          <a
            href="https://portal.africtune.ggff.net/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded-lg font-bold hover:bg-accent/90 transition-colors"
          >
            Register Now
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
