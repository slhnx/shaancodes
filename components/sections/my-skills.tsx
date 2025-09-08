import { skills } from "@/data";
import { Badge } from "../ui/badge";
import { motion } from "motion/react";
import { AnimatedGroup } from "../ui/animated-group";

const MySkills = () => {
  return (
    <section className="my-32 w-[40%] mx-auto"> 
      <div className="text-center mb-8">
        <motion.h1
          initial={{ opacity: 0, y: -15, filter: "blur(40px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.4, duration: 0.4, ease: "easeInOut" }}
          className="text-3xl font-semibold"
        >
          Skills
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -15, filter: "blur(40px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }}
          className="text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          A showcase of the tools, technologies, and concepts I’ve learned and
          applied throughout my journey.
        </motion.p>
      </div>
      <div className="mb-16">
        <AnimatedGroup
          className="flex justify-center gap-4"
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
