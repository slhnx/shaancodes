'use client';
import { skills } from "@/data";
import { Badge } from "../ui/badge";
import { motion } from "motion/react";
import { AnimatedGroup } from "../ui/animated-group";

const MySkills = () => {
  return (
    <section id="my-skills" className="my-16 w-[80%] xl:w-[50%] mx-auto">
      <div className="mb-8">
        <motion.h1
          initial={{ opacity: 0, y: -15, filter: "blur(40px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.4, duration: 0.4, ease: "easeInOut" }}
          className="text-xl mb-4 font-semibold"
        >
          Skills
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -15, filter: "blur(40px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }}
          className="text-muted-foreground max-w-2xl"
        >
          A showcase of the tools, technologies, and concepts I&apos;ve learned
          and applied throughout my journey.
        </motion.p>
      </div>
      <div className="mb-16">
        <AnimatedGroup
          className="flex flex-wrap gap-4"
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
          {skills.map((skill) => (
            <Badge key={skill.id}>{skill.label}</Badge>
          ))}
        </AnimatedGroup>
      </div>
    </section>
  );
};

export default MySkills;
