import { Reveal } from "../utils/Reveal";
import { ImageReveal } from "../utils/ImageReveal";
import Image from "next/image";
import contribute from "@/assets/sad.png";
import contribute2 from "@/assets/new.png";

const ContributeHero = () => {
  return (
    <>
      <section className=" px-[1.5rem] md:flex md:flex-row-reverse md:justify-center md:items-center">
        <div className="mb-[3rem] md:w-[50%]">
          <Reveal y={80} width="100%">
            <p className="uppercase text-center text-[0.8rem] md:text-[0.7rem] tracking-widest font-medium underline">
              Contribute to Loved Youngsters
            </p>
          </Reveal>
          <Reveal y={150}>
            <p className="text-[1.9rem] lg:text-[2.5rem] font-louize-medium md:font-louize text-center mt-[2rem] px-[3rem] md:mx-auto ">
              Would you like to join in God's love walk project to His lost
              sheep & gift a teenager something priceless?
            </p>
          </Reveal>
        </div>
        <ImageReveal>
          <Image
            src={contribute}
            width={500}
            alt="abouthero"
            className="mx-auto rounded-2xl h-[350px] md:h-auto object-cover"
          />
        </ImageReveal>
      </section>
      <h1 className="px-[1.5rem] mt-[2rem] md:mt-[4rem] mb-[2rem] text-center text-[1.2rem] font-semibold underline">
        Then, you can kindly use your resources or services to extend the love
        of God to a teenager:
      </h1>
      <div className="flex flex-col gap-[0.3rem] px-[2rem] md:px-0 md:justify-center md:items-center  pb-[5rem]">
        <p className="text-left">
          <b>--</b>Drowning in an identity crisis.
        </p>
        <p className="text-left">
          <b>--</b>Confused about what to do with his/her life
        </p>
        <p className="text-left">
          <b>--</b>Cattling with sexual sins/addictions and can't seem to break
          away
        </p>
        <p className="text-left">
          <b>--</b>Who never knew what love is
        </p>
        <p className="text-left">
          <b>--</b>Who grew up with scars, traumas and fear of rejection
        </p>
        <p className="text-left">
          <b>--</b>Who desperately needs a community and genuine love
        </p>
        <p className="text-left">
          <b>--</b>And is struggling with a prayer altar and word life
        </p>
      </div>
      <ImageReveal>
        <Image
          src={contribute2}
          width={500}
          alt="abouthero"
          className="mx-auto rounded-2xl h-[450px] object-cover p-[2rem]"
        />
      </ImageReveal>
    </>
  );
};

export default ContributeHero;
