import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';
import { type CropStat } from '../backend';

export function useCropStatistics(cropName?: string) {
  const { actor, isFetching } = useActor();

  return useQuery<CropStat[]>({
    queryKey: ['cropStatistics', cropName],
    queryFn: async () => {
      if (!actor) return [];
      if (cropName) {
        return actor.getCropStatistics(cropName);
      }
      // Get all crops by fetching recent years
      const currentYear = new Date().getFullYear();
      const allStats: CropStat[] = [];
      for (let year = currentYear - 2; year <= currentYear; year++) {
        const yearStats = await actor.getCropStatisticsByYear(BigInt(year));
        allStats.push(...yearStats);
      }
      return allStats;
    },
    enabled: !!actor && !isFetching,
  });
}

export function useCropStatisticsByYear(year: number) {
  const { actor, isFetching } = useActor();

  return useQuery<CropStat[]>({
    queryKey: ['cropStatistics', 'year', year],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getCropStatisticsByYear(BigInt(year));
    },
    enabled: !!actor && !isFetching,
  });
}

export function useCropStatisticsByRegion(region: string) {
  const { actor, isFetching } = useActor();

  return useQuery<CropStat[]>({
    queryKey: ['cropStatistics', 'region', region],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getCropStatisticsByRegion(region);
    },
    enabled: !!actor && !isFetching && !!region,
  });
}
