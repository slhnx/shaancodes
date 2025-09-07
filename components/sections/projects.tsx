"use client";
import { projects } from "@/data";
import { motion } from "motion/react";
import Link from "next/link";
import { AnimatedGroup } from "../ui/animated-group";

const Projects = () => {
  return (
    <div className="my-12 w-[60%] mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: -15, filter: "blur(40px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }}
        className="text-3xl font-semibold"
      >
        Projects
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: -15, filter: "blur(40px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }}
        className="text-muted-foreground text-base my-4 w-2/3"
      >
        This is my writing area, I document all my learnings here. You can find
        code snippets, blogs on technologies or in general what I think about
        programming here.
      </motion.p>
      <div className="posts">
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
          {projects.map((project) => (
            <div
              key={project.title}
              className="grayscale w-full hover:grayscale-0 relative hover:shadow-2xl border border-border rounded-xl p-4 overflow-hidden [&>div]:hover:grayscale-0 transition-all duration-500"
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
          ))}
        </AnimatedGroup>
      </div>
    </div>
  );
};

export default Projects;
