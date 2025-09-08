"use client";
import { projects } from "@/data";
import { motion } from "motion/react";
import Link from "next/link";
import { AnimatedGroup } from "../ui/animated-group";
import { useState } from "react";

const Projects = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="my-12 w-[40%] mx-auto">
      <div className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -15, filter: "blur(40px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }}
          className="text-4xl font-bold text-foreground mb-4"
        >
          Projects
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -15, filter: "blur(40px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }}
          className="text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          A collection of things I&apos;ve built — from small experiments to
          full-fledged applications.
        </motion.p>
      </div>
      <div className="posts" onMouseLeave={() => setHovered(null)}>
        <AnimatedGroup
          className="flex gap-4 h-fit"
          variants={{
            container: {
              hidden: { opacity: 0, y: -15, filter: "blur(40px)" },
              visible: {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: {
                  delay: 0.7,
                  staggerChildren: 0.05,
                },
              },
            },
            item: {
              hidden: { opacity: 0, y: -15, filter: "blur(40px)" },
              visible: {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: {
                  duration: 1.2,
                  type: "spring",
                  bounce: 0.3,
                },
              },
            },
          }}
        >
          {projects.map((project, idx) => (
            <div>
              {hovered === idx && (
                <motion.div
                  layoutId="hovered"
                  className="absolute inset-0 -z-10 h-full w-full p-4 rounded-md bg-gray-100 dark:bg-neutral-900"
                />
              )}
              <div
                onMouseEnter={() => setHovered(idx)}
                key={project.title}
                className="grayscale w-full hover:grayscale-0 relative hover:shadow-2xl border border-border rounded-md p-4 overflow-hidden [&>div]:hover:grayscale-0 transition-all duration-500"
              >
                <div className="relative">
                  <img
                    src={project.icon}
                    width={50}
                    height={50}
                    alt={project.title}
                  />
                  <h1 className="text-primary text-xl font-semibold my-3">
                    {project.title}
                  </h1>
                  <p className="text-muted-foreground text-sm w-3/4">
                    {project.description}
                  </p>
                  <div className="relative z-10 flex items-center space-x-3 mt-4">
                    <a
                      href={project.live_link}
                      rel="noreferrer"
                      target="_blank"
                      className="text-muted-foreground text-sm underline-effect"
                    >
                      Live Demo
                    </a>
                    <Link
                      href={project.github_repo_link}
                      rel="noreferrer"
                      target="_blank"
                      className="text-muted-foreground text-sm underline-effect"
                    >
                      Github Repo
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </AnimatedGroup>
      </div>
    </section>
  );
};

export default Projects;
