import Image from "next/image";
import Link from "next/link";
import halfsun from "@/assets/halfsun.svg";
import herofounder from "../../assets/herofounder.png";

const Founder = () => {
  return (
    <section className="min-h-screen bg-[#94edfc] pt-[5rem] px-[1.5rem] flex flex-col md:flex-row md:justify-center md:items-center md:gap-[3rem] lg:gap-[5rem] relative">
      <div className="border-2 rounded-2xl border-[#fff] w-fit h-fit overflow-hidden">
        <Image
          src={herofounder}
          alt="founder"
          width={400}
          height={400}
          className="mx-auto rounded-2xl md:hover:scale-[1.1] duration-300 cursor-pointer"
        />
      </div>
      <div className="mt-[3rem] md:w-[45%]">
        <h1 className=" font-louize-medium text-[2rem] uppecase tracking-wide lg:w-[80%] xl:w-[70%] lg:text-[2.5rem] leading-[3rem] underline">
          Meet the dreamer{" "}
          <span className="font-louize-mediumitalic">behind</span> Loved
          Youngsters
        </h1>
        <p className="mt-[2rem] leading-[2rem] text-[0.95rem]">
          Hey, awesome teens ready to rock the faith scene! I'm Simileoluwa—Simi
          for short. I'm your go-to guide for an epic Christian journey. Now,
          buckle up and get ready for a faith-filling adventure like no other!.{" "}
        </p>
        <Link
          href={"/"}
          className="group flex flex-col justify-center items-center mt-[2rem] w-fit ml-[1rem] md:ml-0"
        >
          <p className="uppercase tracking-widest duration-200 text-[0.8rem] md:text-[0.7rem] font-medium group-hover:font-bold">
            Know More
          </p>
          <Image
            src={halfsun}
            alt="half-sun"
            width={50}
            height={50}
            className="rotate-180 translate-y-[-0.5rem] duration-300 grayscale invert"
          />
        </Link>
      </div>
    </section>
  );
};

export default Founder;
