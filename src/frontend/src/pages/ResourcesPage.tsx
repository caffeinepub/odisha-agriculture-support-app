import { BookOpen } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import BestPracticesSection from '../components/BestPracticesSection';
import FinancialLiteracySection from '../components/FinancialLiteracySection';
import StressManagementSection from '../components/StressManagementSection';

export default function ResourcesPage() {
  return (
    <div className="py-12">
      <div className="container">
        <div className="flex items-center gap-3 mb-8">
          <img
            src="/assets/generated/resources-icon.dim_256x256.png"
            alt="Resources"
            className="h-16 w-16"
          />
          <div>
            <h1 className="font-display text-4xl font-bold">Agricultural Resources</h1>
            <p className="text-muted-foreground text-lg">
              Expert guidance and best practices
            </p>
          </div>
        </div>

        <Tabs defaultValue="best-practices" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="best-practices">Best Practices</TabsTrigger>
            <TabsTrigger value="financial">Financial Literacy</TabsTrigger>
            <TabsTrigger value="wellness">Wellness & Stress Management</TabsTrigger>
          </TabsList>

          <TabsContent value="best-practices" className="mt-8">
            <BestPracticesSection />
          </TabsContent>

          <TabsContent value="financial" className="mt-8">
            <FinancialLiteracySection />
          </TabsContent>

          <TabsContent value="wellness" className="mt-8">
            <StressManagementSection />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
