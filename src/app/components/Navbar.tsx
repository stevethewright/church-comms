"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Events", href: "/events" },
  { name: "Calendar", href: "/calendar" },
  { name: "Planner", href: "/planner" },
];

export default function NavTabs() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-1 border-r border-gray-200 px-4 py-6 h-screen w-48">
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
            {tab.name}
          </Link>
        );
      })}
    </nav>
  );
}
