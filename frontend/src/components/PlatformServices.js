"use client";

import {
  CalendarDaysIcon,
  TicketIcon,
  ChatBubbleLeftEllipsisIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";

export default function PlatformServices() {
  const services = [
    {
      Icon: CalendarDaysIcon,
      title: "Creare & Management Eveniment",
      description:
        "Configurează detaliile complete: locație, bilete, imagini, descriere și categorii.",
    },
    {
      Icon: TicketIcon,
      title: "Bilete & Plăți",
      description:
        "Emitere bilete securizată, plăți online fluide și check-in digital simplificat.",
    },
    {
      Icon: ChatBubbleLeftEllipsisIcon,
      title: "Implicarea participanților",
      description:
        "Chat live, Q&A, notificări și feedback integrate pentru o experiență interactivă.",
    },
    {
      Icon: ChartBarIcon,
      title: "Analize & Rapoarte",
      description:
        "Rapoarte în timp real despre vânzări, demografie și performanță eveniment.",
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-4">
      {/* Titlu */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
          Serviciile noastre
        </h2>
        <p className="text-lg text-gray-600">
          Facem viața organizatorilor și participanților mai ușoară prin pachete dedicate:
        </p>
      </div>

      {/* Grid zig-zag */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-8">
        {services.map(({ Icon, title, description }, i) => (
          <div
            key={title}
            className={`flex ${i % 2 === 0 ? "justify-start" : "justify-end"}`}
          >
            <div className="max-w-sm bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 text-left">
              <div className="inline-flex items-center justify-center bg-[#f4e9f3] rounded-full p-3 mb-5">
                <Icon className="h-8 w-8 text-[#854d82]" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3 leading-snug">
                {title}
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
