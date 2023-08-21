import AboutSection from "./AboutSection";
import Founder from "./Founder";
import GetInTouch from "../shared/GetInTouch";
import Hero from "./Hero";
import Showcase from "./Showcase";
import Community from "../shared/Community";

const LandingPage = () => {
  return (
    <section className="bg-[#94edfc bg-[#35e1ff] min-h-screen pt-[11.5rem] md:pt-[5rem] overflow-x-hidden border-b-[1.5px] border-b-black">
      <Hero />
      <AboutSection />
      <Founder />
      <Showcase />
      <Community />
      <GetInTouch />
    </section>
  );
};

export default LandingPage;
