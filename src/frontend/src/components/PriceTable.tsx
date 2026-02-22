import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { type MarketPrice } from '../backend';
import { MapPin } from 'lucide-react';

interface PriceTableProps {
  prices: MarketPrice[];
}

export default function PriceTable({ prices }: PriceTableProps) {
  return (
    <div className="rounded-2xl border border-border/50 overflow-hidden shadow-elegant-md">
      <Table>
        <TableHeader>
          <TableRow className="bg-gradient-to-r from-muted/50 to-muted/30 hover:bg-muted/50">
            <TableHead className="font-semibold text-base py-4">Commodity</TableHead>
            <TableHead className="font-semibold text-base py-4">Price</TableHead>
            <TableHead className="font-semibold text-base py-4">Unit</TableHead>
            <TableHead className="font-semibold text-base py-4">Market Location</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {prices.map((price, index) => (
            <TableRow 
              key={index} 
              className="hover:bg-muted/30 transition-colors"
            >
              <TableCell className="font-medium text-base py-4">{price.commodity}</TableCell>
              <TableCell className="text-base py-4">
                <span className="font-bold text-primary text-lg">₹{Number(price.price)}</span>
              </TableCell>
              <TableCell className="text-muted-foreground text-base py-4">{price.unit}</TableCell>
              <TableCell className="text-base py-4">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-accent" />
                  <span>{price.marketLocation}</span>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
