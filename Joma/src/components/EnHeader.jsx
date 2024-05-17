import { Link } from "react-router-dom";

function EnHeader() {
  return (
    <header className="max-w-screen-xl mx-auto border-b-2">
      <nav className="container mx-auto flex flex-wrap justify-between items-center w-full p-4 lg:p-8">
        <Link className="text-gray-600" to="/">
          <img
            className="h-9"
            src="https://www.joma-tools.com/catalogo/img/logo-1666880563.jpg.pagespeed.ce.71kNUIfzUR.jpg"
            alt="Logo de la empresa"
          />
        </Link>
      </nav>
    </header>
  );
}

export default EnHeader;
