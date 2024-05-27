function ProductMotorInfo({ codigosMotor }) {
  console.log("codigosMotor", codigosMotor);
  return (
    <div>
      <p>Marcas:</p>
      <p>{codigosMotor[0].marcas}</p>
      <p>Modelos:</p>
      <p>{codigosMotor[0].modelos}</p>
      <p>OEM:</p>
      <p>{codigosMotor.OEM}</p>
    </div>
  );
}

export default ProductMotorInfo;
