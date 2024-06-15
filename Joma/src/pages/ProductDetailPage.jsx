import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getProductById } from "../services/productServices";

import GalleryImage from "../components/Ecommerce/GalleryImage";
import ShareButtons from "../components/Ecommerce/ShareButtons";
import ProductBasicInfo from "../components/Ecommerce/Product/ProductBasicInfo";
import ProductDetail from "../components/Ecommerce/Product/ProductDetail";

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
    <section className="max-w-screen-xl mx-auto py-4 md:py-8 lg:py-12">
      <div className="bg-gray-200 p-4 mb-6">
        <Link
          to="/news"
          className="text-blue-500 hover:text-blue-600 font-medium"
        >
          Volver a novedades
        </Link>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-6">
        <div className="col-span-1">
          <GalleryImage imagesProduct={imagesProduct} />
          <p className="mt-4 text-gray-600">
            Código referencia producto:{" "}
            <span className="text-xl font-bold">{basicInfo[0].reference}</span>
          </p>
        </div>
        <div className="col-span-1">
          <ProductBasicInfo
            name={basicInfo[0].name}
            price={basicInfo[0].price}
            priceA={basicInfo[0].priceA}
            priceB={basicInfo[0].priceB}
            reference={basicInfo[0].reference}
          />
          <ProductDetail product={product} />
          <div className="share-section mb-6">
            <h3 className="text-lg font-semibold mb-2">Compartir</h3>
            <ShareButtons
              url={window.location.href}
              title={basicInfo[0].name}
              description={basicInfo[0].reference}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetailPage;
