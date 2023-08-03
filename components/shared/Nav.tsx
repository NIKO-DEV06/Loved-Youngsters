import Link from "next/link";
import React from "react";

const Nav = () => {
  const links = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "About",
      url: "/about",
    },
    {
      name: "Journey",
      url: "/services",
    },
    {
      name: "Products",
      url: "/contact",
    },
    {
      name: "Contribute",
      url: "/privacy-policy",
    },
    {
      name: "Contact",
      url: "/privacy-policy",
    },
  ];
  return (
    <nav className="hidden md:block md:pt-[1rem]">
      <div className="flex w-screen">
        {links.map((link, i) => (
          <Link
            key={i}
            href={"/"}
            className={`border-r-[1px] border-t-[1px] border-b-[1px] hover:bg-[#94edfc] duration-300 border-black w-full text-center py-[0.8rem] uppercase text-[0.7rem] tracking-wider ${
              i == 5 ? "border-r-[0px]" : ""
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
