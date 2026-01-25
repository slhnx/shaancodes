import { getPosts } from "@/lib/posts";
import PostList from "../renderers/post-list";

const Blogs = async () => {
  const featuredPosts = await getPosts();

  return (
    <section id="blogs" className="my-20 w-[80%] xl:w-[50%] mx-auto">
      <PostList posts={featuredPosts} />
    </section>
  );
};

export default Blogs;
