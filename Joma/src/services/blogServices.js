const API_URL = import.meta.env.VITE_API_URL;

export async function getPosts() {
  try {
    const response = await fetch(`${API_URL}/blog-posts?populate=*`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.log("Error al cargar las vacantes:", error);
    return [];
  }
}

export async function getPostsById(id) {
  try {
    const response = await fetch(`${API_URL}/blog-posts/${id}?populate=*`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.log("Error al cargar las vacantes:", error);
    return null;
  }
}
