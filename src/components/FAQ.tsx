import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HelpCircle, ArrowRight } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "What is the typical timeline for a project?",
      answer: "Project timelines vary based on complexity. A simple website takes 2-4 weeks, while custom software solutions can take 2-6 months. We provide detailed timelines during our initial consultation and keep you updated throughout the development process."
    },
    {
      question: "How much do your services cost?",
      answer: "Our pricing is competitive and transparent. We offer different packages based on project scope - from ₹25,000 for basic websites to ₹5,00,000+ for complex ERP systems. We provide detailed quotes after understanding your requirements."
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer: "Yes! We offer 6 months of free support after project delivery, including bug fixes and minor updates. We also provide annual maintenance contracts for ongoing support, updates, and enhancements."
    },
    {
      question: "Can you work with clients outside Dantewada?",
      answer: "Absolutely! While we're based in Dantewada, we work with clients across India and internationally. We use modern communication tools to ensure seamless collaboration regardless of location."
    },
    {
      question: "Do you sign NDAs and ensure data security?",
      answer: "Yes, we take data security very seriously. We sign NDAs for all projects and follow industry-standard security practices. Your data is encrypted, backed up securely, and never shared with third parties."
    },
    {
      question: "What technologies do you specialize in?",
      answer: "We specialize in modern web technologies like React, Node.js, Python, and cloud platforms like AWS. For mobile apps, we use React Native and Flutter. We choose the best technology stack based on your specific needs."
    },
    {
      question: "Do you provide training for the systems you build?",
      answer: "Yes! We provide comprehensive training sessions for all team members who will use the system. We also create user manuals and provide video tutorials to ensure smooth adoption."
    },
    {
      question: "Can you integrate with existing systems?",
      answer: "Definitely! We have experience integrating with various third-party systems, payment gateways, CRM platforms, and legacy systems. We ensure seamless data flow between all your business tools."
    },
    {
      question: "What if I need changes after the project is completed?",
      answer: "We welcome feedback and changes! Minor adjustments are included in our support period. For major feature additions, we provide quick quotes and can implement changes rapidly."
    },
    {
      question: "How do you handle project communication?",
      answer: "We believe in transparent communication. You'll receive regular updates via WhatsApp, email, or video calls. We also provide access to project management tools where you can track progress in real-time."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-secondary/10 rounded-full px-6 py-2 mb-6">
            <HelpCircle className="h-5 w-5 text-secondary" />
            <span className="text-secondary font-medium">FAQ</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Frequently Asked
            <span className="block text-secondary">Questions</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Get answers to common questions about our services, processes, pricing, and support. 
            Can't find what you're looking for? Contact us directly!
          </p>
        </div>

        {/* FAQ Accordion */}
        <Card className="p-8 border-border shadow-card bg-white mb-12">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>

        {/* Contact CTA */}
        <Card className="p-8 md:p-12 bg-gradient-warm text-white text-center border-0">
          <h3 className="text-3xl font-bold mb-4">
            Still Have Questions?
          </h3>
          <p className="text-xl opacity-90 mb-8 max-w-xl mx-auto">
            We're here to help! Contact us directly and we'll get back to you within 2 hours 
            during business hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="glass" size="lg">
              Contact Us Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="bg-white text-secondary border-white hover:bg-white/90">
              Schedule a Call
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default FAQ;