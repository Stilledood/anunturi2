"use client";

import Link from "next/link";
import { useState } from "react";

export default function SubcategoriiPage({ params }) {
  const { tip } = params;

  const subcategorii = {
    private: [
      {
        titlu: "Nuntă",
        servicii: [
          {
            categorie: "SALON",
            nume: "Salon Evenimente Royal",
            img: "/imaginenuntatest.jpg",
            slug: "salon-evenimente-royal",
          },
          {
            categorie: "DJ",
            nume: "DJ Andrei Events",
            img: "/dj.jpg",
            slug: "dj-andrei-events",
          },
          {
            categorie: "FOTOGRAF",
            nume: "FotoStudio Memories",
            img: "/foto.jpg",
            slug: "fotostudio-memories",
          },
          {
            categorie: "FORMAȚIE",
            nume: "Formația Armonia",
            img: "/formatie.jpg",
            slug: "formatia-armonia",
          },
          ...Array(40).fill().map((_, i) => ({
            categorie: "EXTRA",
            nume: `Serviciu Nunta ${i + 1}`,
            img: "/salon.jpg",
            slug: `serviciu-nunta-${i + 1}`,
          })),
        ],
      },
      {
        titlu: "Botez",
        servicii: [
          {
            categorie: "RESTAURANT",
            nume: "Restaurant Little Angels",
            img: "/botez1.jpg",
            slug: "restaurant-little-angels",
          },
          {
            categorie: "DECORATOR",
            nume: "Magia Decorurilor",
            img: "/botez2.jpg",
            slug: "magia-decorurilor",
          },
          {
            categorie: "MC",
            nume: "MC Răzvan Events",
            img: "/botez3.jpg",
            slug: "mc-razvan-events",
          },
          ...Array(40).fill().map((_, i) => ({
            categorie: "EXTRA",
            nume: `Serviciu Botez ${i + 1}`,
            img: "/botez1.jpg",
            slug: `serviciu-botez-${i + 1}`,
          })),
        ],
      },
      {
        titlu: "Aniversare",
        servicii: [
          {
            categorie: "LOCAȚIE",
            nume: "Party Place",
            img: "/aniversare1.jpg",
            slug: "party-place",
          },
          {
            categorie: "ANIMATOR",
            nume: "Clovnul Zâmbilici",
            img: "/aniversare2.jpg",
            slug: "clovnul-zambilici",
          },
          {
            categorie: "CANDY BAR",
            nume: "Sweet Moments",
            img: "/aniversare3.jpg",
            slug: "sweet-moments",
          },
          ...Array(40).fill().map((_, i) => ({
            categorie: "EXTRA",
            nume: `Serviciu Aniversare ${i + 1}`,
            img: "/aniversare1.jpg",
            slug: `serviciu-aniversare-${i + 1}`,
          })),
        ],
      },
    ],
    corporate: [
      {
        titlu: "Conferințe",
        servicii: [
          {
            categorie: "SALA",
            nume: "Sala Business Central",
            img: "/corporate1.jpg",
            slug: "sala-business-central",
          },
          {
            categorie: "HOST",
            nume: "MC Corporate Pro",
            img: "/corporate2.jpg",
            slug: "mc-corporate-pro",
          },
          ...Array(40).fill().map((_, i) => ({
            categorie: "EXTRA",
            nume: `Serviciu Conferinta ${i + 1}`,
            img: "/corporate1.jpg",
            slug: `serviciu-conferinta-${i + 1}`,
          })),
        ],
      },
      {
        titlu: "Team Building",
        servicii: [
          {
            categorie: "LOCAȚIE",
            nume: "Outdoor Park",
            img: "/corporate3.jpg",
            slug: "outdoor-park",
          },
          {
            categorie: "COORDONATOR",
            nume: "TB Master Agency",
            img: "/corporate4.jpg",
            slug: "tb-master-agency",
          },
          ...Array(40).fill().map((_, i) => ({
            categorie: "EXTRA",
            nume: `Serviciu Team Building ${i + 1}`,
            img: "/corporate3.jpg",
            slug: `serviciu-team-building-${i + 1}`,
          })),
        ],
      },
    ],
    recreative: [
      {
        titlu: "Petreceri tematice",
        servicii: [
          {
            categorie: "LOCAȚIE",
            nume: "Crazy Party House",
            img: "/recreative1.jpg",
            slug: "crazy-party-house",
          },
          {
            categorie: "DJ",
            nume: "DJ FunBeat",
            img: "/recreative2.jpg",
            slug: "dj-funbeat",
          },
          {
            categorie: "DECORAȚIUNI",
            nume: "Tematic Concept",
            img: "/recreative3.jpg",
            slug: "tematic-concept",
          },
          ...Array(40).fill().map((_, i) => ({
            categorie: "EXTRA",
            nume: `Serviciu Petrecere ${i + 1}`,
            img: "/recreative1.jpg",
            slug: `serviciu-petrecere-${i + 1}`,
          })),
        ],
      },
      {
        titlu: "Festivaluri",
        servicii: [
          {
            categorie: "SCENĂ",
            nume: "FestPro Stage",
            img: "/recreative4.jpg",
            slug: "festpro-stage",
          },
          {
            categorie: "ARTIST",
            nume: "DJ SummerVibe",
            img: "/recreative5.jpg",
            slug: "dj-summervibe",
          },
          {
            categorie: "ECHIPAMENTE",
            nume: "Festival Gear Hub",
            img: "/recreative6.jpg",
            slug: "festival-gear-hub",
          },
          ...Array(40).fill().map((_, i) => ({
            categorie: "EXTRA",
            nume: `Serviciu Festival ${i + 1}`,
            img: "/recreative4.jpg",
            slug: `serviciu-festival-${i + 1}`,
          })),
        ],
      },
    ],
  };

  const sectiuni = subcategorii[tip] || [];
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (titlu) => {
    setExpanded((prev) => ({ ...prev, [titlu]: !prev[titlu] }));
  };

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-10 capitalize">
        Evenimente {tip}
      </h1>

      {sectiuni.map((sectiune) => (
        <div key={sectiune.titlu} className="mb-12">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-red-600">{sectiune.titlu}</h2>
            <div className="w-16 h-1 bg-red-600 mt-2 rounded origin-left scale-x-0 animate-grow"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {(expanded[sectiune.titlu] ? sectiune.servicii : sectiune.servicii.slice(0, 4)).map((serviciu) => (
              <Link key={serviciu.slug} href={`/furnizor/${serviciu.slug}`}>
                <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 cursor-pointer">
                  <img
                    src={serviciu.img}
                    alt={serviciu.nume}
                    className="w-full h-40 object-cover rounded-md mb-4"
                  />
                  <p className="text-xs text-gray-500 uppercase">
                    {serviciu.categorie}
                  </p>
                  <p className="text-md font-semibold text-gray-800">
                    {serviciu.nume}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="flex justify-center mt-6">
            <button
              onClick={() => toggleExpand(sectiune.titlu)}
              className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition"
            >
              {expanded[sectiune.titlu] ? "Vezi mai puțin" : "Vezi toate"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
