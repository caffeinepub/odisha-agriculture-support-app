import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { type AgriculturalResource, ResourceType } from '../backend';
import { BookOpen, Wallet, Heart } from 'lucide-react';

interface ResourceCardProps {
  resource: AgriculturalResource;
}

export default function ResourceCard({ resource }: ResourceCardProps) {
  const getTypeInfo = (type: ResourceType) => {
    switch (type) {
      case ResourceType.bestPractice:
        return { label: 'Best Practice', color: 'bg-gradient-to-r from-primary to-primary/80', icon: BookOpen };
      case ResourceType.financialLiteracy:
        return { label: 'Financial', color: 'bg-gradient-to-r from-accent to-accent/80', icon: Wallet };
      case ResourceType.stressManagement:
        return { label: 'Wellness', color: 'bg-gradient-to-r from-destructive to-destructive/80', icon: Heart };
    }
  };

  const typeInfo = getTypeInfo(resource.resourceType);
  const Icon = typeInfo.icon;

  return (
    <Card className="hover:shadow-elegant-md transition-all duration-300 hover:-translate-y-0.5 border-border/50 rounded-2xl overflow-hidden group">
      <CardHeader className="bg-gradient-to-br from-muted/30 to-card pb-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <CardTitle className="text-xl mb-3 font-semibold group-hover:text-primary transition-colors">
              {resource.title}
            </CardTitle>
            <Badge className={`${typeInfo.color} text-white shadow-sm px-3 py-1 rounded-lg`}>
              {typeInfo.label}
            </Badge>
          </div>
          <div className="p-3 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl">
            <Icon className="h-7 w-7 text-primary flex-shrink-0" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <p className="text-base whitespace-pre-line leading-relaxed text-muted-foreground">
          {resource.content}
        </p>
      </CardContent>
    </Card>
  );
}
