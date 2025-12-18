import { useQuery } from "@tanstack/react-query";
import { api } from "../lib/api";

export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: api.getProducts,
    staleTime: 10 * 60 * 1000, // 10 minutes
  });
};

