import Community from "../shared/Community";
import GetInTouch from "../shared/GetInTouch";
import AboutHero from "./AboutHero";
import FounderSection from "./FounderSection";
import Values from "./Values";
import Vision from "./Vision";

const AboutPage = () => {
  return (
    <section className="overflow-x-hidden border-b-[1.5px]  border-b-black">
      <AboutHero />
      <FounderSection />
      <Vision />
      <Values />
      <Community />
      <GetInTouch />
    </section>
  );
};

export default AboutPage;
