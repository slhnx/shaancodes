"use client";
import Blogs from "@/components/sections/blogs";
import ContactSection from "@/components/sections/contact";
import Experiences from "@/components/sections/experience";
import Footer from "@/components/sections/footer";
import Intro from "@/components/sections/intro";
import MySkills from "@/components/sections/my-skills";
import Projects from "@/components/sections/projects";
import Quote from "@/components/sections/quote";

const Page = () => {
  return (
    <main className="relative min-h-screen overflow-x-hidden mx-auto">
      <Intro />
      <MySkills />
      <Projects />
      <Experiences />
      <Blogs />
      <Quote />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Page;
