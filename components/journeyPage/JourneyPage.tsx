import Community from "../shared/Community";
import GetInTouch from "../shared/GetInTouch";
import JourneyHero from "./JourneyHero";
import Testimonials from "./Testimonials";

const JourneyPage = () => {
  return (
    <section className="overflow-x-hidden  bg-[#35e1ff]">
      <JourneyHero />
      <Testimonials />
      <Community />
      <GetInTouch />
    </section>
  );
};

export default JourneyPage;
