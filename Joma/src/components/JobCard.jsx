import { useState } from "react";

function JobCard({ job }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <li className="bg-gray-100 p-4 rounded-lg">
        <h4 className="font-semibold">{job.attributes.title}</h4>
        <p className="text-gray-500">{job.attributes.shortDescription}</p>
        {isOpen && (
          <div className="mt-2 text-gray-500">{job.attributes.description}</div>
        )}
        <button
          type="button"
          className="mt-4 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg text-blue-600 hover:text-blue-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "Ver menos" : "Ver más"}
        </button>
      </li>
    </>
  );
}
export default JobCard;
