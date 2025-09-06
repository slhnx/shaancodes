import { PropsWithChildren } from "react";

const BlogLayout = async ({ children }: PropsWithChildren) => {
  return (
    <div className="blog-layout w-full  mx-auto text-secondary-foreground relative">
      {children}
      <div className="bg-white absolute bottom-0 left-0 -translate-y-1/2 h-[100px] w-full bg-opacity-15 blur-[80px] z-10"></div>
    </div>
  );
};

export default BlogLayout;

