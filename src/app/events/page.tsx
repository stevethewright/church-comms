import NewEventButton from "@/components/new-event-button";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Funnel } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { format } from "date-fns";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export default async function EventsPage() {
  const events = await prisma.event.findMany({
    where: { archivedAt: null },
    include: {
      campuses: true,
      tags: true,
      promotionRuleset: true,
    },
    orderBy: { startsAt: "asc" },
  });
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
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Campuses</TableHead>
            <TableHead>Tags</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {events.map((event) => (
            <TableRow key={event.id}>
              <TableCell className="font-medium">{event.title}</TableCell>
              <TableCell>
                {event.isAllDay
                  ? format(event.startsAt, "d MMM yyyy")
                  : format(event.startsAt, "d MMM yyyy")}
              </TableCell>
              <TableCell>
                <div className="flex flex-wrap gap-1">
                  {event.campuses.map((c) => (
                    <Badge key={c.id} variant="outline">
                      {c.name}
                    </Badge>
                  ))}
                </div>
              </TableCell>
              <TableCell>
                <div className="flex flex-wrap gap-1">
                  {event.tags.map((t) => (
                    <Badge key={t.id} style={{ backgroundColor: t.colour }}>
                      {t.name}
                    </Badge>
                  ))}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </main>
  );
}
