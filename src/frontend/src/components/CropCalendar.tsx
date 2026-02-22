import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from 'lucide-react';

export default function CropCalendar() {
  const kharifCrops = [
    { name: 'Paddy', planting: 'June - July', harvesting: 'November - December' },
    { name: 'Maize', planting: 'June - July', harvesting: 'September - October' },
    { name: 'Cotton', planting: 'June - July', harvesting: 'December - January' },
    { name: 'Groundnut', planting: 'June - July', harvesting: 'October - November' },
  ];

  const rabiCrops = [
    { name: 'Wheat', planting: 'November - December', harvesting: 'March - April' },
    { name: 'Mustard', planting: 'October - November', harvesting: 'February - March' },
    { name: 'Chickpea', planting: 'October - November', harvesting: 'February - March' },
    { name: 'Lentil', planting: 'October - November', harvesting: 'February - March' },
  ];

  const summerCrops = [
    { name: 'Green Gram', planting: 'February - March', harvesting: 'April - May' },
    { name: 'Black Gram', planting: 'February - March', harvesting: 'April - May' },
    { name: 'Watermelon', planting: 'January - February', harvesting: 'April - May' },
    { name: 'Cucumber', planting: 'January - February', harvesting: 'March - April' },
  ];

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-accent/10 rounded-lg">
          <Calendar className="h-8 w-8 text-accent" />
        </div>
        <div>
          <h2 className="font-display text-3xl font-bold">Crop Calendar</h2>
          <p className="text-muted-foreground">Planting and harvesting schedules</p>
        </div>
      </div>

      <Tabs defaultValue="kharif" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="kharif">Kharif (Monsoon)</TabsTrigger>
          <TabsTrigger value="rabi">Rabi (Winter)</TabsTrigger>
          <TabsTrigger value="summer">Summer</TabsTrigger>
        </TabsList>

        <TabsContent value="kharif" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {kharifCrops.map((crop) => (
              <Card key={crop.name}>
                <CardHeader>
                  <CardTitle>{crop.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div>
                    <p className="text-sm text-muted-foreground">Planting Time</p>
                    <p className="font-semibold">{crop.planting}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Harvesting Time</p>
                    <p className="font-semibold">{crop.harvesting}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="rabi" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {rabiCrops.map((crop) => (
              <Card key={crop.name}>
                <CardHeader>
                  <CardTitle>{crop.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div>
                    <p className="text-sm text-muted-foreground">Planting Time</p>
                    <p className="font-semibold">{crop.planting}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Harvesting Time</p>
                    <p className="font-semibold">{crop.harvesting}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="summer" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {summerCrops.map((crop) => (
              <Card key={crop.name}>
                <CardHeader>
                  <CardTitle>{crop.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div>
                    <p className="text-sm text-muted-foreground">Planting Time</p>
                    <p className="font-semibold">{crop.planting}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Harvesting Time</p>
                    <p className="font-semibold">{crop.harvesting}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
