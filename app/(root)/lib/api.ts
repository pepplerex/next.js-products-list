import axios from "axios";
import { handleApiError } from "../utils/errorHandler";

export const fetchProducts = async () => {
  try {
    const response = await axios.get("https://dummyjson.com/products");
    return response.data.products;
  } catch (error) {
    handleApiError(error, "Failed to fetch products.");
    return [];
  }
};
