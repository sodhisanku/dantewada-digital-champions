import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Values from "@/components/Values";
import Services from "@/components/Services";
import SuccessStories from "@/components/SuccessStories";
import WorkProcess from "@/components/WorkProcess";
import Team from "@/components/Team";
import WhyChooseUs from "@/components/WhyChooseUs";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section id="home">
          <Hero />
        </section>
        <About />
        <Values />
        <Services />
        <SuccessStories />
        <WorkProcess />
        <Team />
        <WhyChooseUs />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
