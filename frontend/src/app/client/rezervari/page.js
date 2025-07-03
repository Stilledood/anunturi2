"use client";

const rezervariMock = [
  {
    id: 1,
    furnizor: "DJ Max Events",
    data: "21 august 2025, 18:00",
    locatie: "Cluj-Napoca",
    status: "Confirmată",
    politica: {
      modificare: true,
      anulare: true,
    },
  },
  {
    id: 2,
    furnizor: "Salon Royal",
    data: "10 septembrie 2025, 12:00",
    locatie: "Oradea",
    status: "În așteptare",
    politica: {
      modificare: false,
      anulare: false,
    },
  },
];

export default function RezervariPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <h2 className="text-2xl font-bold text-[#854d82] mb-4">Rezervările mele</h2>

      {rezervariMock.map((rez) => (
        <div key={rez.id} className="bg-white shadow-md rounded-xl p-6 space-y-2">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-900">{rez.furnizor}</h3>
            <span
              className={`text-sm font-medium ${
                rez.status === "Confirmată"
                  ? "text-green-600"
                  : rez.status === "În așteptare"
                  ? "text-yellow-600"
                  : "text-red-600"
              }`}
            >
              {rez.status}
            </span>
          </div>

          <p className="text-sm text-gray-600">Data: {rez.data}</p>
          <p className="text-sm text-gray-600">Locație: {rez.locatie}</p>

          <p className="text-sm text-gray-500">
            Politică: {rez.politica.modificare ? "se poate modifica" : "nu se poate modifica"},{" "}
            {rez.politica.anulare ? "se poate anula" : "nu se poate anula"}
          </p>

          <div className="flex gap-4 mt-3">
            {rez.politica.modificare && (
              <button className="px-4 py-1 text-sm rounded-md bg-[#854d82] text-white hover:bg-[#733b6f]">
                Solicită modificare
              </button>
            )}
            {rez.politica.anulare && (
              <button className="px-4 py-1 text-sm rounded-md bg-red-600 text-white hover:bg-red-700">
                Solicită anulare
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
