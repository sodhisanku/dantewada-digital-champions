import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  DollarSign, 
  Languages, 
  Eye, 
  Shield, 
  Users,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: MapPin,
      title: "100% Local Development",
      description: "All projects are developed by homegrown talent from Dantewada, supporting our local community.",
      highlight: "Supporting Local Economy"
    },
    {
      icon: DollarSign,
      title: "Affordable Quality Services",
      description: "Premium software solutions at prices that make sense for local businesses and startups.",
      highlight: "Best Value for Money"
    },
    {
      icon: Languages,
      title: "Bilingual Support",
      description: "Communicate with us in Hindi or English - whatever makes you most comfortable.",
      highlight: "हिंदी और English में सपोर्ट"
    },
    {
      icon: Eye,
      title: "Transparent Communication",
      description: "Clear project updates, honest timelines, and no hidden costs. You always know where we stand.",
      highlight: "Complete Transparency"
    },
    {
      icon: Shield,
      title: "Strong Data Security",
      description: "Your data is protected with industry-standard security measures and strict confidentiality.",
      highlight: "Bank-Level Security"
    },
    {
      icon: Users,
      title: "Community Partnership",
      description: "We're not just service providers - we're your neighbors who understand local business needs.",
      highlight: "Local Understanding"
    }
  ];

  const benefits = [
    "Direct communication with developers",
    "No middleman or outsourcing",
    "Quick response times",
    "Local market understanding",
    "Long-term partnership approach",
    "Post-launch support guaranteed"
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-gradient-feature">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-secondary/10 rounded-full px-6 py-2 mb-6">
            <CheckCircle className="h-5 w-5 text-secondary" />
            <span className="text-secondary font-medium">Why Choose Us</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Your Local Partner for
            <span className="block text-secondary">Digital Success</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Because we are not just your IT service provider — we are your local partner 
            who understands your business and grows with you.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <Card key={index} className="group p-8 border-border shadow-card hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2 bg-white">
                <div className="mb-6">
                  <div className="inline-flex p-3 bg-secondary/10 rounded-xl mb-4">
                    <IconComponent className="h-8 w-8 text-secondary" />
                  </div>
                  
                  <div className="inline-block bg-secondary/10 text-secondary text-sm font-medium px-3 py-1 rounded-full mb-3">
                    {reason.highlight}
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3">{reason.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-2xl shadow-card p-8 md:p-12 border border-border">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                What You Get When You
                <span className="block text-primary">Choose CodeBaster</span>
              </h3>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Experience the difference of working with a truly local tech partner 
                who puts your success first.
              </p>
              
              <Button 
                variant="hero" 
                size="lg" 
                className="mb-8 hover:scale-105 transition-transform"
                onClick={() => window.open('mailto:codebastersolutions@gmail.com?subject=Project Inquiry', '_blank')}
              >
                Start Your Project Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-warm rounded-2xl p-8 md:p-12 text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h3>
          
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join dozens of local businesses who trust CodeBaster Solutions 
            for their digital transformation journey.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="glass" 
              size="lg"
              onClick={() => window.open('mailto:codebastersolutions@gmail.com?subject=Free Consultation Request', '_blank')}
              className="hover:scale-105 transition-transform"
            >
              Schedule a Free Consultation
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-white text-secondary border-white hover:bg-white/90 hover:scale-105 transition-all"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Our Portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;