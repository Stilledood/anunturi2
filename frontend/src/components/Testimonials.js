"use client";
import { useState } from "react";

export default function TestimonialsCarousel() {
  const testimonials = [
    {
      quote: '„Am organizat nunta visurilor noastre fără niciun stres!”',
      text: 'Totul a fost simplu și eficient. Platforma ne-a ajutat să alegem rapid locația perfectă.',
      name: 'Andreea Ionescu',
      location: 'București',
    },
    {
      quote: '„Evenimentul corporate a fost un real succes”',
      text: 'Locație perfectă și un proces de rezervare rapid. Recomand pentru orice team-building!',
      name: 'Mihai Popescu',
      location: 'Cluj-Napoca',
    },
    {
      quote: '„Majoratul fiicei mele a fost memorabil!”',
      text: 'Atmosferă excelentă, locație superbă, organizare fără bătăi de cap. Totul ca la carte.',
      name: 'Raluca Dumitrescu',
      location: 'Timișoara',
    },
  ];

  const [current, setCurrent] = useState(0);
  const length = testimonials.length;

  const prevSlide = () =>
    setCurrent((c) => (c === 0 ? length - 1 : c - 1));
  const nextSlide = () =>
    setCurrent((c) => (c === length - 1 ? 0 : c + 1));

  return (
    <section className="bg-gray-50 py-16 px-4 relative">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Poveștile Clienților Noștri
        </h2>
        <p className="text-sm text-gray-500 italic">
          Peste 3.000 de organizatori au găsit rapid furnizorul ideal
        </p>
      </div>

      <div className="max-w-5xl mx-auto relative">
        {/* Buton stânga */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-[#854d82] hover:bg-[#70376d] rounded-full p-2 shadow-lg z-10"
        >
          <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Slide-uri */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {testimonials.map((t, idx) => (
              <div key={idx} className="flex-shrink-0 w-full px-4">
                <div className="relative bg-white rounded-3xl p-8 shadow-lg text-center">
                  {/* Ghilimele mari */}
                  <span className="text-6xl text-gray-200 absolute -top-4 left-6 select-none">“</span>

                  <h3 className="text-xl font-semibold italic mb-3">{t.quote}</h3>
                  <p className="text-gray-600 mb-4">{t.text}</p>
                  <p className="font-medium text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Buton dreapta */}
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#854d82] hover:bg-[#70376d] rounded-full p-2 shadow-lg z-10"
        >
          <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}
