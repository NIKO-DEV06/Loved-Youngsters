"use client";
import { useState } from "react";
import Nav from "./Nav";
import Menu from "./Menu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuClass = isOpen
    ? "hamburger--vortex is-active"
    : "hamburger--vortex";
  return (
    <>
      <header className="bg-[#0cc0df] border-b-[1px] border-b-white md:border-none flex md:flex-col items-center justify-between px-[1.5rem] pt-[1rem] pb-[1rem] md:pb-0 fixed md:relative w-screen z-[11]">
        <h1 className="font-louize-mediumitalic font-bold text-[2rem] md:text-[3.5rem] md:tracking-wide text-[#c4f4fc] text[#ffd900] md:pt-[0.5rem]">
          Loved Youngsters
        </h1>

        <Nav />
      </header>
      {/* <div className="md:hidden invert mix-blend-difference z-[40]"> */}
      <button
        className={`${menuClass} scale-[0.75] scale-x-[0.8] z-[40] fixed right-[1.5rem] top-[1.5rem] md:hidden`}
        type="button"
        onClick={toggleMenu}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
      {/* </div> */}
      <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Header;
