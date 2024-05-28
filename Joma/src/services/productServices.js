import { API_URL } from "../config/globals";

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

export async function getProductById(productId) {
  try {
    const response = await fetch(
      `${API_URL}/products/50?populate[codigosMotor][populate][0]=marcas&populate[codigosMotor][populate][1]=modelos&populate[codigosMotor][populate][2]=motoresDiesel&populate[codigosMotor][populate][3]=motoresGasolina&populate[codigosMotor][populate][4]=infoAdicional&populate[basicInfo]=*&populate[category]=*&populate[imagesProduct]=*&populate[imageDieselCorrea]=*&populate[imageGasolinaCorrea]=*&populate[imagePremium]=*&populate[infoChapaPintura]=*&populate[infoMotor]=*&populate[infoDiagnosis]=*&populate[infoElectricidad]=*&populate[description]=*`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.log("Error fetching product details:", error);
    return null;
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
