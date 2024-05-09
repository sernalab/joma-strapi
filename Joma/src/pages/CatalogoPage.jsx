import { useState, useEffect } from "react";

import { getCategories, getMenu, getFeaturedProducts } from "../config/api";

import ProductCarouselComponent from "../components/ProductCarousel";
import KitCard from "../components/KitCard";
import Tabs from "../components/Tabs";

function CatalogoPage() {
  const [selectedValue, setSelectedValue] = useState("");
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

  const handleSelectChange = (event) => {
    console.log("Selected value: ", event.target.value);
    setSelectedValue(event.target.value);
  };

  return (
    <>
      <section className="max-w-screen-xl mx-auto p-4 md:p-8 lg:p-12">
        <ProductCarouselComponent />
        <div className="flex justify-between mt-10">
          <div>
            <label htmlFor="hs-select-label" className="block  font-bold mb-2">
              Categorías
            </label>
            <select
              id="hs-select-label"
              className="py-3 px-4 pe-9 block  border-2 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
              onChange={handleSelectChange}
            >
              {categories.map((category) => (
                <option key={category.id} value={category.attributes.name}>
                  {category.attributes.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <Tabs menuItems={menuItems} />
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
        {/* <div className="grid grid-cols-4 mt-10 gap-5">
          {selectedCategory ? (
            selectedCategory.subcategory.map((subcat) => (
              <KitCard key={subcat} title={subcat} />
            ))
          ) : (
            <>
              <h3 className="col-span-4 text-center mb-4">
                PRODUCTOS DESTACADOS
              </h3>
              <KitCard title="Test 1" />
              <KitCard title="Test 2" />
              <KitCard title="Test 3" />
              <KitCard title="Test 4" />
            </>
          )}
        </div> */}
      </section>
    </>
  );
}

export default CatalogoPage;
