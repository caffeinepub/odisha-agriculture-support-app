import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { MapPin } from 'lucide-react';

export default function SeasonalAdvisories() {
  const regions = [
    {
      name: 'Coastal Odisha',
      districts: 'Balasore, Bhadrak, Kendrapara, Jagatsinghpur, Puri, Khordha, Ganjam',
      advisories: [
        'Focus on salt-tolerant varieties for coastal areas',
        'Prepare for cyclone season with proper drainage systems',
        'Utilize brackish water for aquaculture alongside farming',
        'Plant windbreaks to protect crops from coastal winds',
      ],
    },
    {
      name: 'Northern Odisha',
      districts: 'Mayurbhanj, Keonjhar, Sundargarh, Deogarh',
      advisories: [
        'Suitable for upland paddy and millets',
        'Practice soil conservation on hilly terrain',
        'Utilize forest resources sustainably',
        'Focus on minor irrigation for better water management',
      ],
    },
    {
      name: 'Southern Odisha',
      districts: 'Gajapati, Rayagada, Koraput, Malkangiri, Nabarangpur',
      advisories: [
        'Ideal for coffee and spice cultivation',
        'Implement terrace farming on slopes',
        'Promote tribal farming practices',
        'Focus on organic farming methods',
      ],
    },
    {
      name: 'Western Odisha',
      districts: 'Sambalpur, Bargarh, Bolangir, Kalahandi, Nuapada',
      advisories: [
        'Drought-resistant crops recommended',
        'Invest in water conservation structures',
        'Practice mixed cropping for risk mitigation',
        'Utilize canal irrigation where available',
      ],
    },
  ];

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-chart-4/10 rounded-lg">
          <MapPin className="h-8 w-8 text-chart-4" />
        </div>
        <div>
          <h2 className="font-display text-3xl font-bold">Regional Advisories</h2>
          <p className="text-muted-foreground">Farming guidance for different regions of Odisha</p>
        </div>
      </div>

      <Accordion type="single" collapsible className="w-full space-y-4">
        {regions.map((region, index) => (
          <AccordionItem key={index} value={`region-${index}`} className="border rounded-lg px-6 bg-card">
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-chart-4" />
                <span className="font-display text-xl font-semibold">{region.name}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-4 pb-6">
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Districts</p>
                  <p className="text-base">{region.districts}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Key Advisories</p>
                  <ul className="space-y-2">
                    {region.advisories.map((advisory, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-base">{advisory}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
