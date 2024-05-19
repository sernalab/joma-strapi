import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getPostsById } from "../services/blogServices";
import BlockRendererClient from "../components/BlockRendererClient";

function BlogDetailPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    async function fetchPost() {
      try {
        const response = await getPostsById(id);
        setPost(response);
      } catch (error) {
        console.log("ERROR API FETCH POST", error);
      }
    }
    fetchPost();
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  const imageUrl = post.attributes.image?.data?.attributes?.formats?.large?.url;
  const fullImageUrl = `http://localhost:1337${imageUrl}`;
  const content = post.attributes.body; // Asegúrate de que el contenido del cuerpo esté en "body"

  return (
    <div className="max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 py-1.5 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50"
      >
        ← Back
      </button>
      <div className="max-w-2xl">
        <div className="flex justify-between items-center mb-6">
          <div className="flex w-full sm:items-center gap-x-5 sm:gap-x-3">
            <div>
              <button
                type="button"
                className="py-1.5 px-2.5 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
              >
                <svg
                  className="size-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                </svg>
                Tweet
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-5 md:space-y-8">
          <div className="space-y-3">
            <h2 className="text-2xl font-bold md:text-3xl">
              {post.attributes.title}
            </h2>

            <p className="text-lg text-gray-800">
              {post.attributes.shortDescription}
            </p>
          </div>

          <figure>
            <img
              className="w-full object-cover rounded-xl"
              src={fullImageUrl}
              alt={post.attributes.title}
            />
            <figcaption className="mt-3 text-sm text-center text-gray-500">
              A related image.
            </figcaption>
          </figure>

          <BlockRendererClient content={content} />
        </div>
      </div>
    </div>
  );
}

export default BlogDetailPage;
