import Table from "../Table";

function ProductChapaPintura({ infoChapaPintura }) {
  if (!infoChapaPintura || infoChapaPintura.length === 0) return null;

  const rows = infoChapaPintura.flatMap((item) =>
    item.medida.map((medida, index) => ({
      medida,
      presion: item.presion[index],
    }))
  );

  const columns = [
    { header: "Medida", accessor: "medida" },
    { header: "Presión", accessor: "presion" },
  ];

  return <Table columns={columns} data={rows} />;
}

export default ProductChapaPintura;
