import Image from "next/image";
import blob from "@/assets/blob.svg";
import halfsun from "@/assets/halfsun.svg";
import heroImage from "../../assets/heroimage4.jpg";
import Marquee from "react-fast-marquee";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="min-h-screen pt-[9.5rem] relative pb-[4rem]">
      <div className="absolute translate-y-[-3rem] right-0 z-0">
        <Image src={blob} alt="blob" width={200} height={200} className="z-0" />
      </div>
      <div className="relative z-10">
        <p className="uppercase text-center text-[0.8rem] tracking-widest font-medium">
          About Loved Youngsters
        </p>
        <p className="text-[1.9rem] font-louize-medium text-center mt-[2rem] px-[1rem]">
          We create personalized{" "}
          <span className="font-louize-mediumitalic font-semibold">
            projects, devotionals and products
          </span>{" "}
          that edify and solidify the faith of{" "}
          <span className="font-louize-mediumitalic font-semibold">
            Christian teenagers
          </span>
          .
        </p>
        <Link
          href={"/"}
          className="flex flex-col justify-center items-center mt-[3rem] w-fit mx-auto"
        >
          <p className="uppercase tracking-widest text-[0.9rem] font-medium">
            Learn More
          </p>
          <Image
            src={halfsun}
            alt="half-sun"
            width={70}
            height={70}
            className="rotate-180 translate-y-[-0.9rem]"
          />
        </Link>
      </div>

      <div className="px-[1.5rem] w-auto rounded--[50%]">
        <Image
          src={heroImage}
          alt="hero-image"
          width={500}
          height={500}
          // className="w-full h-auto rounded--[50%]"
        />
      </div>
      <div className="bg-[#94edfc] bg[#ffea70] mt-[2rem] py-[1rem]">
        <Marquee gradient={false} direction="left" speed={70}>
          {Array.from({ length: 10 }, (_, index) => (
            <p
              key={index}
              className="text-[0.8rem] uppercase pr-[2rem] tracking-widest font-louize italic"
            >
              Loved Youngsters
            </p>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Hero;
