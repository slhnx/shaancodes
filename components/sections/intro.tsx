"use client";
import { motion } from "motion/react";
import Image from "next/image";

const titleVariant = {
  initial: { opacity: 0, y: -15, filter: "blur(40px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const subtitleVariant = {
  initial: { opacity: 0, y: -15, filter: "blur(20px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const Intro = () => {
  return (
    <motion.div>
      <div className="w-[60%] mx-auto">
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: { duration: 0.6, ease: "easeInOut" },
          }}
          className="hero mt-52 flex items-center gap-4"
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
              className="text-2xl sm:text-6xl lg:text-6xl font-bold text-primary tracking-tight"
            >
              Shaan Alam
            </motion.h1>
            <motion.div
              variants={subtitleVariant}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.3, duration: 0.6, ease: "easeInOut" }}
              className="mt-4 text-muted-foreground text-base sm:text-xl w-3/4"
            >
              Full-Stack Developer crafting modern web apps and SaaS products —
              sharing my journey, projects, and insights online.
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Intro;
