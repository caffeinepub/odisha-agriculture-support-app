import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { type SupportContact } from '../backend';
import { Phone, Mail, Building2 } from 'lucide-react';

interface SupportContactCardProps {
  contact: SupportContact;
}

export default function SupportContactCard({ contact }: SupportContactCardProps) {
  return (
    <Card className="hover:shadow-warm-md transition-all duration-300 hover:-translate-y-0.5 border-2 border-warning/20 rounded-2xl overflow-hidden">
      <CardHeader className="bg-gradient-to-br from-warning/10 to-card pb-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <CardTitle className="text-xl mb-2 font-semibold">{contact.name}</CardTitle>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Building2 className="h-4 w-4 text-warning" />
              <span>{contact.organization}</span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4 pt-6">
        <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-xl">
          <Phone className="h-5 w-5 text-warning flex-shrink-0" />
          <a href={`tel:${contact.phoneNumber}`} className="text-base hover:underline font-medium hover:text-primary transition-colors">
            {contact.phoneNumber}
          </a>
        </div>
        {contact.email && (
          <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-xl">
            <Mail className="h-5 w-5 text-warning flex-shrink-0" />
            <a href={`mailto:${contact.email}`} className="text-base hover:underline break-all hover:text-primary transition-colors">
              {contact.email}
            </a>
          </div>
        )}
        <div className="flex gap-3 pt-2">
          <a href={`tel:${contact.phoneNumber}`} className="flex-1">
            <Button className="w-full gap-2 bg-gradient-to-r from-warning to-warning/90 hover:from-warning/90 hover:to-warning/80 text-warning-foreground font-semibold shadow-warm hover:shadow-warm-md transition-all rounded-xl">
              <Phone className="h-4 w-4" />
              Call
            </Button>
          </a>
          {contact.email && (
            <a href={`mailto:${contact.email}`} className="flex-1">
              <Button variant="outline" className="w-full gap-2 border-2 border-warning/30 hover:bg-warning/10 hover:border-warning/50 rounded-xl transition-all">
                <Mail className="h-4 w-4" />
                Email
              </Button>
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
