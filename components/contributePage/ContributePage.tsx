import Community from "../shared/Community";
import GetInTouch from "../shared/GetInTouch";
import ContributeHero from "./ContributeHero";
import Donate from "./Donate";

const ContributePage = () => {
  return (
    <section className="min-h-screen pt-[9rem] md:pt-[4rem]">
      <ContributeHero />
      <Donate />
      <Community />

      <GetInTouch />
    </section>
  );
};

export default ContributePage;
