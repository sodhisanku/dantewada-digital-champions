import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Linkedin, 
  Github, 
  Mail,
  Code,
  Palette,
  Database,
  Smartphone
} from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Amit Kumar",
      role: "Founder & Lead Developer",
      bio: "Full-stack developer with 5+ years of experience. Passionate about empowering local youth through technology.",
      skills: ["React", "Node.js", "Python", "AWS"],
      image: "/placeholder.svg",
      icon: Code,
      social: {
        linkedin: "#",
        github: "#",
        email: "amit@codebaster.in"
      }
    },
    {
      name: "Priya Sharma",
      role: "UI/UX Designer",
      bio: "Creative designer focused on user-centered design. Believes in making technology accessible to everyone.",
      skills: ["Figma", "Adobe XD", "User Research", "Prototyping"],
      image: "/placeholder.svg", 
      icon: Palette,
      social: {
        linkedin: "#",
        github: "#",
        email: "priya@codebaster.in"
      }
    },
    {
      name: "Rajesh Patel",
      role: "Backend Developer",
      bio: "Database and server architecture specialist. Expert in building scalable and secure backend systems.",
      skills: ["Node.js", "MongoDB", "PostgreSQL", "Docker"],
      image: "/placeholder.svg",
      icon: Database,
      social: {
        linkedin: "#",
        github: "#", 
        email: "rajesh@codebaster.in"
      }
    },
    {
      name: "Sneha Verma",
      role: "Mobile App Developer",
      bio: "Mobile development expert specializing in cross-platform apps. Passionate about creating seamless user experiences.",
      skills: ["React Native", "Flutter", "iOS", "Android"],
      image: "/placeholder.svg",
      icon: Smartphone,
      social: {
        linkedin: "#",
        github: "#",
        email: "sneha@codebaster.in"
      }
    }
  ];

  return (
    <section id="team" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-6 py-2 mb-6">
            <Users className="h-5 w-5 text-primary" />
            <span className="text-primary font-medium">Meet the Team</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            The Talented Minds
            <span className="block text-primary">Behind Your Success</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Meet our passionate team of local developers, designers, and technology enthusiasts 
            who are dedicated to bringing your digital vision to life.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {teamMembers.map((member, index) => {
            const IconComponent = member.icon;
            return (
              <Card key={index} className="group p-6 border-border shadow-card hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2 bg-white">
                <div className="text-center">
                  {/* Profile Image Placeholder */}
                  <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <IconComponent className="h-12 w-12 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{member.bio}</p>
                  
                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 justify-center mb-4">
                    {member.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  {/* Social Links */}
                  <div className="flex justify-center space-x-3">
                    <Button variant="outline" size="sm" className="p-2">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm" className="p-2">
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm" className="p-2">
                      <Mail className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Company Culture */}
        <Card className="p-8 md:p-12 bg-gradient-feature text-white border-0">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Join Our Growing Team
            </h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              We're always looking for passionate local talent to join our mission of 
              digital transformation in Dantewada and beyond.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {[
              {
                title: "Remote-First Culture",
                description: "Work from anywhere while staying connected with the team"
              },
              {
                title: "Learning & Growth",
                description: "Continuous learning opportunities and skill development programs"
              },
              {
                title: "Local Impact",
                description: "Be part of transforming local businesses and community"
              }
            ].map((culture, index) => (
              <div key={index} className="text-center">
                <h4 className="text-xl font-bold mb-2">{culture.title}</h4>
                <p className="opacity-90">{culture.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Button variant="glass" size="lg">
              View Open Positions
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Team;