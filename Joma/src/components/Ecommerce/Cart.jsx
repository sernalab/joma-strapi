import { useCartContext } from "../../context/CartContext";

export function Cart() {
  const { cartItems, clearCart, isCartVisible, hideCart } = useCartContext();

  return (
    <aside
      className={`fixed inset-y-0 right-0 w-80 bg-white shadow-xl transform transition-transform ${
        isCartVisible ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-xl font-bold">Carrito</h2>
        <button
          onClick={hideCart}
          className="text-gray-600 hover:text-gray-900"
        >
          ✕
        </button>
      </div>
      <div className="p-4">
        {cartItems.length === 0 ? (
          <p>No hay productos en el carrito.</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="mb-4">
              <p>{item.name}</p>
              <p>
                {item.quantity} x {item.price}€
              </p>
            </div>
          ))
        )}
      </div>
      <div className="flex justify-between p-4 border-t">
        <button className="bg-green-500 text-white py-2 px-4 rounded">
          Comprar
        </button>
        <button
          onClick={clearCart}
          className="bg-red-500 text-white py-2 px-4 rounded"
        >
          Limpiar carrito
        </button>
      </div>
    </aside>
  );
}
