import { ROLES } from "./globals";

export const getPriceBasedOnRole = (user, price, priceA, priceB) => {
  if (!user) return price;
  if (user.role === ROLES.DISTRIBUIDOR_A) return priceA;
  if (user.role === ROLES.DISTRIBUIDOR_B) return priceB;
  return price;
};
