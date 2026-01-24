"use client";

import { useState } from "react";
import { Post } from "@/types";
import { motion } from "motion/react";
import Image from "next/image";
import { format } from "date-fns";
import Link from "next/link";

const BlogPostsList = ({ posts }: { posts: Post[] }) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div onMouseLeave={() => setHovered(null)} className="space-y-4">
      {posts.map((post, idx) => (
        <Link
          href={`/blogs/${post.slug}`}
          key={post.slug}
          className="block no-underline! font-normal!"
        >
          <motion.article
            onMouseEnter={() => setHovered(idx)}
            className="
              relative
              rounded-lg
              px-4 py-5
              sm:px-6 sm:py-6
              md:px-8 md:py-8
            "
          >
            {/* Hover background — desktop only */}
            {hovered === idx && (
              <motion.div
                layoutId="hovered"
                className="
                  absolute inset-0 -z-10
                  hidden sm:block
                  rounded-lg
                  bg-gray-100 dark:bg-neutral-900
                "
              />
            )}

            <div className="flex flex-col sm:flex-row gap-6">
              {/* Image */}
              <div className="relative w-full sm:w-48 md:w-56 shrink-0">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  width={400}
                  height={300}
                  sizes="(max-width: 640px) 100vw, 220px"
                  className="rounded-md object-cover w-full h-48 sm:h-auto"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-between">
                <div>
                  <h2 className="text-base sm:text-lg font-medium text-primary">
                    {post.title}
                  </h2>

                  <p className="text-muted-foreground text-sm sm:text-base mt-2">
                    {post.excerpt}
                  </p>
                </div>

                <div className="mt-4">
                  <p className="text-neutral-500 text-xs sm:text-sm">
                    Published on{" "}
                    {format(new Date(post.publishDate), "d/MM/yyyy")}
                  </p>

                  <ul className="mt-2 flex flex-wrap gap-2 text-xs text-neutral-500">
                    {post.tags.map((tag) => (
                      <li key={tag} className="blog-tag-item">
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.article>
        </Link>
      ))}
    </div>
  );
};

export default BlogPostsList;
