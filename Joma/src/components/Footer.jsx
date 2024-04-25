import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-200">
      <div className="max-w-screen-xl mx-auto p-4 md:p-8 lg:p-12">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <h5 class="font-bold uppercase text-gray-600 mb-3">
              Nuestra Empresa
            </h5>
            <nav>
              <ul>
                <li className="mb-1">
                  <a href="/about">Sobre nosotros</a>
                </li>
                <li className="mb-1">
                  <a href="/envio">Envío</a>
                </li>
                <li className="mb-1">
                  <a href="/payment">Pago</a>
                </li>
                <li className="mb-1">
                  <a href="/faq">Preguntas frecuentes</a>
                </li>
                <li className="mb-1">
                  <a href="/empleo">Empleo</a>
                </li>
                <li className="mb-1">
                  <a href="/contact">Contacto</a>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <h5 class="font-bold uppercase text-gray-600 mb-3">Legal</h5>
            <nav>
              <ul>
                <li className="mb-1">
                  <a href="/legal">Aviso legal</a>
                </li>
                <li className="mb-1">
                  <a href="/terms">Términos y condiciones</a>
                </li>
              </ul>
            </nav>
          </div>
          <div class="sm:col-span-2 lg:col-span-1">
            <div class="max-w-xl text-center mx-auto">
              <div class="mb-5">
                <h2 class="text-2xl font-bold md:text-3xl md:leading-tight dark:text-white mb-5">
                  Suscríbete a nuestra newsletter
                </h2>
                <p>
                  Recibe las últimas noticias, ofertas exclusivas y novedades
                  directamente en tu correo electrónico.
                </p>
              </div>
              <form>
                <div class="mt-5 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
                  <div class="w-full">
                    <label for="hero-input" class="sr-only"></label>
                    <input
                      type="text"
                      id="hero-input"
                      name="hero-input"
                      class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      placeholder="Email"
                    />
                  </div>
                  <a
                    class="w-full sm:w-auto whitespace-nowrap py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                    href="#"
                  >
                    Suscríbete
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="w-full my-16 border-b-2 border-gray-300"></div>
        <div className="flex justify-between">
          <img
            className="h-9"
            src="https://www.joma-tools.com/catalogo/img/logo-1666880563.jpg.pagespeed.ce.71kNUIfzUR.jpg"
            alt="Logo de la empresa"
          />
          <p>©2024 Joma Import-Export, S.L.</p>
          <a
            href="https://www.instagram.com/joma_importexport?igsh=ZzIycmR0M3RuMnR6"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
              <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
              <path d="M16.5 7.5l0 .01" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
