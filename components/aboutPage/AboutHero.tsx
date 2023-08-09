import Image from "next/image";
import abouthero from "@/assets/about1.png";
import Marquee from "react-fast-marquee";
import { Reveal } from "../utils/Reveal";
import { ImageReveal } from "../utils/ImageReveal";

const AboutHero = () => {
  return (
    <>
      <section className="pt-[10rem] md:pt-[2rem] px-[1.5rem] md:flex md:flex-row-reverse md:justify-center md:items-center">
        <div className="mb-[3rem] md:w-[50%]">
          <Reveal y={80} width="100%">
            <p className="uppercase text-center text-[0.8rem] md:text-[0.7rem] tracking-widest font-medium underline">
              About Loved Youngsters
            </p>
          </Reveal>
          <Reveal y={150}>
            <p className="text-[1.9rem] lg:text-[2.5rem] font-louize-medium md:font-louize text-center mt-[2rem] px-[3rem] md:mx-auto ">
              Empowering the Next Generation by{" "}
              <span className="font-louiz-mediumitalic font-semibold">
                Nurturing and Strengthening
              </span>{" "}
              the Core of Faith in{" "}
              <span className="font-louize-mediumitalic font-semibold">
                Christian teenagers
              </span>
              .
            </p>
          </Reveal>
        </div>
        <ImageReveal>
          <Image
            src={abouthero}
            width={400}
            alt="abouthero"
            className="mx-auto border-2 border-black rounded-2xl h-[350px] md:h-auto object-cover"
          />
        </ImageReveal>
      </section>
      <Reveal y={80}>
        <div className="bg-[#35e1ff] border-y-[1.5px] border-black mt-[4rem] py-[1.5rem]">
          <Marquee gradient={false} direction="left" speed={70}>
            {Array.from({ length: 15 }, (_, index) => (
              <p
                key={index}
                className="text-[0.8rem] uppercase pr-[2rem] tracking-widest font-louize italic"
              >
                Foward in Faith
              </p>
            ))}
          </Marquee>
        </div>
      </Reveal>
    </>
  );
};

export default AboutHero;
