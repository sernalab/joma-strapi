import { useState, useEffect } from "react";

import { getCategories, getMenu, getFeaturedProducts } from "../config/api";

import ProductCarouselComponent from "../components/ProductCarousel";
import KitCard from "../components/KitCard";
import Tabs from "../components/Tabs";

function CatalogoPage() {
  const [categories, setCategories] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [menuItems, setMenu] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const categoriesData = await getCategories();
        setCategories(categoriesData);
        console.log("categories", categories);

        const menuItems = await getMenu();
        setMenu(menuItems);
        console.log("menuItems", menuItems);

        const featuredData = await getFeaturedProducts();
        setFeaturedProducts(featuredData);
        console.log(featuredData);
      } catch (error) {
        console.log("ERROR API CATEGORIES");
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <section className="max-w-screen-xl mx-auto p-4 md:p-8 lg:p-12">
        <ProductCarouselComponent />
        <div className="mt-10">
          <div>
            <label htmlFor="hs-select-label" className="block  font-bold mb-2">
              Categorías
            </label>
            <Tabs menuItems={menuItems} />
          </div>
        </div>
        <div className="grid grid-cols-4 mt-10 gap-5">
          <h3 className="col-span-4 text-center mb-4">PRODUCTOS DESTACADOS</h3>
          {featuredProducts.map((featuredItem) => (
            <KitCard
              key={featuredItem.id}
              title={featuredItem.attributes.title}
              shortDescription={featuredItem.attributes.shortDescription}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default CatalogoPage;
