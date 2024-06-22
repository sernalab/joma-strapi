// import ProductImageGallery from "./ProductImageGallery";
// import ProductBasicInfo from "./ProductBasicInfo";
// import ProductAdditionalInfo from "./ProductAdditionalInfo";
// import PremiumBadge from "./PremiumBadge";

import ProductChapaPintura from "./ProductChapaPintura";
import ProductDescription from "./ProductDescription";
import ProductMotorInfo from "./ProductMotorInfo";

function ProductDetail({ product }) {
  console.log("Product data:", product);

  const { attributes } = product;
  const {
    basicInfo,
    imagesProduct,
    imagePremium,
    description,
    infoChapaPintura,
    infoElectricidad,
    codigosMotor,
  } = attributes;

  return (
    <div className="text-gray-800 bg-gray-200 p-4 rounded">
      {description && description.length > 0 && (
        <ProductDescription description={description} />
      )}
      {infoChapaPintura && infoChapaPintura.length > 0 && (
        <ProductChapaPintura infoChapaPintura={infoChapaPintura} />
      )}
      <ProductMotorInfo codigosMotor={codigosMotor} />

      {/* {imagePremium && <PremiumBadge image={imagePremium} />}
      {imagesProduct && imagesProduct.length > 0 && (
        <ProductImageGallery images={imagesProduct} />
      )}
      {basicInfo && basicInfo.length > 0 && (
        <ProductBasicInfo info={basicInfo[0]} />
      )}
      {description && description.length > 0 && (
        <ProductDescription description={description} />
      )}
      {(infoChapaPintura && infoChapaPintura.length > 0) ||
      (infoElectricidad && infoElectricidad.length > 0) ? (
        <ProductAdditionalInfo
          chapaPintura={infoChapaPintura}
          electricidad={infoElectricidad}
        />
      ) : null} */}
    </div>
  );
}

export default ProductDetail;
