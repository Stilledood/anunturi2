"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, Megaphone, Settings, User, Bell, LogOut, PlusCircle, Trash2 } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Lun", views: 120 },
  { name: "Mar", views: 98 },
  { name: "Mie", views: 86 },
  { name: "Joi", views: 130 },
  { name: "Vin", views: 180 },
  { name: "Sâm", views: 65 },
  { name: "Dum", views: 90 }
];

export default function FurnizorDashboard() {
  const [anunturi, setAnunturi] = useState([
    {
      id: 1,
      titlu: "DJ Evenimente",
      rating: 4.8,
      status: "Activ"
    },
    {
      id: 2,
      titlu: "Fotograf Nuntă Cluj",
      rating: 4.6,
      status: "Activ"
    }
  ]);

  const stergeAnunt = (id) => {
    setAnunturi((prev) => prev.filter((a) => a.id !== id));
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="w-full bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between shadow-sm">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-red-600">Eventra Dashboard</span>
        </Link>

        <div className="flex items-center gap-4">
          <Link href="/dashboard/anunturi/adauga">
            <Button className="flex items-center gap-2 bg-red-600 text-white hover:bg-red-700">
              <PlusCircle size={18} />
              Adaugă Anunț
            </Button>
          </Link>

          <button className="text-gray-500 hover:text-red-600">
            <Bell size={20} />
          </button>

          <div className="flex items-center gap-2 text-sm text-gray-700">
            <Avatar>
              <AvatarFallback>FE</AvatarFallback>
            </Avatar>
            <span>furnizorul@exemplu.ro</span>
            <button className="text-gray-400 hover:text-red-600">
              <LogOut size={18} />
            </button>
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        <aside className="w-64 bg-white border-r border-gray-200 p-4 flex flex-col gap-4 shadow-sm">
          <div className="text-2xl font-bold mb-4 text-red-600">Dashboard</div>
          <nav className="flex flex-col gap-2">
            <Link href="#" className="flex items-center gap-2 text-gray-700 hover:text-red-600">
              <LayoutDashboard size={20} /> <span>Panou Principal</span>
            </Link>
            <Link href="#" className="flex items-center gap-2 text-gray-700 hover:text-red-600">
              <User size={20} /> <span>Profil</span>
            </Link>
            <Link href="#" className="flex items-center gap-2 text-gray-700 hover:text-red-600">
              <Megaphone size={20} /> <span>Anunțuri</span>
            </Link>
            <Link href="#" className="flex items-center gap-2 text-gray-700 hover:text-red-600">
              <Settings size={20} /> <span>Setări</span>
            </Link>
          </nav>
        </aside>

        <main className="flex-1 p-6">
          <h1 className="text-3xl font-bold mb-6 text-gray-800">Bine ai venit, Furnizorule!</h1>

          {/* Statistici */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <Card className="shadow-md hover:shadow-lg transition-all duration-300">
              <CardContent className="p-4 flex items-center justify-between">
                <div>
                  <div className="text-sm text-gray-500">Anunțuri active</div>
                  <div className="text-2xl font-semibold">{anunturi.length}</div>
                </div>
                <Megaphone size={32} className="text-red-600" />
              </CardContent>
            </Card>
            <Card className="shadow-md hover:shadow-lg transition-all duration-300">
              <CardContent className="p-4 flex items-center justify-between">
                <div>
                  <div className="text-sm text-gray-500">Total vizualizări</div>
                  <div className="text-2xl font-semibold">348</div>
                </div>
                <LayoutDashboard size={32} className="text-red-600" />
              </CardContent>
            </Card>
            <Card className="shadow-md hover:shadow-lg transition-all duration-300">
              <CardContent className="p-4 flex items-center justify-between">
                <div>
                  <div className="text-sm text-gray-500">Rating mediu</div>
                  <div className="text-2xl font-semibold">4.7 ⭐</div>
                </div>
                <User size={32} className="text-red-600" />
              </CardContent>
            </Card>
          </div>

          {/* Anunțuri */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Anunțurile tale</h2>
            <Link href="/dashboard/anunturi/adauga">
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                Adaugă Anunț
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {anunturi.map((anunt) => (
              <Card key={anunt.id} className="shadow-sm">
                <CardContent className="p-4 space-y-2">
                  <div className="font-semibold text-lg">{anunt.titlu}</div>
                  <div className="text-sm text-gray-600">Rating: {anunt.rating}</div>
                  <div className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-700 inline-block">
                    {anunt.status}
                  </div>
                  <Button
                    variant="ghost"
                    className="text-red-500 hover:text-red-700 p-0 text-sm"
                    onClick={() => stergeAnunt(anunt.id)}
                  >
                    <Trash2 size={16} className="mr-1" /> Șterge
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Grafic */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-2">Vizualizări săptămânale</h3>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="views" fill="#ef4444" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </main>
      </div>
    </div>
  );
}
