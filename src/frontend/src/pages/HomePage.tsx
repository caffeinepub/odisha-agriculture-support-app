import { Sprout, Calendar, MapPin, Sparkles, Phone, MessageCircle, FileText } from 'lucide-react';
import { Link } from '@tanstack/react-router';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import CropCalendar from '../components/CropCalendar';
import SeasonalAdvisories from '../components/SeasonalAdvisories';
import WeatherInfo from '../components/WeatherInfo';
import CropStatistics from '../components/CropStatistics';
import EmergencyHelpline from '../components/EmergencyHelpline';

// WhatsApp configuration constants
const WHATSAPP_PHONE_NUMBER = '9040117361';
const WHATSAPP_MESSAGE = 'I need emergency farming support from Odisha Agriculture Support';

export default function HomePage() {
  // Construct WhatsApp URL with encoded message
  const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <div className="flex flex-col">
      {/* Emergency Helpline - Top Priority */}
      <section className="py-12 bg-gradient-to-br from-warning/15 via-warning/8 to-destructive/10 border-b border-warning/20">
        <div className="container animate-fade-in">
          <EmergencyHelpline />
        </div>
      </section>

      {/* Hero Section */}
      <section className="hero-section text-white py-32 md:py-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 pointer-events-none" />
        <div className="container relative z-10">
          <div className="max-w-4xl animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">Your Trusted Agricultural Partner</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">Emergency Support for Farmers in Odisha</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-white/95 leading-relaxed max-w-2xl">
              Empowering farmers across Odisha with government schemes, expert resources, and comprehensive support services.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/schemes">
                <button className="bg-white text-primary hover:bg-white/95 px-10 py-4 rounded-xl font-semibold text-lg transition-all shadow-elegant-lg hover:shadow-elegant-md hover:scale-105">
                  Explore Schemes
                </button>
              </a>
              <a href="/support">
                <button className="bg-white/15 hover:bg-white/25 backdrop-blur-md text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all border-2 border-white/30 hover:border-white/50">
                  Get Support
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Action Layer */}
      <section className="py-16 bg-gradient-to-br from-destructive/5 via-warning/5 to-destructive/10 border-y border-destructive/20">
        <div className="container">
          <div className="max-w-4xl mx-auto bg-card/80 backdrop-blur-sm rounded-2xl shadow-elegant-lg border-2 border-destructive/30 p-8 md:p-10">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl" role="img" aria-label="Emergency">🚨</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-destructive">
                Emergency Support for Farmers in Odisha
              </h2>
            </div>
            <p className="text-muted-foreground text-lg mb-8">
              Immediate assistance available 24/7. We're here to help you through any crisis.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Talk on WhatsApp */}
              <a 
                href={whatsappUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-xl font-semibold text-lg transition-all shadow-elegant hover:shadow-elegant-md hover:scale-105 min-h-[64px]"
              >
                <MessageCircle className="h-6 w-6" />
                <span>Talk on WhatsApp</span>
              </a>

              {/* Call Now */}
              <a 
                href="tel:08046110007"
                className="flex items-center justify-center gap-3 bg-destructive hover:bg-destructive/90 text-destructive-foreground px-6 py-4 rounded-xl font-semibold text-lg transition-all shadow-elegant hover:shadow-elegant-md hover:scale-105 min-h-[64px]"
              >
                <Phone className="h-6 w-6" />
                <span>Call Now</span>
              </a>

              {/* Request Support */}
              <Link 
                to="/support"
                className="flex items-center justify-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-4 rounded-xl font-semibold text-lg transition-all shadow-elegant hover:shadow-elegant-md hover:scale-105 min-h-[64px]"
              >
                <FileText className="h-6 w-6" />
                <span>Request Support</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="py-20 bg-gradient-to-b from-muted/40 to-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-elegant-md hover:shadow-elegant-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-card to-primary/5 rounded-2xl">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-br from-primary to-primary/80 rounded-2xl shadow-lg">
                    <Sprout className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl font-semibold">Crop Information</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Get detailed information about crops suitable for Odisha's climate and soil conditions.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-elegant-md hover:shadow-elegant-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-card to-accent/5 rounded-2xl">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-br from-accent to-accent/80 rounded-2xl shadow-lg">
                    <Calendar className="h-7 w-7 text-accent-foreground" />
                  </div>
                  <CardTitle className="text-xl font-semibold">Seasonal Calendar</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Plan your farming activities with our comprehensive crop calendar for Kharif, Rabi, and Summer seasons.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-elegant-md hover:shadow-elegant-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-card to-secondary/5 rounded-2xl">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl shadow-lg">
                    <MapPin className="h-7 w-7 text-secondary-foreground" />
                  </div>
                  <CardTitle className="text-xl font-semibold">Regional Advisories</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Access region-specific farming guidance for Coastal, North, South, and Western Odisha.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Weather Information */}
      <section className="py-20">
        <div className="container">
          <WeatherInfo />
        </div>
      </section>

      {/* Crop Statistics */}
      <section className="py-20 bg-gradient-to-b from-muted/40 to-background">
        <div className="container">
          <CropStatistics />
        </div>
      </section>

      {/* Crop Calendar */}
      <section className="py-20">
        <div className="container">
          <CropCalendar />
        </div>
      </section>

      {/* Seasonal Advisories */}
      <section className="py-20 bg-gradient-to-b from-muted/40 to-background">
        <div className="container">
          <SeasonalAdvisories />
        </div>
      </section>
    </div>
  );
}
