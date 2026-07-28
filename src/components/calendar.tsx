"use client";

import FullCalendar from "@fullcalendar/react";
import themePlugin from "@fullcalendar/react/themes/breezy";
import dayGridPlugin from "@fullcalendar/react/daygrid";
import timeGridPlugin from "@fullcalendar/react/timegrid";

import "@fullcalendar/react/skeleton.css";
import "@fullcalendar/react/themes/breezy/theme.css";
import "@fullcalendar/react/themes/breezy/palettes/indigo.css";

export default function Calendar() {
  return (
    <div className="h-full">
      <FullCalendar
        plugins={[themePlugin, dayGridPlugin, timeGridPlugin]}
        height={"100%"}
        initialView="dayGridMonth"
        firstDay={1}
        headerToolbar={{
          left: "add dayGridMonth,timeGridWeek,timeGridDay",
          center: "title",
          right: "prev,next today",
        }}
        buttons={{
          add: {
            text: "Add Event",
            // TODO: Implement this.
          },
        }}
      />
    </div>
  );
}
