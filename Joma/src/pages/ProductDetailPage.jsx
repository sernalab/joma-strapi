import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getProductById } from "../services/productServices";

import GalleryImage from "../components/Ecommerce/GalleryImage";

function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const data = await getProductById(id);
        setProduct(data);
        console.log("data producto", data);
      } catch (error) {
        console.log("Error fetching product details:", error);
      }
    }

    fetchProduct();
  }, [id]);

  if (!product) return <div>Loading...</div>;

  const { attributes } = product;
  const { basicInfo, imagesProduct = [] } = attributes;

  return (
    <section className="max-w-screen-xl mx-auto p-4 md:p-8 lg:p-12">
      <Link
        to={"/news"}
        className="text-blue-500 hover:text-blue-600 font-medium"
      >
        Volver a novedades
      </Link>
      <div className="grid grid-cols-2 gap-12 mt-12">
        <div className="col-span-1">
          <GalleryImage imagesProduct={imagesProduct} />
        </div>
        <div className="col-span-1">
          <h2 className="text-2xl font-bold">{basicInfo[0].name}</h2>
          <p className="mb-4">REFERENCIA:</p>
          <span>{basicInfo[0].reference}</span>
          <ul className="list-disc list-inside text-gray-800 bg-gray-200 p-3">
            <li>
              Now this is a story all about how, my life got flipped turned
              upside down
            </li>
            <li>And I like to take a minute and sit right here</li>
            <li>
              I'll tell you how I became the prince of a town called Bel-Air
            </li>
          </ul>
          <div>COMPARTIR</div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetailPage;
