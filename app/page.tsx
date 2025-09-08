"use client";
import Intro from "@/components/sections/intro";
import Blogs from "@/components/sections/blogs";
import { motion } from "motion/react";
import Projects from "@/components/sections/projects";
import MySkills from "@/components/sections/my-skills";
import Changelog from "@/components/sections/changelog";
import Experiences from "@/components/sections/experience";

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

const Page = () => {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
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
      <Intro />
      <MySkills />
      <Projects />
      <Experiences />
      <Blogs />
      <Changelog />
    </main>
  );
};

export default Page;
