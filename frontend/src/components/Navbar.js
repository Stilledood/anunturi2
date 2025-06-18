"use client";

import { useState } from "react";
import Link from "next/link";

const judeteOrase = {
  Alba: ["Alba Iulia", "Sebeș", "Aiud", "Cugir"],
  Arad: ["Arad", "Lipova", "Ineu", "Pâncota"],
  // (restul județelor rămâne la tine)
};

export default function Navbar() {
  const [selectedJudet, setSelectedJudet] = useState("");
  const [selectedOras, setSelectedOras] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md relative z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center">
        {/* Logo */}
        <div className="text-xl font-bold">
          <span className="text-black">Eventra</span>
        </div>

        {/* Filter */}
        <div className="flex-1 flex justify-center mx-4">
          <div className="bg-white border rounded-full shadow-sm px-4 py-2 flex flex-wrap gap-3 justify-center items-center">
            <select
              className="border border-gray-300 rounded px-3 py-1 text-sm"
              value={selectedJudet}
              onChange={(e) => {
                setSelectedJudet(e.target.value);
                setSelectedOras("");
              }}
            >
              <option value="">Unde? (Județ)</option>
              {Object.keys(judeteOrase).map((judet) => (
                <option key={judet} value={judet}>
                  {judet}
                </option>
              ))}
            </select>

            <select
              className="border border-gray-300 rounded px-3 py-1 text-sm"
              value={selectedOras}
              onChange={(e) => setSelectedOras(e.target.value)}
              disabled={!selectedJudet}
            >
              <option value="">Oraș</option>
              {selectedJudet &&
                judeteOrase[selectedJudet].map((oras) => (
                  <option key={oras} value={oras}>
                    {oras}
                  </option>
                ))}
            </select>

            <button className="bg-red-500 hover:bg-red-600 text-white rounded-full px-4 py-1 text-sm">
              Caută
            </button>
          </div>
        </div>

        {/* Hamburger Button + Menu */}
        <div className="relative">
          <button
            className="text-gray-600 text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Meniu"
          >
            ☰
          </button>

          {menuOpen && (
            <div className="absolute top-10 left-1/2 -translate-x-1/2 w-80 bg-white rounded-xl shadow-xl border p-5 z-50 animate-fadeIn">
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start gap-3 border-b pb-3">
                  <div>
                    <p className="font-semibold text-black">Eventra</p>
                    <p className="text-sm">
                      Creează un cont și adaugă anunțuri pentru servicii de evenimente.
                    </p>
                  </div>
                  <img
                    src="/house-icon.png"
                    alt="icon"
                    className="w-10 h-10 object-contain"
                  />
                </div>

                <div className="flex flex-col gap-3 text-sm">
                  <Link href="/adauga-anunt" className="hover:text-red-500">Adaugă Anunț</Link>
                  <Link href="/furnizori" className="hover:text-red-500">Găsește Servicii</Link>
                  <Link href="/contact" className="hover:text-red-500">Contact</Link>
                  <hr />
                  <a href="/log-in" className="hover:text-red-500">Log in</a>
                  <a
  href="/register"
  className="bg-red-500 hover:bg-red-600 text-white rounded-full px-4 py-2 text-center w-fit"
>
  Register
</a>

                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
