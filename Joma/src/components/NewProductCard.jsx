function NewProductCard() {
  return (
    <>
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-8 cursor-pointer">
        <div class="group relative bg-gray-100 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <div class="absolute inset-0 bg-black bg-opacity-25 group-hover:bg-opacity-50 transition duration-300"></div>
          <img
            src="https://www.joma-tools.com/catalogo/951-large_default/supresor-de-picos-12-y-24-voltios-josp.jpg"
            alt="Nombre del Producto"
            class="w-full h-56 object-cover sm:h-72 md:h-96"
          />
          <div class="absolute bottom-0 left-0 p-4">
            <h3 class="text-lg font-bold text-white">Nombre del Producto</h3>
            <p class="text-sm text-gray-300">Número de referencia</p>

            {/* <div class="mt-3 flex items-center space-x-4">
                  <span class="text-xl font-semibold text-white">$89.99</span>
                  <span class="text-base text-gray-400 line-through">
                    $119.99
                  </span>
                </div> */}
            <a
              href="#"
              class="inline-block mt-4 bg-blue-600 text-white hover:text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
            >
              Contactar
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default NewProductCard;
