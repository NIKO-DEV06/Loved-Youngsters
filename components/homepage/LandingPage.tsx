import AboutSection from "./AboutSection";
import Founder from "./Founder";
import Hero from "./Hero";
import Showcase from "./Showcase";

const LandingPage = () => {
  return (
    <section className="bg-[#94edfc] min-h-screen pt-[11.5rem] md:pt-[5rem]">
      <Hero />
      <AboutSection />
      <Founder />
      <Showcase />
    </section>
  );
};

export default LandingPage;
