import { ArrowLeft, BarChart3, TrendingUp, Target, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const DataAnalytics = () => {
  const navigate = useNavigate();

  const features = [
    "Advanced Data Visualization",
    "Predictive Analytics Models",
    "Real-time Business Dashboards", 
    "Statistical Analysis & Reporting",
    "Data Mining & Pattern Recognition",
    "Customer Behavior Analytics",
    "Performance Metrics & KPIs",
    "Custom BI Solutions"
  ];

  const benefits = [
    { title: "Data-Driven Decisions", description: "Make informed decisions based on comprehensive data insights" },
    { title: "Improved ROI", description: "Optimize investments and resources through analytical insights" },
    { title: "Market Understanding", description: "Gain deep insights into market trends and customer behavior" },
    { title: "Operational Excellence", description: "Streamline operations through data-driven optimizations" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-600 to-teal-700 text-white overflow-hidden">
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
                <BarChart3 className="h-12 w-12" />
              </div>
              <div>
                <h1 className="text-5xl md:text-6xl font-bold mb-4">
                  Data Analytics & BI
                </h1>
                <p className="text-xl text-green-100">
                  Unlock the power of your data with advanced analytics
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
              Analytics Solutions We Provide
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive data analytics and business intelligence services to drive growth
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
                      <TrendingUp className="h-6 w-6 text-primary" />
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
            <Card className="p-12 bg-gradient-to-r from-green-50 to-teal-50">
              <CardContent className="p-0">
                <BarChart3 className="h-16 w-16 text-primary mx-auto mb-6" />
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  Ready to Unlock Your Data's Potential?
                </h3>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Transform your raw data into actionable insights that drive business growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" onClick={() => window.location.href = 'mailto:codebastersolutions@gmail.com'}>
                    Start Analytics Journey
                  </Button>
                  <Button variant="outline" size="lg" onClick={() => window.location.href = 'tel:6268409259'}>
                    Discuss Your Needs
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

export default DataAnalytics;