import { lifeChangelog } from "@/data";
import { motion } from "motion/react";
import Image from "next/image";
import { InView } from "../ui/in-view";

const Changelog = () => {
  return (
    <div className="my-12 w-[40%] mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: -15, filter: "blur(40px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ delay: 0.4, duration: 0.4, ease: "easeInOut" }}
        className="text-3xl font-semibold"
      >
        Life Changelog
      </motion.h1>
      <div className="mt-6">
        {lifeChangelog.map((changelog) => (
          <InView
            once
            key={changelog.year}
            variants={{
              hidden: {
                opacity: 0,
                y: 30,
                scale: 0.95,
                filter: "blur(4px)",
              },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                filter: "blur(0px)",
              },
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            viewOptions={{ margin: "0px 0px -200px 0px" }}
          >
            <div key={changelog.year}>
              <h2 className="text-2xl font-semibold">{changelog.year}</h2>
              <div>
                {changelog.events.map((event) => (
                  <div className="my-4 px-3 py-4 border-b">
                    <h3 className="text-lg font-semibold flex gap-x-4">
                      <span>
                        <Image
                          src="/verified.svg"
                          alt=""
                          width={30}
                          height={30}
                          className="rounded-full"
                        />
                      </span>
                      {event.title}
                    </h3>
                    <p className="ml-12 text-muted-foreground text-base">
                      {event.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </InView>
        ))}
      </div>
    </div>
  );
};

export default Changelog;
