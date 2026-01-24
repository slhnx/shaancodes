"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { projects } from "@/data";
import { Link2 } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { AnimatedGroup } from "../ui/animated-group";

const Projects = () => {
  return (
    <section id="projects" className="my-32 w-[80%] xl:w-[50%] mx-auto">
      <div className="mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -15, filter: "blur(40px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }}
          className="text-xl font-bold text-foreground mb-4"
        >
          Projects
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -15, filter: "blur(40px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }}
          className="text-muted-foreground max-w-2xl"
        >
          A collection of things I&apos;ve built — from small experiments to
          full-fledged applications.
        </motion.p>
      </div>
      <div className="posts">
        <AnimatedGroup
          className="w-full"
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
            <Accordion
              key={idx}
              type="single"
              collapsible
              defaultValue="item-1"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="gap-x-2 hover:no-underline py-0 px-3 hover:bg-muted-foreground/10 mt-2 ">
                  <div className="flex items-center gap-x-2">
                    <img
                      src={project.icon}
                      width={20}
                      height={20}
                      alt={project.title}
                    />
                    <h1 className="text-primary font-semibold my-3">
                      {project.title}
                    </h1>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-8 text-muted-foreground border-b">
                  {project.description}
                  <div className="relative z-10 flex items-center space-x-3 mt-4">
                    <a
                      href={project.live_link}
                      rel="noreferrer"
                      target="_blank"
                      className="text-muted-foreground text-sm underline-effect flex items-center gap-x-2"
                    >
                      <Link2 size={15} />
                      Live Demo
                    </a>
                    <Link
                      href={project.github_repo_link}
                      rel="noreferrer"
                      target="_blank"
                      className="text-muted-foreground text-sm underline-effect flex items-center gap-x-2"
                    >
                      <Link2 size={15} />
                      Github Repo
                    </Link>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </AnimatedGroup>
      </div>
    </section>
  );
};

export default Projects;
