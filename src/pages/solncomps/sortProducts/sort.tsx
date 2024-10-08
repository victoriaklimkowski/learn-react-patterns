import { Product } from "../../../types/product";

// Strategies for sorting the product list
// Generalized functions that can be called from anywhere
export const sortByPrice = (products: Product[]): Product[] => {
  return [...products].sort((a, b) => a.price - b.price);
};

export const sortByRating = (products: Product[]): Product[] => {
  return [...products].sort((a, b) => b.rating - a.rating);
};

export const sortByName = (products: Product[]): Product[] => {
  return [...products].sort((a, b) => a.name.localeCompare(b.name));
};

// Similar to a dictionary in Python or a Hashmap in Java
// Key value pairs where the key is a string and the value is a function
export const strategies: Record<string, (products: Product[]) => Product[]> = {
  price: sortByPrice,
  rating: sortByRating,
  name: sortByName,
};