import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';
import { type AgriculturalResource, ResourceType } from '../backend';

export function useResources(type?: ResourceType) {
  const { actor, isFetching } = useActor();

  return useQuery<AgriculturalResource[]>({
    queryKey: ['resources', type],
    queryFn: async () => {
      if (!actor) return [];
      if (type) {
        return actor.getResourcesByType(type);
      }
      return actor.getAllAgriculturalResources();
    },
    enabled: !!actor && !isFetching,
  });
}
