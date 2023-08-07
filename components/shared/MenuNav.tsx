"use client";

import { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuNav = ({
  setIsOpen,
}: {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const pathname = usePathname();

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
      url: "/journey",
    },
    {
      name: "Products",
      url: "/products",
    },
    {
      name: "Contribute",
      url: "/contribute",
    },
    {
      name: "Contact",
      url: "/contact",
    },
  ];
  return (
    <div className="flex flex-col font-louize-mediumitalic text-[3rem]">
      {links.map((link, index) => (
        <div key={index} className="relative w-fit group">
          <Link onClick={() => setIsOpen(false)} href={link.url} className="">
            <p>{link.name}</p>
          </Link>
          <div
            className={`${
              pathname === link.url ? "scale-x-100" : "scale-x-0"
            } absolute w-full h-[1px] bg-black bottom-0 group-hover:scale-x-100 duration-300`}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default MenuNav;
