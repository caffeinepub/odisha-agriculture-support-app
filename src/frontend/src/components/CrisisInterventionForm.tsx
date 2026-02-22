import { useState } from 'react';
import { useCrisisReport } from '../hooks/useCrisisReport';
import { CrisisType } from '../backend';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { AlertDialog, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
import { HeartHandshake, Loader2 } from 'lucide-react';

export default function CrisisInterventionForm() {
  const { mutate: reportCrisis, isPending, isSuccess, isError } = useCrisisReport();
  
  const [formData, setFormData] = useState({
    farmerName: '',
    location: '',
    contactNumber: '',
    crisisType: CrisisType.emotionalDistress,
    description: '',
  });
  
  const [showDialog, setShowDialog] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    reportCrisis(formData, {
      onSuccess: () => {
        setShowDialog(true);
        setFormData({
          farmerName: '',
          location: '',
          contactNumber: '',
          crisisType: CrisisType.emotionalDistress,
          description: '',
        });
      },
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <>
      <Card className="border-2 border-warning/30 bg-gradient-to-br from-warning/15 to-card shadow-warm-md rounded-2xl overflow-hidden">
        <CardHeader className="bg-gradient-to-br from-warning/20 to-card pb-6">
          <div className="flex items-center gap-4 mb-2">
            <div className="p-4 bg-gradient-to-br from-warning/30 to-warning/20 rounded-2xl ring-2 ring-warning/30 shadow-md">
              <HeartHandshake className="h-9 w-9 text-warning" />
            </div>
            <div>
              <CardTitle className="text-2xl font-display font-bold">Request Immediate Assistance</CardTitle>
              <CardDescription className="text-base mt-1 font-medium">A counselor will be dispatched to help you</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="farmerName" className="text-base font-semibold">Your Name</Label>
              <Input
                id="farmerName"
                value={formData.farmerName}
                onChange={(e) => handleChange('farmerName', e.target.value)}
                required
                disabled={isPending}
                className="border-2 border-border/50 focus:border-warning rounded-xl h-12 px-4 transition-all"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="location" className="text-base font-semibold">Your Location</Label>
              <Input
                id="location"
                value={formData.location}
                onChange={(e) => handleChange('location', e.target.value)}
                required
                disabled={isPending}
                className="border-2 border-border/50 focus:border-warning rounded-xl h-12 px-4 transition-all"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="contactNumber" className="text-base font-semibold">Contact Number</Label>
              <Input
                id="contactNumber"
                type="tel"
                value={formData.contactNumber}
                onChange={(e) => handleChange('contactNumber', e.target.value)}
                required
                disabled={isPending}
                className="border-2 border-border/50 focus:border-warning rounded-xl h-12 px-4 transition-all"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="crisisType" className="text-base font-semibold">Type of Support Needed</Label>
              <Select
                value={formData.crisisType}
                onValueChange={(value) => handleChange('crisisType', value as CrisisType)}
                disabled={isPending}
              >
                <SelectTrigger id="crisisType" className="border-2 border-border/50 rounded-xl h-12">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={CrisisType.suicidalThoughts}>
                    Emotional Crisis / Suicidal Thoughts
                  </SelectItem>
                  <SelectItem value={CrisisType.loanRepaymentStress}>
                    Loan Repayment Stress
                  </SelectItem>
                  <SelectItem value={CrisisType.emotionalDistress}>
                    General Emotional Distress
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description" className="text-base font-semibold">Tell us more (optional)</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => handleChange('description', e.target.value)}
                rows={4}
                disabled={isPending}
                className="border-2 border-border/50 focus:border-warning rounded-xl px-4 py-3 transition-all resize-none"
              />
            </div>

            {isError && (
              <div className="p-4 bg-destructive/15 border-2 border-destructive/30 rounded-xl text-base text-destructive font-semibold">
                Please try calling our helpline directly.
              </div>
            )}

            <Button
              type="submit"
              size="lg"
              className="w-full bg-gradient-to-r from-destructive to-destructive/90 hover:from-destructive/90 hover:to-destructive/80 text-destructive-foreground font-bold text-lg py-7 shadow-warm-md hover:shadow-warm-lg transition-all rounded-xl"
              disabled={isPending}
            >
              {isPending ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Sending request...
                </>
              ) : (
                'Request Assistance Now'
              )}
            </Button>
          </form>
        </CardContent>
      </Card>

      <AlertDialog open={showDialog} onOpenChange={setShowDialog}>
        <AlertDialogContent className="rounded-2xl">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-2xl text-success font-display">
              Help is on the way
            </AlertDialogTitle>
            <AlertDialogDescription className="text-base leading-relaxed">
              A counselor will contact you shortly. You are not alone, and help is available.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <Button onClick={() => setShowDialog(false)} className="w-full rounded-xl">
              Close
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
