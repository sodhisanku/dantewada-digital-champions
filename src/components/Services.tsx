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
  Shield
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Modern, responsive websites and web applications built with the latest technologies.",
      features: ["React & Next.js", "E-commerce Solutions", "Custom CMS", "SEO Optimized"],
      color: "bg-primary"
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Cross-platform mobile applications using React Native and Flutter for iOS and Android.",
      features: ["React Native", "Flutter", "iOS & Android", "App Store Deployment"],
      color: "bg-accent"
    },
    {
      icon: Database,
      title: "ERP & CRM Systems",
      description: "Custom business management solutions to streamline your operations and boost productivity.",
      features: ["Custom ERP", "CRM Solutions", "Inventory Management", "Reporting & Analytics"],
      color: "bg-secondary"
    },
    {
      icon: Settings,
      title: "IT Consultancy",
      description: "Strategic technology guidance to help your business make informed digital decisions.",
      features: ["Digital Strategy", "Technology Assessment", "System Architecture", "Process Optimization"],
      color: "bg-primary"
    },
    {
      icon: Headphones,
      title: "Technical Support",
      description: "Ongoing maintenance and support to keep your systems running smoothly 24/7.",
      features: ["24/7 Support", "System Maintenance", "Bug Fixes", "Performance Monitoring"],
      color: "bg-accent"
    }
  ];

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
            Complete Digital Solutions
            <span className="block text-primary">For Your Business</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From concept to deployment, we provide comprehensive technology services 
            to help your business thrive in the digital world.
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
                  
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors duration-300">
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
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {["React", "Node.js", "Flutter", "MongoDB", "AWS", "Firebase"].map((tech, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-border">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div className="font-semibold text-foreground">{tech}</div>
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