import Image from "next/image";
import flower from "@/assets/flower.svg";
import aboutimg from "@/assets/aboutimg.png";
import { Reveal } from "../utils/Reveal";
import { ImageReveal } from "../utils/ImageReveal";

import Link from "next/link";

const AboutSection = () => {
  return (
    <section className="min-h-screen border-y-[1.5px] border-black bg-[#35e1ff] px-[1.5rem] md:px-[4rem] relative pb-[5rem] md:pb-[8rem] md:flex md:justify-center md:items-center md:gap-[2rem] lg:gap-[4rem] md:pt-[5rem]">
      <ImageReveal>
        <Image
          src={flower}
          width={100}
          height={100}
          alt="flower"
          className="absolute right-[1.5rem] top-[2.5rem] md:top-[5.8rem] animate-spin-slow z-[10]"
        />
      </ImageReveal>
      <div className="pt-[11rem] md:pt-[5rem] md:w-[50%]">
        <Reveal y={100}>
          <h1 className="text-[1.5rem] font-semibold tracking-wider] font-louize">
            ABOUT
          </h1>
        </Reveal>
        <Reveal y={100}>
          <h1 className="font-louize-medium text-[1.8rem] mt-[0rem]">
            Loved Youngsters' Vision for{" "}
            <span className="italic">Courageous Faith</span>
          </h1>
        </Reveal>
        <Reveal y={100}>
          <p className="mt-[2rem] md:text-[0.8rem] lg:text-[0.95rem] leading-[2rem] mb-[3rem]">
            Loved youngsters is an organization aimed at raising spirit-filled
            children and teenagers who walk boldly in the will and power of God
            through profound teachings of the gospel and faith based products.{" "}
            <br /> <br /> At Loved Youngsters, we recognize that fostering faith
            is a transformative journey. Our purpose is to accompany young
            hearts as they engage with the teachings of the gospel and develop
            an unshakable connection with their spiritual identity. Through
            thoughtfully designed programs and faith-driven products, we aspire
            to equip them not only with knowledge but also a deep understanding
            of their place as cherished individuals in a higher plan.
          </p>
        </Reveal>
        <ImageReveal>
          <Link
            href={"/about"}
            className="border-[1px] hover:bg-[#94edfc] duration-300 border-black uppercase text-[0.8rem] tracking-widest px-[0.8rem] py-[0.7rem] hover:font-semibold"
          >
            Learn More
          </Link>
        </ImageReveal>
      </div>
      <ImageReveal>
        <div className="mt-[4rem] rounded-2xl border-2 border-black w-fit h-fit mx-auto overflow-hidden group cursor-pointer">
          <Image
            src={aboutimg}
            alt="about"
            width={500}
            height={200}
            className="rounded-2xl md:group-hover:scale-[1.05] duration-300"
          />
        </div>
      </ImageReveal>
    </section>
  );
};

export default AboutSection;
