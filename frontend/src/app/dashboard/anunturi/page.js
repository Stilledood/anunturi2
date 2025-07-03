"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Megaphone, Star, Trash2, Pencil } from "lucide-react";

const anunturi = [
  {
    id: 1,
    titlu: "DJ Evenimente",
    status: "Activ",
    rating: 4.8,
    views: 315,
    data: "2025-06-01",
  },
  {
    id: 2,
    titlu: "Formație Nuntă Cluj",
    status: "Inactiv",
    rating: 4.6,
    views: 210,
    data: "2025-05-28",
  },
];

export default function AnunturiPage() {
  const [listaAnunturi, setListaAnunturi] = useState(anunturi);

  const stergeAnunt = (id) => {
    setListaAnunturi(listaAnunturi.filter((anunt) => anunt.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-[#854d82]">Anunțurile mele</h1>
          <Button className="bg-[#854d82] hover:bg-[#733b6f] text-white">Adaugă Anunț</Button>
        </div>

        {listaAnunturi.length === 0 ? (
          <Card className="p-6 text-center">
            <p className="text-gray-600">Nu ai anunțuri încă. Hai să adaugi primul!</p>
          </Card>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {listaAnunturi.map((anunt) => (
              <Card key={anunt.id} className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-1">{anunt.titlu}</h2>
                    <p className="text-sm text-gray-500">Rating: {anunt.rating} ⭐</p>
                    <p className="text-sm text-gray-500">Vizualizări: {anunt.views}</p>
                    <p className="text-sm text-gray-500">Data publicării: {anunt.data}</p>
                    <span
                      className={`inline-block mt-2 px-2 py-0.5 text-xs rounded-full font-medium ${
                        anunt.status === "Activ"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {anunt.status}
                    </span>
                  </div>
                  <div className="flex flex-col gap-2 items-end">
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-[#854d82] border-[#854d82] hover:bg-[#f3eaf3]"
                    >
                      <Pencil className="w-4 h-4 mr-1" /> Editează
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-red-600 border-red-500 hover:bg-red-50"
                      onClick={() => stergeAnunt(anunt.id)}
                    >
                      <Trash2 className="w-4 h-4 mr-1" /> Șterge
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
