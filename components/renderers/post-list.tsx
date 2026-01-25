"use client";
import { Post } from "@/types";
import { format } from "date-fns";
import { ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";

const PostList = ({ posts }: { posts: Post[] }) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <>
      <div className="mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -15, filter: "blur(40px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.8, duration: 0.6, ease: "easeInOut" }}
          className="text-xl font-bold text-foreground mb-4"
        >
          My Writings 🖊️
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -15, filter: "blur(40px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.6, duration: 0.6, ease: "easeInOut" }}
          className="text-muted-foreground max-w-2xl"
        >
          This is my writing area, I document all my learnings here. You can
          find code snippets, blogs on technologies or in general what I think
          about programming here.
        </motion.p>
      </div>
      <div className="posts" onMouseLeave={() => setHovered(null)}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {posts.map((post, idx) => (
            <motion.div
              onMouseEnter={() => setHovered(idx)}
              className="my-3 transition-colors p-4 rounded-lg"
              key={post.slug}
              initial={{ opacity: 0, y: -15, filter: "blur(40px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 0.6, duration: 0.6, ease: "easeInOut" }}
            >
              {hovered === idx && (
                <motion.div
                  layoutId="hovered"
                  className="absolute inset-0 -z-10 h-full w-full rounded-md bg-gray-100 dark:bg-neutral-900"
                />
              )}
              <Link
                href={`/blogs/${post.slug}`}
                key={post.slug}
                className="flex flex-col gap-4"
              >
                <div className="w-full">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="rounded-lg w-full"
                  />
                </div>
                <div>
                  <h1 className="font-medium text-lg text-secondary-foreground blog-link">
                    {post.title}
                  </h1>
                  <p className="text-neutral-500 blog-link-text mt-2">
                    Published on{" "}
                    {format(new Date(post.publishDate), "d/MM/yyy")}
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
        </div>
        <Link href="/blogs" className="flex items-center gap-x-1 w-fit text-sm">
          <Button variant="ghost">
            More <ChevronRight size={12} />
          </Button>
        </Link>
      </div>
    </>
  );
};

export default PostList;
