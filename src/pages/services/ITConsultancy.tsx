import { ArrowLeft, Users, Lightbulb, Target, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ITConsultancy = () => {
  const navigate = useNavigate();

  const features = [
    "Digital Transformation Strategy",
    "Technology Assessment & Audit",
    "System Architecture Design",
    "Process Optimization",
    "IT Governance & Compliance",
    "Risk Management",
    "Vendor Selection & Management",
    "Technology Roadmap Planning"
  ];

  const benefits = [
    { title: "Strategic Guidance", description: "Expert advice on technology decisions and digital strategy" },
    { title: "Cost Optimization", description: "Reduce IT costs while improving efficiency and performance" },
    { title: "Risk Mitigation", description: "Identify and address potential technology risks proactively" },
    { title: "Future Readiness", description: "Prepare your business for emerging technologies and trends" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-indigo-600 to-purple-700 text-white overflow-hidden">
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
                <Users className="h-12 w-12" />
              </div>
              <div>
                <h1 className="text-5xl md:text-6xl font-bold mb-4">
                  IT Consultancy
                </h1>
                <p className="text-xl text-indigo-100">
                  Strategic technology guidance for digital transformation
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
              Consultancy Services We Provide
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Expert technology consulting to guide your business through digital transformation
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
                      <Lightbulb className="h-6 w-6 text-primary" />
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
            <Card className="p-12 bg-gradient-to-r from-indigo-50 to-purple-50">
              <CardContent className="p-0">
                <Users className="h-16 w-16 text-primary mx-auto mb-6" />
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  Need Strategic IT Guidance?
                </h3>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Let our experts help you navigate the complex world of technology and digital transformation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" onClick={() => window.location.href = 'mailto:codebastersolutions@gmail.com'}>
                    Get Expert Advice
                  </Button>
                  <Button variant="outline" size="lg" onClick={() => window.location.href = 'tel:6268409259'}>
                    Schedule Consultation
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

export default ITConsultancy;