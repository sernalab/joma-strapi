const API_URL = import.meta.env.VITE_API_URL;

export async function getJobs() {
  try {
    const response = await fetch(`${API_URL}/vacantes`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error("Error al cargar las vacantes:", error);
    return [];
  }
}
