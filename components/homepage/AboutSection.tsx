import Image from "next/image";
import flower from "@/assets/flower.svg";
import aboutimg from "@/assets/aboutimg.png";

import Link from "next/link";

const AboutSection = () => {
  return (
    <section className="min-h-screen bg-[#0cc0df] px-[1.5rem] relative pb-[5rem]">
      <Image
        src={flower}
        width={100}
        height={100}
        alt="flower"
        className="absolute right-[1.5rem] top-[2.5rem] animate-spin-slow"
      />
      <div className="pt-[11rem]">
        <h1 className="text-[1.5rem] font-semibold tracking-wider] font-louize">
          ABOUT
        </h1>
        <h1 className="font-louize-medium text-[1.8rem] mt-[0rem]">
          Loved Youngsters' Vision for{" "}
          <span className="italic">Courageous Faith</span>
        </h1>
        <p className=" mt-[2rem] mb-[3rem]">
          Loved youngsters is an organization aimed at raising spirit-filled
          children and teenagers who walk boldly in the will and power of God
          through profound teachings of the gospel and faith based products.{" "}
          <br /> <br /> At Loved Youngsters, we recognize that fostering faith
          is a transformative journey. Our purpose is to accompany young hearts
          as they engage with the teachings of the gospel and develop an
          unshakable connection with their spiritual identity. Through
          thoughtfully designed programs and faith-driven products, we aspire to
          equip them not only with knowledge but also a deep understanding of
          their place as cherished individuals in a higher plan.
        </p>

        <Link
          href={"/"}
          className="border-[1px] hover:bg-[#94edfc] duration-300 border-black uppercase text-[0.8rem] tracking-widest px-[0.8rem] py-[0.7rem]"
        >
          Learn More
        </Link>
      </div>
      <div className="mt-[4rem] rounded-lg border-2">
        <Image
          src={aboutimg}
          alt="about"
          width={500}
          height={200}
          className="rounded-lg"
        />
      </div>
    </section>
  );
};

export default AboutSection;
