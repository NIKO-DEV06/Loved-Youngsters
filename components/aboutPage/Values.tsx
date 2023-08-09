import Image from "next/image";
import mission from "@/assets/mission.svg";
import flower from "@/assets/flower.svg";
import creed from "@/assets/creed.svg";

const Values = () => {
  return (
    <section className="min-h-screen px-[1.5rem] lg:px-[5rem] bg-[#35e1ff] pb-[5rem] pt-[2rem]">
      <h1 className="text-[2.5rem] font-louize-medium text-center py-[3rem] lg:mb-[1rem]">
        the SOUL of LOVED YOUNGSTERS
      </h1>
      <div className="flex flex-col lg:flex-row gap-[4rem] justify-center items-center lg:items-start text-center">
        <div className="lg:w-[70%]">
          <Image
            src={mission}
            alt="mission"
            width={50}
            className="mx-auto mb-[1.5rem] animate-spin-slow"
          />
          <div>
            <p className="uppercase tracking-widest underline mb-[1rem] font-semibold font-louize-Bold">
              Mission Statement
            </p>
            <p className="italic lg:text-[0.9rem]">
              <span className="font-semibold">
                TO RAISE TEENAGERS WHO ARE :
              </span>{" "}
              <br />
              ~ Immersed fully into the love of Christ
              <br />
              ~ Indoctrinated into the teachings of the Christian Faith
              <br /> ~ Understand Intimacy with God
            </p>
          </div>
        </div>
        <div className="lg:w-[70%] lg:translate-x-[1rem]">
          <Image
            src={creed}
            alt="creed"
            width={50}
            className="mx-auto mb-[1.5rem] animate-spin-slow"
          />
          <div>
            <p className="uppercase lg:text-[0.9rem] tracking-widest underline mb-[1rem] font-semibold font-louize-Bold">
              Our Creed
            </p>
            <p className="italic lg:text-[0.9rem]">
              Abba's Love found us. <br />
              Now He is our treasure. <br />
              Abba rejoices over us with Joy. <br />
              Now we delight in Him. <br />
              Abba's light is shining in our hearts, <br />
              Now we light up the world. <br />
              Abba's spirit is burning in our bones, <br />
              Now we set the world ablaze for our King. <br />
              We are young and loved. <br />
              We are loved youngsters. <br />
            </p>
          </div>
        </div>
        <div className="lg:w-[70%]">
          <Image
            src={flower}
            alt="flower"
            width={50}
            className="mx-auto mb-[1.5rem] animate-spin-slow"
          />
          <div>
            <p className="uppercase tracking-widest underline mb-[1rem] font-semibold font-louize-Bold">
              Core Values
            </p>
            <p className="italic lg:text-[0.9rem]">
              ~IMMERSION <br />
              ~INDOCTRINATION <br />
              ~INTIMACY <br />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
