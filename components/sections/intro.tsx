"use client";
import { socials } from "@/data";
import { motion } from "motion/react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { LinkPreview } from "../ui/link-preview";

const titleVariant = {
  initial: { opacity: 0, y: -20, filter: "blur(40px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const subtitleVariant = {
  initial: { opacity: 0, y: -15, filter: "blur(20px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const Intro = () => {
  const { theme } = useTheme();
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
            transition: { duration: 0.5, ease: "easeInOut" },
          }}
          className="hero mt-28 gap-4"
        >
          {/* Header image with overlay gradient */}
          <div className="relative mb-8 header-overlay">
            <Image
              src="/images/header.jpg"
              width={1000}
              height={300}
              alt="header"
              className="rounded-lg relative -z-[5]"
            />
            <div className="absolute h-[100px] w-[100px] scale-75 md:scale-150 opacity-45 blur-xl bg-green-500 -z-5 bottom-0 rounded-full"></div>
            <Image
              src="/me.jpg"
              height={100}
              width={100}
              alt="Shaan Alam"
              className="absolute left-4 -bottom-4 rounded-sm transition-transform z-10 hover:scale-105 hover:-rotate-[5deg] profile-ring"
            />
          </div>

          <div>
            {/* Animated gradient name */}
            <motion.h4
              variants={titleVariant}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-2xl mt-4 font-bold leading-tight section-heading"
            >
              <span className="text-primary">Hello world 👋 </span>
              <span className="hero-name">I&apos;m Shaan Alam</span>
            </motion.h4>

            <motion.div
              variants={subtitleVariant}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              className="mt-4 text-muted-foreground text-base w-full leading-relaxed"
            >
              I&apos;m an MCA student at NIT Raipur and a full-stack developer who
              enjoys building clean, modern websites and applications where
              design, functionality, and attention to detail all matter. I focus
              on creating products that are practical, reliable, and visually
              satisfying, with a strong emphasis on thoughtful user experience.
            </motion.div>

            <motion.div
              variants={subtitleVariant}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
              className="mt-4 text-muted-foreground text-base w-full leading-relaxed"
            >
              I&apos;m flexible with tools and technologies and adapt to
              whatever a project requires, with a preference for modern
              frameworks and workflows. I&apos;m always open to new
              opportunities that challenge me, help me grow, and allow me to
              build better software.
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <h1 className="font-medium mt-6 mb-1 text-primary/85 text-xs uppercase tracking-widest">
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
                          <span className="text-muted-foreground cursor-pointer rounded-full w-fit p-2 social-icon-wrap inline-flex">
                            <social.icon size={22} strokeWidth={1.8} />
                          </span>
                        </div>
                      </div>
                    </LinkPreview>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* GitHub Calendar in a card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 github-cal-wrap"
            >
              <GitHubCalendar
                username="slhnx"
                theme={{
                  light: ["hsl(0, 0%, 92%)", "#000"],
                  dark: ["#111", "#eee"],
                }}
                colorScheme={theme === "dark" ? "dark" : "light"}
                showTotalCount={false}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Intro;
