function Promotions() {
  return (
    <>
      <section className="max-w-screen-xl mx-auto p-4 md:p-8 lg:p-12  py-12">
        <div class="container mx-auto">
          <h2 class="text-3xl font-bold text-center mb-12 text-gray-600">
            Actualmente en promoción:
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-8">
            <div class="group relative bg-gray-100 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div class="absolute inset-0 bg-black bg-opacity-25 group-hover:bg-opacity-50 transition duration-300"></div>
              <img
                src="https://images.unsplash.com/photo-1713008451062-69d80599b486?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Nombre del Producto"
                class="w-full h-56 object-cover sm:h-72 md:h-96"
              />
              <div class="absolute bottom-0 left-0 p-4">
                <h3 class="text-lg font-bold text-white">
                  Nombre del Producto
                </h3>
                <p class="text-sm text-gray-300">Número de referencia</p>

                <div class="mt-3 flex items-center space-x-4">
                  <span class="text-xl font-semibold text-white">$89.99</span>
                  <span class="text-base text-gray-400 line-through">
                    $119.99
                  </span>
                </div>
                <a
                  href="#"
                  class="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
                >
                  Contactar
                </a>
              </div>
            </div>
            <div class="group relative bg-gray-100 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div class="absolute inset-0 bg-black bg-opacity-25 group-hover:bg-opacity-50 transition duration-300"></div>
              <img
                src="https://images.unsplash.com/photo-1713008451062-69d80599b486?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Nombre del Producto"
                class="w-full h-56 object-cover sm:h-72 md:h-96"
              />
              <div class="absolute bottom-0 left-0 p-4">
                <h3 class="text-lg font-bold text-white">
                  Nombre del Producto
                </h3>
                <p class="text-sm text-gray-300">Número de referencia</p>
                <div class="mt-3 flex items-center space-x-4">
                  <span class="text-xl font-semibold text-white">$89.99</span>
                  <span class="text-base text-gray-400 line-through">
                    $119.99
                  </span>
                </div>
                <a
                  href="#"
                  class="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
                >
                  Contactar
                </a>
              </div>
            </div>
            <div class="group relative bg-gray-100 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div class="absolute inset-0 bg-black bg-opacity-25 group-hover:bg-opacity-50 transition duration-300"></div>
              <img
                src="https://images.unsplash.com/photo-1713008451062-69d80599b486?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Nombre del Producto"
                class="w-full h-56 object-cover sm:h-72 md:h-96"
              />
              <div class="absolute bottom-0 left-0 p-4">
                <h3 class="text-lg font-bold text-white">
                  Nombre del Producto
                </h3>
                <p class="text-sm text-gray-300">Número de referencia</p>
                <div class="mt-3 flex items-center space-x-4">
                  <span class="text-xl font-semibold text-white">$89.99</span>
                  <span class="text-base text-gray-400 line-through">
                    $119.99
                  </span>
                </div>
                <a
                  href="#"
                  class="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
                >
                  Contactar
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Promotions;
