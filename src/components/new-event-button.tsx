import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

export default function NewEventButton() {
  return (
    <Button variant="secondary">
      New Event <Plus />
    </Button>
  );
}
