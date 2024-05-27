import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

function GalleryImage({ imagesProduct = [] }) {
  const galleryImages = imagesProduct.map((image) => ({
    original: image.url,
    thumbnail: image.url,
    description: image.alt,
  }));

  return <ImageGallery showPlayButton={false} items={galleryImages} />;
}

export default GalleryImage;
