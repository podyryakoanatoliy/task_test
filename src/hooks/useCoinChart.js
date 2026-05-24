import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useCoinChart(coinId) {
  return useQuery({
    queryKey: ["coinChart", coinId],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=7`,
      );
      return data.prices;
    },
    staleTime: 1000 * 30,
    refetchInterval: 15000,
    enabled: !!coinId && coinId !== "undefined",
  });
}
