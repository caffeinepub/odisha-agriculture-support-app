import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { type MarketPrice } from '../backend';
import { MapPin, TrendingUp } from 'lucide-react';

interface PriceCardProps {
  price: MarketPrice;
}

export default function PriceCard({ price }: PriceCardProps) {
  return (
    <Card className="hover:shadow-elegant-md transition-all duration-300 hover:-translate-y-0.5 border-border/50 rounded-2xl overflow-hidden group">
      <CardHeader className="bg-gradient-to-br from-muted/30 to-card pb-4">
        <div className="flex items-start justify-between gap-4">
          <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
            {price.commodity}
          </CardTitle>
          <div className="p-2 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl">
            <TrendingUp className="h-6 w-6 text-primary flex-shrink-0" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="space-y-4">
          <div>
            <p className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              ₹{Number(price.price)}
            </p>
            <p className="text-sm text-muted-foreground mt-1 font-medium">per {price.unit}</p>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2 border-t border-border/50">
            <MapPin className="h-4 w-4 text-accent" />
            <span>{price.marketLocation}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
