"use client";

import { Bell, LogOut, PlusCircle, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function DashboardHeader() {
  return (
    <header className="w-full bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between shadow-sm">
      {/* Stânga: Logo sau nume */}
      <div className="text-xl font-bold" style={{ color: "#854d82" }}>Eventra Dashboard</div>

      {/* Dreapta: Buton + icons */}
      <div className="flex items-center gap-4">
        <Link href="/dashboard/anunturi/adauga">
          <Button
            className="flex items-center gap-2 text-white"
            style={{ backgroundColor: "#854d82" }}
          >
            <PlusCircle size={18} />
            Adaugă Anunț
          </Button>
        </Link>

        <button className="text-gray-500 hover:text-[#854d82]">
          <Bell size={20} />
        </button>

        <div className="flex items-center gap-2 text-sm text-gray-700">
          <User size={18} />
          <span>furnizorul@exemplu.ro</span>
          <button className="text-gray-400 hover:text-[#854d82]">
            <LogOut size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}
