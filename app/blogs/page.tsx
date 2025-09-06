import { getPosts } from "@/lib/posts";
import Link from "next/link";
import { format } from "date-fns";

const Blogs = async () => {
  const posts = await getPosts();

  return (
    <div className="py-12">
      <h1 className="text-primary text-5xl font-semibold">My Writings</h1>
      <p className="text-muted-foreground text-base my-4">
        This is my writing area, I document all my learnings here. You can find
        code snippets, blogs on technologies or in general what I think about
        programming here.
      </p>
      <div className="py-12 blog-list">
        {posts.map((post) => (
          <div className="mb-12" key={post.slug}>
            <Link
              href={`/blogs/${post.slug}`}
              key={post.slug}
              className="font-medium text-lg text-secondary-foreground blog-link"
            >
              {post.title}
            </Link>
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
        ))}
      </div>
    </div>
  );
};

export default Blogs;
