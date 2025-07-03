"use client";

import { useState } from "react";
import Link from "next/link";

export default function FAQ() {
  const faqs = [
    {
      question: "Cum creez un anunț pe platformă?",
      answer:
        "După autentificare, accesează „Adaugă Anunț”, completează detaliile evenimentului (titlu, descriere, imagini, locație, preț) și publică. Anunțul va fi vizibil imediat.",
    },
    {
      question: "Ce metode de plată sunt acceptate?",
      answer:
        "Acceptăm plăți cu card bancar, PayPal și transfer bancar, procesate securizat prin Stripe și PayPal.",
    },
    {
      question: "Pot modifica sau anula o rezervare?",
      answer:
        "În „Rezervările mele” poți solicita modificări sau anulări. Politica de anulare depinde de furnizor, dar vei fi ghidat pas cu pas.",
    },
    {
      question: "Cum contactez direct furnizorii?",
      answer:
        "Fiecare anunț are butonul „Contactează furnizorul” care deschide un chat intern pentru mesagerie directă.",
    },
    {
      question: "Cum funcționează sistemul de recenzii?",
      answer:
        "După eveniment, poți lăsa un rating (1–5 stele) și comentariu. Aceste recenzii apar pe pagina furnizorului.",
    },
    {
      question: "Există taxe ascunse?",
      answer:
        "Comisioanele (5% platformă + eventuale taxe ale furnizorului) sunt afișate înainte de confirmarea plății. Nu există costuri suplimentare ascunse.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);
  const toggle = (idx) => setOpenIndex(openIndex === idx ? null : idx);

  return (
    <section className="bg-white py-16 px-4">
      {/* Titlu & subtitlu */}
      <div className="max-w-4xl mx-auto text-center mb-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Întrebări frecvente</h2>
        <p className="text-lg text-gray-600 mb-6">
          Găsește rapid răspunsurile de care ai nevoie despre PlatformaEvenimente.
        </p>

        {/* Buton Contact */}
        <Link
          href="/contact"
          className="inline-block bg-[#854d82] text-white px-6 py-2 rounded-full font-medium text-sm hover:bg-[#70376d] hover:scale-105 transition-all duration-300"
        >
          Ai o întrebare? Contactează-ne
        </Link>
      </div>

      {/* Accordion */}
      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className={`border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 ${
              openIndex === idx ? "border-[#854d82]" : ""
            }`}
          >
            <button
              onClick={() => toggle(idx)}
              className={`w-full flex justify-between items-center px-6 py-4 bg-gray-50 hover:bg-gray-100 transition text-left border-l-4 ${
                openIndex === idx ? "border-[#854d82]" : "border-transparent"
              }`}
            >
              <span
                className={`font-medium transition-colors duration-200 ${
                  openIndex === idx ? "text-[#854d82]" : "text-gray-900"
                }`}
              >
                {faq.question}
              </span>

              <div
                className={`p-2 rounded-full transition-colors duration-200 ${
                  openIndex === idx ? "bg-[#854d82]" : ""
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 transform transition-transform duration-200 ${
                    openIndex === idx ? "rotate-180 text-white" : "text-gray-500"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </button>

            <div
              className={`px-6 transition-all duration-500 ease-in-out ${
                openIndex === idx
                  ? "max-h-[200px] opacity-100 py-4"
                  : "max-h-0 opacity-0 overflow-hidden"
              }`}
            >
              <p className="text-gray-900">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
