import Image from "next/image";
import showcase1 from "@/assets/showcase1.png";
import showcase2 from "@/assets/showcase2.png";
import showcase3 from "@/assets/showcase3.png";
import showcase4 from "@/assets/showcase4.png";
import { ImageReveal } from "../utils/ImageReveal";
import { Reveal } from "../utils/Reveal";

const Showcase = () => {
  return (
    <section className="min-h-screen bg-[#94edfc] px-[1.5rem] pt-[6rem] pb-[10rem]">
      <ImageReveal>
        <div className="flex relative md:px-[2rem] lg:px-[7rem]">
          <Image
            src={showcase1}
            alt="showcase"
            width={250}
            height={300}
            className="rounded-2xl  md:w-[350px] md:rounded-2xl"
          />
          <Image
            src={showcase2}
            alt="showcase"
            width={250}
            height={100}
            className="absolute bottom-0 right-0 translate-y-[5rem]  rounded-2xl md:w-[450px] md:right-[2rem] lg:right-[7rem] md:rounded-2xl"
          />
        </div>
      </ImageReveal>

      <Reveal y={100}>
        <h1 className="uppercase text-white text-center pb-[5rem] pt-[10rem] font-louize-medium text-[2rem] md:text-[3rem] font-bold tracking-wide md:w-[70%] mx-auto">
          Nurturing Resilient Faith in the Hearts of the Youth
        </h1>
      </Reveal>
      <ImageReveal>
        <div className="flex relative md:flex-row-reverse md:px-[2rem] lg:px-[7rem]">
          <Image
            src={showcase4}
            alt="showcase"
            width={250}
            height={300}
            className="rounded-2xl  md:w-[350px]"
          />
          <Image
            src={showcase3}
            alt="showcase"
            width={250}
            height={100}
            className="absolute bottom-0 md:top-0 right-0 translate-y-[5rem] rounded-2xl  md:w-[450px] md:left-[2rem] lg:left-[7rem] "
          />
        </div>
      </ImageReveal>
    </section>
  );
};

export default Showcase;
