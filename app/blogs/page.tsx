import BlogPostsList from "@/components/blog-posts-list";
import { getPosts } from "@/lib/posts";

const Blogs = async () => {
  const posts = await getPosts();

  return (
    <div className="py-10 sm:py-12">
      <h1 className="text-primary text-lg sm:text-xl font-semibold">
        My Writings
      </h1>

      <p className="text-muted-foreground text-sm sm:text-base my-4 max-w-2xl">
        This is my writing area, I document all my learnings here. You can find
        code snippets, blogs on technologies, or general thoughts on
        programming.
      </p>

      <div className="mt-10 space-y-12">
        <BlogPostsList posts={posts} />
      </div>
    </div>
  );
};

export default Blogs;
