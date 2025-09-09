"use client";
import { socials } from "@/data";
import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";

const titleVariant = {
  initial: { opacity: 0, y: -15, filter: "blur(40px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const subtitleVariant = {
  initial: { opacity: 0, y: -15, filter: "blur(20px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const Intro = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <motion.div>
      <div className="w-[80%] xl:w-[50%] mx-auto">
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: { duration: 0.4, ease: "easeInOut" },
          }}
          className="hero mt-52 flex flex-col md:flex-row items-center gap-4"
        >
          <Image
            src="/me.jpg"
            height={250}
            width={250}
            alt="Shaan Alam"
            className="rounded-xl transition-transform hover:scale-105 hover:-rotate-[5deg]"
          />
          <div>
            <motion.h4
              variants={titleVariant}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="text-2xl font-bold text-primary leading-tight text-center md:text-left"
            >
              Hello world 👋 I'm
            </motion.h4>
            <motion.h1
              variants={titleVariant}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="text-2xl md:text-4xl xl:text-5xl font-bold text-primary tracking-tight text-center md:text-left"
            >
              Shaan Alam
            </motion.h1>
            <motion.div
              variants={subtitleVariant}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="mt-4 text-muted-foreground text-base md:text-xl w-full text-center md:text-left"
            >
              Full-Stack Developer crafting modern web apps and SaaS products —
              sharing my journey, projects, and insights online.
            </motion.div>
            <div className="mt-4 w-full">
              <div
                className="flex justify-center md:justify-start gap-3 mt-4"
                onMouseLeave={() => setHovered(null)}
              >
                {socials.map((social, idx) => (
                  <div
                    key={social.link}
                    className="block relative"
                    onMouseEnter={() => setHovered(idx)}
                  >
                    {hovered === idx && (
                      <motion.div
                        layoutId="hovered"
                        className="absolute top-[50%] -translate-y-[50%] left-1/2 -translate-x-1/2 -z-10 h-fit w-full p-4 rounded-md bg-gray-100 dark:bg-neutral-900"
                      />
                    )}
                    <span className="text-neutral-400 cursor-pointer transition-all rounded-full w-fit p-2">
                      <social.icon size={25} />
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Intro;
