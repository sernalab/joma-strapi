import { useState } from "react";

function ProductsMenu({ menuItems }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  return (
    <>
      <div className="relative">
        {menuItems.map((item) => (
          <button
            onClick={toggleDropdown}
            className="bg-blue-500 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            {item.attributes.title}
          </button>
        ))}
        {isOpen && (
          <ul className="right-0 w-48 mt-2 py-1 bg-white shadow-lg border border-gray-200 rounded-md">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer"></li>
          </ul>
        )}
      </div>
    </>
  );
}

export default ProductsMenu;
