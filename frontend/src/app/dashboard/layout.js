"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  Megaphone,
  Settings,
  User,
  Bell,
  LogOut,
  PlusCircle,
  CreditCard, // adăugat pentru butonul Abonament
} from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { usePathname } from "next/navigation";

export default function DashboardLayout({ children }) {
  const pathname = usePathname();
  const [notificari, setNotificari] = useState(3);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="w-full bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between shadow-sm">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-[#854d82]">Eventra Dashboard</span>
        </Link>

        <div className="flex items-center gap-4">
          <Link href="/dashboard/anunturi/adauga">
            <Button className="flex items-center gap-2 bg-[#854d82] text-white hover:bg-[#733b6f]">
              <PlusCircle size={18} /> Adaugă Anunț
            </Button>
          </Link>

          <button className="relative text-gray-500 hover:text-[#854d82]">
            <Bell size={20} />
            {notificari > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                {notificari}
              </span>
            )}
          </button>

          <div className="flex items-center gap-2 text-sm text-gray-700">
            <Avatar>
              <AvatarFallback>FE</AvatarFallback>
            </Avatar>
            <span>furnizorul@exemplu.ro</span>
            <button className="text-gray-400 hover:text-[#854d82]">
              <LogOut size={18} />
            </button>
          </div>
        </div>
      </header>

      {/* Layout */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-gray-200 p-4 flex flex-col gap-4 shadow-sm">
          <div className="text-2xl font-bold mb-4 text-[#854d82]">Dashboard</div>
          <nav className="flex flex-col gap-2">
            <Link
              href="/dashboard"
              className={`flex items-center gap-2 ${
                pathname === "/dashboard"
                  ? "text-[#854d82] font-semibold"
                  : "text-gray-700"
              } hover:text-[#854d82] hover:underline`}
            >
              <LayoutDashboard size={20} /> <span>Panou Principal</span>
            </Link>

            <Link
              href="/dashboard/profil"
              className={`flex items-center gap-2 ${
                pathname === "/dashboard/profil"
                  ? "text-[#854d82] font-semibold"
                  : "text-gray-700"
              } hover:text-[#854d82] hover:underline`}
            >
              <User size={20} /> <span>Profil</span>
            </Link>

            <Link
              href="/dashboard/anunturi"
              className={`flex items-center gap-2 ${
                pathname.includes("/dashboard/anunturi")
                  ? "text-[#854d82] font-semibold"
                  : "text-gray-700"
              } hover:text-[#854d82] hover:underline`}
            >
              <Megaphone size={20} /> <span>Anunțuri</span>
            </Link>

            <Link
              href="/dashboard/abonament"
              className={`flex items-center gap-2 ${
                pathname === "/dashboard/abonament"
                  ? "text-[#854d82] font-semibold"
                  : "text-gray-700"
              } hover:text-[#854d82] hover:underline`}
            >
              <CreditCard size={20} /> <span>Abonament</span>
            </Link>

            <Link
              href="/dashboard/settings"
              className={`flex items-center gap-2 ${
                pathname === "/dashboard/settings"
                  ? "text-[#854d82] font-semibold"
                  : "text-gray-700"
              } hover:text-[#854d82] hover:underline`}
            >
              <Settings size={20} /> <span>Setări</span>
            </Link>
          </nav>
        </aside>

        {/* Pagina */}
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
