"use client";

import { Card, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Megaphone, Star } from "lucide-react";

const dateVizualizari = [
  { zi: "Lun", views: 120 },
  { zi: "Mar", views: 95 },
  { zi: "Mie", views: 80 },
  { zi: "Joi", views: 115 },
  { zi: "Vin", views: 150 },
  { zi: "Sâm", views: 60 },
  { zi: "Dum", views: 90 },
];

const anunturi = [
  {
    id: 1,
    titlu: "DJ Evenimente",
    status: "Activ",
    rating: 4.8,
  },
  {
    id: 2,
    titlu: "Formație Nuntă Cluj",
    status: "Activ",
    rating: 4.6,
  },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto space-y-10">
        <div>
          <h1 className="text-3xl font-bold text-[#854d82]">Bine ai venit, Furnizorule!</h1>
          <p className="text-gray-600">Iată o privire rapidă asupra activității tale</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <Card className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Anunțuri active</p>
                <p className="text-2xl font-bold">{anunturi.length}</p>
              </div>
              <Megaphone className="w-6 h-6 text-[#854d82]" />
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total vizualizări</p>
                <p className="text-2xl font-bold">725</p>
              </div>
              <svg
                className="w-6 h-6 text-[#854d82]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M3 3v18h18" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Rating mediu</p>
                <p className="text-2xl font-bold">4.7</p>
              </div>
              <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
            </div>
          </Card>
        </div>

        <Card className="p-6">
          <h2 className="text-lg font-semibold text-[#854d82] mb-4">Vizualizări săptămânale</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={dateVizualizari}>
              <XAxis dataKey="zi" stroke="#888" />
              <YAxis stroke="#888" />
              <Tooltip />
              <Bar dataKey="views" fill="#854d82" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-6">
          <h2 className="text-lg font-semibold text-[#854d82] mb-4">Anunțurile tale</h2>
          <div className="space-y-4">
            {anunturi.map((anunt) => (
              <div key={anunt.id} className="border rounded-md p-4 shadow-sm bg-white">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-md font-bold text-gray-800">{anunt.titlu}</h3>
                    <p className="text-sm text-gray-600">Rating: {anunt.rating}</p>
                    <span
                      className={`inline-block mt-1 px-2 py-0.5 text-xs rounded-full font-medium ${
                        anunt.status === "Activ"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {anunt.status}
                    </span>
                  </div>
                  <button className="text-[#854d82] hover:underline text-sm">Editează</button>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
