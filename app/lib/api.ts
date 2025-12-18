import { Product, Category } from "../type";

export interface ApiResponse<T> {
  success: boolean;
  data: T;
}

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "https://ecomassesment.smartbancharampur.com";

export const api = {
  async getProducts(): Promise<ApiResponse<Product[]>> {
    const response = await fetch(`${API_BASE_URL}/api/products`);
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    const data = await response.json();
    // Convert string prices to numbers to match Product type
    if (data.success && Array.isArray(data.data)) {
      data.data = data.data.map((product: any) => ({
        ...product,
        originalPrice: parseFloat(product.originalPrice) || 0,
        discountedPrice: parseFloat(product.discountedPrice) || 0,
      }));
    }
    return data;
  },

  async getCategories(): Promise<ApiResponse<Category[]>> {
    const response = await fetch(`${API_BASE_URL}/api/categories`);
    if (!response.ok) {
      throw new Error("Failed to fetch categories");
    }
    return response.json();
  },
};

