import { useState, useEffect } from "react";
import { getJobs } from "../services/api";
import JobCard from "../components/JobCard";

function Empleo() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function fetchJobs() {
      try {
        const jobsData = await getJobs();
        setJobs(jobsData);
        console.log(jobsData);
      } catch (error) {
        console.log("ERROR API JOBS");
      }
    }
    fetchJobs();
  }, []);

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
                {jobs.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
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
                href="https://www.linkedin.com/company/joma-import-export/jobs/"
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
          </div>
        </div>
      </section>
    </>
  );
}

export default Empleo;
