"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { TextLoop } from "@/components/ui/text-loop";
import Image from "next/image";

const titleVariant = {
  initial: { opacity: 0, y: -15, filter: "blur(40px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const subtitleVariant = {
  initial: { opacity: 0, y: -15, filter: "blur(20px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const blurVariants = {
  initial: { opacity: 0, scale: 0.8, rotate: 0 },
  animate: {
    opacity: 0.5,
    scale: 1,
    rotate: 360,
  },
};

const floatingVariants = {
  animate: {
    y: [-30, 10, -30],
    x: [-10, 10, -10],
  },
};

const pulseVariants = {
  animate: {
    scale: [1, 1.1, 1.4, 1.5, 1.2, 0.8, 1],
    opacity: [0.5, 0.7, 0.5],
  },
};

export default function Home() {
  const navItems = [
    {
      name: "Projects",
      link: "#pricing",
    },
    {
      name: "Skills",
      link: "#skills",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Contact",
      link: "#about",
    },
  ];

  return (
    <motion.main className="relative min-h-screen overflow-x-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-blurs flex flex-col items-end absolute -right-32 sm:-right-60 top-0 blur-xl -z-10"
      >
        <motion.div
          variants={blurVariants}
          initial="initial"
          animate="animate"
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="h-[6rem] sm:h-[8rem] lg:h-[10rem] rounded-full w-[30rem] sm:w-[45rem] lg:w-[60rem] z-1 bg-gradient-to-b blur-[4rem] sm:blur-[5rem] lg:blur-[6rem] from-pink-600 to-sky-600"
          style={{ transformOrigin: "center" }}
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          transition={{
            delay: 1,
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="h-[6rem] sm:h-[8rem] lg:h-[10rem] rounded-full w-[45rem] sm:w-[70rem] lg:w-[90rem] z-1 bg-gradient-to-b blur-[4rem] sm:blur-[5rem] lg:blur-[6rem] from-blue-900 to-purple-600 opacity-50"
        />
        <motion.div
          variants={pulseVariants}
          animate="animate"
          transition={{
            delay: 2,
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="h-[6rem] sm:h-[8rem] lg:h-[10rem] rounded-full w-[30rem] sm:w-[45rem] lg:w-[60rem] z-1 bg-gradient-to-b blur-[4rem] sm:blur-[5rem] lg:blur-[6rem] from-emerald-600 to-sky-500"
        />
      </motion.div>

      <div className="w-[60%] mx-auto">
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: { duration: 0.6, ease: "easeInOut" },
          }}
          className="hero my-52 flex items-center gap-4"
        >
          <Image
            src="/me.jpg"
            height={200}
            width={200}
            alt="Shaan Alam"
            className="rounded-xl"
          />
          <div>
            <motion.h4
              variants={titleVariant}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="text-2xl font-bold text-primary leading-tight"
            >
              Hello world 👋 I'm
            </motion.h4>
            <motion.h1
              variants={titleVariant}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="text-2xl sm:text-6xl lg:text-6xl font-bold text-primary leading-tight"
            >
              Shaan Alam
            </motion.h1>
            <motion.div
              variants={subtitleVariant}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.3, duration: 0.6, ease: "easeInOut" }}
              className="text-muted-foreground text-base sm:text-xl w-3/4"
            >
              Full-Stack Developer crafting modern web apps and SaaS products —
              sharing my journey, projects, and insights online.
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.main>
  );
}
