import TopNav from "@/components/TopNav";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { BarChart3, TrendingUp, MapPin, Calendar, DollarSign, Music } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const TrackPerformance = () => {
  const features = [
    {
      icon: BarChart3,
      title: "Real-Time Analytics",
      description: "Monitor your music's performance with live updates showing plays, reach, and engagement across all platforms."
    },
    {
      icon: TrendingUp,
      title: "Performance Trends",
      description: "View historical data and trends to understand how your music performs over time and identify peak periods."
    },
    {
      icon: MapPin,
      title: "Geographic Insights",
      description: "See where your music is played most, helping you identify key markets and plan tours effectively."
    },
    {
      icon: Calendar,
      title: "Play Schedules",
      description: "Track when and how often your songs are played on different radio and TV stations."
    },

    {
      icon: Music,
      title: "Catalog Performance",
      description: "Compare performance across your entire music catalog to identify your most successful tracks."
    }
  ];

  const dashboardFeatures = [
    "Detailed play counts by song, station, and date",
    "Revenue projections based on current performance",
    "Peak listening times and days",
    "Audience demographic insights",
    "Platform comparison analytics",
    "Monthly and annual performance reports",
    "Export data for further analysis",
    "Custom alerts for milestone achievements"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <TopNav />
      <Navigation />
      
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gradient">
            Track Your Performance
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Comprehensive analytics and insights to help you understand and maximize your music's success
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Powerful Artist Dashboard</h2>
            <p className="text-lg text-muted-foreground">
              Our advanced artist dashboard gives you complete visibility into your music's performance. 
              Track every play, monitor your earnings, and gain insights that help you make informed decisions 
              about your music career.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover-lift border-2 border-transparent hover:border-accent transition-all duration-300">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                    <feature.icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Features */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Dashboard Features</h2>
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="text-2xl">What You Can Track</CardTitle>
                <CardDescription className="text-base">
                  Access comprehensive metrics and analytics through your personalized artist dashboard
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {dashboardFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">How Performance Tracking Works</h2>
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-3">1. Automatic Data Collection</h3>
                <p className="text-muted-foreground">
                  Our system automatically monitors and records every instance of your music being played across 
                  all registered radio stations, TV channels, and digital platforms.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-3">2. Real-Time Processing</h3>
                <p className="text-muted-foreground">
                  Data is processed and updated in real-time, ensuring you always have access to the most current 
                  information about your music's performance.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-3">3. Instant Dashboard Updates</h3>
                <p className="text-muted-foreground">
                  Log in to your dashboard anytime to view updated analytics, track earnings, and download reports. 
                  Set up custom alerts to stay informed about important milestones.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Tracking Your Success</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Register now and gain access to powerful analytics that help you grow your music career
          </p>
          <a
            href="https://portal.africtune.ggff.net/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded-lg font-bold hover:bg-accent/90 transition-colors"
          >
            Access Your Dashboard
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TrackPerformance;
