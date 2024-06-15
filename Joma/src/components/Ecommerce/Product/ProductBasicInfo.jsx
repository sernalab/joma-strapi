import { useAuthContext } from "../../../context/AuthContext";
import { useEffect } from "react";

function ProductBasicInfo({ name, price, priceA, priceB, reference }) {
  const { user } = useAuthContext();

  useEffect(() => {
    console.log("Usuario logueado:", user);
  }, [user]);

  const getPrice = () => {
    if (!user) return price;
    if (user.role === "Distribuidor A") return priceA;
    if (user.role === "Distribuidor B") return priceB;
    return price;
  };

  return (
    <div className="col-span-1">
      <h2 className="text-2xl font-bold mb-4">{name}</h2>
      <div className="price-section mb-4">
        <p className="text-3xl text-red-600 font-bold mb-2">{getPrice()}€</p>

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
