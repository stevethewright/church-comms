import WeeklyPlanner from '@/components/weekly-planner';

export default function WeeklyPlannerPage() {
  return (
    <main className="h-full flex flex-col">
      <div className="flex-1">
        <WeeklyPlanner />
      </div>
    </main>
  );
}
