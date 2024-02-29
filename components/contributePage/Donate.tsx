import { Reveal } from "../utils/Reveal";
import Link from "next/link";
import heart from "@/assets/heart-dynamic-color.png";
import heart2 from "@/assets/heart-dynamic-premium.png";
import Image from "next/image";

const Donate = () => {
  return (
    <section className="min-h-[60vh] mt-[7rem] bg-[#35e1ff] px-[1.5rem] border-bblack border-b[1.5px] grid place-items-center py-[4rem] relative">
      <Image
        src={heart}
        alt="heart"
        width={100}
        className="absolute top-[2rem] left-[2rem] floating-element"
      />
      <Image
        src={heart2}
        alt="heart"
        width={100}
        className="absolute bottom-[2rem] right-[2rem] floating-element"
      />

      <div className="flex flex-col items-center justify-center gap-[2.5rem]">
        <Reveal y={150} width="100%">
          <h1 className=" font-louize-Bold text-black text-[1.2rem] text-center  lg:mx-auto lg:w-[50%]">
            "By deciding to be co-labourers of God's vision, you've just touched
            the world—one person at a time, youngster. You've given a teenager a
            priceless gift— A family loved to love. Thank you so much,
            youngster. You're loved and honoured. My heart prays for you always.
            'Simi ❤️"
          </h1>
        </Reveal>
        {/* <Reveal y={100}> */}
        <Link
          href={"https://wa.link/efxegx"}
          className="border-[#000000] mx-auto font-louize-mediumitalic border-2 text-[1.2rem] text-[#000000] px-[1.5rem] rounded-full md:hover:bg-[#ffde24] md:hover:border-[#ffde24] duration-300 lg:text-[2rem] py-[0.5rem]"
        >
          GIVE TO A TEENAGER
        </Link>
        {/* </Reveal> */}
        <Reveal y={150} width="100%">
          <h1 className=" font-louize-Bold text-black text-[1.2rem] text-center  lg:mx-auto lg:w-[50%]">
            "On a final page I can't wait to love up on you! You're not doing
            life alone. You've got us now! Welcome to Loved Youngsters, dear.
            We've been waiting for you.❤️"
          </h1>
        </Reveal>
      </div>
    </section>
  );
};

export default Donate;
