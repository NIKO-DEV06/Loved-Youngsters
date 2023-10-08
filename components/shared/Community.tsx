import Link from "next/link";
import { Reveal } from "../utils/Reveal";

const Community = () => {
  return (
    <Reveal y={300} width="100%">
      <section className="pb-[6rem] pt-[6rem] bg-[#94edfc]">
        <aside
          className={`text-black bg-[#35e1ff] mx-[3rem] md:mx-[5rem] lg:mx-[9rem] xl:mx-[10rem] lg:py-[3rem] rounded-[1rem] border[1px] borde-black grid place-items-center`}
        >
          <div className="pb-[2rem] lg:flex lg:justify-center lg:gap-[5rem]">
            <div className="text-center">
              <Reveal y={80} width="100%">
                <h1 className="font-louize-Bold text-[2rem] md:text-[3rem] mx-[1rem] pt-[3rem] pb-[1rem] lg:w-[25rem] lg:text-left lg:text-[1.7rem]">
                  Join Our Online Community
                </h1>
              </Reveal>
              <Reveal y={80} width="100%">
                <p className="mx-[1rem] mt-[1rem] lg:mt-0 md:mx-auto md:w-[30rem] lg:text-left lg:w-[25rem]">
                  A thriving and close-knit community online for Chrisitian
                  teenagers to communion and grow in their faith regardless of
                  distance.
                </p>
              </Reveal>
            </div>
            <Reveal y={80} width="100%">
              <Link
                href={
                  "https://docs.google.com/forms/d/e/1FAIpQLSebLexIsvWkGmmDVSY6_cCPmxanKN68R6A-ttK6zkHgrh5dVg/viewform?usp=pp_url"
                }
              >
                <div className="text-white bg-black mx-auto text-center w-[8.5rem] py-3 rounded-md mt-[2rem] cursor-pointer lg:mx-0 hover:bg-[#ffffff] hover:text-black duration-200 md:text-[0.95rem] mb-[1rem] lg:mb-[10rem] lg:translate-y-[5rem] lg:items-center lg:scale-[1.1]">
                  Join Us
                </div>
              </Link>
            </Reveal>
          </div>
        </aside>
      </section>
    </Reveal>
  );
};

export default Community;
