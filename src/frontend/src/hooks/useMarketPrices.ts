import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';
import { type MarketPrice } from '../backend';

export function useMarketPrices() {
  const { actor, isFetching } = useActor();

  return useQuery<MarketPrice[]>({
    queryKey: ['market-prices'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllMarketPrices();
    },
    enabled: !!actor && !isFetching,
  });
}
