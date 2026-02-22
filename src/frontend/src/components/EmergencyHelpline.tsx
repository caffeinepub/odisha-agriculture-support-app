import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, AlertCircle, Heart } from 'lucide-react';

export default function EmergencyHelpline() {
  const helplines = [
    { name: 'National Crisis Helpline', number: '1800-XXX-XXXX' },
    { name: 'Kisan Call Centre', number: '1800-180-1551' },
    { name: 'Odisha Agriculture Helpline', number: '1800-345-6770' },
  ];

  return (
    <Card className="border-2 border-warning/30 bg-gradient-to-br from-warning/20 via-warning/10 to-card shadow-warm-lg relative overflow-hidden rounded-2xl">
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-warning via-destructive to-warning" />
      <CardHeader className="pb-6 pt-10">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="p-6 bg-gradient-to-br from-warning/30 to-warning/20 rounded-2xl shadow-lg ring-2 ring-warning/40 flex-shrink-0">
            <AlertCircle className="h-12 w-12 text-warning" />
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <CardTitle className="text-3xl md:text-4xl font-display font-bold text-foreground">
                We're Here to Help You
              </CardTitle>
              <span className="px-4 py-1.5 bg-destructive text-destructive-foreground text-sm font-bold rounded-full uppercase tracking-wide shadow-md">
                24/7 Available
              </span>
            </div>
            <CardDescription className="text-lg md:text-xl text-foreground/90 font-medium leading-relaxed">
              <Heart className="inline h-5 w-5 mr-2 text-destructive" />
              If you're facing a crisis, feeling overwhelmed, or need immediate support — you are not alone. 
              Help is just a phone call away.
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {helplines.map((helpline, index) => (
            <div
              key={index}
              className="p-5 bg-gradient-to-br from-card to-muted/30 rounded-xl border border-border/50 shadow-sm hover:shadow-md transition-all"
            >
              <p className="text-sm font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
                {helpline.name}
              </p>
              <a
                href={`tel:${helpline.number}`}
                className="flex items-center gap-3 text-xl font-bold text-foreground hover:text-primary transition-colors group"
              >
                <Phone className="h-5 w-5 text-warning group-hover:text-primary transition-colors" />
                {helpline.number}
              </a>
            </div>
          ))}
        </div>
        <div className="pt-4 border-t border-border/50">
          <p className="text-base text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Remember:</strong> Reaching out for help is a sign of strength. 
            Our trained counselors are ready to listen and support you through difficult times.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
