"use client";
import Intro from "@/components/sections/intro";
import Blogs from "@/components/sections/blogs";
import { motion } from "motion/react";
import Projects from "@/components/sections/projects";
import MySkills from "@/components/sections/my-skills";
import Changelog from "@/components/sections/changelog";
import Experiences from "@/components/sections/experience";
import Plasma from "@/components/plasma";
import LightRays from "@/components/plasma";

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
      <div className="relative z-10">
        <Intro />
        <MySkills />
        <Projects />
        <Experiences />
        <Blogs />
        <Changelog />
      </div>
    </main>
  );
};

export default Page;
