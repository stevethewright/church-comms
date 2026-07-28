import NewEventButton from "@/components/new-event-button";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Funnel } from "lucide-react";

export default function EventsPage() {
  return (
    <main>
      <h1 className="text-2xl font-bold">Events</h1>
      <div className="flex gap-1">
        <Button variant="outline" size="icon">
          <Funnel />
        </Button>
        <Input type="search" placeholder="Search events..." />
        <NewEventButton />
      </div>
      TODO: Add in table.
    </main>
  );
}
