function Envio() {
  return (
    <>
      <section className="max-w-screen-xl mx-auto p-4 md:p-8 lg:p-12">
        <div className="max-w-screen-lg mx-auto">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Política de Envío
          </h1>
          <p className="mb-2">
            En <strong>Joma Import-Export, S.L</strong>, nos comprometemos a
            entregar tus productos de manera rápida y segura. A continuación, te
            ofrecemos toda la información necesaria sobre nuestra política de
            envío.
          </p>

          <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
            Tiempos de Envío
          </h2>
          <p>
            Como norma general, los paquetes se envían dentro de las{" "}
            <span className="font-bold">48 horas siguientes</span> a la
            recepción del pago, a través de UPS con número de seguimiento y
            entrega sin firma. Si prefieres el envío certificado mediante UPS
            Extra, se aplicará un cargo adicional.
          </p>
          <p>
            <a href="/contact" className="text-blue-600 hover:underline">
              {" "}
              Ponte en contacto con nosotros
            </a>{" "}
            antes de solicitar esta opción. Sea cual sea la forma de envío que
            elijas, te proporcionaremos un enlace para que puedas seguir tu
            pedido en línea.
          </p>
          <br />

          <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
            Gastos de Envío
          </h2>
          <p>
            Los gastos de envío incluyen los gastos de manipulación y
            empaquetado, así como los gastos postales. Los gastos de
            manipulación tienen un precio fijo, mientras que los gastos de
            transporte pueden variar según el peso total del paquete. Te
            aconsejamos que agrupes todos tus artículos en un mismo pedido. No
            podemos combinar dos pedidos diferentes, y los gastos de envío se
            aplicarán para cada uno de manera individual. No nos hacemos
            responsables de los daños que pueda sufrir tu paquete tras el envío,
            pero hacemos todo lo posible para proteger todos los artículos
            frágiles.
          </p>
          <br />
          <p>Las cajas son grandes y tus artículos estarán bien protegidos.</p>

          <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
            Seguimiento del Pedido
          </h2>
          <p>
            Una vez que tu pedido ha sido enviado, te proporcionaremos un enlace
            para que puedas seguir tu pedido en línea.
          </p>

          <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
            Política de Devoluciones // REVISAR
          </h2>
          <p>
            Si por cualquier motivo no estás satisfecho con tu compra, puedes
            devolver los productos dentro de los 14 días para un reembolso
            completo. Los productos deben ser devueltos en su estado original y
            embalaje.
          </p>

          <p className="mt-4">
            Si tienes preguntas sobre tu pedido o nuestra política de envío, no
            dudes en{" "}
            <a href="/contact" className="text-blue-600 hover:underline">
              contactarnos
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}

export default Envio;
