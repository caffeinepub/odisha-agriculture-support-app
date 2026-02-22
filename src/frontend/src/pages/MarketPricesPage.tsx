import { TrendingUp, Grid3x3, Table } from 'lucide-react';
import { useState } from 'react';
import { useMarketPrices } from '../hooks/useMarketPrices';
import PriceCard from '../components/PriceCard';
import PriceTable from '../components/PriceTable';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';

export default function MarketPricesPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  const { data: prices, isLoading, error } = useMarketPrices();

  return (
    <div className="py-12">
      <div className="container">
        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <img
              src="/assets/generated/market-prices-icon.dim_256x256.png"
              alt="Market Prices"
              className="h-16 w-16"
            />
            <div>
              <h1 className="font-display text-4xl font-bold">Market Prices</h1>
              <p className="text-muted-foreground text-lg">
                Current commodity prices in Odisha markets
              </p>
            </div>
          </div>

          <div className="flex gap-2">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'outline'}
              onClick={() => setViewMode('grid')}
              className="flex items-center gap-2"
            >
              <Grid3x3 className="h-4 w-4" />
              Grid View
            </Button>
            <Button
              variant={viewMode === 'table' ? 'default' : 'outline'}
              onClick={() => setViewMode('table')}
              className="flex items-center gap-2"
            >
              <Table className="h-4 w-4" />
              Table View
            </Button>
          </div>
        </div>

        {isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Skeleton key={i} className="h-40 w-full" />
            ))}
          </div>
        )}

        {error && (
          <div className="text-center py-12">
            <p className="text-destructive text-lg">Failed to load market prices. Please try again later.</p>
          </div>
        )}

        {!isLoading && !error && prices && prices.length === 0 && (
          <div className="text-center py-12">
            <TrendingUp className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground text-lg">No market prices available at the moment.</p>
          </div>
        )}

        {!isLoading && !error && prices && prices.length > 0 && (
          <>
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {prices.map((price, index) => (
                  <PriceCard key={index} price={price} />
                ))}
              </div>
            ) : (
              <PriceTable prices={prices} />
            )}
          </>
        )}
      </div>
    </div>
  );
}
