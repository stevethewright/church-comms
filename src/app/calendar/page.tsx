import Calendar from '@/components/calendar';

export default function CalendarPage() {
  return (
    <main className="h-full flex flex-col">
      <div className="flex-1 min-h-0">
        <Calendar />
      </div>
    </main>
  );
}
