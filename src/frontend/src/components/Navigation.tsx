import { Link, useRouterState } from '@tanstack/react-router';
import { Menu, Home, FileText, BookOpen, Phone, TrendingUp, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouterState();
  const currentPath = router.location.pathname;

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/schemes', label: 'Schemes', icon: FileText },
    { path: '/resources', label: 'Resources', icon: BookOpen },
    { path: '/market-prices', label: 'Market Prices', icon: TrendingUp },
  ];

  const emergencyItem = { path: '/support', label: 'Emergency Support', icon: AlertCircle };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-md group-hover:shadow-lg transition-all">
            <Sprout className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="font-display text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Krushak Mitra
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPath === item.path;
            return (
              <Link key={item.path} to={item.path}>
                <Button
                  variant={isActive ? 'default' : 'ghost'}
                  className={`flex items-center gap-2 rounded-xl transition-all ${
                    isActive 
                      ? 'shadow-md' 
                      : 'hover:bg-muted/60'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </Button>
              </Link>
            );
          })}
          
          {/* Emergency Support - Prominent */}
          <Link to={emergencyItem.path}>
            <Button
              variant={currentPath === emergencyItem.path ? 'destructive' : 'outline'}
              className={`flex items-center gap-2 ml-3 rounded-xl border-2 transition-all ${
                currentPath === emergencyItem.path 
                  ? 'border-destructive shadow-warm-md' 
                  : 'border-warning/40 hover:bg-warning/10 hover:border-warning/60 text-warning-foreground font-semibold hover:shadow-warm'
              }`}
            >
              <AlertCircle className="h-5 w-5" />
              {emergencyItem.label}
              <Badge variant="destructive" className="ml-1 px-2 py-0.5 text-xs rounded-md">
                24/7
              </Badge>
            </Button>
          </Link>
        </nav>

        {/* Mobile Navigation */}
        <div className="flex items-center gap-2 md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-xl">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] rounded-l-2xl">
              <SheetTitle className="font-display text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-8">
                Krushak Mitra
              </SheetTitle>
              <nav className="flex flex-col space-y-3">
                {/* Emergency Support First in Mobile */}
                <Link to={emergencyItem.path} onClick={() => setIsOpen(false)}>
                  <Button
                    variant={currentPath === emergencyItem.path ? 'destructive' : 'outline'}
                    className={`w-full justify-start flex items-center gap-3 rounded-xl border-2 transition-all ${
                      currentPath === emergencyItem.path 
                        ? 'border-destructive shadow-warm-md' 
                        : 'border-warning/40 hover:bg-warning/10 text-warning-foreground font-semibold'
                    }`}
                  >
                    <AlertCircle className="h-5 w-5" />
                    {emergencyItem.label}
                    <Badge variant="destructive" className="ml-auto px-2 py-0.5 text-xs rounded-md">
                      24/7
                    </Badge>
                  </Button>
                </Link>
                
                <div className="h-px bg-border/60 my-2" />
                
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = currentPath === item.path;
                  return (
                    <Link key={item.path} to={item.path} onClick={() => setIsOpen(false)}>
                      <Button
                        variant={isActive ? 'default' : 'ghost'}
                        className={`w-full justify-start flex items-center gap-3 rounded-xl transition-all ${
                          isActive ? 'shadow-md' : ''
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                        {item.label}
                      </Button>
                    </Link>
                  );
                })}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

function Sprout({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 20h10" />
      <path d="M10 20c5.5-2.5.8-6.4 3-10" />
      <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z" />
      <path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z" />
    </svg>
  );
}
