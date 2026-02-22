import { Heart, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'krushak-mitra'
  );

  return (
    <footer className="border-t bg-muted/30 mt-auto">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-display text-lg font-semibold text-primary mb-3">Krushak Mitra</h3>
            <p className="text-sm text-muted-foreground">
              Supporting Odisha farmers with resources, schemes, and assistance for a better tomorrow.
            </p>
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold text-primary mb-3">Emergency Support</h3>
            <div className="flex items-center gap-2 text-sm">
              <Phone className="h-4 w-4 text-destructive" />
              <span className="font-semibold">Helpline: 1800-XXX-XXXX</span>
            </div>
            <p className="text-xs text-muted-foreground mt-2">Available 24/7 for crisis support</p>
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold text-primary mb-3">Quick Links</h3>
            <ul className="text-sm space-y-1">
              <li>
                <a href="/support" className="text-muted-foreground hover:text-primary transition-colors">
                  Mental Health Support
                </a>
              </li>
              <li>
                <a href="/schemes" className="text-muted-foreground hover:text-primary transition-colors">
                  Government Schemes
                </a>
              </li>
              <li>
                <a href="/resources" className="text-muted-foreground hover:text-primary transition-colors">
                  Farmer Resources
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-1 flex-wrap">
            © {currentYear} Krushak Mitra. Built with{' '}
            <Heart className="h-4 w-4 text-destructive fill-destructive inline" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
