function MapPage() {
  return (
    <>
      <section className="max-w-screen-xl mx-auto p-4 md:p-8 lg:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.0585973879806!2d1.9091610000000003!3d41.3728116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4869d9d011447%3A0x645be492620eae76!2sJoma%20Import%20Export!5e0!3m2!1ses!2ses!4v1714724327023!5m2!1ses!2ses"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="mt-8">
            <ul className="list-none space-y-2 bg-gray-300 rounded-lg p-5">
              <li>
                <strong>Llámanos: </strong> 93 6834840
              </li>
              <li>
                <strong>Fax: </strong> 93 6831869
              </li>
              <li>
                <strong>Dirección: </strong> C/ Bages, 3 Nave 24 - Pol. Can
                Prunera 08759 - Vallirana (Barcelona)
              </li>
              <li>
                <strong>Posición GPS: </strong> Latitud 41º 22’ 22” N Longitud
                1º 54’ 31” E
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default MapPage;
