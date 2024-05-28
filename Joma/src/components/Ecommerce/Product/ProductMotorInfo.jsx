function ProductMotorInfo({ codigosMotor }) {
  console.log("codigosMotor", codigosMotor);

  const {
    marcas = [],
    modelos = [],
    OEM = [],
    motoresDiesel = { size: [], codes: [] },
    motoresGasolina = { size: [], codes: [] },
    infoAdicional = { years: "", combustible: [], tipo: "" },
  } = codigosMotor;

  return (
    <div className="bg-gray-200 p-4 rounded mb-4">
      <div>
        <h3 className="text-lg font-semibold">Marcas:</h3>
        <ul>
          {marcas.map((marca, index) => (
            <li key={index}>{marca}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-semibold">Modelos:</h3>
        <ul>
          {modelos.map((modelo, index) => (
            <li key={index}>{modelo}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-semibold">OEM:</h3>
        <ul>
          {OEM.map((oem, index) => (
            <li key={index}>{oem}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-semibold">Motores Diesel:</h3>
        <ul>
          {motoresDiesel.size.map((size, index) => (
            <li key={index}>
              {size} - {motoresDiesel.codes[index]}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-semibold">Motores Gasolina:</h3>
        <ul>
          {motoresGasolina.size.map((size, index) => (
            <li key={index}>
              {size} - {motoresGasolina.codes[index]}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-semibold">Información Adicional:</h3>
        <p>Años: {infoAdicional.years}</p>
        <p>Combustible: {infoAdicional.combustible.join(", ")}</p>
        <p>Tipo: {infoAdicional.tipo}</p>
      </div>
    </div>
  );
}

export default ProductMotorInfo;
