import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import { CrisisType } from '../backend';

interface CrisisReportInput {
  farmerName: string;
  location: string;
  contactNumber: string;
  crisisType: CrisisType;
  description: string;
}

export function useCrisisReport() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (input: CrisisReportInput) => {
      if (!actor) throw new Error('Actor not initialized');
      
      const timestamp = BigInt(Date.now());
      const reportId = await actor.reportCrisis(
        input.farmerName,
        input.location,
        input.contactNumber,
        input.crisisType,
        input.description,
        timestamp
      );
      
      return reportId;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['crisisReports'] });
    },
  });
}
