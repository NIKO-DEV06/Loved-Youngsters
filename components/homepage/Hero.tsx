import Image from "next/image";
import blob from "@/assets/blob.svg";
import halfsun from "@/assets/halfsun.svg";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="min-h-screen pt-[9.5rem] relative">
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
          className="flex flex-col justify-center items-center mt-[3rem]"
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
    </section>
  );
};

export default Hero;
