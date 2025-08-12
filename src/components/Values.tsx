import { Card } from "@/components/ui/card";
import { 
  Heart, 
  Lightbulb, 
  Users, 
  Award, 
  Handshake,
  Target
} from "lucide-react";

const Values = () => {
  const values = [
    {
      icon: Heart,
      title: "Integrity",
      description: "We believe in honest communication, transparent processes, and ethical business practices in everything we do.",
      color: "bg-primary"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We constantly explore new technologies and creative solutions to solve complex problems for our clients.",
      color: "bg-secondary"
    },
    {
      icon: Users,
      title: "Customer Centricity",
      description: "Your success is our priority. We listen, understand, and deliver solutions that exceed expectations.",
      color: "bg-accent"
    },
    {
      icon: Award,
      title: "Quality First",
      description: "We never compromise on quality. Every line of code, every design element is crafted with precision.",
      color: "bg-primary"
    },
    {
      icon: Handshake,
      title: "Teamwork & Collaboration",
      description: "We work as one team with our clients, fostering open communication and collaborative problem-solving.",
      color: "bg-secondary"
    }
  ];

  return (
    <section id="values" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-6 py-2 mb-6">
            <Target className="h-5 w-5 text-primary" />
            <span className="text-primary font-medium">Our Values</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What Drives Us
            <span className="block text-primary">Every Single Day</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            At CodeBaster Solutions, we believe in integrity, innovation, and putting our customers first. 
            We build solutions that are not only technically excellent but also ethical and sustainable.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <Card key={index} className="group p-8 border-border shadow-card hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2 bg-white">
                <div className="text-center">
                  <div className={`inline-flex p-4 rounded-2xl ${value.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-8 w-8" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Values;