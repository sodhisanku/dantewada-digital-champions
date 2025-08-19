import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { 
  Mail, 
  Phone, 
  Globe, 
  MapPin, 
  Send,
  MessageSquare,
  Clock,
  Users
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: '',
    description: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.phone || !formData.description) {
      toast({
        title: "Required fields missing",
        description: "Please fill in all required fields (Name, Email, Phone, Project Description)",
        variant: "destructive",
      });
      return;
    }

    // Create email content
    const emailSubject = `New Project Inquiry from ${formData.name}`;
    const emailBody = `
Hello CodeBaster Solutions Team,

You have received a new project inquiry from your website:

📋 CLIENT DETAILS:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

📝 PROJECT INFORMATION:
Service Type: ${formData.projectType || 'Not specified'}

Project Description:
${formData.description}

---
This inquiry was submitted through your website contact form.
Please respond within 24 hours as per your service commitment.

Best regards,
Website Contact System
    `.trim();

    // Open email client with pre-filled content
    const mailtoLink = `mailto:codebastersolutions@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    window.open(mailtoLink, '_blank');
    
    toast({
      title: "Email client opened!",
      description: "Your message has been prepared. Please send it from your email client.",
    });

    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      projectType: '',
      description: ''
    });
  };

  const contactInfo = [
    {
      icon: Globe,
      title: "Website",
      value: "www.codebastersolutions.com",
      link: "https://www.codebastersolutions.com"
    },
    {
      icon: Mail,
      title: "Email",
      value: "codebastersolutions@gmail.com",
      link: "mailto:codebastersolutions@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 6268409259",
      link: "tel:+916268409259"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Dantewada, Chhattisgarh",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-6 py-2 mb-6">
            <MessageSquare className="h-5 w-5 text-primary" />
            <span className="text-primary font-medium">Get In Touch</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Let's Build Something
            <span className="block text-primary">Amazing Together</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business with cutting-edge technology? 
            We're here to help you every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 border-border shadow-card">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Send us a Message</h3>
              <p className="text-muted-foreground">
                Tell us about your project and we'll get back to you within 24 hours.
              </p>
            </div>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Name *
                  </label>
                  <Input 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name" 
                    className="border-border"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone *
                  </label>
                  <Input 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91-9876543210" 
                    className="border-border"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email *
                </label>
                <Input 
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com" 
                  className="border-border"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Project Type
                </label>
                <select 
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select a service</option>
                  <option value="AI & Machine Learning">🤖 AI & Machine Learning</option>
                  <option value="Data Analytics & BI">📊 Data Analytics & BI</option>
                  <option value="Cloud Solutions">☁️ Cloud Solutions</option>
                  <option value="Cognitive Business Operations">🎯 Cognitive Business Operations</option>
                  <option value="IT Consultancy">👥 IT Consultancy</option>
                  <option value="Business Intelligence">📈 Business Intelligence</option>
                  <option value="Web Development">🌐 Web Development</option>
                  <option value="Mobile App Development">📱 Mobile App Development</option>
                  <option value="ERP/CRM System">⚙️ ERP/CRM System</option>
                  <option value="Other">💡 Other (Specify in description)</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Project Description *
                </label>
                <Textarea 
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Tell us about your project requirements, timeline, budget range, and any specific features you need..."
                  rows={4}
                  className="border-border"
                  required
                />
              </div>
              
              <Button 
                type="submit"
                variant="hero" 
                size="lg" 
                className="w-full hover:scale-105 transition-transform"
              >
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </Button>
              
              <p className="text-sm text-muted-foreground text-center">
                * We'll respond to your inquiry within 24 hours
              </p>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <Card key={index} className="p-6 border-border shadow-card hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <div className="p-3 bg-primary/10 rounded-xl">
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      
                      <div>
                        <div className="text-sm font-medium text-muted-foreground">{info.title}</div>
                        <a 
                          href={info.link}
                          className="text-foreground font-semibold hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Support Hours */}
            <Card className="p-8 bg-gradient-warm text-white border-0">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Clock className="h-8 w-8" />
                </div>
                
                <div>
                  <h4 className="text-xl font-bold mb-4">Support Hours</h4>
                  <div className="space-y-2 text-white/90">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span>9:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span>10:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span>Emergency Support Only</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-white/10 rounded-lg border border-white/20">
                    <div className="flex items-center space-x-2 mb-2">
                      <Users className="h-5 w-5" />
                      <span className="font-semibold">24/7 Emergency Support</span>
                    </div>
                    <p className="text-sm text-white/80">
                      For critical issues, we provide round-the-clock support to keep your business running.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Quick Response Promise */}
            <Card className="p-6 border-primary/20 bg-primary/5">
              <div className="text-center">
                <div className="inline-flex p-3 bg-primary/10 rounded-full mb-4">
                  <MessageSquare className="h-8 w-8 text-primary" />
                </div>
                
                <h4 className="text-xl font-bold text-foreground mb-2">Quick Response Promise</h4>
                <p className="text-muted-foreground">
                  We respond to all inquiries within <strong>24 hours</strong>, 
                  and emergency support requests within <strong>2 hours</strong>.
                </p>
              </div>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Ready to Start Your Digital Journey?
          </h3>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join the growing community of businesses in Dantewada who trust CodeBaster Solutions 
            for their digital transformation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => window.open('mailto:codebastersolutions@gmail.com?subject=Free Consultation Request', '_blank')}
              className="hover:scale-105 transition-transform"
            >
              Schedule Free Consultation
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => window.open('mailto:codebastersolutions@gmail.com?subject=Brochure Request', '_blank')}
              className="hover:scale-105 transition-transform"
            >
              Download Our Brochure
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;