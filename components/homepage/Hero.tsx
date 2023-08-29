import Image from "next/image";
import blob from "@/assets/blob.svg";
import stroke2 from "@/assets/stroke2.svg";
import Marquee from "react-fast-marquee";
import { Reveal } from "../utils/Reveal";
import { ImageReveal } from "../utils/ImageReveal";
import heroimg from "@/assets/new.png";

const Hero = () => {
  return (
    <section className="min-h-screen pt[9.5rem] md:pt[15rem] relative pb-[4rem] overflowx-hidden">
      <div className="absolute translate-y-[-3rem] right-0 md:right-[300px] z-0 blur-sm">
        <ImageReveal>
          <Image
            src={blob}
            alt="blob"
            width={200}
            height={200}
            className="z-0"
          />
        </ImageReveal>
      </div>

      <div className="absolute md:hidden translate-y[-3rem] translate-x-[-50%] left-0 md:left-[300px] z-0 blur-sm">
        <ImageReveal>
          <Image
            src={stroke2}
            alt="stroke2"
            width={200}
            height={200}
            className="z-0"
          />
        </ImageReveal>
      </div>

      <div className="relative z-10 pb-[2rem]">
        <Reveal y={80} width="100%">
          <p className="uppercase text-center text-[3rem] lg:text-[5rem] xl:text-[6rem] font-[800] md:text-[4rem] trackingwidest underlin font-louize-Bod px-[1rem] lg:mx-auto text-[#342e2e]">
            Welcome to loved youngsters
          </p>
        </Reveal>

        <Reveal y={100} width="100%">
          <p className="text-[1.5rem] md:text-[2rem] font-louize-medium md:font-louize text-center mt-[1rem] px-[1rem] md:mx-auto">
            A family of{" "}
            <span className="font-louize-mediumitalic font-semibold">
              love bonded
            </span>{" "}
            by the love of{" "}
            <span className="font-louize-mediumitalic font-semibold">
              Christ
            </span>
            .
          </p>
        </Reveal>
      </div>

      <ImageReveal>
        <div className=" mx-[1.5rem] md:mx-[4rem] mt-[1rem]">
          <video
            src="/intro.mp4"
            autoPlay
            playsInline
            controls
            // poster="/thumbnail.png"
            className="w-full h-full object-cover"
          ></video>
        </div>
      </ImageReveal>
      <Reveal y={80}>
        <div className="bg-[#94edfc] mt-[4rem] py-[1.5rem]">
          <Marquee gradient={false} direction="left" speed={70}>
            {Array.from({ length: 15 }, (_, index) => (
              <p
                key={index}
                className="text-[0.8rem] uppercase pr-[2rem] tracking-widest font-louize italic"
              >
                Loved Youngsters
              </p>
            ))}
          </Marquee>
        </div>
      </Reveal>
    </section>
  );
};

export default Hero;
