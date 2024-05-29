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

export async function getCategories() {
  try {
    const response = await fetch(`${API_URL}/categories`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const { data } = await response.json();
    console.log("getCategories", data);

    return data;
  } catch (error) {
    console.log("Error al cargar las vacantes:", error);
    return [];
  }
}

export async function getMenu() {
  try {
    const response = await fetch(`${API_URL}/menus?populate=categories`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const { data } = await response.json();
    console.log("getMenu", data);
    return data;
  } catch (error) {
    console.log("Error al cargar las vacantes:", error);
    return [];
  }
}

export async function getVideos() {
  try {
    const response = await fetch(`${API_URL}/videos?populate=*`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const { data } = await response.json();
    console.log("getVideos", data);
    return data;
  } catch (error) {
    console.log("Error al cargar las vacantes:", error);
    return [];
  }
}
