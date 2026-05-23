import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const FETCH_COINS_URL =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=50&page=1";

export function useCoins() {
  return useQuery({
    queryKey: ["coins"],
    queryFn: async () => {
      const { data } = await axios.get(FETCH_COINS_URL);
      return data;
    },

    staleTime: 1000 * 60,
    refetchInterval: 1000 * 60 * 5, // Треба буде замінити на менше щоб не отрмувати 429!!!!!!!!!!!!!
  });
}
