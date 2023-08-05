"use client";

import React from "react";
import { motion } from "framer-motion";

interface Props {
  children: JSX.Element;
  isOpen: boolean;
}

export const MenuReveal = ({ children, isOpen }: Props) => {
  return (
    <motion.div
      className="fixed bg-[#94edfc] z-[30] w-screen md:w-[689px] md:right-0 h-screen px-[2rem] md:hidden overflow-scroll"
      initial={{ x: 800, opacity: 1 }}
      animate={{ x: isOpen ? 0 : 800, opacity: isOpen ? 1 : 1 }}
      transition={{
        duration: 1,
        type: "spring",
        damping: 50,
        stiffness: 300,
      }}
    >
      {children}
    </motion.div>
  );
};

export const BgReveal = ({ children, isOpen }: Props) => {
  return (
    <div className={`fixed z-[25] md:hidden`}>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpen ? 1 : 0 }}
          transition={{
            duration: 0.5,
          }}
        >
          {children}
        </motion.div>
      )}
    </div>
  );
};
