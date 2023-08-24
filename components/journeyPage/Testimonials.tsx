import { testimonials } from "../utils/testimonials";
import quote from "@/assets/quote.svg";
import Image from "next/image";
import { Reveal } from "../utils/Reveal";
import { ImageReveal } from "../utils/ImageReveal";

const Testimonials = () => {
  return (
    <section className="min-h-screen bg-[#35e1ff] pb-[8rem] lg:px-[4rem]">
      <Reveal y={80} width="100%">
        <h1 className=" font-louize-Bold italic text-[2.5rem] uppecase tracking-wide underline text-center mt-[2.5rem] md:mt-[6rem]">
          The Lives Impacted
        </h1>
      </Reveal>

      <div className="flex flex-col gap-[3rem]">
        {testimonials.map((testimonial, index) => (
          <div
            className={`pt-[5rem] px-[1.5rem] flex flex-col-reverse lg:flex ${
              index % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"
            }  lg:justify-center lg:items-center gap-[3rem] lg:gap-0`}
          >
            <div className="mb-[3rem] lg:w-[50%] relative">
              <Reveal y={80} width="100%">
                <p className="uppercase font-louize-medium text-center text-[1.5rem] tracking-widest font-medium underline">
                  {testimonial.name}
                </p>
              </Reveal>
              <Reveal y={150}>
                <p className="text-left text-rem] md:textcenter mt-[2rem] px-[1rem] md:px-[3rem] md:mx-auto relative z-10 font-louize">
                  " {testimonial.msg} "
                </p>
              </Reveal>

              <div className="absolute top-[1rem] z-0 opacity-60">
                <ImageReveal>
                  <Image src={quote} width={100} alt="quote" />
                </ImageReveal>
              </div>

              <div className="absolute bottom-[-1.5rem] rotate-180 right-0 z-0 opacity-60">
                <ImageReveal>
                  <Image src={quote} width={100} alt="quote" />
                </ImageReveal>
              </div>
            </div>
            <ImageReveal>
              <Image
                src={testimonial.img}
                width={500}
                alt="abouthero"
                className="mx-auto  grayscale hover:grayscale-0 duration-200 cursor-pointer rounded2xl w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] object-cover object-top rounded-full bg-contain"
              />
            </ImageReveal>
          </div>
        ))}
      </div>
      <Reveal y={80} width="100%">
        <h1 className=" font-louize-Bold italic text-[2.5rem] uppecase tracking-wide underline text-center mt-[2.5rem] md:mt-[6rem]">
          Parent Testimonial
        </h1>
      </Reveal>
      <ImageReveal>
        <div>
          <div className="flex flex-col lg:flex-row gap-[2rem] px-[3rem]">
            <div className="border2 borderblack w-fit mx-auto  md:mx-4rem] mt-[3rem]">
              <video
                src="/parent2.mp4"
                playsInline
                controls
                // poster="/thumbnail.png"
                className="h-[400px] mx-auto grayscale"
              ></video>
            </div>
            <div className="border2 borderblack w-fit h-fit mx-auto  md:mx-4rem] mt-[3rem]">
              <video
                src="/parent.mp4"
                playsInline
                controls
                // poster="/thumbnail.png"
                className="h-[400px] mx-auto grayscale"
              ></video>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-[2rem] px-[3rem]">
            <div className="border2 borderblack w-fit mx-auto  md:mx-4rem] mt-[3rem]">
              <video
                src="/parente2.mp4"
                playsInline
                controls
                // poster="/thumbnail.png"
                className="h-[400px] mx-auto grayscale"
              ></video>
            </div>
            <div className="border2 borderblack w-fit mx-auto  md:mx-4rem] mt-[3rem]">
              <video
                src="/elder2.mp4"
                playsInline
                controls
                // poster="/thumbnail.png"
                className="h-[400px] mx-auto grayscale"
              ></video>
            </div>
            <div className="border2 borderblack w-fit h-fit mx-auto  md:mx-4rem] mt-[3rem]">
              <video
                src="/parente1.mp4"
                playsInline
                controls
                // poster="/thumbnail.png"
                className="h-[400px] mx-auto grayscale"
              ></video>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-[2rem] px-[3rem]">
            <div className="border2 borderblack w-fit mx-auto  md:mx-4rem] mt-[3rem]">
              <video
                src="/parent3.mp4"
                playsInline
                controls
                // poster="/thumbnail.png"
                className="h-[400px] mx-auto grayscale"
              ></video>
            </div>
            <div className="border2 borderblack w-fit h-fit mx-auto  md:mx-4rem] mt-[3rem]">
              <video
                src="/elder1.mp4"
                playsInline
                controls
                // poster="/thumbnail.png"
                className="h-[400px] mx-auto grayscale"
              ></video>
            </div>
          </div>
        </div>
      </ImageReveal>
    </section>
  );
};

export default Testimonials;
