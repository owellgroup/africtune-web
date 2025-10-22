import TopNav from "@/components/TopNav";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Target, Users, Award, Heart } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To empower African artists by ensuring they receive every cent they deserve from their creative work through transparent and efficient royalty collection."
    },
    {
      icon: Users,
      title: "Our Team",
      description: "A dedicated group of music industry professionals, technology experts, and passionate advocates for artists' rights across Africa."
    },
    {
      icon: Award,
      title: "Our Commitment",
      description: "Excellence in service delivery, transparency in operations, and unwavering dedication to protecting artists' intellectual property rights."
    },
    {
      icon: Heart,
      title: "Our Values",
      description: "Integrity, innovation, and inclusivity drive everything we do. We believe every artist deserves fair compensation for their work."
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
            About Africtune
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Leading the revolution in music royalty collection across Africa
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Our Story</h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Africtune was founded with a simple yet powerful vision: to ensure every African artist receives fair compensation for their creative work. We recognized that countless talented artists were losing revenue due to inadequate tracking and collection systems.
              </p>
              <p>
                Our advanced technology platform monitors music plays across radio stations, television channels, and digital platforms throughout Africa. We combine cutting-edge audio recognition technology with comprehensive database management to track every instance of your music being played.
              </p>
              <p>
                By partnering with broadcasters, streaming services, and content platforms, we've created a transparent ecosystem where artists can see exactly when and where their music is played, and receive timely payments for their work.
              </p>
              <p>
                Today, we serve thousands of artists across the continent, processing millions of plays and distributing royalties efficiently and transparently. Our commitment to artist empowerment drives us to continuously improve our services and expand our reach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-card p-8 rounded-lg shadow-lg hover-lift">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                  <value.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-8">
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
