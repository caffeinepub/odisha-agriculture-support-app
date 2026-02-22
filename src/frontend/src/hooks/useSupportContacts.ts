import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';
import { type SupportContact } from '../backend';

export function useSupportContacts() {
  const { actor, isFetching } = useActor();

  return useQuery<SupportContact[]>({
    queryKey: ['support-contacts'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllSupportContacts();
    },
    enabled: !!actor && !isFetching,
  });
}
