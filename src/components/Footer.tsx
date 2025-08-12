import { Button } from "@/components/ui/button";
import { 
  Code2, 
  Mail, 
  Phone, 
  Globe, 
  MapPin,
  Heart,
  ArrowRight,
  Facebook,
  Twitter,
  Linkedin,
  Instagram
} from "lucide-react";

const Footer = () => {
  const services = [
    "Web Development",
    "Mobile Apps",
    "ERP & CRM Systems",
    "IT Consultancy",
    "Technical Support"
  ];

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Our Services", href: "#services" },
    { name: "Why Choose Us", href: "#why-choose-us" },
    { name: "Contact", href: "#contact" },
    { name: "Portfolio", href: "#portfolio" }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" }
  ];

  return (
    <footer className="bg-gradient-to-br from-foreground to-foreground/90 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="p-2 bg-gradient-hero rounded-lg">
                <Code2 className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold">CodeBaster</div>
                <div className="text-sm text-white/80">Solutions</div>
              </div>
            </div>
            
            <p className="text-white/80 mb-6 leading-relaxed">
              Empowering local talent from Dantewada and turning them into digital champions. 
              We transform your ideas into reliable, cutting-edge solutions.
            </p>
            
            <div className="flex items-center space-x-2 text-secondary">
              <Heart className="h-5 w-5" />
              <span className="font-medium">Made in Dantewada with Love</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#services" className="text-white/80 hover:text-secondary transition-colors flex items-center group">
                    <ArrowRight className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-white/80 hover:text-secondary transition-colors flex items-center group">
                    <ArrowRight className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6">Get In Touch</h3>
            <div className="space-y-4">
              <a href="mailto:contact@codebaster.in" className="flex items-center space-x-3 text-white/80 hover:text-secondary transition-colors group">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span>contact@codebaster.in</span>
              </a>
              
              <a href="tel:+919876543210" className="flex items-center space-x-3 text-white/80 hover:text-secondary transition-colors group">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span>+91-9876543210</span>
              </a>
              
              <a href="https://www.codebaster.in" className="flex items-center space-x-3 text-white/80 hover:text-secondary transition-colors group">
                <Globe className="h-5 w-5 flex-shrink-0" />
                <span>www.codebaster.in</span>
              </a>
              
              <div className="flex items-center space-x-3 text-white/80">
                <MapPin className="h-5 w-5 flex-shrink-0" />
                <span>Dantewada, Chhattisgarh</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-4 text-white/60">Follow Us</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="p-2 bg-white/10 rounded-lg hover:bg-secondary transition-colors group"
                    >
                      <IconComponent className="h-5 w-5 group-hover:scale-110 transition-transform" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated with Our Latest News</h3>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Get insights about technology trends, local success stories, and exclusive offers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
              />
              <Button variant="warm" size="lg">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/60 text-sm">
              © 2024 CodeBaster Solutions. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-white/60">
              <a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-secondary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-secondary transition-colors">Cookie Policy</a>
            </div>
          </div>
          
          <div className="mt-4 text-center text-xs text-white/40">
            <span className="flex items-center justify-center space-x-1">
              <span>Where local talent becomes a digital champion!</span>
              <Heart className="h-3 w-3 text-secondary animate-pulse" />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;