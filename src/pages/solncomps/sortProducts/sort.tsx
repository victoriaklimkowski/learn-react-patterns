import { Product } from "../../../types/product";

// Strategies for sorting the product list
export const sortByPrice = (products: Product[]): Product[] => {
  return [...products].sort((a, b) => a.price - b.price);
};

export const sortByRating = (products: Product[]): Product[] => {
  return [...products].sort((a, b) => b.rating - a.rating);
};

export const sortByName = (products: Product[]): Product[] => {
  return [...products].sort((a, b) => a.name.localeCompare(b.name));
};

export const strategies: Record<string, (products: Product[]) => Product[]> = {
  price: sortByPrice,
  rating: sortByRating,
  name: sortByName,
};