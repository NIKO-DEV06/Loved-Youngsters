"use client";
import { useState } from "react";
import Image from "next/image";
import { ImageReveal } from "../utils/ImageReveal";
import Nav from "./Nav";
import Menu from "./Menu";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuClass = isOpen
    ? "hamburger--vortex is-active"
    : "hamburger--vortex";
  return (
    <ImageReveal>
      <>
        <header className="bg-[#35e1ff] border-b-[1px] border-b-white md:border-none flex md:flex-col items-center justify-between px-[1.5rem] pt-[1rem] md:pt-[2rem] pb-[1rem] md:pb-0 fixed md:relative w-screen z-[11]">
          <ImageReveal>
            <Image
              src={logo}
              width={140}
              height={20}
              alt="logo"
              className="h-[70px] md:h-[90px] md:w-[200px] object-cover"
            />
          </ImageReveal>
          <Nav />
        </header>
        {/* <div className="md:hidden invert mix-blend-difference z-[40]"> */}
        <button
          className={`${menuClass} scale-[0.75] scale-x-[0.8] z-[40] fixed right-[1.5rem] top-[2.3rem] md:hidden`}
          type="button"
          onClick={toggleMenu}
        >
          <ImageReveal>
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </ImageReveal>
        </button>

        {/* </div> */}
        <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
      </>
    </ImageReveal>
  );
};

export default Header;
