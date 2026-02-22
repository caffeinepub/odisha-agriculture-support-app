import { useResources } from '../hooks/useResources';
import { ResourceType } from '../backend';
import ResourceCard from './ResourceCard';
import { Skeleton } from '@/components/ui/skeleton';
import { Heart, AlertCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function StressManagementSection() {
  const { data: resources, isLoading, error } = useResources(ResourceType.stressManagement);

  return (
    <div>
      <Alert className="mb-6 border-3 border-destructive/50 bg-destructive/10 shadow-warm">
        <AlertCircle className="h-6 w-6 text-destructive" />
        <AlertTitle className="text-xl font-bold">If you're experiencing a crisis</AlertTitle>
        <AlertDescription className="text-base font-medium">
          Please visit our{' '}
          <a href="/support" className="font-bold text-destructive hover:underline underline-offset-2">
            Emergency Support Page
          </a>{' '}
          immediately for 24/7 assistance. You are not alone.
        </AlertDescription>
      </Alert>

      <div className="flex items-center gap-3 mb-6">
        <img
          src="/assets/generated/wellness-icon.dim_256x256.png"
          alt="Wellness"
          className="h-12 w-12"
        />
        <div>
          <h2 className="font-display text-2xl font-bold">Wellness & Stress Management</h2>
          <p className="text-muted-foreground">Take care of your mental and emotional health</p>
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
          <Heart className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
          <p className="text-muted-foreground text-lg">No wellness resources available at the moment.</p>
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
