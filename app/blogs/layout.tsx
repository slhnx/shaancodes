import { PropsWithChildren } from "react";

const BlogLayout = async ({ children }: PropsWithChildren) => {
  return (
    <div className="blog-layout w-full  mx-auto text-secondary-foreground relative">
      <article className="w-[50%] mx-auto my-36 article">{children}</article>
    </div>
  );
};

export default BlogLayout;
