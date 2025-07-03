"use client";

import Link from "next/link";
import { useState } from "react";

export default function SubcategoriiPage({ params }) {
  const { tip } = params;

  const subcategorii = {
    // ... conținutul original rămâne neschimbat (private, corporate, recreative)
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
            <h2 className="text-2xl font-bold text-[#854d82]">{sectiune.titlu}</h2>
            <div className="w-16 h-1 bg-[#854d82] mt-2 rounded origin-left scale-x-0 animate-grow"></div>
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
              className="bg-[#854d82] text-white px-6 py-2 rounded-full hover:bg-[#71396e] transition"
            >
              {expanded[sectiune.titlu] ? "Vezi mai puțin" : "Vezi toate"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
