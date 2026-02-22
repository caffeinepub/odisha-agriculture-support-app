import { FileText, Filter } from 'lucide-react';
import { useState } from 'react';
import { useSchemes } from '../hooks/useSchemes';
import SchemeCard from '../components/SchemeCard';
import SchemeFilters from '../components/SchemeFilters';
import { SchemeLevel } from '../backend';
import { Skeleton } from '@/components/ui/skeleton';

export default function SchemesPage() {
  const [selectedLevel, setSelectedLevel] = useState<SchemeLevel | 'all'>('all');
  const { data: schemes, isLoading, error } = useSchemes(selectedLevel);

  return (
    <div className="py-12">
      <div className="container">
        <div className="flex items-center gap-3 mb-8">
          <img
            src="/assets/generated/govt-schemes-icon.dim_256x256.png"
            alt="Government Schemes"
            className="h-16 w-16"
          />
          <div>
            <h1 className="font-display text-4xl font-bold">Government Schemes</h1>
            <p className="text-muted-foreground text-lg">
              Explore central and state agricultural schemes for Odisha farmers
            </p>
          </div>
        </div>

        <SchemeFilters selectedLevel={selectedLevel} onLevelChange={setSelectedLevel} />

        {isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {[1, 2, 3, 4].map((i) => (
              <Skeleton key={i} className="h-64 w-full" />
            ))}
          </div>
        )}

        {error && (
          <div className="text-center py-12">
            <p className="text-destructive text-lg">Failed to load schemes. Please try again later.</p>
          </div>
        )}

        {!isLoading && !error && schemes && schemes.length === 0 && (
          <div className="text-center py-12">
            <FileText className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground text-lg">No schemes available at the moment.</p>
          </div>
        )}

        {!isLoading && !error && schemes && schemes.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {schemes.map((scheme) => (
              <SchemeCard key={Number(scheme.id)} scheme={scheme} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
