import { useState } from 'react';
import { useWeatherData } from '../hooks/useWeatherData';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Cloud, Droplets, Wind, Thermometer, MapPin } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

const LOCATIONS = ['Bhubaneswar', 'Cuttack', 'Puri', 'Berhampur', 'Sambalpur', 'Rourkela'];

export default function WeatherInfo() {
  const [selectedLocation, setSelectedLocation] = useState('Bhubaneswar');
  const { data: weather, isLoading, error } = useWeatherData(selectedLocation);

  return (
    <div>
      <div className="flex items-center gap-4 mb-8 flex-wrap">
        <div className="p-3 bg-gradient-to-br from-accent/15 to-secondary/15 rounded-2xl shadow-md">
          <Cloud className="h-8 w-8 text-accent" />
        </div>
        <div className="flex-1">
          <h2 className="font-display text-3xl md:text-4xl font-bold">Weather Information</h2>
          <p className="text-muted-foreground text-lg mt-1">Real-time weather data for your region</p>
        </div>
        <div className="w-56">
          <Select value={selectedLocation} onValueChange={setSelectedLocation}>
            <SelectTrigger className="rounded-xl h-12 border-2">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {LOCATIONS.map(location => (
                <SelectItem key={location} value={location}>
                  {location}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {isLoading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <Skeleton key={i} className="h-40 w-full rounded-2xl" />
          ))}
        </div>
      )}

      {error && (
        <Card className="border-destructive/30 rounded-2xl">
          <CardContent className="pt-6">
            <p className="text-center text-destructive">Unable to load weather data</p>
          </CardContent>
        </Card>
      )}

      {!isLoading && !error && weather && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border-border/50 shadow-elegant-md hover:shadow-elegant-lg transition-all duration-300 rounded-2xl overflow-hidden group">
            <CardHeader className="bg-gradient-to-br from-primary/10 to-card pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl">
                  <Thermometer className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Temperature</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-4xl font-bold text-primary">{weather.temperature}°C</p>
            </CardContent>
          </Card>

          <Card className="border-border/50 shadow-elegant-md hover:shadow-elegant-lg transition-all duration-300 rounded-2xl overflow-hidden group">
            <CardHeader className="bg-gradient-to-br from-accent/10 to-card pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-br from-accent/20 to-accent/10 rounded-xl">
                  <Droplets className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-lg">Humidity</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-4xl font-bold text-accent">{weather.humidity}%</p>
            </CardContent>
          </Card>

          <Card className="border-border/50 shadow-elegant-md hover:shadow-elegant-lg transition-all duration-300 rounded-2xl overflow-hidden group">
            <CardHeader className="bg-gradient-to-br from-secondary/10 to-card pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-xl">
                  <Wind className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-lg">Wind Speed</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-4xl font-bold text-secondary">{weather.windSpeed} km/h</p>
            </CardContent>
          </Card>

          <Card className="border-border/50 shadow-elegant-md hover:shadow-elegant-lg transition-all duration-300 rounded-2xl overflow-hidden group">
            <CardHeader className="bg-gradient-to-br from-chart-3/10 to-card pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-br from-chart-3/20 to-chart-3/10 rounded-xl">
                  <Cloud className="h-6 w-6 text-chart-3" />
                </div>
                <CardTitle className="text-lg">Rainfall</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-4xl font-bold text-chart-3">{weather.rainfall} mm</p>
            </CardContent>
          </Card>
        </div>
      )}

      {!isLoading && !error && weather && (
        <Card className="mt-8 border-border/50 shadow-elegant-md rounded-2xl overflow-hidden">
          <CardHeader className="bg-gradient-to-br from-muted/30 to-card">
            <CardTitle className="text-xl font-semibold">Farming Advisory</CardTitle>
            <CardDescription>Recommendations based on current weather</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4">
              {weather.temperature > 35 && (
                <div className="p-4 bg-warning/10 border-l-4 border-warning rounded-xl">
                  <p className="text-base font-medium">High temperature alert: Ensure adequate irrigation and consider shade for sensitive crops.</p>
                </div>
              )}
              {weather.rainfall > 50 && (
                <div className="p-4 bg-accent/10 border-l-4 border-accent rounded-xl">
                  <p className="text-base font-medium">Heavy rainfall: Check drainage systems and protect crops from waterlogging.</p>
                </div>
              )}
              {weather.humidity > 80 && (
                <div className="p-4 bg-secondary/10 border-l-4 border-secondary rounded-xl">
                  <p className="text-base font-medium">High humidity: Monitor for fungal diseases and ensure proper ventilation.</p>
                </div>
              )}
              {weather.temperature <= 35 && weather.rainfall <= 50 && weather.humidity <= 80 && (
                <div className="p-4 bg-success/10 border-l-4 border-success rounded-xl">
                  <p className="text-base font-medium">Favorable conditions: Good time for regular farming activities.</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
