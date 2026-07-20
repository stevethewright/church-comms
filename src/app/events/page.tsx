import { Button } from '@/components/ui/button';
import { Funnel } from 'lucide-react';

export default function EventsPage() {
  return (
    <main>
      <h1 className="text-2xl font-bold">Events</h1>
      <Button variant="outline" size="icon">
        <Funnel />
      </Button>
    </main>
  );
}
