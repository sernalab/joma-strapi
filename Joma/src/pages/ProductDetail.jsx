function ProductDetailPage() {
  return (
    <section className="max-w-screen-xl mx-auto p-4 md:p-8 lg:p-12">
      <p>Product detail</p>
      <div className="grid grid-cols-2 gap-12">
        <div className="col-span-1">
          <img
            src="https://www.joma-tools.com/catalogo/1546-large_default/juego-cutter-jo017.jpg"
            alt="Detalle del producto"
            className="w-full object-cover h-auto"
          />
        </div>
        <div className="col-span-1">
          <h2 className="text-2xl font-bold">TITLE</h2>
          <p className="mb-4">REFERENCIA XXXXXX</p>
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
