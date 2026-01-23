"use client";
import { socials } from "@/data";
import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { LinkPreview } from "../ui/link-preview";

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
          className="hero mt-52 gap-4"
        >
          <Image
            src="/me.jpg"
            height={100}
            width={100}
            alt="Shaan Alam"
            className="rounded-sm transition-transform hover:scale-105 hover:-rotate-[5deg]"
          />
          <div>
            <motion.h4
              variants={titleVariant}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="text-2xl mt-4 font-bold text-primary leading-tight"
            >
              Hello world 👋 I'm Shaan Alam
            </motion.h4>
            <motion.div
              variants={subtitleVariant}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="mt-4 text-muted-foreground text-base w-full"
            >
              I'm an MCA student at NIT Raipur and a full-stack developer who
              enjoys building clean, modern websites and applications where
              design, functionality, and attention to detail all matter. I focus
              on creating products that are practical, reliable, and visually
              satisfying, with a strong emphasis on thoughtful user experience.
            </motion.div>
            <motion.div
              variants={subtitleVariant}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="mt-4 text-muted-foreground text-base w-full"
            >
              I&apos;m flexible with tools and technologies and adapt to
              whatever a project requires, with a preference for modern
              frameworks and workflows. I&apos;m always open to new
              opportunities that challenge me, help me grow, and allow me to
              build better software.
            </motion.div>
            <h1 className="font-medium mt-4 -mb-4 text-primary/85">
              My Socials
            </h1>
            <div className="w-full">
              <div
                className="flex gap-x-3"
                onMouseLeave={() => setHovered(null)}
              >
                {socials.map((social, idx) => (
                  <LinkPreview
                    key={social.link}
                    isStatic={true}
                    imageSrc={social.imageSrc}
                    url={social.link}
                    className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
                  >
                    <div>
                      <div
                        className="block relative"
                        onMouseEnter={() => setHovered(idx)}
                      >
                        {hovered === idx && (
                          <motion.div
                            layoutId="hovered"
                            className="absolute top-[50%] -translate-y-[50%] left-1/2 -translate-x-1/2 -z-10 h-fit w-full p-4 rounded-md bg-primary text-primary-foreground"
                          />
                        )}
                        <span className="text-neutral-400 cursor-pointer transition-all rounded-full w-fit p-2">
                          <social.icon size={25} />
                        </span>
                      </div>
                    </div>
                  </LinkPreview>
                ))}
              </div>
            </div>
            <div>
              <GitHubCalendar
                username="slhnx"
                theme={{
                  light: ["hsl(0, 0%, 92%)", "blue"],
                  dark: ["hsl(0 0% 83%)", "#333"],
                }}
                colorScheme="light"
                showTotalCount={false}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Intro;
