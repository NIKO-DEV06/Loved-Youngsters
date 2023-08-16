import Image from "next/image";
import blob from "@/assets/blob.svg";
import stroke2 from "@/assets/stroke2.svg";
import Marquee from "react-fast-marquee";
import { Reveal } from "../utils/Reveal";
import { ImageReveal } from "../utils/ImageReveal";

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
          <p className="uppercase text-center text-[0.8rem] md:text-[0.7rem] tracking-widest font-medium underline">
            Welcome to loved youngsters
          </p>
        </Reveal>

        <Reveal y={100}>
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
        </Reveal>
      </div>

      <ImageReveal>
        <div className="border-2 border-black mx-[1.5rem] md:mx-[4rem] mt-[1rem]">
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
        <div className="bg-[#35e1ff] mt-[4rem] py-[1.5rem] border-y-[1.5px] border-black">
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
