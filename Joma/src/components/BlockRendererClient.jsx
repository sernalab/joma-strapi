import { BlocksRenderer } from "@strapi/blocks-react-renderer";

const BlockRendererClient = ({ content }) => {
  if (!content) return null;

  return (
    <BlocksRenderer
      content={content}
      blocks={{
        image: ({ image }) => (
          <img
            src={image.url}
            alt={image.alternativeText || ""}
            width={image.width}
            height={image.height}
          />
        ),
      }}
    />
  );
};

export default BlockRendererClient;
