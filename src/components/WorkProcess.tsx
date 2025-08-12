import { Card } from "@/components/ui/card";
import { 
  Search, 
  Palette, 
  Code, 
  TestTube, 
  Rocket,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const WorkProcess = () => {
  const processSteps = [
    {
      icon: Search,
      title: "Requirement Gathering",
      description: "Understanding your requirements carefully",
      details: [
        "Business needs analysis",
        "User requirements documentation",
        "Technical feasibility study",
        "Project scope definition"
      ],
      color: "bg-primary"
    },
    {
      icon: Palette,
      title: "Design & Prototyping", 
      description: "Designing user-friendly interfaces",
      details: [
        "UI/UX wireframes",
        "Interactive prototypes",
        "User experience testing",
        "Design system creation"
      ],
      color: "bg-secondary"
    },
    {
      icon: Code,
      title: "Development",
      description: "Agile development with regular updates",
      details: [
        "Clean, scalable code",
        "Regular progress updates",
        "Version control management",
        "Code review processes"
      ],
      color: "bg-accent"
    },
    {
      icon: TestTube,
      title: "Testing & Quality Assurance",
      description: "Rigorous testing before deployment",
      details: [
        "Functional testing",
        "Performance optimization",
        "Security testing",
        "User acceptance testing"
      ],
      color: "bg-primary"
    },
    {
      icon: Rocket,
      title: "Deployment & Support",
      description: "Ongoing support and maintenance",
      details: [
        "Production deployment",
        "Performance monitoring",
        "User training sessions",
        "24/7 technical support"
      ],
      color: "bg-secondary"
    }
  ];

  return (
    <section id="work-process" className="py-20 bg-gradient-feature">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-6 py-2 mb-6">
            <CheckCircle className="h-5 w-5 text-white" />
            <span className="text-white font-medium">Our Work Process</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How We Turn Your Ideas
            <span className="block">Into Digital Reality</span>
          </h2>
          
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Our proven 5-step process ensures your project is delivered on time, 
            within budget, and exceeds your expectations.
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-8 mb-16">
          {processSteps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <Card key={index} className="group p-8 border-border shadow-card hover:shadow-elegant transition-all duration-300 bg-white">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  <div className="lg:col-span-1">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="flex-shrink-0">
                        <div className={`inline-flex p-3 rounded-xl ${step.color} text-white`}>
                          <IconComponent className="h-8 w-8" />
                        </div>
                      </div>
                      <div className="flex-shrink-0 text-3xl font-bold text-muted-foreground">
                        {(index + 1).toString().padStart(2, '0')}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-foreground mb-3">{step.title}</h3>
                    <p className="text-muted-foreground text-lg">{step.description}</p>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                          <span className="text-foreground">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {index < processSteps.length - 1 && (
                  <div className="flex justify-center mt-8">
                    <ArrowRight className="h-6 w-6 text-primary" />
                  </div>
                )}
              </Card>
            );
          })}
        </div>

        {/* Why Invest In Us */}
        <Card className="p-8 md:p-12 bg-white border-border shadow-card">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Invest In Us?
            </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Growing demand for digital transformation in local markets creates endless opportunities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Proven team with local expertise",
              "Cost-effective solutions without compromising quality", 
              "Transparent communication & strict data privacy",
              "Growing demand for digital transformation in local markets"
            ].map((reason, index) => (
              <div key={index} className="text-center p-6 bg-primary/5 rounded-lg border border-primary/10">
                <CheckCircle className="h-8 w-8 text-primary mx-auto mb-3" />
                <p className="text-foreground font-medium">{reason}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default WorkProcess;