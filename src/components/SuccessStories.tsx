import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  DollarSign, 
  Clock, 
  Star,
  ArrowRight,
  Quote
} from "lucide-react";

const SuccessStories = () => {
  const stories = [
    {
      title: "Trendify E-commerce Platform",
      client: "Modern Online Retailer",
      description: "Built a modern, all-in-one e-commerce solution designed to streamline online selling, manage inventory, and enhance customer experience with responsive design.",
      results: [
        { icon: TrendingUp, label: "Sales Growth", value: "+180%" },
        { icon: DollarSign, label: "Revenue Increase", value: "+120%" },
        { icon: Clock, label: "Order Processing", value: "-65%" }
      ],
      testimonial: "The Trendify platform revolutionized our online business. The inventory management and customer experience features have significantly boosted our sales.",
      author: "Business Owner"
    },
    {
      title: "Library Management System",
      client: "Educational Institution",
      description: "Developed a comprehensive library management system using Frappe Framework to efficiently manage books, members, and issue-return workflows.",
      results: [
        { icon: TrendingUp, label: "Efficiency Gain", value: "+250%" },
        { icon: Clock, label: "Processing Time", value: "-80%" },
        { icon: Star, label: "User Satisfaction", value: "98%" }
      ],
      testimonial: "The library system built by CodeBaster has completely transformed how we manage our books and members. Everything is now digital and efficient.",
      author: "Librarian"
    },
    {
      title: "Local Manufacturing ERP",
      client: "Bastar Handicrafts Pvt Ltd",
      description: "Implemented a custom ERP solution for inventory management, order processing, and financial tracking.",
      results: [
        { icon: DollarSign, label: "Cost Reduction", value: "-40%" },
        { icon: TrendingUp, label: "Productivity", value: "+120%" },
        { icon: Clock, label: "Order Processing", value: "-60%" }
      ],
      testimonial: "Our handicraft business is now completely organized. We can track everything from raw materials to final delivery.",
      author: "Mohan Das, Managing Director"
    }
  ];

  return (
    <section id="success-stories" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-secondary/10 rounded-full px-6 py-2 mb-6">
            <Star className="h-5 w-5 text-secondary" />
            <span className="text-secondary font-medium">Success Stories</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Real Results for
            <span className="block text-secondary">Real Businesses</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            See how we've helped local businesses transform their operations and achieve 
            remarkable growth through our digital solutions.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="space-y-12">
          {stories.map((story, index) => (
            <Card key={index} className="p-8 md:p-12 border-border shadow-card bg-white">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-block bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full mb-4">
                    {story.client}
                  </div>
                  
                  <h3 className="text-3xl font-bold text-foreground mb-4">{story.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-8">{story.description}</p>
                  
                  {/* Results */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                    {story.results.map((result, resultIndex) => {
                      const IconComponent = result.icon;
                      return (
                        <div key={resultIndex} className="text-center p-4 bg-primary/5 rounded-lg border border-primary/10">
                          <IconComponent className="h-6 w-6 text-primary mx-auto mb-2" />
                          <div className="text-2xl font-bold text-primary mb-1">{result.value}</div>
                          <div className="text-sm text-muted-foreground">{result.label}</div>
                        </div>
                      );
                    })}
                  </div>
                  
                  <Button variant="outline">
                    View Full Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                
                <div className="bg-gradient-feature p-8 rounded-2xl">
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  <blockquote className="text-lg text-foreground mb-6 leading-relaxed italic">
                    "{story.testimonial}"
                  </blockquote>
                  <cite className="text-muted-foreground font-medium">— {story.author}</cite>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Card className="p-8 md:p-12 bg-gradient-warm text-white border-0">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Be Our Next Success Story?
            </h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Join the growing list of local businesses that have transformed their operations with our solutions.
            </p>
            <Button variant="glass" size="lg">
              Start Your Success Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;