"use client";
import Blogs from "@/components/sections/blogs";
import Changelog from "@/components/sections/changelog";
import Experiences from "@/components/sections/experience";
import Intro from "@/components/sections/intro";
import MySkills from "@/components/sections/my-skills";
import Projects from "@/components/sections/projects";

const Page = () => {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <div className="relative z-10">
        <Intro />
        <MySkills />
        <Projects />
        <Experiences />
        <Blogs />
        <Changelog />
      </div>
    </main>
  );
};

export default Page;
