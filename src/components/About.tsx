import { Card } from "@/components/ui/card";
import { Target, Users, Shield, Lightbulb } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Users,
      title: "Local Talent",
      description: "We believe in empowering our community by nurturing local tech talent and creating opportunities right here in Dantewada."
    },
    {
      icon: Shield,
      title: "Trust & Quality",
      description: "Every project is built with transparency, strong data security, and a commitment to delivering reliable solutions."
    },
    {
      icon: Target,
      title: "Your Success",
      description: "We don't just provide services – we become your digital partner, understanding your business and growing alongside you."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Combining cutting-edge technology with local insights to create solutions that truly serve our community's needs."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-feature">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-6 py-2 mb-6">
            <Users className="h-5 w-5 text-primary" />
            <span className="text-primary font-medium">About CodeBaster</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Where Local Talent Becomes
            <span className="block text-primary">Digital Champions</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            CodeBaster Solutions is more than a software company. We're a passionate startup dedicated to 
            transforming local talent into digital leaders while delivering world-class solutions to our clients.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-white rounded-2xl shadow-card p-8 md:p-12 mb-16 border border-border">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-foreground mb-6">Our Mission</h3>
            <p className="text-2xl text-primary font-semibold leading-relaxed">
              "To empower local youth by delivering high-quality, trustworthy software products 
              tailored to meet your business needs."
            </p>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <Card key={index} className="p-8 text-center border-border shadow-card hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 bg-primary/10 rounded-2xl">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                </div>
                
                <h4 className="text-xl font-bold text-foreground mb-4">{value.title}</h4>
                
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </Card>
            );
          })}
        </div>

        {/* What Makes Us Special */}
        <div className="mt-20 bg-gradient-warm rounded-2xl p-8 md:p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">What Makes Us Special</h3>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              We're not just another tech company – we're your neighbors, your community partners, 
              and your digital transformation allies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="opacity-90">Locally Developed</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">Affordable</div>
              <div className="opacity-90">Quality Services</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">Bilingual</div>
              <div className="opacity-90">Hindi & English</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">Transparent</div>
              <div className="opacity-90">Communication</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;