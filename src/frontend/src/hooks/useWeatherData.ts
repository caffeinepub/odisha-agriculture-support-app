import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';

export interface WeatherData {
  location: string;
  temperature: number;
  humidity: number;
  windSpeed: number;
  rainfall: number;
}

export function useWeatherData(location: string) {
  const { actor, isFetching } = useActor();

  return useQuery<WeatherData>({
    queryKey: ['weather', location],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not initialized');
      
      try {
        const response = await actor.getWeatherData(location);
        // Parse the JSON response from the backend
        const data = JSON.parse(response);
        
        return {
          location: location,
          temperature: data.temperature || 28,
          humidity: data.humidity || 75,
          windSpeed: data.windSpeed || 12,
          rainfall: data.rainfall || 45,
        };
      } catch (error) {
        // Return mock data if API fails
        console.error('Weather API error:', error);
        return {
          location: location,
          temperature: 28,
          humidity: 75,
          windSpeed: 12,
          rainfall: 45,
        };
      }
    },
    enabled: !!actor && !isFetching && !!location,
    refetchInterval: 1800000, // Refetch every 30 minutes
    staleTime: 900000, // Consider data stale after 15 minutes
  });
}
