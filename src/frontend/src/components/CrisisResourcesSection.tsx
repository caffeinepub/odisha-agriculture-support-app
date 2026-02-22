import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Users, Phone, Shield } from 'lucide-react';

export default function CrisisResourcesSection() {
  return (
    <div className="bg-gradient-to-br from-warning/15 via-warning/10 to-destructive/5 rounded-xl p-8 border-3 border-warning/40 shadow-warm-md">
      <div className="flex items-center gap-3 mb-6">
        <img
          src="/assets/generated/wellness-icon.dim_256x256.png"
          alt="Wellness"
          className="h-12 w-12"
        />
        <div>
          <h2 className="font-display text-2xl font-bold">Crisis Support Resources</h2>
          <p className="text-muted-foreground">You are not alone. Help is available.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-2 border-warning/40 shadow-warm hover:shadow-warm-md transition-shadow">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-3 bg-warning/30 rounded-lg">
                <Heart className="h-7 w-7 text-warning" />
              </div>
              <CardTitle className="text-lg">Recognize the Signs</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base">
              Feeling overwhelmed, hopeless, or having thoughts of self-harm are signs you need support. These feelings are temporary, and help is available.
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="border-2 border-warning/40 shadow-warm hover:shadow-warm-md transition-shadow">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-3 bg-warning/30 rounded-lg">
                <Users className="h-7 w-7 text-warning" />
              </div>
              <CardTitle className="text-lg">Talk to Someone</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base">
              Reach out to family, friends, or community members. Sharing your feelings with someone you trust can provide relief and perspective.
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="border-2 border-warning/40 shadow-warm hover:shadow-warm-md transition-shadow">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-3 bg-warning/30 rounded-lg">
                <Phone className="h-7 w-7 text-warning" />
              </div>
              <CardTitle className="text-lg">Professional Support</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base">
              Mental health professionals can provide confidential support and coping strategies. Don't hesitate to seek professional help.
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="border-2 border-warning/40 shadow-warm hover:shadow-warm-md transition-shadow">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-3 bg-warning/30 rounded-lg">
                <Shield className="h-7 w-7 text-warning" />
              </div>
              <CardTitle className="text-lg">You Are Not Alone</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base">
              Many farmers face similar challenges. There is no shame in asking for help. Your life and well-being matter to your family and community.
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
