"use client";

import FullCalendar from "@fullcalendar/react";
import themePlugin from "@fullcalendar/react/themes/breezy";
import listPlugin from "@fullcalendar/react/list";

import "@fullcalendar/react/skeleton.css";
import "@fullcalendar/react/themes/breezy/theme.css";
import "@fullcalendar/react/themes/breezy/palettes/indigo.css";

export default function WeeklyOverview() {
  return (
    <div className="h-full">
      <FullCalendar
        plugins={[themePlugin, listPlugin]}
        height={"100%"}
        initialView="listWeek"
        firstDay={1}
        headerToolbar={{
          left: "add",
          center: "title",
          right: "prev,next today",
        }}
        buttons={{
          add: {
            text: "Add Event", // TODO: Can we style this like the other
            // TODO: Implement this.
          },
          today: {
            text: "Current Week",
          },
        }}
      />
    </div>
  );
}
