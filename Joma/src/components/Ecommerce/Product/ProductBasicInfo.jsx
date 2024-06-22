import { useEffect, useState } from "react";
import { useAuthContext } from "../../../context/AuthContext";
import { useCartContext } from "../../../context/CartContext";
import { getPriceBasedOnRole } from "../../../config/utils";

function ProductBasicInfo({ id, name, price, priceA, priceB, reference }) {
  const { user } = useAuthContext();
  const { addItemToCart } = useCartContext();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    console.log("Usuario logueado:", user);
  }, [user]);

  const finalPrice = getPriceBasedOnRole(user, price, priceA, priceB);

  const handleAddToCart = () => {
    addItemToCart({ id, name, price: finalPrice, quantity });
  };

  return (
    <div className="col-span-1">
      <h2 className="text-2xl font-bold mb-4">{name}</h2>
      <div className="price-section mb-4">
        <p className="text-3xl text-red-600 font-bold mb-2">{finalPrice}€</p>

        <span htmlFor="quantity" className="mr-2 font-bold">
          Cantidad:
        </span>
        <div className="flex gap-4">
          <input
            id="quantity"
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="w-16 border p-2"
          />
          <button
            onClick={handleAddToCart}
            className="w-full bg-joma-color text-white py-2 px-4 rounded"
          >
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
