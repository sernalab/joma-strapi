import { useState, useEffect } from "react";
import {
  getCategories,
  getMenu,
  getProducts,
  getProductsByCategory,
} from "../config/api";

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

  const handleCategoryClick = async (id_category) => {
    try {
      const products = await getProductsByCategory(id_category);
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
                {menuItem.attributes.title}(
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
                      handleCategoryClick(category.attributes.id_category);
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
                <li key={product.id}>{product.attributes.name}</li>
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
