import Link from "next/link";
import { Reveal } from "../utils/Reveal";

const GetInTouch = () => {
  return (
    <section className="min-h-screen bg-[#35e1ff] px-[1.5rem] border-bblack border-b[1.5px] grid place-items-center">
      <div className="flex flex-col items-center justify-center gap-[1rem]">
        <Reveal y={150} width="100%">
          <h1 className=" font-louize-Bold text-white text-[4rem] text-center uppercase leading-[4.5rem] lg:leading-[6.5rem] lg:text-[6rem] lg:pt-[2rem] lg:w-[50%] lg:mx-auto">
            Something on Your Mind?{" "}
          </h1>
        </Reveal>
        <Reveal y={100}>
          <Link
            href={"/contact"}
            className="border-[#000000] mx-auto border-2 text-[3rem] text-[#000000] px-[1.5rem] rounded-full md:hover:bg-[#ffde24] md:hover:border-[#ffde24] duration-300 lg:text-[5rem]"
          >
            TELL US
          </Link>
        </Reveal>
      </div>
    </section>
  );
};

export default GetInTouch;
