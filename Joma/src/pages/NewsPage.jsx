import { useState, useEffect } from "react";
import { getNewProducts } from "../services/productServices";
import NewProductCard from "../components/NewProductCard";

function NewsPage() {
  const [newProduct, setNewProduct] = useState([]);

  useEffect(() => {
    async function fetchNewProducts() {
      try {
        const newProductsData = await getNewProducts();
        setNewProduct(newProductsData);
        console.log(newProductsData);
      } catch (error) {
        console.log("ERROR API NEW PRODUCTS");
      }
    }
    fetchNewProducts();
  }, []);

  return (
    <>
      <section className="max-w-screen-xl mx-auto p-4 md:p-8 lg:p-12  py-12">
        <div class="container mx-auto">
          <h2 class="text-3xl font-bold text-center mb-12 text-gray-600">
            Nuestras novedades:
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-8">
            {newProduct.map((product) => (
              <NewProductCard key={product.id} newProduct={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default NewsPage;
