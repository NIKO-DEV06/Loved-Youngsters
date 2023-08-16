import { testimonials } from "../utils/testimonials";
import quote from "@/assets/quote.svg";
import Image from "next/image";

const Testimonials = () => {
  return (
    <section className="min-h-screen bg-[#35e1ff] pb-[8rem] lg:px-[4rem] border-y-black border-y-[1.5px]">
      <h1 className=" font-louize-Bold italic text-[2.5rem] uppecase tracking-wide underline text-center mt-[2.5rem] md:mt-[6rem]">
        The Lives Impacted
      </h1>
      <div className="flex flex-col gap-[3rem]">
        {testimonials.map((testimonial, index) => (
          <div
            className={`pt-[5rem] px-[1.5rem] flex flex-col-reverse lg:flex ${
              index % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"
            }  lg:justify-center lg:items-center gap-[3rem] lg:gap-0`}
          >
            <div className="mb-[3rem] lg:w-[50%] relative">
              {/* <Reveal y={80} width="100%"> */}
              <p className="uppercase font-louize-medium text-center text-[1.5rem] tracking-widest font-medium underline">
                {testimonial.name}
              </p>
              {/* </Reveal> */}
              {/* <Reveal y={150}> */}
              <p className="text-left text-[0.9rem] md:textcenter mt-[2rem] px-[1rem] md:px-[3rem] md:mx-auto relative z-10">
                " {testimonial.msg} "
              </p>
              {/* </Reveal> */}
              <Image
                src={quote}
                width={100}
                alt="quote"
                className="absolute top-[1rem] z-0 opacity-60"
              />
              <Image
                src={quote}
                width={100}
                alt="quote"
                className="absolute bottom-[-1.5rem] rotate-180 right-0 z-0 opacity-60"
              />
            </div>
            {/* <ImageReveal> */}
            <Image
              src={testimonial.img}
              width={500}
              alt="abouthero"
              className="mx-auto border-2 border-black rounded2xl w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] object-cover object-top rounded-full bg-contain"
            />
            {/* </ImageReveal> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
