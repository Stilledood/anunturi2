"use client";

import { Button } from "@/components/ui/button";

export default function AbonamentPage() {
  const abonamentCurent = {
    tip: "Basic", // sau "Business"
    dataExpirare: "2025-08-01",
    anunturiActive: 1,
  };

  const planuri = [
    {
      tip: "Basic",
      pret: "99 RON/lună",
      beneficii: [
        "1 anunț activ",
        "Profil firmă cu date de contact",
        "Acces la cereri clienți",
        "Statistici de bază",
      ],
      actiune: abonamentCurent.tip === "Basic" ? "Activ" : "Downgrade",
    },
    {
      tip: "Business",
      pret: "150 RON/lună",
      beneficii: [
        "1 anunț activ",
        "Anunț promovat permanent",
        "Profil firmă personalizat",
        "Asistent AI integrat",
        "Notificări instant",
        "Statistici detaliate",
      ],
      actiune: abonamentCurent.tip === "Business" ? "Activ" : "Upgrade",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto py-12 px-4 space-y-12">
      {/* Abonament curent */}
      <div className="bg-white shadow-md rounded-xl p-8">
        <h2 className="text-2xl font-bold text-[#854d82] mb-1">Abonamentul tău</h2>
        <p className="text-gray-500 mb-6 text-sm">
          Informații despre planul activ și statusul contului
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-sm text-gray-600">Tip abonament</p>
            <p className="text-lg font-semibold text-gray-800">{abonamentCurent.tip}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Data expirare</p>
            <p className="text-lg font-semibold text-gray-800">{abonamentCurent.dataExpirare}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Anunțuri active</p>
            <p className="text-lg font-semibold text-gray-800">{abonamentCurent.anunturiActive}</p>
          </div>
        </div>
      </div>

      {/* Planuri disponibile */}
      <div>
        <h2 className="text-xl font-bold text-[#854d82] mb-4">Planuri disponibile</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {planuri.map((plan) => (
            <div
              key={plan.tip}
              className="bg-white shadow-md rounded-xl p-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-bold text-gray-900">{plan.tip}</h3>
                <p className="text-sm text-gray-500 mb-2">{plan.pret}</p>
                <ul className="text-sm text-gray-600 list-disc ml-4 space-y-1 mb-4">
                  {plan.beneficii.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>

              {plan.actiune === "Activ" ? (
                <span className="text-green-600 font-medium text-sm">Plan activ</span>
              ) : (
                <Button className="bg-[#854d82] hover:bg-[#733b6f] text-white text-sm">
                  {plan.actiune}
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
