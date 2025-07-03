"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CalendarDays, User, LogOut } from "lucide-react";

export default function ClientLayout({ children }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 p-4 flex flex-col gap-4 shadow-sm">
        <div className="text-2xl font-bold text-[#854d82] mb-4">Contul meu</div>
        <nav className="flex flex-col gap-2">
          <Link
            href="/client/rezervari"
            className={`flex items-center gap-2 ${
              pathname === "/client/rezervari" ? "text-[#854d82] font-semibold" : "text-gray-700"
            } hover:text-[#854d82] hover:underline`}
          >
            <CalendarDays size={20} /> <span>Rezervările mele</span>
          </Link>

          <Link
            href="/client/profil"
            className={`flex items-center gap-2 ${
              pathname === "/client/profil" ? "text-[#854d82] font-semibold" : "text-gray-700"
            } hover:text-[#854d82] hover:underline`}
          >
            <User size={20} /> <span>Profil</span>
          </Link>

          <button className="flex items-center gap-2 text-gray-400 hover:text-[#854d82] mt-4">
            <LogOut size={20} /> <span>Delogare</span>
          </button>
        </nav>
      </aside>

      {/* Conținut */}
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
