import AboutSection from "./AboutSection";
import Founder from "./Founder";
import Hero from "./Hero";

const LandingPage = () => {
  return (
    <section className="bg-[#94edfc] min-h-screen pt-[11.5rem] md:pt-[5rem]">
      <Hero />
      <AboutSection />
      <Founder />
    </section>
  );
};

export default LandingPage;
