import GetInTouch from "../shared/GetInTouch";
import JourneyHero from "./JourneyHero";
import Testimonials from "./Testimonials";

const JourneyPage = () => {
  return (
    <section className="overflow-x-hidden border-b-[1.5px] border-b-black">
      <JourneyHero />
      <Testimonials />
      <GetInTouch />
    </section>
  );
};

export default JourneyPage;
