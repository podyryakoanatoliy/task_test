import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useCoins(perPage = 50, page = 1) {
  return useQuery({
    queryKey: ["coins", { perPage, page }],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=${perPage}&page=${page}`,
      );
      return data;
    },

    staleTime: 1000 * 60,
    refetchInterval: 1000 * 60,
  });
}
