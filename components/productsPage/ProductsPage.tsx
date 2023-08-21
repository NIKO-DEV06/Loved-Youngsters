"use client";

import { useState } from "react";
import { useSlideIndex } from "@/hooks/useSlideIndex";
import dev1 from "@/assets/dev1.png";
import dev2 from "@/assets/dev2.png";
import dev3 from "@/assets/dev3.png";
import dev4 from "@/assets/dev4.png";
import dev5 from "@/assets/dev5.png";
import dev6 from "@/assets/dev6.png";

import mma1 from "@/assets/mma1.png";
import mma2 from "@/assets/mma2.png";
import mma3 from "@/assets/mma3.png";

import map1 from "@/assets/map1.png";
import map2 from "@/assets/map2.png";
import map3 from "@/assets/map3.png";
import map4 from "@/assets/map4.png";

import dec1 from "@/assets/dec1.png";
import dec2 from "@/assets/dec2.png";

import { Reveal } from "../utils/Reveal";

import arrow from "@/assets/right.svg";

import Image from "next/image";
import Link from "next/link";
import Community from "../shared/Community";
import GetInTouch from "../shared/GetInTouch";

const ProductsPage = () => {
  const devSlides = [
    { url: dev1 },
    { url: dev2 },
    { url: dev3 },
    { url: dev4 },
    { url: dev5 },
    { url: dev6 },
  ];
  const mmaSlides = [
    { url: mma1 },
    //  { url: mma2 },
    { url: mma3 },
  ];

  const mapSlides = [
    { url: map4 },
    { url: map1 },
    { url: map2 },
    { url: map3 },
  ];

  const decSlides = [{ url: dec2 }, { url: dec1 }];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [mmaIndex, setMmaIndex] = useState(0);
  const [mapIndex, setMapIndex] = useState(0);
  const [decIndex, setDecIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? devSlides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === devSlides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const prevSlideMma = () => {
    const isFirstSlide = mmaIndex === 0;
    const newIndex = isFirstSlide ? mmaSlides.length - 1 : mmaIndex - 1;
    setMmaIndex(newIndex);
  };
  const nextSlideMma = () => {
    const isLastSlide = mmaIndex === mmaSlides.length - 1;
    const newIndex = isLastSlide ? 0 : mmaIndex + 1;
    setMmaIndex(newIndex);
  };

  const prevSlideMap = () => {
    const isFirstSlide = mapIndex === 0;
    const newIndex = isFirstSlide ? mapSlides.length - 1 : mapIndex - 1;
    setMapIndex(newIndex);
  };
  const nextSlideMap = () => {
    const isLastSlide = mapIndex === mapSlides.length - 1;
    const newIndex = isLastSlide ? 0 : mapIndex + 1;
    setMapIndex(newIndex);
  };

  const prevSlideDec = () => {
    const isFirstSlide = decIndex === 0;
    const newIndex = isFirstSlide ? decSlides.length - 1 : decIndex - 1;
    setDecIndex(newIndex);
  };
  const nextSlideDec = () => {
    const isLastSlide = decIndex === decSlides.length - 1;
    const newIndex = isLastSlide ? 0 : decIndex + 1;
    setDecIndex(newIndex);
  };

  return (
    <section className="border-b-[1.5px] bg[#35e1ff] border-black pt-[9rem] md:pt-[3rem]">
      <Reveal y={80} width="100%">
        <p className="uppercase text-center text-[0.8rem] md:text-[0.7rem] tracking-widest font-medium underline">
          OUR PRODUCTS
        </p>
      </Reveal>
      <section className="min-h-screen pt-[2.5rem] md:pt-[3rem] grid place-items-center border-b-[1.5px] border-black pb-[6rem]">
        <div className="grid grid-cols-1 md:grid-cols-2 space-y-[4rem] md:space-y-0 md:gap-[3rem]">
          <Reveal y={300} width="100%">
            <div className="flex flex-col items-center justify-center w-[330px] border-[1.5px] border-black relative">
              <Image
                src={devSlides[currentIndex].url}
                alt="ly-devotional"
                loading="lazy"
                className="w-[350px] h-[400px] object-cover object-top"
              />
              <Image
                onClick={prevSlide}
                src={arrow}
                width={50}
                alt="arrow"
                className="absolute left-0 top-[28%] cursor-pointer md:hover:scale-[1.08] duration-200 rotate-180"
              />
              <Image
                onClick={nextSlide}
                src={arrow}
                width={50}
                alt="arrow"
                className="absolute right-0 top-[28%] cursor-pointer md:hover:scale-[1.08] duration-200"
              />

              <div className="border-t-[1.5px] h-[300px] border-black pt-[2rem] pb-[4rem] px-[1rem]">
                <p className=" font-louize-Bold text-[1.3rem] uppercase tracking-wider mb-[1rem]">
                  LY Devotionals
                </p>
                <p className="text-[0.9rem] mb-[1rem]">
                  With practical and relatable stories, we bring to life the
                  Gospel and the love of God to teenagers.
                </p>
                <Link
                  href={"https://selar.co/m/lovedyoungsters"}
                  className="underline text-[0.9rem] tracking-wider hover:font-medium duration-200"
                >
                  GET NOW
                </Link>
              </div>
            </div>
          </Reveal>

          {/* MMA  */}
          <Reveal y={300} width="100%">
            <div className="flex flex-col items-center justify-center w-[330px] border-[1.5px] border-black relative">
              <Image
                src={mmaSlides[mmaIndex].url}
                loading="lazy"
                alt="ly-devotional"
                className="w-[350px] h-[400px] object-top"
              />
              <Image
                onClick={prevSlideMma}
                src={arrow}
                width={50}
                alt="arrow"
                className="absolute left-0 top-[28%] cursor-pointer md:hover:scale-[1.08] duration-200 rotate-180"
              />
              <Image
                onClick={nextSlideMma}
                src={arrow}
                width={50}
                alt="arrow"
                className="absolute right-0 top-[28%] cursor-pointer md:hover:scale-[1.08] duration-200"
              />

              <div className="border-t-[1.5px] h-[300px] border-black pt-[2rem] pb-[4rem] px-[1rem]">
                <p className=" font-louize-Bold text-[1.3rem] uppercase tracking-wider mb-[1rem]">
                  MMA
                </p>
                <p className="text-[0.9rem] mb-[1rem]">
                  This is an acronym for mastering meditation with Araoluwa. In
                  6 divinely and highly-practical frameworks, we break off
                  mental strong holds, renew the minds of teenagers and make
                  them intimate with the love of God.
                </p>
                <Link
                  href={"https://selar.co/m/lovedyoungsters"}
                  className="underline text-[0.9rem] tracking-wider hover:font-medium duration-200"
                >
                  JOIN MMA
                </Link>
              </div>
            </div>
          </Reveal>

          {/* MAPS  */}
          <Reveal y={300} width="100%">
            <div className="flex flex-col items-center justify-center w-[330px] border-[1.5px] border-black relative">
              <Image
                src={mapSlides[mapIndex].url}
                loading="lazy"
                alt="ly-devotional"
                className="w-[350px] h-[400px] object-cover object-top"
              />
              <Image
                onClick={prevSlideMap}
                src={arrow}
                width={50}
                alt="arrow"
                className="absolute left-0 top-[28%] cursor-pointer md:hover:scale-[1.08] duration-200 rotate-180"
              />
              <Image
                onClick={nextSlideMap}
                src={arrow}
                width={50}
                alt="arrow"
                className="absolute right-0 top-[28%] cursor-pointer md:hover:scale-[1.08] duration-200"
              />

              <div className="border-t-[1.5px] h-[300px] border-black pt-[2rem] pb-[4rem] px-[1rem]">
                <p className=" font-louize-Bold text-[1.3rem] uppercase tracking-wider mb-[1rem]">
                  The MAPS
                </p>
                <p className="text-[0.9rem] mb-[1rem]">
                  MAP is an acronym for Meet and Pray, A monthly program to keep
                  the family of Christian teenagers refreshed and rooted in
                  their faith.
                </p>
                <Link
                  href={"https://selar.co/m/lovedyoungsters"}
                  className="underline text-[0.9rem] tracking-wider hover:font-medium duration-200"
                >
                  JOIN MAPS
                </Link>
              </div>
            </div>
          </Reveal>

          {/* DEC CAMP  */}
          <Reveal y={300} width="100%">
            <div className="flex flex-col items-center justify-center w-[330px] border-[1.5px] border-black relative">
              <Image
                src={decSlides[decIndex].url}
                loading="lazy"
                alt="ly-devotional"
                className="w-[350px] h-[400px] object-cover object-top"
              />
              <Image
                onClick={prevSlideDec}
                src={arrow}
                width={50}
                alt="arrow"
                className="absolute left-0 top-[28%] cursor-pointer md:hover:scale-[1.08] duration-200 rotate-180"
              />
              <Image
                onClick={nextSlideDec}
                src={arrow}
                width={50}
                alt="arrow"
                className="absolute right-0 top-[28%] cursor-pointer md:hover:scale-[1.08] duration-200"
              />

              <div className="border-t-[1.5px] h-[300px] border-black pt-[2rem] pb-[4rem] px-[1rem]">
                <p className=" font-louize-Bold text-[1.3rem] uppercase tracking-wider mb-[1rem]">
                  DECEMBER CAMP
                </p>
                <p className="text-[0.9rem] mb-[1rem]">
                  A 3 day pre-new year boot camp program for teenagers to reset,
                  reboot and receive God's word for the new year in their faith
                  and all aspects of their life.
                </p>
                <Link
                  href={"https://selar.co/m/lovedyoungsters"}
                  className="underline text-[0.9rem] tracking-wider hover:font-medium duration-200"
                >
                  JOIN DEC.CAMP
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      <Community />
      <GetInTouch />
    </section>
  );
};

export default ProductsPage;
