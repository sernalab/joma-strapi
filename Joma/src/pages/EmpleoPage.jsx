import { useState } from "react";

function Empleo() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  return (
    <>
      <section className="max-w-screen-xl mx-auto py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Únete a nuestro equipo
          </h2>
          <p className="text-lg text-center mb-6">
            Explora las oportunidades para crecer profesionalmente y ser parte
            de nuestra visión.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Ofertas de Empleo Actuales
              </h3>
              <ul className="space-y-4">
                <li className="bg-gray-100 p-4 rounded-lg">
                  <h4 className="font-semibold">Desarrollador Frontend</h4>
                  <p className="text-gray-500">
                    Preline UI is an open-source set of prebuilt UI components
                    based on the utility-first Tailwind CSS framework.
                  </p>
                  {isOpen1 && (
                    <div className="mt-2 text-gray-500">
                      This is a collapse body. It is hidden by default, until
                      the collapse plugin adds the appropriate classes that we
                      use to style each element. These classes control the
                      overall appearance, as well as the showing and hiding via
                      CSS transitions.
                    </div>
                  )}
                  <button
                    type="button"
                    className="mt-4 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg text-blue-600 hover:text-blue-800"
                    onClick={() => setIsOpen1(!isOpen1)}
                  >
                    {isOpen1 ? "Ver menos" : "Ver más"}
                  </button>
                </li>
                <li className="bg-gray-100 p-4 rounded-lg">
                  <h4 className="font-semibold">Desarrollador Backend</h4>
                  <p className="text-gray-500">
                    Deep dive into server-side programming.
                  </p>
                  {isOpen2 && (
                    <div className="mt-2 text-gray-500">
                      More details about backend development roles.
                    </div>
                  )}
                  <button
                    type="button"
                    className="mt-4 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg text-blue-600 hover:text-blue-800"
                    onClick={() => setIsOpen2(!isOpen2)}
                  >
                    {isOpen2 ? "Ver menos" : "Ver más"}
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Encuéntranos en LinkedIn
              </h3>
              <p className="mb-4">
                Visita nuestra página de LinkedIn para más oportunidades y para
                saber más sobre nuestra cultura de empresa.
              </p>
              <a
                href="https://www.linkedin.com"
                className="inline-block bg-joma-color p-3 text-white px-6 py-3 rounded transition-colors"
              >
                Visitar LinkedIn
              </a>
            </div>
          </div>
          <div className="text-center">
            <p>
              ¿Listo para dar el siguiente paso en tu carrera? Envíanos tu CV o
              contáctanos directamente a través de nuestro{" "}
              <a href="mailto:joma@joma-tools.com" className="font-bold">
                correo electrónico
              </a>
              .
            </p>
            <p className="font-bold">joma@joma-tools.com</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Empleo;
