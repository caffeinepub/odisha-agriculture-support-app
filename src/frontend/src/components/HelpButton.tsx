import { Phone } from 'lucide-react';
import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';

export default function HelpButton() {
  return (
    <Link to="/support">
      <Button
        size="lg"
        className="fixed bottom-8 right-8 h-16 w-16 rounded-2xl shadow-warm-lg hover:shadow-warm-md transition-all z-40 bg-gradient-to-br from-destructive to-destructive/90 hover:from-destructive/90 hover:to-destructive/80 animate-pulse hover:animate-none ring-4 ring-destructive/20 hover:ring-destructive/30 hover:scale-105"
      >
        <Phone className="h-7 w-7" />
        <span className="sr-only">Get Emergency Help</span>
      </Button>
    </Link>
  );
}
