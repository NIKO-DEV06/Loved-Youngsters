import Community from "../shared/Community";
import GetInTouch from "../shared/GetInTouch";
import JourneyHero from "./JourneyHero";
import Testimonials from "./Testimonials";

const JourneyPage = () => {
  return (
    <section className="overflow-x-hidden border-b-[1.5px] bg-[#35e1ff] border-b-black">
      <JourneyHero />
      <Testimonials />
      <Community />
      <GetInTouch />
    </section>
  );
};

export default JourneyPage;
