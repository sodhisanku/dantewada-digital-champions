import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Globe, 
  Smartphone, 
  Database, 
  Headphones, 
  Settings,
  ArrowRight,
  Code2,
  Layers,
  Shield,
  Brain,
  BarChart3,
  Cloud,
  Target,
  Users,
  TrendingUp
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();
  
  const services = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Transform your business with cutting-edge AI solutions and intelligent automation systems.",
      features: ["AI Prompt Engineering", "Machine Learning Models", "Natural Language Processing", "Computer Vision"],
      color: "bg-primary",
      slug: "ai-machine-learning",
      backgroundImage: "bg-gradient-to-br from-blue-600 to-purple-700"
    },
    {
      icon: BarChart3,
      title: "Data Analytics & BI",
      description: "Unlock insights from your data with advanced analytics and business intelligence solutions.",
      features: ["Data Visualization", "Predictive Analytics", "Real-time Dashboards", "Business Intelligence"],
      color: "bg-accent",
      slug: "data-analytics",
      backgroundImage: "bg-gradient-to-br from-green-600 to-teal-700"
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services for modern business operations.",
      features: ["Cloud Migration", "AWS/Azure Services", "Serverless Architecture", "Cloud Security"],
      color: "bg-secondary",
      slug: "cloud-solutions",
      backgroundImage: "bg-gradient-to-br from-cyan-600 to-blue-700"
    },
    {
      icon: Target,
      title: "Cognitive Business Operations",
      description: "Intelligent process automation and cognitive computing for enhanced business efficiency.",
      features: ["Process Automation", "Cognitive Computing", "Workflow Optimization", "Smart Operations"],
      color: "bg-primary",
      slug: "cognitive-operations",
      backgroundImage: "bg-gradient-to-br from-orange-600 to-red-700"
    },
    {
      icon: Users,
      title: "IT Consultancy",
      description: "Strategic technology guidance and digital transformation consulting for your business growth.",
      features: ["Digital Strategy", "Technology Assessment", "System Architecture", "Process Optimization"],
      color: "bg-accent",
      slug: "it-consultancy",
      backgroundImage: "bg-gradient-to-br from-indigo-600 to-purple-700"
    },
    {
      icon: TrendingUp,
      title: "Business Intelligence",
      description: "Advanced BI solutions to drive data-driven decisions and business growth strategies.",
      features: ["KPI Dashboards", "Data Warehousing", "Performance Analytics", "Strategic Insights"],
      color: "bg-secondary",
      slug: "business-intelligence",
      backgroundImage: "bg-gradient-to-br from-emerald-600 to-green-700"
    }
  ];

  const handleServiceClick = (slug: string) => {
    navigate(`/services/${slug}`);
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-6 py-2 mb-6">
            <Code2 className="h-5 w-5 text-primary" />
            <span className="text-primary font-medium">Our Services</span>
          </div>
          
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Transform Your Business
            <span className="block text-primary">With Advanced Technologies</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Leverage AI, Data Analytics, Cloud Computing, and Cognitive Business Operations 
            to drive innovation and accelerate your digital transformation journey.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group p-8 border-border shadow-card hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-5 transform translate-x-8 -translate-y-8">
                  <IconComponent className="w-full h-full" />
                </div>
                
                <div className="relative z-10">
                  <div className="mb-6">
                    <div className={`inline-flex p-4 rounded-2xl ${service.color} text-white mb-4`}>
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-white transition-colors duration-300"
                    onClick={() => handleServiceClick(service.slug)}
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Technology Stack */}
        <div className="bg-muted rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-6 py-2 mb-6">
              <Layers className="h-5 w-5 text-primary" />
              <span className="text-primary font-medium">Technology Stack</span>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Built with Modern Technologies
            </h3>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We use cutting-edge tools and frameworks to ensure your project is scalable, 
              secure, and future-ready.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              "JavaScript", "Python", "React.js", "Next.js", "Express.js", "Django",
              "Flask", "Frappe Framework", "ERPNext", "Tailwind CSS", "Supabase", 
              "Data Analytics", "AI Prompt Engineering", "Excel", "App Script", "Web Scraping"
            ].map((tech, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-300 border border-border group hover:border-primary/20">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg mx-auto mb-2 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <div className="font-semibold text-foreground text-sm">{tech}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;