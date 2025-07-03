// Furnizor - Pagina de Profil All-Inclusive
"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

export default function ProfilFurnizor() {
  const [profil, setProfil] = useState({
    nume: "DJ Marcu",
    email: "furnizor@exemplu.ro",
    telefon: "0712345678",
    judet: "Cluj",
    oras: "Cluj-Napoca",
    servicii: "DJ, Sonorizare",
    website: "https://djmarcu.ro",
  });

  const [editat, setEditat] = useState(false);
  const [parolaNoua, setParolaNoua] = useState("");
  const [recenzii] = useState([
    { id: 1, client: "Ana M.", rating: 5, text: "Excelentă experiență!", data: "2025-06-20" },
    { id: 2, client: "Bogdan C.", rating: 4, text: "Foarte mulțumit!", data: "2025-06-18" },
  ]);

  const salveazaModificari = () => {
    setEditat(true);
    setTimeout(() => setEditat(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex items-center gap-4">
          <Avatar className="w-20 h-20">
            <AvatarImage src="/placeholder.jpg" alt="avatar" />
            <AvatarFallback>FM</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{profil.nume}</h2>
            <p className="text-gray-600">{profil.email}</p>
          </div>
        </div>

        <Card className="p-6 space-y-4 shadow-md">
          <h3 className="text-xl font-semibold text-[#854d82]">Date personale</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Nume</label>
              <input value={profil.nume} onChange={(e) => setProfil({ ...profil, nume: e.target.value })} className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#854d82]" />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Telefon</label>
              <input value={profil.telefon} onChange={(e) => setProfil({ ...profil, telefon: e.target.value })} className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#854d82]" />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Județ</label>
              <input value={profil.judet} onChange={(e) => setProfil({ ...profil, judet: e.target.value })} className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#854d82]" />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Oraș</label>
              <input value={profil.oras} onChange={(e) => setProfil({ ...profil, oras: e.target.value })} className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#854d82]" />
            </div>
            <div className="md:col-span-2">
              <label className="block mb-1 text-sm font-medium text-gray-700">Servicii oferite</label>
              <input value={profil.servicii} onChange={(e) => setProfil({ ...profil, servicii: e.target.value })} className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#854d82]" />
            </div>
            <div className="md:col-span-2">
              <label className="block mb-1 text-sm font-medium text-gray-700">Website / Social</label>
              <input value={profil.website} onChange={(e) => setProfil({ ...profil, website: e.target.value })} className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#854d82]" />
            </div>
          </div>
          <Button className="bg-[#854d82] hover:bg-[#733b6f] text-white mt-4" onClick={salveazaModificari}>
            Salvează modificările
          </Button>
          {editat && <p className="text-green-600 text-sm mt-2">Salvat cu succes!</p>}
        </Card>

        <Card className="p-6 shadow-md">
          <h3 className="text-xl font-semibold text-[#854d82] mb-4">Performanță</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <p className="text-gray-500">Anunțuri active</p>
              <p className="text-2xl font-bold">3</p>
            </div>
            <div>
              <p className="text-gray-500">Vizualizări</p>
              <p className="text-2xl font-bold">725</p>
            </div>
            <div>
              <p className="text-gray-500">Rating mediu</p>
              <p className="text-2xl font-bold">4.8 ⭐</p>
            </div>
            <div>
              <p className="text-gray-500">Recenzii</p>
              <p className="text-2xl font-bold">12</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 shadow-md">
          <h3 className="text-xl font-semibold text-[#854d82] mb-4">Recenzii clienți</h3>
          <div className="space-y-4">
            {recenzii.map((r) => (
              <div key={r.id} className="border-b pb-2">
                <div className="flex justify-between">
                  <p className="font-semibold text-gray-800">{r.client}</p>
                  <p className="text-sm text-gray-500">{r.data}</p>
                </div>
                <div className="flex items-center text-yellow-500">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" stroke="none" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm italic">{r.text}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6 shadow-md">
          <h3 className="text-xl font-semibold text-[#854d82] mb-4">Setări cont</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Schimbă parola</label>
              <input
                type="password"
                value={parolaNoua}
                onChange={(e) => setParolaNoua(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#854d82]"
              />
              <Button className="mt-2 bg-[#854d82] hover:bg-[#733b6f] text-white">Actualizează parola</Button>
            </div>
            <div className="flex items-end">
              <Button variant="destructive" className="w-full">Șterge contul</Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
