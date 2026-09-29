"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Sidebar from "@/components/dashboard/sidebar";
import Header from "@/components/dashboard/header";
import { LayoutDashboard, Layers, Users, Menu } from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  const mobileNavItems = [
    { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
    { name: "Bed Grid", href: "/dashboard/rooms", icon: Layers },
    { name: "Guests", href: "/dashboard/tenants", icon: Users },
  ];

  return (
    <div className="min-h-screen flex bg-[#0a0a0a] text-white">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 flex flex-col min-w-0">
        <Header onMenuClick={() => setSidebarOpen(true)} />

        <main className="flex-1 p-3.5 sm:p-6 pb-28 lg:pb-8">
          <div className="max-w-7xl mx-auto">{children}</div>
        </main>
      </div>

      {/* ── Dedicated Mobile Bottom Navigation Bar ────────── */}
      <nav
        aria-label="Mobile Navigation"
        className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0a0a0a]/95 backdrop-blur-md border-t border-[#1e1e1e] card-shadow px-2 py-1.5 flex items-center justify-around"
      >
        {mobileNavItems.map((item) => {
          const isActive =
            item.href === "/dashboard"
              ? pathname === "/dashboard"
              : pathname.startsWith(item.href);

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex flex-col items-center justify-center flex-1 py-1.5 px-1 min-h-[52px] rounded-xl transition-default ${
                isActive
                  ? "text-black font-bold bg-[#f5c800]"
                  : "text-[#888] font-medium hover:text-white"
              }`}
            >
              <item.icon
                className={`w-5 h-5 ${
                  isActive ? "text-black stroke-[2.5]" : "text-[#888]"
                }`}
              />
              <span className="text-[11px] mt-1 leading-none">{item.name}</span>
            </Link>
          );
        })}

        {/* More Menu Trigger */}
        <button
          onClick={() => setSidebarOpen(true)}
          className="flex flex-col items-center justify-center flex-1 py-1.5 px-1 min-h-[52px] rounded-xl text-[#888] hover:text-white font-medium transition-default cursor-pointer"
        >
          <Menu className="w-5 h-5 text-[#888]" />
          <span className="text-[11px] mt-1 leading-none">More</span>
        </button>
      </nav>
    </div>
  );
}
