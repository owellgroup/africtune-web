import TopNav from "@/components/TopNav";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Radio, Tv, Database, FileSearch, CheckCircle, DollarSign } from "lucide-react";

const RoyaltyCollection = () => {
  const steps = [
    {
      icon: Radio,
      title: "Broadcasting Monitoring",
      description: "Our advanced audio recognition technology continuously monitors radio and TV broadcasts across Africa, identifying every play of registered music."
    },
    {
      icon: FileSearch,
      title: "Play Identification",
      description: "When your music is played, our system instantly identifies it using sophisticated fingerprinting technology and logs the details including date, time, station, and duration."
    },
    {
      icon: Database,
      title: "Data Aggregation",
      description: "All play data is collected, verified, and aggregated in our central database, creating a comprehensive record of your music's broadcast history."
    },
    {
      icon: CheckCircle,
      title: "Rights Verification",
      description: "We cross-reference play data with our artist database to verify rights ownership and calculate the appropriate royalty payments for each play."
    },
    {
      icon: DollarSign,
      title: "Payment Processing",
      description: "Monthly royalty statements are generated and payments are processed directly to your registered bank account or preferred payment method."
    }
  ];

  const partners = [
    {
      type: "Radio Stations",
      count: "300+",
      description: "Major and community radio stations across Africa"
    },
    {
      type: "TV Channels",
      count: "150+",
      description: "National and regional television broadcasters"
    },
    {
      type: "Digital Platforms",
      count: "50+",
      description: "Streaming services and online content providers"
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
            How We Collect Royalties
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Advanced technology and extensive partnerships ensure you receive every cent you deserve
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Collection Process</h2>
            <p className="text-lg text-muted-foreground">
              Africtune uses cutting-edge technology combined with strategic partnerships to track and collect 
              royalties from every source. Here's how we ensure no play goes unaccounted for:
            </p>
          </div>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="bg-card p-6 md:p-8 rounded-lg shadow-lg hover-lift">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 flex-shrink-0">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-accent font-bold text-lg">Step {index + 1}</span>
                      <h3 className="text-2xl font-bold">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-lg">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Networks */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Partner Network</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We've established partnerships with hundreds of broadcasters and content providers across the continent
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {partners.map((partner, index) => (
              <div key={index} className="bg-card p-8 rounded-lg shadow-lg text-center hover-lift">
                <div className="text-5xl font-bold text-accent mb-2">{partner.count}</div>
                <h3 className="text-xl font-bold mb-2">{partner.type}</h3>
                <p className="text-muted-foreground">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Advanced Technology</h2>
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-3">Audio Fingerprinting</h3>
                <p className="text-muted-foreground">
                  Our proprietary audio recognition system creates unique digital fingerprints for each registered 
                  song, allowing instant identification even in noisy environments or with compressed audio quality.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-3">24/7 Monitoring</h3>
                <p className="text-muted-foreground">
                  Automated monitoring systems work around the clock, scanning broadcasts from all partner stations 
                  and platforms simultaneously to ensure comprehensive coverage.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-3">Automated Payments</h3>
                <p className="text-muted-foreground">
                  Our payment system automatically calculates and processes royalties based on verified play data, 
                  ensuring timely and accurate payments every month.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Complete Transparency</h2>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            Every play is documented and available in your dashboard. You can see exactly when, where, and how many 
            times your music was played, along with the corresponding royalty amount. No hidden fees, no surprises - 
            just fair, transparent compensation for your work.
          </p>
          <a
            href="https://portal.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded-lg font-bold hover:bg-accent/90 transition-colors"
          >
            Start Collecting Royalties
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RoyaltyCollection;
