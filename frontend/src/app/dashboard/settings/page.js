"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function SettingsPage() {
  const [form, setForm] = useState({
    nume: "Casa Evenimentelor SRL",
    email: "contact@evenimente.ro",
    telefon: "0722 123 456",
  });

  const [saved, setSaved] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Date salvate:", form);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Secțiunea Informații cont */}
      <div className="bg-white shadow-md rounded-xl p-8">
        <h2 className="text-2xl font-bold text-[#854d82] mb-1">Informații cont</h2>
        <p className="text-gray-500 mb-6 text-sm">
          Editează datele de bază ale contului tău de furnizor.
        </p>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="nume" className="block text-sm font-medium text-gray-700">
              Nume companie / utilizator
            </label>
            <input
              type="text"
              name="nume"
              id="nume"
              value={form.nume}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#854d82] focus:border-transparent text-sm"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={form.email}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#854d82] focus:border-transparent text-sm"
            />
          </div>

          <div>
            <label htmlFor="telefon" className="block text-sm font-medium text-gray-700">
              Telefon
            </label>
            <input
              type="text"
              name="telefon"
              id="telefon"
              value={form.telefon}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#854d82] focus:border-transparent text-sm"
            />
          </div>

          <div className="col-span-full flex justify-end gap-4 mt-4">
            <Button type="submit" className="bg-[#854d82] hover:bg-[#733b6f] text-white">
              Salvează
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => setForm({ nume: "", email: "", telefon: "" })}
            >
              Resetează
            </Button>
          </div>

          {saved && (
            <p className="col-span-full text-green-600 text-sm mt-2">
              Datele au fost salvate cu succes!
            </p>
          )}
        </form>
      </div>

      {/* Secțiunea Abonament */}
      <div className="bg-white shadow-md rounded-xl p-8">
        <h2 className="text-2xl font-bold text-[#854d82] mb-1">Abonamentul tău</h2>
        <p className="text-gray-500 mb-6 text-sm">
          Verifică detaliile abonamentului și modifică-l dacă este necesar.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Tip abonament</label>
            <p className="mt-1 text-base font-semibold text-gray-800">Premium Plus</p>
          </div>

          <div className="flex items-end justify-start md:justify-end">
            <button className="inline-block bg-[#854d82] hover:bg-[#733b6f] text-white px-5 py-2 rounded-md text-sm transition">
              Gestionare abonament
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
