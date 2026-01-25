import { Post } from "@/types";
import { promises as fs } from "fs";
import path from "path";

/**
 * Asynchronously retrieves and returns a list of blog posts with their metadata.
 *
 * This function reads the directories within the "./app/blogs" path to get the slugs,
 * then imports the metadata from the MDX files located in each directory. The posts
 * are then sorted from newest to oldest based on their publish date.
 *
 * @returns {Promise<Post[]>} A promise that resolves to an array of posts with their metadata.
 */
export async function getPosts(): Promise<Post[]> {
  // Retrieve slugs from post routes
  const blogsPath = path.join("app", "blogs");
  const slugs = (await fs.readdir(blogsPath, { withFileTypes: true })).filter(
    (dirent) => dirent.isDirectory(),
  );

  // Retrieve metadata from MDX files
  const posts = await Promise.all(
    slugs.map(async (dirent) => {
      const { name } = dirent;
      const { metadata } = await import(`../app/blogs/${name}/page.mdx`);
      return { slug: name, ...metadata };
    }),
  );

  // Sort posts from newest to oldest
  posts.sort((a, b) => +new Date(b.publishDate) - +new Date(a.publishDate));

  return posts;
}
