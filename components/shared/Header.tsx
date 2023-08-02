"use client";
import { useState } from "react";
import Nav from "./Nav";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuClass = isOpen
    ? "hamburger--vortex is-active"
    : "hamburger--vortex";
  return (
    <header className="bg-[#0cc0df] border-b-[1px] border-b-black md:border-none flex md:flex-col items-center justify-between px-[1.5rem] py-[1rem] fixed w-screen z-[11]">
      <h1 className="font-louize-mediumitalic font-bold text-[2rem] md:text-[3.5rem] md:tracking-wide text-[#c4f4fc] text[#ffd900] md:pt-[0.5rem]">
        Loved Youngsters
      </h1>
      <div className="md:hidden">
        <button
          className={`${menuClass} scale-[0.75] scale-x-[0.8]`}
          type="button"
          onClick={toggleMenu}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </div>
      <Nav />
    </header>
  );
};

export default Header;
