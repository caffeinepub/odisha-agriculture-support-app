import { useResources } from '../hooks/useResources';
import { ResourceType } from '../backend';
import ResourceCard from './ResourceCard';
import { Skeleton } from '@/components/ui/skeleton';
import { Coins } from 'lucide-react';

export default function FinancialLiteracySection() {
  const { data: resources, isLoading, error } = useResources(ResourceType.financialLiteracy);

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <img
          src="/assets/generated/resources-icon.dim_256x256.png"
          alt="Financial Literacy"
          className="h-12 w-12"
        />
        <div>
          <h2 className="font-display text-2xl font-bold">Financial Literacy</h2>
          <p className="text-muted-foreground">Manage your finances and plan for the future</p>
        </div>
      </div>

      {isLoading && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <Skeleton key={i} className="h-48 w-full" />
          ))}
        </div>
      )}

      {error && (
        <div className="text-center py-12">
          <p className="text-destructive text-lg">Failed to load resources. Please try again later.</p>
        </div>
      )}

      {!isLoading && !error && resources && resources.length === 0 && (
        <div className="text-center py-12">
          <Coins className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
          <p className="text-muted-foreground text-lg">No financial literacy resources available at the moment.</p>
        </div>
      )}

      {!isLoading && !error && resources && resources.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resources.map((resource) => (
            <ResourceCard key={Number(resource.id)} resource={resource} />
          ))}
        </div>
      )}
    </div>
  );
}
