function ProductDescription({ description }) {
  return (
    <div className="text-gray-800 bg-gray-200 p-4 rounded">
      {description.map((desc) => (
        <div key={desc.id} className="mb-4">
          {desc.title && <p className="font-bold">{desc.title}</p>}
          <p>{desc.content}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductDescription;
