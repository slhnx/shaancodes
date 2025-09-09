import { experiences } from "@/data";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar } from "lucide-react";
import { motion } from "motion/react";

const Experiences = () => {
  return (
    <section className="my-32 w-[80%] xl:w-[50%] mx-auto">
      <div className="mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -15, filter: "blur(40px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }}
          className="text-4xl font-bold text-foreground mb-4"
        >
          Work Experience
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -15, filter: "blur(40px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }}
          className="text-lg text-muted-foreground max-w-2xl"
        >
          My professional journey as a Full Stack Developer, building innovative
          solutions and contributing to impactful projects.
        </motion.p>
      </div>

      <div className="space-y-8 w-full mx-auto">
        {experiences.workExperiences.map((experience, index) => (
          <div
            key={index}
            className="border w-full rounded-lg bg-gradient-to-r from:bg-background to-transparent backdrop-blur-3xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="flex items-start gap-4 mb-6">
              <img
                src={experience.companyLogo}
                alt={`${experience.company} logo`}
                className="w-12 h-12 rounded-lg object-cover shadow-md"
              />
              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {experience.role}
                </h3>
                <p className="text-lg font-semibold text-primary mb-2">
                  {experience.company}
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">
                    <MapPin className="w-3 h-3 mr-1" />
                    {experience.location}
                  </Badge>
                  <Badge variant="outline">{experience.type}</Badge>
                </div>
              </div>
            </div>

            {/* Date Range */}
            <div className="flex items-center gap-2 mb-6 text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <span className="font-medium">
                {experience.startDate} - {experience.endDate}
              </span>
            </div>

            {/* Responsibilities */}
            <div>
              <h4 className="font-semibold text-foreground mb-3">
                Key Responsibilities:
              </h4>
              <ul className="space-y-2">
                {experience.responsibilities.map((responsibility, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experiences;
