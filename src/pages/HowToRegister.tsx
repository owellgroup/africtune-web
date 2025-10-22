import TopNav from "@/components/TopNav";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { UserPlus, FileText, CreditCard, CheckCircle, Wallet } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const HowToRegister = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Step 1: Create Your Account",
      description: "Visit our portal and sign up with your email address. You'll receive a verification email to activate your account.",
      details: ["Valid email address required", "Choose a strong password", "Verify your email within 24 hours"]
    },
    {
      icon: FileText,
      title: "Step 2: Complete Your Profile",
      description: "Fill in your artist information and upload required documents to verify your identity and music ownership.",
      details: [
        "Personal information (Name, Stage Name, Contact Details)",
        "Upload passport photo or ID document",
        "Provide music catalog details",
        "Upload proof of music ownership (contracts, certificates)"
      ]
    },
    {
      icon: CreditCard,
      title: "Step 3: Submit Payment",
      description: "Pay the one-time profile approval fee to activate your royalty collection services.",
      details: [
        "Profile Approval Fee: R500 (once-off)",
        "Choose your payment method below",
        "Upload proof of payment"
      ]
    },
    {
      icon: CheckCircle,
      title: "Step 4: Verification & Approval",
      description: "Our team will review your profile and documents within 3-5 business days. You'll receive email notifications about your application status.",
      details: [
        "Document verification",
        "Payment confirmation",
        "Profile approval notification",
        "Access to full platform features"
      ]
    }
  ];

  const paymentMethods = [
    {
      icon: CreditCard,
      title: "Bank Deposit",
      details: [
        "Bank: First National Bank (FNB)",
        "Account Name: Africtune (Pty) Ltd",
        "Account Number: 123456789",
        "Branch Code: 250655",
        "Reference: Your Email Address"
      ]
    },
    {
      icon: Wallet,
      title: "E-Wallet Options",
      details: [
        "Easy Wallet: Send to +264 812 320 168",
        "Blue Wallet: Send to +264 812 320 168",
        "Use your email as reference",
        "Take a screenshot of the transaction"
      ]
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
            How to Register
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Follow these simple steps to start collecting your music royalties
          </p>
        </div>
      </section>

      {/* Registration Steps */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <Card key={index} className="hover-lift">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 flex-shrink-0">
                      <step.icon className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl mb-2">{step.title}</CardTitle>
                      <CardDescription className="text-base">{step.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 ml-[4.5rem]">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Payment Methods</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {paymentMethods.map((method, index) => (
              <Card key={index} className="hover-lift">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <method.icon className="h-6 w-6 text-primary" />
                    <CardTitle className="text-xl">{method.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {method.details.map((detail, idx) => (
                      <li key={idx} className="text-sm">
                        <span className="font-medium">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-lg font-semibold text-primary mb-4">
              Important: Upload your proof of payment when creating your profile
            </p>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              After making payment, take a clear photo or screenshot of your payment confirmation and upload it in the "Proof of Payment" section of your profile.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Create your account now and start your journey to collecting your music royalties
          </p>
          <a
            href="https://portal.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded-lg font-bold hover:bg-accent/90 transition-colors"
          >
            Create Account
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowToRegister;
