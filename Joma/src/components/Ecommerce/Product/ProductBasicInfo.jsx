function ProductBasicInfo({ name, price, reference }) {
  return (
    <div className="col-span-1">
      <h2 className="text-2xl font-bold mb-4">{name}</h2>
      <div className="price-section mb-4">
        {price && (
          <p className="text-3xl text-red-600 font-bold mb-2">{price}€</p>
        )}
        <span htmlFor="quantity" className="mr-2 font-bold">
          Cantidad:
        </span>
        <div className="flex gap-4">
          <input
            id="quantity"
            type="number"
            defaultValue="1"
            className="w-16 border p-2"
          />
          <button className="w-full bg-joma-color text-white py-2 px-4 rounded">
            Añadir al carrito
          </button>
        </div>
      </div>
      <p className="mt-4 text-gray-600">
        Código referencia producto:{" "}
        <span className="text-xl font-bold">{reference}</span>
      </p>
    </div>
  );
}

export default ProductBasicInfo;
