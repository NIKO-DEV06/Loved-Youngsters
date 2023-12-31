"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import contact from "@/assets/contact.png";
import { ImageReveal } from "../utils/ImageReveal";
import { Reveal } from "../utils/Reveal";
import Community from "../shared/Community";

const ContactPage = () => {
  const [isSending, setIsSending] = useState(false);

  const variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  };

  const schema = yup.object().shape({
    name: yup.string().trim().required("Name field is required"),
    number: yup
      .string()
      .trim()
      .matches(/^\d+$/, "Please enter a valid phone number")
      .required("Phone number is required"),
    message: yup.string().trim().required("Please enter a message"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitFormHandler = async (data: any) => {
    setIsSending(true);
    try {
      const response = await emailjs.sendForm(
        process.env.NEXT_SERVICE_ID ?? "",
        process.env.NEXT_TEMPLATE_ID ?? "",
        "#contact-form",
        process.env.NEXT_KEY_ID ?? ""
      );
      reset();
      setIsSending(false);
      toast.success("Message Sent!");
    } catch (error) {
      setIsSending(false);
      toast.error("Message failed to send");
    }
  };

  return (
    <>
      <section className=" min-h-screen py-[8rem] md:pt-[3rem] bg-[#94edfc]">
        <Toaster position="top-center" reverseOrder={false} />
        <ImageReveal>
          <Image
            src={contact}
            alt="contact-us"
            width={500}
            className="mx-auto px-[2rem] rounded-lg"
          />
        </ImageReveal>
        <form
          id="contact-form"
          onSubmit={handleSubmit(submitFormHandler)}
          className="pt-[1.5rem] flex flex-col items-center justify-start"
        >
          <div className="flex flex-col gap-[1rem] lg:gap-[1.5rem]">
            <div className="flex flex-col items-center md:items-start">
              <motion.h1
                initial="hidden"
                animate="visible"
                variants={variants}
                className="text-[1.7rem] italic font-louize-Bold lg:text-[2.3rem] lg:w-[25rem] text-center md:text-left md:mx-0 mx-auto w-[20rem] font-semibold md:font-[500] mb-[1rem]"
              >
                Love to hear from you, Get in touch{" "}
                <motion.span
                  animate={{ rotate: [0, 10, -8, 0] }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "linear",
                  }}
                  className="animate-pulse inline-block"
                >
                  💐
                </motion.span>
              </motion.h1>
            </div>

            <div className="flex flex-col md:flex-row gap-[1rem] items-start">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={variants}
                className="flex flex-col gap-[0.4rem]"
              >
                <p className="tracking-wider lg:text-[1.2rem] font-louize-Bold font-bold">
                  Your Name
                </p>
                <input
                  placeholder="e.g. John Doe"
                  type="text"
                  {...register("name")}
                  name="name"
                  autoComplete="off"
                  className={`inputs placeholder:opacity-50 ${
                    errors.name?.message
                      ? "border-[#ff0000] focus:border-[#ff0000]"
                      : "border-black focus:border-black"
                  }`}
                />
                <p className="text-[#ff0000] font-[500] text-sm text-left pt-1">
                  {errors.name?.message}
                </p>
              </motion.div>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={variants}
                className="flex flex-col gap-[0.4rem]"
              >
                <p className="tracking-wider lg:text-[1.2rem] font-louize-Bold font-bold">
                  Your Number
                </p>
                <input
                  {...register("number")}
                  placeholder="e.g. +2347012345678"
                  type="number"
                  name="number"
                  className={`inputs placeholder:opacity-50 ${
                    errors.number?.message
                      ? "border-[#ff0000] focus:border-[#ff0000]"
                      : "border-black focus:border-black"
                  }`}
                />
                <p className="text-[#ff0000] font-[500] text-sm text-left pt-1">
                  {errors.number?.message}
                </p>
              </motion.div>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={variants}
                className="flex flex-col gap-[0.4rem]"
              >
                <p className="tracking-wider lg:text-[1.2rem] font-louize-Bold font-bold">
                  Message
                </p>
                <textarea
                  {...register("message")}
                  name="message"
                  cols={30}
                  rows={10}
                  autoComplete="off"
                  placeholder="Type your message here.."
                  className={`outline-none ${
                    errors.message?.message
                      ? "border-[#ff0000] focus:border-[#ff0000]"
                      : "border-black focus:border-black"
                  } border-[1.8px] bg-transparent placeholder:text-black h-[15rem] w-[21rem] md:w-[43rem] lg:w-[55rem] rounded-none appearance-none resize-none px-4 py-3 placeholder:opacity-50 text-[0.95rem] lg:text-[1rem]`}
                />
                <p className="text-[#ff0000] font-[500] text-sm text-center">
                  {errors.message?.message}
                </p>
              </motion.div>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0 }}
                variants={variants}
                disabled={isSending}
                className={`group flex justify-center items-center gap-[0.5rem] bg-black text-white w-[21rem] lg:w-[27rem] p-[0.65rem] mt-[1rem] tracking-widest md:hover:bg-[#94edfc] md:hover:text-black duration-200 border-[1.8px] border-black ${
                  isSending ? "opacity-50" : ""
                }`}
              >
                {isSending ? "SENDING..." : "SEND"}
              </motion.button>
            </div>
          </div>
        </form>
        <Reveal y={80} width="100%">
          <p className="text-center text-[0.9rem] px-[2rem] mt-[2rem] opacity-60">
            Your information is safe with us. Confidentiality guaranteed
          </p>
        </Reveal>
      </section>
      <Community />
    </>
  );
};

export default ContactPage;
