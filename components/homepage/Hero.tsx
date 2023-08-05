import Image from "next/image";
import blob from "@/assets/blob.svg";
import halfsun from "@/assets/halfsun.svg";
import stroke1 from "@/assets/stroke1.svg";
import stroke2 from "@/assets/stroke2.svg";
import heroImage from "../../assets/heroimage4.png";
import Marquee from "react-fast-marquee";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="min-h-screen pt[9.5rem] md:pt[15rem] relative pb-[4rem]">
      <div className="absolute translate-y-[-3rem] right-0 md:right-[300px] z-0 blur-sm">
        <Image src={blob} alt="blob" width={200} height={200} className="z-0" />
      </div>

      <div className="absolute md:hidden translate-y[-3rem] translate-x-[-50%] left-0 md:left-[300px] z-0 blur-sm">
        <Image
          src={stroke2}
          alt="stroke2"
          width={200}
          height={200}
          className="z-0"
        />
      </div>

      <div className="relative z-10 pb-[2rem]">
        <p className="uppercase text-center text-[0.8rem] md:text-[0.7rem] tracking-widest font-medium">
          About Loved Youngsters
        </p>
        <p className="text-[1.9rem] md:text-[3rem] font-louize-medium md:font-louize text-center mt-[2rem] px-[1rem] md:w-[50%] md:mx-auto">
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
          className="group flex flex-col justify-center items-center mt-[3rem] w-fit mx-auto"
        >
          <p className="uppercase tracking-widest group-hover:tracking-[0.15em] duration-200 text-[0.8rem] md:text-[0.7rem] font-medium group-hover:font-bold">
            Learn More
          </p>
          <Image
            src={halfsun}
            alt="half-sun"
            width={70}
            height={70}
            className="rotate-180 translate-y-[-0.9rem] duration-300"
          />
        </Link>
      </div>

      <div className="border-2 mx-[1.5rem] md:mx-[4rem] ">
        <video
          src="/intro.mp4"
          autoPlay
          playsInline
          controls
          poster="/thumbnail.png"
          className="w-full h-full object-cover"
        ></video>
      </div>
      <div className="bg-[#35e1ff] mt-[4rem] py-[1.5rem]">
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
