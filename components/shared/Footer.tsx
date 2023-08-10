"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import youtube from "@/assets/youtube.svg";
import facebook from "@/assets/facebook.svg";
import instagram from "@/assets/instagram.svg";
import message from "@/assets/message.svg";
import { ImageReveal } from "../utils/ImageReveal";
import { Reveal } from "../utils/Reveal";

const Footer = () => {
  return (
    <>
      <meta
        name="format-detection"
        content="telephone=no, date=no, email=no, address=no"
      />
      <footer className="bg-[#94edfc] font-louize-medium grid place-items-center lg:block min-h-[68vh] text-black pb-[4rem]">
        <div className=" mx-auto lg:mx-0 lg:px-[6rem] pt-[2rem]">
          <ImageReveal>
            <Image
              src={logo}
              width={200}
              height={200}
              alt="logo"
              className=""
            />
          </ImageReveal>
        </div>
        <div className="lg:flex translate-y-[-1.5rem] lg:flex-row lg:justify-between lg:px-[8rem]">
          <div className="flex flex-col justify-center lg:justify-start lg:items-start items-center gap-[2rem] lg:pr-[12rem]">
            <Reveal y={80}>
              <div className="relative w-fit group">
                <Link
                  href={"mailto:lovedyoungsters@gmail.com"}
                  className="font-sofia-regular text-[1.5rem]"
                >
                  lovedyoungsters@gmail.com
                  <div
                    className={`scale-x-0 absolute w-full h-[1px] bg-black bottom-0 group-hover:scale-x-100 duration-300`}
                  ></div>
                </Link>
                <div
                  className={`absolute w-full h-[1px] bg-black opacity-[0.4] bottom-0 scale-x-100 duration-300`}
                ></div>
              </div>
            </Reveal>
            <div className="text-center lg:text-left">
              <Reveal y={80} width="100%">
                <p className="font-sofia-extralight mx-auto">
                  <span className="font-sofia-regular">Phone:</span> +234 8053
                  1067 13
                </p>
              </Reveal>
              <Reveal y={80}>
                <p className="font-sofia-extralight w-[70%] mx-auto lg:mx-0">
                  Ilorin, Kwara State, Nigeria.
                </p>
              </Reveal>
            </div>
            <Reveal y={80} width="100%">
              <p className="w-[65%] font-sofia-regular lg:font-sofia text-center lg:text-left mx-auto lg:mx-0">
                © 2023 Loved Youngsters. All Rights Reserved
              </p>
            </Reveal>
          </div>
          <div className="flex flex-col justify-center items-center gap-[1.5rem] mt-[2rem] lg:hidden">
            <div className="flex justify-between gap-[3rem] ">
              <Link href={"https://youtube.com/@lovedyoungsters"}>
                <ImageReveal>
                  <Image src={youtube} alt="youtube" width={25} height={25} />
                </ImageReveal>
              </Link>
              <Link href={""}>
                <ImageReveal>
                  <Image src={message} alt="message" width={25} height={25} />
                </ImageReveal>
              </Link>
            </div>
            <div className="flex justify-between gap-[3rem]">
              <Link href={""}>
                <ImageReveal>
                  <Image src={facebook} alt="facebook" width={25} height={25} />
                </ImageReveal>
              </Link>
              <Link
                href={
                  "https://instagram.com/lovedyoungsters?igshid=MzRlODBiNWFlZA=="
                }
              >
                <ImageReveal>
                  <Image
                    src={instagram}
                    alt="instagram"
                    width={30}
                    height={30}
                  />
                </ImageReveal>
              </Link>
            </div>
          </div>
          {/* //////// */}
          <div className="hidden lg:flex flex-col justify-center items-center gap-[1.5rem] mt-[2rem] text-[1.5rem]">
            <div className="flex justify-between gap-[3rem] translate-x-[-1.6rem]">
              <Reveal y={80}>
                <div className="relative w-fit group h-[2rem] overflow-hidden bgred-700 font-sofia-extralight hover:font-sofia duration-300">
                  <Link
                    href={"https://youtube.com/@lovedyoungsters"}
                    className="flex flex-col gap-[rem]"
                  >
                    <p className="md:group-hover:translate-y-[-1.7rem] duration-[450ms] transform ease-in-out">
                      Youtube
                    </p>
                    <p className="group-hover:translate-y-[-2.1rem] duration-[450ms] transform ease-in-out">
                      Youtube
                    </p>
                  </Link>
                </div>
              </Reveal>
              <Reveal y={80}>
                <div className="relative w-fit group h-[2rem] overflow-hidden font-sofia-extralight hover:font-sofia duration-300 translate-x[0.7rem] pl-[0.7rem]">
                  <Link href={"/contact"} className=" flex flex-col gap-[rem]">
                    <p className="md:group-hover:translate-y-[-1.9rem] duration-[450ms] transform ease-in-out">
                      Message
                    </p>
                    <p className="group-hover:translate-y-[-2.1rem] duration-[450ms] transform ease-in-out">
                      Message
                    </p>
                  </Link>
                </div>
              </Reveal>
            </div>
            <div className="flex justify-between gap-[3rem]">
              <Reveal y={80}>
                <div className="relative w-fit group h-[2rem] overflow-hidden bgred-700 font-sofia-extralight hover:font-sofia duration-300">
                  <Link href={""} className=" flex flex-col gap-[rem]">
                    <p className=" md:group-hover:translate-y-[-1.7rem] duration-[450ms] transform ease-in-out">
                      Facebook
                    </p>
                    <p className="group-hover:translate-y-[-2.1rem] duration-[450ms] transform ease-in-out">
                      Facebook
                    </p>
                  </Link>
                </div>
              </Reveal>
              <Reveal y={80}>
                <div className="relative w-fit group h-[2rem] overflow-hidden bgred-700 font-sofia-extralight hover:font-sofia duration-300">
                  <Link
                    href={
                      "https://instagram.com/lovedyoungsters?igshid=MzRlODBiNWFlZA=="
                    }
                    className=" flex flex-col gap-[rem]"
                  >
                    <p className=" md:group-hover:translate-y-[-1.9rem] duration-[450ms] transform ease-in-out">
                      Instagram
                    </p>
                    <p className="group-hover:translate-y-[-2.1rem] duration-[450ms] transform ease-in-out">
                      Instagram
                    </p>
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
