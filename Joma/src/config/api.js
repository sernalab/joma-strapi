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

export async function getProducts() {
  try {
    const response = await fetch(`${API_URL}/products`);
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

export async function getProductsByCategory(id_category) {
  try {
    const response = await fetch(
      `${API_URL}/products?populate=category&filters[id_category][$eq]=${id_category}&pagination[pageSize]=100`
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
    console.log(data);
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

export async function getCategories() {
  try {
    const response = await fetch(`${API_URL}/categories`);
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

export async function getMenu() {
  try {
    const response = await fetch(`${API_URL}/menus?populate=categories`);
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
