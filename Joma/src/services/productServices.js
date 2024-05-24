const API_URL = import.meta.env.VITE_API_URL;

export async function getProducts() {
  try {
    const response = await fetch(
      `${API_URL}/products?populate=*&pagination[pageSize]=100`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const { data } = await response.json();
    console.log("Products", data);
    return data;
  } catch (error) {
    console.log("Error al cargar las vacantes:", error);
    return [];
  }
}

export async function getProductsByCategory(categoryId) {
  try {
    const response = await fetch(
      `${API_URL}/products?populate=*&filters[category][id][$eq]=${categoryId}&pagination[pageSize]=100`
    );
    console.log(
      "API URL:",
      `${API_URL}/products?populate=*&filters[category][id][$eq]=${categoryId}&pagination[pageSize]=100`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.log("Error fetching products by category:", error);
    return [];
  }
}

export async function getNewProducts() {
  try {
    const response = await fetch(`${API_URL}/new-products`);
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

export async function getFeaturedProducts() {
  try {
    const response = await fetch(`${API_URL}/featured-products`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const { data } = await response.json();
    console.log("featured", data);
    return data;
  } catch (error) {
    console.log("Error al cargar las vacantes:", error);
    return [];
  }
}
