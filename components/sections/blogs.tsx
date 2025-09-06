"use client";
import { featuredPosts } from "@/data";
import { format } from "date-fns";
import { motion } from "motion/react";
import Link from "next/link";

const Blogs = () => {
  return (
    <div className="my-12 w-[60%] mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: -15, filter: "blur(40px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ delay: 0.8, duration: 0.6, ease: "easeInOut" }}
        className="text-3xl font-semibold"
      >
        My Writings 🖊️
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: -15, filter: "blur(40px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ delay: 0.6, duration: 0.6, ease: "easeInOut" }}
        className="text-muted-foreground text-base my-4 w-2/3"
      >
        This is my writing area, I document all my learnings here. You can find
        code snippets, blogs on technologies or in general what I think about
        programming here.
      </motion.p>
      <div className="posts">
        {featuredPosts.map((post) => (
          <motion.div
            className="my-3 transition-colors hover:bg-primary-foreground p-4 rounded-lg"
            key={post.slug}
            initial={{ opacity: 0, y: -15, filter: "blur(40px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.6, duration: 0.6, ease: "easeInOut" }}
          >
            <Link
              href={`/blogs/${post.slug}`}
              key={post.slug}
              className="flex gap-4"
            >
              <div>
                <img
                  src={post.coverImage}
                  alt={post.title}
                  width={200}
                  height={200}
                  className="rounded-lg"
                />
              </div>
              <div>
                <h1 className="font-medium text-lg text-secondary-foreground blog-link">
                  {post.title}
                </h1>
                <p className="text-neutral-500 blog-link-text mt-2">
                  Published on {format(new Date(post.publishDate), "d/MM/yyy")}
                </p>
                <ul className="mt-2 flex items-center space-x-3 text-xs text-neutral-500">
                  {post.tags.map((tag) => (
                    <li className="blog-tag-item" key={tag}>
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          </motion.div>
        ))}
        <Link href="/blogs" className="underline-effect">More...</Link>
      </div>
    </div>
  );
};

export default Blogs;
