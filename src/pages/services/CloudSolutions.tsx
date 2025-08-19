import { ArrowLeft, Cloud, Shield, Target, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CloudSolutions = () => {
  const navigate = useNavigate();

  const features = [
    "Cloud Migration Services",
    "AWS & Azure Implementation",
    "Serverless Architecture",
    "Cloud Security Solutions",
    "Auto-scaling Infrastructure",
    "Cost Optimization",
    "Disaster Recovery Plans",
    "Multi-cloud Management"
  ];

  const benefits = [
    { title: "Scalability", description: "Scale your infrastructure up or down based on demand" },
    { title: "Cost Efficiency", description: "Pay only for what you use with optimized cloud resources" },
    { title: "Enhanced Security", description: "Enterprise-grade security with cloud-native solutions" },
    { title: "Global Reach", description: "Deploy applications worldwide with cloud providers" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-cyan-600 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button
            variant="outline"
            onClick={() => navigate('/')}
            className="mb-8 text-white border-white hover:bg-white hover:text-primary"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Services
          </Button>
          
          <div className="max-w-4xl">
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-4 bg-white/20 rounded-2xl">
                <Cloud className="h-12 w-12" />
              </div>
              <div>
                <h1 className="text-5xl md:text-6xl font-bold mb-4">
                  Cloud Solutions
                </h1>
                <p className="text-xl text-cyan-100">
                  Scalable, secure, and cost-effective cloud infrastructure
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Cloud Services We Offer
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Complete cloud transformation services to modernize your infrastructure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <CheckCircle className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-semibold text-foreground">{feature}</h3>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <Card className="p-12 bg-gradient-to-r from-cyan-50 to-blue-50">
              <CardContent className="p-0">
                <Cloud className="h-16 w-16 text-primary mx-auto mb-6" />
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  Ready to Move to the Cloud?
                </h3>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Let us help you migrate to the cloud and optimize your infrastructure for the future.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" onClick={() => window.location.href = 'mailto:codebastersolutions@gmail.com'}>
                    Start Cloud Journey
                  </Button>
                  <Button variant="outline" size="lg" onClick={() => window.location.href = 'tel:6268409259'}>
                    Cloud Consultation
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CloudSolutions;