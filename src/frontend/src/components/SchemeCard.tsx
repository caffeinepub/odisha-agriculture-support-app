import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { type GovernmentScheme } from '../backend';
import { Building2, CheckCircle2, FileText, Phone } from 'lucide-react';

interface SchemeCardProps {
  scheme: GovernmentScheme;
}

export default function SchemeCard({ scheme }: SchemeCardProps) {
  const levelColor = scheme.level === 'central' ? 'bg-gradient-to-r from-primary to-primary/80' : 'bg-gradient-to-r from-accent to-accent/80';
  const levelLabel = scheme.level === 'central' ? 'Central' : 'State';

  return (
    <Card className="hover:shadow-elegant-md transition-all duration-300 hover:-translate-y-0.5 border-border/50 rounded-2xl overflow-hidden group">
      <CardHeader className="bg-gradient-to-br from-muted/30 to-card pb-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <CardTitle className="text-xl mb-3 font-semibold group-hover:text-primary transition-colors">
              {scheme.name}
            </CardTitle>
            <Badge className={`${levelColor} text-white shadow-sm px-3 py-1 rounded-lg`}>
              {levelLabel} Scheme
            </Badge>
          </div>
          <div className="p-3 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl">
            <Building2 className="h-7 w-7 text-primary flex-shrink-0" />
          </div>
        </div>
        <CardDescription className="text-base mt-4 leading-relaxed">
          {scheme.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="eligibility" className="border-b border-border/50">
            <AccordionTrigger className="hover:no-underline py-4">
              <div className="flex items-center gap-3">
                <div className="p-1.5 bg-primary/10 rounded-lg">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                </div>
                <span className="font-semibold">Eligibility Criteria</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-4 pb-6">
              <p className="text-base whitespace-pre-line leading-relaxed text-muted-foreground">
                {scheme.eligibility}
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="application" className="border-b border-border/50">
            <AccordionTrigger className="hover:no-underline py-4">
              <div className="flex items-center gap-3">
                <div className="p-1.5 bg-accent/10 rounded-lg">
                  <FileText className="h-4 w-4 text-accent" />
                </div>
                <span className="font-semibold">Application Process</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-4 pb-6">
              <p className="text-base whitespace-pre-line leading-relaxed text-muted-foreground">
                {scheme.applicationProcess}
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="contact" className="border-none">
            <AccordionTrigger className="hover:no-underline py-4">
              <div className="flex items-center gap-3">
                <div className="p-1.5 bg-secondary/10 rounded-lg">
                  <Phone className="h-4 w-4 text-secondary" />
                </div>
                <span className="font-semibold">Contact Information</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-4 pb-6">
              <p className="text-base whitespace-pre-line leading-relaxed text-muted-foreground">
                {scheme.contactInfo}
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
}
