import { useState } from 'react';
import { useCropStatistics } from '../hooks/useCropStatistics';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, Loader2 } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

const CROPS = ['Rice', 'Wheat', 'Maize', 'Cotton', 'Groundnut'];

export default function CropStatistics() {
  const [selectedCrop, setSelectedCrop] = useState('Rice');
  const { data: statistics, isLoading, error } = useCropStatistics(selectedCrop);

  return (
    <div>
      <div className="flex items-center gap-4 mb-8 flex-wrap">
        <div className="p-3 bg-gradient-to-br from-primary/15 to-accent/15 rounded-2xl shadow-md">
          <TrendingUp className="h-8 w-8 text-primary" />
        </div>
        <div className="flex-1">
          <h2 className="font-display text-3xl md:text-4xl font-bold">Crop Statistics & Historical Trends</h2>
          <p className="text-muted-foreground text-lg mt-1">Make informed decisions based on 3-year data</p>
        </div>
        <div className="w-56">
          <Select value={selectedCrop} onValueChange={setSelectedCrop}>
            <SelectTrigger className="rounded-xl h-12 border-2">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {CROPS.map(crop => (
                <SelectItem key={crop} value={crop}>
                  {crop}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {isLoading && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Skeleton className="h-96 w-full rounded-2xl" />
          <Skeleton className="h-96 w-full rounded-2xl" />
        </div>
      )}

      {error && (
        <Card className="border-destructive/30 rounded-2xl">
          <CardContent className="pt-6">
            <p className="text-center text-destructive">Unable to load crop statistics</p>
          </CardContent>
        </Card>
      )}

      {!isLoading && !error && statistics && statistics.length === 0 && (
        <Card className="rounded-2xl">
          <CardContent className="pt-6">
            <p className="text-center text-muted-foreground">No data available for selected crop</p>
          </CardContent>
        </Card>
      )}

      {!isLoading && !error && statistics && statistics.length > 0 && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="border-border/50 shadow-elegant-md rounded-2xl overflow-hidden">
            <CardHeader className="bg-gradient-to-br from-muted/30 to-card">
              <CardTitle className="text-xl font-semibold">Yield Trend (Quintals/Hectare)</CardTitle>
              <CardDescription>3-year historical yield data</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <ResponsiveContainer width="100%" height={320}>
                <LineChart data={statistics}>
                  <CartesianGrid strokeDasharray="3 3" stroke="oklch(var(--border))" opacity={0.3} />
                  <XAxis 
                    dataKey="year" 
                    stroke="oklch(var(--muted-foreground))"
                    style={{ fontSize: '14px' }}
                  />
                  <YAxis 
                    stroke="oklch(var(--muted-foreground))"
                    style={{ fontSize: '14px' }}
                  />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: 'oklch(var(--card))',
                      border: '1px solid oklch(var(--border))',
                      borderRadius: '12px',
                      boxShadow: '0 4px 12px oklch(var(--primary) / 0.1)'
                    }}
                  />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="yield" 
                    stroke="oklch(var(--primary))" 
                    strokeWidth={3}
                    dot={{ fill: 'oklch(var(--primary))', r: 5 }}
                    activeDot={{ r: 7 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="border-border/50 shadow-elegant-md rounded-2xl overflow-hidden">
            <CardHeader className="bg-gradient-to-br from-muted/30 to-card">
              <CardTitle className="text-xl font-semibold">Price Trend (₹/Quintal)</CardTitle>
              <CardDescription>3-year historical price data</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <ResponsiveContainer width="100%" height={320}>
                <BarChart data={statistics}>
                  <CartesianGrid strokeDasharray="3 3" stroke="oklch(var(--border))" opacity={0.3} />
                  <XAxis 
                    dataKey="year" 
                    stroke="oklch(var(--muted-foreground))"
                    style={{ fontSize: '14px' }}
                  />
                  <YAxis 
                    stroke="oklch(var(--muted-foreground))"
                    style={{ fontSize: '14px' }}
                  />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: 'oklch(var(--card))',
                      border: '1px solid oklch(var(--border))',
                      borderRadius: '12px',
                      boxShadow: '0 4px 12px oklch(var(--primary) / 0.1)'
                    }}
                  />
                  <Legend />
                  <Bar 
                    dataKey="price" 
                    fill="oklch(var(--chart-2))"
                    radius={[8, 8, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
