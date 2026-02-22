import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';
import { type GovernmentScheme, SchemeLevel } from '../backend';

export function useSchemes(level: SchemeLevel | 'all') {
  const { actor, isFetching } = useActor();

  return useQuery<GovernmentScheme[]>({
    queryKey: ['schemes', level],
    queryFn: async () => {
      if (!actor) return [];
      if (level === 'all') {
        return actor.getAllGovernmentSchemes();
      }
      return actor.getSchemesByLevel(level);
    },
    enabled: !!actor && !isFetching,
  });
}
