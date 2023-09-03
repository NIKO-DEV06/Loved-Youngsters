"use client";

import Image from "next/image";
import journeyhero from "@/assets/journey.png";
import sw1 from "@/assets/sw1.png";
import sw2 from "@/assets/sw2.png";
import sw3 from "@/assets/sw3.png";
import sw4 from "@/assets/sw4.png";
import sw5 from "@/assets/sw5.png";
import sw6 from "@/assets/sw6.png";

import Marquee from "react-fast-marquee";
import { Reveal } from "../utils/Reveal";
import { ImageReveal } from "../utils/ImageReveal";
import { Navigation, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const JourneyHero = () => {
  return (
    <>
      <section className="pt-[10rem] md:pt-[5rem] px-[1.5rem] md:flex md:flex-row-reverse md:justify-center md:items-center">
        <div className="mb-[3rem] md:w-[50%]">
          <Reveal y={80} width="100%">
            <p className="uppercase text-center text-[0.8rem] md:text-[0.7rem] tracking-widest font-medium underline">
              Our Jounrney So far
            </p>
          </Reveal>
          <Reveal y={150}>
            <p className="text-[1.5rem] lg:text-[2.2rem] font-louize-medium md:font-louize text-center mt-[2rem] px-[3rem] md:mx-auto ">
              Over the last 12 months, we have{" "}
              <span className=" font-semibold font-louize-mediumitalic">
                discipled over 100 teenagers{" "}
              </span>
              across two cities in{" "}
              <span className=" font-semibold font-louize-mediumitalic">
                Nigeria, Ilorin and Ibadan
              </span>
              . In addition, we have discipled teenagers from far and wide
              through our{" "}
              <span className=" font-semibold font-louize-mediumitalic">
                online community
              </span>
              .
            </p>
          </Reveal>
        </div>

        <div className=" overflowhidden md:w-[50%] mx-auto cursor-grab">
          <ImageReveal>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={50}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
            >
              <SwiperSlide>
                <ImageReveal>
                  <Image
                    src={sw2}
                    width={550}
                    alt="abouthero"
                    className="mx-auto  rounded-2xl h-[450px]  object-cover"
                  />
                </ImageReveal>
              </SwiperSlide>
              <SwiperSlide>
                <ImageReveal>
                  <Image
                    src={sw4}
                    width={550}
                    alt="abouthero"
                    className="mx-auto  rounded-2xl h-[450px] object-cover"
                  />
                </ImageReveal>
              </SwiperSlide>
              <SwiperSlide>
                <ImageReveal>
                  <Image
                    src={sw3}
                    width={550}
                    alt="abouthero"
                    className="mx-auto  rounded-2xl h-[450px] object-cover"
                  />
                </ImageReveal>
              </SwiperSlide>
              <SwiperSlide>
                <ImageReveal>
                  <Image
                    src={sw1}
                    width={550}
                    alt="abouthero"
                    className="mx-auto  rounded-2xl h-[450px] object-cover"
                  />
                </ImageReveal>
              </SwiperSlide>
              <SwiperSlide>
                <ImageReveal>
                  <Image
                    src={journeyhero}
                    width={550}
                    alt="abouthero"
                    className="mx-auto  rounded-2xl h-[450px] object-cover"
                  />
                </ImageReveal>
              </SwiperSlide>
              <SwiperSlide>
                <ImageReveal>
                  <Image
                    src={sw5}
                    width={550}
                    alt="abouthero"
                    className="mx-auto  rounded-2xl h-[450px] object-cover"
                  />
                </ImageReveal>
              </SwiperSlide>
              <SwiperSlide>
                <ImageReveal>
                  <Image
                    src={sw6}
                    width={550}
                    alt="abouthero"
                    className="mx-auto  rounded-2xl h-[450px] object-cover"
                  />
                </ImageReveal>
              </SwiperSlide>
            </Swiper>
          </ImageReveal>
        </div>
      </section>
      <Reveal y={80}>
        <div className="bg-[#35e1ff] mt-[4rem] py-[1.5rem] mb-[5rem]">
          <Marquee gradient={false} direction="left" speed={70}>
            {Array.from({ length: 15 }, (_, index) => (
              <p
                key={index}
                className="text-[0.8rem] uppercase pr-[2rem] tracking-widest font-louize italic"
              >
                Our Journey
              </p>
            ))}
          </Marquee>
        </div>
      </Reveal>
    </>
  );
};

export default JourneyHero;
