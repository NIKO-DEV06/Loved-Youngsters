import Image from "next/image";
import visionsvg from "@/assets/vision.svg";
import { Reveal } from "../utils/Reveal";
import { ImageReveal } from "../utils/ImageReveal";

const Vision = () => {
  return (
    <section className="min-h-[70vh] md:min-h-[90vh] flex flex-col justify-center items-center px-[1.5rem] relative">
      <Image
        src={visionsvg}
        width={50}
        alt="vision"
        className="absolute top-[4rem] md:top-[2rem] lg:top-[4rem] animate-spin-slow"
      />

      <div className="flex flex-col gap-[1.5rem] font-semibold tracking-wider">
        <Reveal y={80} width="100%">
          <p className="text-center uppercase underline">Vision Statement</p>
        </Reveal>
        <Reveal y={150} width="100%">
          <h1 className="uppercase text-[#0cc0df] font-louize-Bold text-center text-[2rem] lg:text-[3.5rem] font-bold tracking-wide md:w-[70%] mx-auto strokeblack italic">
            ~We Envision all teenagers believing and delighting in the love of
            Christ~
          </h1>
        </Reveal>
      </div>
    </section>
  );
};

export default Vision;
