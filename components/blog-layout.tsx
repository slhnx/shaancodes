"use client";
import Image from "next/image";
import { motion } from "motion/react";

type BlogLayoutProps = {
  children: React.ReactNode;
  frontMatter: {
    title: string;
    slug: string;
    publishDate: Date;
    lastModified: Date;
    author: string;
    coverImage: string;
    tags: string[];
    category: "Guides";
    featured: boolean;
    published: boolean;
    excerpt: string;
    originalUrl: string;
  };
};

const BlogLayout = ({ children, frontMatter }: BlogLayoutProps) => {
  return (
    <article className="max-w-3xl mx-auto">
      {frontMatter.coverImage && (
        <motion.div
          initial={{ opacity: 0, filter: "blur(40px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.3 }}
          className="mb-6"
        >
          <Image
            src={frontMatter.coverImage}
            alt={frontMatter.title}
            width={1200}
            height={600}
            className="rounded-xl object-cover w-full h-auto"
          />
        </motion.div>
      )}
      <h1 className="text-4xl font-bold mb-4 text-primary">
        {frontMatter.title}
      </h1>
      <div className="prose">{children}</div>
    </article>
  );
};

export default BlogLayout;
