import TopNav from "@/components/TopNav";
import Navigation from "@/components/Navigation";
import ScrollingText from "@/components/ScrollingText";
import HeroCarousel from "@/components/HeroCarousel";
import Footer from "@/components/Footer";
import { Music, TrendingUp, Shield, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const features = [
    {
      icon: Music,
      title: "Music Rights Management",
      description: "Comprehensive tracking and management of your music across all platforms and channels."
    },
    {
      icon: TrendingUp,
      title: "Performance Analytics",
      description: "Real-time insights into your music's performance and earnings across Africa."
    },
    {
      icon: Shield,
      title: "Secure Payments",
      description: "Transparent and timely royalty payments directly to your account."
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Dedicated support team ready to assist you with any queries or concerns."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <TopNav />
      <Navigation />
      <ScrollingText />
      <HeroCarousel />
      
      {/* Features Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gradient">
              Why Choose Africtune?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The most trusted music royalty collection system for African artists
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="hover-lift border-2 border-transparent hover:border-accent transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of African artists who are already collecting their rightful royalties
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

export default Index;
