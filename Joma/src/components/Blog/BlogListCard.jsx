export const BlogListCard = ({ post }) => {
  const imageUrl =
    post.attributes.image?.data?.attributes?.formats?.thumbnail?.url;
  const fullImageUrl = `http://localhost:1337${imageUrl}`;
  return (
    <a className="group rounded-xl overflow-hidden" href={`/blog/${post.id}`}>
      <div className="sm:flex">
        <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
          <img
            className="group-hover:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl"
            src={fullImageUrl}
            alt={post.attributes.title}
          />
        </div>
        <div className="grow mt-4 sm:mt-0 sm:ms-6 px-4 sm:px-0">
          <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600">
            {post.attributes.title}
          </h3>
          <p className="mt-3 text-gray-600">
            {post.attributes.shortDescription}
          </p>
          <p className="mt-4 inline-flex items-center gap-x-1 text-blue-600 decoration-2 hover:underline font-medium">
            Leer más
            <svg
              className="flex-shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </p>
        </div>
      </div>
    </a>
  );
};
