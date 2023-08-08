import Image from "next/image";
import founder1 from "@/assets/founder1.png";
import founder2 from "@/assets/founder2.png";
import founder3 from "@/assets/founder3.png";
import founder4 from "@/assets/founder4.png";
import { Reveal } from "../utils/Reveal";
import { ImageReveal } from "../utils/ImageReveal";

const FounderSection = () => {
  return (
    <section className="min-h-screen border-y-[1.5px] border-black bg-[#35e1ff] mt-[5rem] flex flex-col pb-[6rem]">
      <div className="flex flex-col md:flex-row gap-[2rem] lg:gap-[5rem] px-[1.5rem] lg:px-[8rem] justify-center items-center pt-[5rem]">
        <Image
          src={founder1}
          alt="founder1"
          width={350}
          className="h-[400px] md:h-auto object-cover md:hover:scale-[1.05] md:duration-300 cursor-pointer object-bottom border-2 border-black rounded-2xl md:w-[50%]"
        />

        <div className="">
          <Reveal y={80}>
            <h1 className="font-louize-mediumitalic text-[2.1rem] font-bold z-[20]">
              Meet The Founder
            </h1>
          </Reveal>
          <Reveal y={200}>
            <p className="text-[0.9rem] leading-[1.8rem]">
              Hey, awesome teens ready to rock the faith scene! I'm
              Simileoluwa—Simi for short. I'm your go-to guide for an epic
              Christian journey. Now, buckle up and get ready for a
              faith-filling adventure like no other!
              <br />
              <br /> Picture this: a crew of confident, fun-loving teenagers,
              diving head first into deep adolescent conversations, discovering
              truths from the word that blow your minds, and building
              friendships that last a lifetime. That's what Loved Youngsters is
              all about!
              <br />
              <br /> But hold up, we're not your average Sunday school crew.
              We're here to turn up the volume, break the mold, and unleash the
              life-changing power of God's love and His ability to transform
              lives to a world that desperately needs it.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="flex flex-col md:flex-row-reverse gap-[2rem] lg:gap-[5rem] px-[1.5rem] lg:px-[8rem] justify-center items-center pt-[4rem]">
        <Image
          src={founder2}
          alt="founder1"
          width={350}
          className="h-[400px] md:h-auto md:hover:scale-[1.05] cursor-pointer md:duration-300 object-cover object-bottom border-2 border-black rounded-2xl md:w-[50%]"
        />
        <Reveal y={200}>
          <p className="text-[0.9rem] leading-[1.8rem]">
            Together, we'll navigate the highs and lows of teenage life,
            tackling real issues that hit close to home. From dealing with
            doubts and insecurities to finding purpose in a big world & being
            confident in it, we're in this wild ride together.
            <br />
            <br /> And hey, we know the struggle is real. I've been there,
            doubting, questioning, and searching for answers all my teen life.
            But guess what? I've discovered a faith that's rock-solid, a love
            that's unshakeable, and a purpose that's mind-blowing in Christ. And
            I want to share it all with you! Imagine engaging in discussions
            that allows you ask tough questions freely without being judged.
          </p>
        </Reveal>
      </div>

      <div className="flex flex-col md:flex-row gap-[2rem] lg:gap-[5rem] px-[1.5rem] lg:px-[8rem] justify-center items-center pt-[4rem]">
        <Image
          src={founder3}
          alt="founder1"
          width={350}
          className="h-[400px] md:h-auto object-cover cursor-pointer md:hover:scale-[1.05] md:duration-300 object-bottom border-2 border-black rounded-2xl md:w-[50%]"
        />
        <Reveal y={200}>
          <p className="text-[0.9rem] leading-[1.8rem]">
            Now, that's not all, you'll also get to participate in exciting
            spiritual adventures that push your limits, and immerse yourself in
            mind-blowing Bible studies and worship sessions that bring the word
            of God right to the doorstep of your heart!
            <br />
            <br />
            Oh, and did I forget to mention? We'll also team up for hands-on
            service projects, engaging in acts of kindness and compassion that
            reflect Christ's love to those around us.
            <br />
            <br /> But here's the deal: it's not just about sermons and
            spirituality. It's about building a tight-knit tribe of friends who
            will be there for you through thick and thin. A squad that
            celebrates your uniqueness, lifts you up when you're down, and
            dances like no one's watching!
          </p>
        </Reveal>
      </div>

      <div className="flex flex-col md:flex-row-reverse gap-[2rem] lg:gap-[5rem] px-[1.5rem] lg:px-[8rem] justify-center items-center pt-[4rem]">
        <Image
          src={founder4}
          alt="founder1"
          width={350}
          className="h-[400px] md:h-auto md:hover:scale-[1.05] cursor-pointer md:duration-300 object-cover  object-bottom border-2 border-black rounded-2xl md:w-[50%]"
        />
        <Reveal y={200}>
          <p className="text-[0.9rem] leading-[1.8rem]">
            With us, you can be yourself, find belonging, and build lifelong
            friendships. We'll laugh, dream, and grow together, empowering one
            another to live out our faith boldly. There's a huge space in our
            heart for you! You've got us now. And we'll never let you do this
            teenage life on your own!
            <br />
            <br /> So, if you're seeking a place where your faith can flourish
            and your voice can be heard. Shoot me a message at{" "}
            <span className="font-semibold italic inline-block">
              lovedyoungsters@gmail.com
            </span>{" "}
            or slide into my DMs on Instagram{" "}
            <span className="font-semibold italic inline-block">
              @ www.instagram.com/lovedyoungsters
            </span>{" "}
            .
            <br />
            <br /> Let's journey forward in faith together. Your teens are about
            to be the best years of your life! Are you ready for it? Yes?{" "}
            <span className=" font-bold inline-block">Let's go!</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default FounderSection;
