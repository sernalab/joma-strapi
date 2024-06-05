import React, { createContext, useContext, useState, useEffect } from "react";
import { getJobs } from "../services/api";

const JobsContext = createContext(null);

export function useJobs() {
  return useContext(JobsContext);
}

export const JobsProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchJobs() {
      try {
        const jobsData = await getJobs();
        setJobs(jobsData);
      } catch (error) {
        console.error("Error loading jobs:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchJobs();
  }, []);

  return (
    <JobsContext.Provider value={{ jobs, loading }}>
      {children}
    </JobsContext.Provider>
  );
};
