import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Users, Heart } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Local tech talent collaborating" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-accent/70"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8 flex justify-center">
          <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 border border-white/30">
            <Heart className="h-5 w-5 text-secondary animate-glow" />
            <span className="text-white font-medium">100% Local • 100% Trusted</span>
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Start Your <span className="bg-gradient-to-r from-secondary to-secondary/80 bg-clip-text text-transparent">Success Journey</span> Today
        </h1>
        
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Transform your business with cutting-edge technology solutions. We specialize in Full-Stack Development, 
          AI Integration, ERP Solutions, Data Analytics, and Modern Web Applications that drive growth and innovation.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/20 transition-all">
            <div className="text-2xl font-bold text-secondary mb-2">🚀</div>
            <div className="text-sm text-white/90 font-medium">Full-Stack Development</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/20 transition-all">
            <div className="text-2xl font-bold text-secondary mb-2">🤖</div>
            <div className="text-sm text-white/90 font-medium">AI & Automation</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/20 transition-all">
            <div className="text-2xl font-bold text-secondary mb-2">📊</div>
            <div className="text-sm text-white/90 font-medium">Data Analytics</div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Button 
            variant="hero" 
            size="lg" 
            className="text-lg px-8 py-4 hover:scale-105 transition-transform"
            onClick={() => window.open('mailto:codebastersolutions@gmail.com?subject=Project Inquiry', '_blank')}
          >
            Start Your Project
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          <Button 
            variant="glass" 
            size="lg" 
            className="text-lg px-8 py-4 hover:scale-105 transition-transform"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Our Work
          </Button>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="flex justify-center mb-3">
              <Code className="h-8 w-8 text-secondary animate-float" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">100%</div>
            <div className="text-white/80">Local Development</div>
          </div>
          
          <div className="text-center">
            <div className="flex justify-center mb-3">
              <Users className="h-8 w-8 text-secondary animate-float" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">50+</div>
            <div className="text-white/80">Happy Clients</div>
          </div>
          
          <div className="text-center">
            <div className="flex justify-center mb-3">
              <Heart className="h-8 w-8 text-secondary animate-float" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">24/7</div>
            <div className="text-white/80">Local Support</div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;