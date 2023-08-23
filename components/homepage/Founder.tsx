import Image from "next/image";
import Link from "next/link";
import halfsun from "@/assets/halfsun.svg";
import herofounder from "../../assets/herofounder.png";
import { Reveal } from "../utils/Reveal";
import { ImageReveal } from "../utils/ImageReveal";

const Founder = () => {
  return (
    <section className="min-h-screen bg-[#94edfc] pt-[5rem] px-[1.5rem] flex flex-col md:flex-row md:justify-center md:items-center md:gap-[3rem] lg:gap-[5rem] relative pb-[3rem]">
      <ImageReveal>
        <div className="rounded-2xl  w-fit h-fit overflow-hidden">
          <Image
            src={herofounder}
            alt="founder"
            width={400}
            height={400}
            className="mx-auto rounded-2xl md:hover:scale-[1.1] duration-300 cursor-pointer"
          />
        </div>
      </ImageReveal>
      <div className="mt-[3rem] md:w-[45%]">
        <Reveal y={100}>
          <h1 className=" font-louize-medium text-[2rem] uppecase tracking-wide lg:w-[80%] xl:w-[70%] lg:text-[2.5rem] leading-[3rem]">
            Meet the dreamer{" "}
            <span className="font-louize-mediumitalic">behind</span> Loved
            Youngsters
          </h1>
        </Reveal>
        <Reveal y={100}>
          <p className="mt-[2rem] leading-[2rem] text-[0.95rem]">
            Hey, awesome teens ready to rock the faith scene! I'm
            Simileoluwa—Simi for short. I'm your go-to guide for an epic
            Christian journey. Now, buckle up and get ready for a faith-filling
            adventure like no other!.{" "}
          </p>
        </Reveal>
        <div className="mt-[1.5rem]">
          <ImageReveal>
            <Link
              href={"/about"}
              className="border-[1px] hover:bg-[#35e1ff] duration-300 border-black uppercase text-[0.8rem] tracking-widest px-[0.8rem] py-[0.7rem] hover:font-semibold"
            >
              Know More
            </Link>
          </ImageReveal>
        </div>
      </div>
    </section>
  );
};

export default Founder;
