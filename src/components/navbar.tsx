"use client";

import { Calendar, House, NotebookPen, Settings, Tickets } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navbarLinkStyles = "inline pr-1";

const tabs = [
  // { name: 'Home', icon: <House className={navbarLinkStyles} />, href: '/' },
  {
    name: "Events",
    icon: <Tickets className={navbarLinkStyles} />,
    href: "/events",
  },
  {
    name: "Calendar",
    icon: <Calendar className={navbarLinkStyles} />,
    href: "/calendar",
  },
  {
    name: "Weekly Overview",
    icon: <NotebookPen className={navbarLinkStyles} />,
    href: "/weekly-overview",
  },
  {
    name: "Settings",
    icon: <Settings className={navbarLinkStyles} />,
    href: "/settings",
  },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-1 border-r border-gray-200 px-4 py-6 h-screen w-52">
      {tabs.map((tab) => {
        const isActive = pathname === tab.href;
        return (
          <Link
            key={tab.href}
            href={tab.href}
            className={`px-3 py-2 rounded-md text-sm font-medium ${
              isActive
                ? "bg-gray-100 text-black"
                : "text-gray-500 hover:bg-gray-50 hover:text-black"
            }`}
          >
            {tab.icon} {tab.name}
          </Link>
        );
      })}
      <div className="mt-auto flex flex-col">
        <span className="mx-auto flex-1">church-comms</span>
        <span className="mx-auto flex-2">v{process.env.APP_VERSION}</span>
      </div>
    </nav>
  );
}
