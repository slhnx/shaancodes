import { PropsWithChildren } from "react";

const BlogLayout = async ({ children }: PropsWithChildren) => {
  return (
    <div className="blog-layout w-full mx-auto text-primary-foreground relative">
      <article
        className="
          mx-auto
          px-4 sm:px-6 lg:px-0
          my-16 sm:my-24 lg:my-32
          w-full
          max-w-2xl md:max-w-3xl
          article
        "
      >
        {children}
      </article>
    </div>
  );
};

export default BlogLayout;
