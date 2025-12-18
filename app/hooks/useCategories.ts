import { useQuery } from "@tanstack/react-query";
import { api } from "../lib/api";

export const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: api.getCategories,
    staleTime: 10 * 60 * 1000, // 10 minutes
  });
};

