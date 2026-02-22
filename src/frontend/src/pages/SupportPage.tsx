import { Phone } from 'lucide-react';
import CrisisInterventionForm from '../components/CrisisInterventionForm';
import EmergencyHelpline from '../components/EmergencyHelpline';
import CrisisResourcesSection from '../components/CrisisResourcesSection';
import SupportContactCard from '../components/SupportContactCard';
import { useSupportContacts } from '../hooks/useSupportContacts';
import { Skeleton } from '@/components/ui/skeleton';

export default function SupportPage() {
  const { data: contacts, isLoading, error } = useSupportContacts();

  return (
    <div className="py-12">
      <div className="container">
        <div className="flex items-center gap-3 mb-8">
          <img
            src="/assets/generated/support-hands-icon.dim_256x256.png"
            alt="Support"
            className="h-16 w-16"
          />
          <div>
            <h1 className="font-display text-4xl font-bold">Help & Support</h1>
            <p className="text-muted-foreground text-lg">
              We're here for you. Reach out anytime you need assistance.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <EmergencyHelpline />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <CrisisInterventionForm />
          </div>
          <div>
            <img
              src="/assets/generated/counselor-support.dim_800x600.png"
              alt="Counselor Support"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="mb-12">
          <CrisisResourcesSection />
        </div>

        <div>
          <h2 className="font-display text-2xl font-bold mb-6">Support Organizations in Odisha</h2>
          
          {isLoading && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <Skeleton key={i} className="h-48 w-full" />
              ))}
            </div>
          )}

          {error && (
            <div className="text-center py-12">
              <p className="text-destructive text-lg">Failed to load support contacts. Please try again later.</p>
            </div>
          )}

          {!isLoading && !error && contacts && contacts.length === 0 && (
            <div className="text-center py-12">
              <Phone className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground text-lg">No support contacts available at the moment.</p>
            </div>
          )}

          {!isLoading && !error && contacts && contacts.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contacts.map((contact) => (
                <SupportContactCard key={Number(contact.id)} contact={contact} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
