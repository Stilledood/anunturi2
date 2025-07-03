"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const judeteOrase = {
  Alba: ["Alba Iulia", "Sebeș", "Aiud", "Cugir"],
  Arad: ["Arad", "Lipova", "Ineu", "Pâncota"],
  Cluj: ["Cluj-Napoca", "Turda", "Dej", "Gherla"],
  // Adaugă restul județelor dacă e nevoie
};

export default function AdaugaAnuntPage() {
  const [form, setForm] = useState({
    titlu: "",
    descriere: "",
    servicii: "",
    judet: "",
    oras: "",
    pret: "",
    telefon: "",
    email: "",
    imagini: [],
    promovare: false,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCheckbox = () => {
    setForm({ ...form, promovare: !form.promovare });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Anunț salvat cu succes! 🚀");
    // Aici poți trimite datele către backend
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-[#854d82] mb-2">Adaugă un anunț nou</h1>
        <p className="text-gray-600 mb-6">Completează informațiile pentru a publica un nou anunț.</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <Card className="p-6">
            <h2 className="text-lg font-semibold text-[#854d82] mb-4">Informații generale</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Titlu anunț</label>
                <input name="titlu" value={form.titlu} onChange={handleChange} required className="w-full border border-gray-300 rounded-md p-2 bg-white" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Servicii oferite</label>
                <input name="servicii" value={form.servicii} onChange={handleChange} required className="w-full border border-gray-300 rounded-md p-2 bg-white" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Descriere</label>
                <textarea name="descriere" rows={4} value={form.descriere} onChange={handleChange} required className="w-full border border-gray-300 rounded-md p-2 bg-white" />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-lg font-semibold text-[#854d82] mb-4">Locație</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Județ</label>
                <select
                  name="judet"
                  value={form.judet}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2 bg-white"
                  required
                >
                  <option value="">Alege județul</option>
                  {Object.keys(judeteOrase).map((j) => (
                    <option key={j} value={j}>{j}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Oraș</label>
                <select
                  name="oras"
                  value={form.oras}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2 bg-white"
                  required
                >
                  <option value="">Alege orașul</option>
                  {(judeteOrase[form.judet] || []).map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-lg font-semibold text-[#854d82] mb-4">Detalii de contact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Preț estimativ</label>
                <input name="pret" value={form.pret} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-2 bg-white" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Telefon</label>
                <input name="telefon" value={form.telefon} onChange={handleChange} required className="w-full border border-gray-300 rounded-md p-2 bg-white" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input name="email" value={form.email} onChange={handleChange} required className="w-full border border-gray-300 rounded-md p-2 bg-white" />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-lg font-semibold text-[#854d82] mb-4">Opțiuni suplimentare</h2>
            <div className="flex items-center gap-2">
              <input
                id="promovare"
                type="checkbox"
                checked={form.promovare}
                onChange={handleCheckbox}
                className="h-4 w-4 text-[#854d82] border-gray-300 rounded"
              />
              <label htmlFor="promovare" className="text-sm text-gray-700">
                Vrei ca anunțul să fie promovat?
              </label>
            </div>
          </Card>

          <div className="text-right">
            <Button type="submit" className="bg-[#854d82] hover:bg-[#733b6f] text-white">
              Publică Anunțul
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
