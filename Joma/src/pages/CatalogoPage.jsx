import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  getProducts,
  getProductsByCategory,
} from "../services/productServices";
import { getCategories, getMenu } from "../services/api";
import { useAuthContext } from "../context/AuthContext";
import ProductsMenu from "../components/Ecommerce/ProductsMenu";
import ProductCarouselComponent from "../components/ProductCarousel";
import Tabs from "../components/Ecommerce/Tabs";
import FeaturedProducts from "../components/Ecommerce/FeaturedProducts";

function CatalogoPage() {
  const [categoriesData, setCategories] = useState([]);
  const [productsData, setProducts] = useState([]);
  const [selectedCategoryProducts, setSelectedCategoryProducts] = useState([]);
  const [menuItems, setMenu] = useState([]);
  const [selectedMenu, setSelectedMenu] = useState("");
  const { user, isTokenValid, logout } = useAuthContext();

  useEffect(() => {
    if (user && !isTokenValid()) {
      logout();
    }
  }, [user, isTokenValid, logout]);

  useEffect(() => {
    async function fetchData() {
      try {
        const categoriesData = await getCategories();
        setCategories(categoriesData);

        const menuItems = await getMenu();
        setMenu(menuItems);

        const productsData = await getProducts();
        setProducts(productsData);
      } catch (error) {
        console.log("ERROR API CATEGORIES");
      }
    }

    fetchData();
  }, []);

  const handleChange = (event) => {
    setSelectedMenu(event.target.value);
  };

  const handleCategoryClick = async (categoryId) => {
    console.log("Category ID:", categoryId);
    try {
      const products = await getProductsByCategory(categoryId);
      console.log("Fetched Products:", products);
      setSelectedCategoryProducts(products);
    } catch (error) {
      console.log("ERROR FETCHING PRODUCTS BY CATEGORY", error);
    }
  };

  const selectedMenuItem = menuItems.find(
    (menu) => menu.id.toString() === selectedMenu
  );

  return (
    <>
      <section className="max-w-screen-xl mx-auto p-4 md:p-8 lg:p-12">
        <Link to="/login">
          <button className="py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
            Go to Login Page
          </button>
        </Link>
        <p>
          SEGUIMOS logeados como:{" "}
          {user && isTokenValid() ? user.username : "Nadie"}
        </p>
        {user && isTokenValid() && (
          <button
            onClick={logout}
            className="py-2 px-4 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75 mt-4"
          >
            Logout
          </button>
        )}
        <ProductCarouselComponent />
        <div className="mt-10">
          <span className="font-bold">Categorías</span>
          <select
            name="categories"
            className="mb-10"
            value={selectedMenu}
            onChange={handleChange}
          >
            <option value="" disabled>
              - Seleccione un menú -
            </option>
            {menuItems.map((menuItem) => (
              <option key={menuItem.id} value={menuItem.id}>
                {menuItem.attributes.title} (
                {menuItem.attributes.categories.data.length} categorías)
              </option>
            ))}
          </select>
          {selectedMenuItem && (
            <ul>
              {selectedMenuItem.attributes.categories.data.map((category) => (
                <li key={category.id}>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleCategoryClick(category.id);
                    }}
                  >
                    {category.attributes.name}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
        {selectedCategoryProducts.length > 0 && (
          <div className="mt-10">
            <h2 className="font-bold">Productos</h2>
            <ul>
              {selectedCategoryProducts.map((product) => (
                <li key={product.id}>
                  {product.attributes.basicInfo.map((info) => (
                    <div key={info.id}>
                      <Link to={`/details/${product.id}`}>
                        <strong>{info.name}</strong>
                      </Link>
                      <p>{info.description}</p>
                    </div>
                  ))}
                </li>
              ))}
            </ul>
          </div>
        )}
        <FeaturedProducts />
      </section>
    </>
  );
}

export default CatalogoPage;
