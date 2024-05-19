import { useState, useEffect } from "react";

import { getFeaturedProducts } from "../../services/productServices";

import Card from "./Card";

function FeaturedProducts() {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const featuredData = await getFeaturedProducts();
        setFeaturedProducts(featuredData);
      } catch (error) {
        console.log("ERROR API CATEGORIES");
      }
    }

    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-4 mt-10 gap-5">
      <h3 className="col-span-4 text-center mb-4">PRODUCTOS DESTACADOS</h3>
      {featuredProducts.map((featuredItem) => (
        <Card
          key={featuredItem.id}
          title={featuredItem.attributes.title}
          shortDescription={featuredItem.attributes.shortDescription}
        />
      ))}
    </div>
  );
}

export default FeaturedProducts;
