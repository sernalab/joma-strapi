import { useEffect, useState } from "react";

import { BlogListCard } from "../components/Blog/BlogListCard";
import { getPosts } from "../services/blogServices";

function BlogListPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const posts = await getPosts();
        setPosts(posts);
        console.log(posts);
      } catch (error) {
        console.log("ERROR API NEW PRODUCTS");
      }
    }
    fetchPosts();
  }, []);

  return (
    <>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <h2 className="text-4xl pb-10">Nuestros artículos</h2>
        <div className="grid lg:grid-cols-2 lg:gap-y-16 gap-10">
          {posts.map((post) => (
            <BlogListCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </>
  );
}

export default BlogListPage;
