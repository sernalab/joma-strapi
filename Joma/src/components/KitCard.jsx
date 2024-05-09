import { Link } from "react-router-dom";

function KitCard({ title, shortDescription }) {
  return (
    <div className="flex flex-col bg-white border shadow-sm rounded-xl h-full">
      <img
        className="w-full h-48 rounded-t-xl object-cover" // Establecer una altura fija o responsiva
        src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80"
        alt="Product"
      />
      <div className="flex-grow p-4 md:p-5 flex flex-col">
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
        <p className="flex-grow mt-1 text-gray-500">{shortDescription}</p>
        <Link
          to={`/details/${title}`}
          className="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none self-stretch text-center"
        >
          Más detalles
        </Link>
      </div>
    </div>
  );
}

export default KitCard;
