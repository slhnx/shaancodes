import remarkGfm from "remark-gfm";
import remarkToc from "remark-toc";
import createMDX from "@next/mdx";
import rehypeHighlight from "rehype-highlight";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  images: {
    remotePatterns: [
      new URL("https://media2.dev.to/**"),
      new URL("https://api.microlink.io"),
    ],
  },
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeHighlight, remarkToc],
  },
});

export default withMDX(nextConfig);
