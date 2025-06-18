"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CardsSection() {
  const providers = [
    {
      title: "Salon Evenimente Royal",
      image: "/images/salon.jpg",
      category: "Salon",
      email: "contact@royalevents.ro",
      recommended: true,
      disponibil: ["Luni", "Miercuri", "Sâmbătă"]
    },
    {
      title: "DJ Andrei Events",
      image: "/images/dj.jpg",
      category: "DJ",
      email: "andrei@dj-events.ro",
      recommended: true,
      disponibil: ["Vineri", "Sâmbătă"]
    },
    {
      title: "FotoStudio Memories",
      image: "/images/foto.jpg",
      category: "Fotograf",
      email: "memories@fotostudio.ro",
      recommended: false,
      disponibil: ["Marți", "Joi"]
    }
  ];

  const [filter, setFilter] = useState("Toate");
  const [selectedProvider, setSelectedProvider] = useState(null);

  const categories = ["Toate", "Salon", "DJ", "Fotograf", "Formație"];

  const filteredProviders = providers.filter((p) => {
    return filter === "Toate" || p.category === filter;
  });

  const getRandomRating = () => (Math.random() * 1.5 + 3.5).toFixed(1);

  useEffect(() => {
    if (selectedProvider) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProvider]);

  return (
    <section className="w-full py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">
          Furnizori Recomandați
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          <div className="flex gap-3 flex-wrap justify-center md:justify-start">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
                  filter === cat
                    ? "bg-[#FA3E3E] text-white border-[#FA3E3E]"
                    : "text-gray-600 border-gray-300 hover:bg-gray-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <AnimatePresence>
            {filteredProviders.map((item, index) => {
              const rating = getRandomRating();
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="relative bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition group cursor-pointer"
                  onClick={() => setSelectedProvider({ ...item, rating })}
                >
                  {item.recommended && (
                    <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full z-10 shadow">
                      Recomandat
                    </span>
                  )}

                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />

                  <div className="p-4">
                    <p className="text-xs text-gray-500 uppercase mb-1">
                      {item.category}
                    </p>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {item.title}
                    </h3>

                    <div className="flex items-center gap-1 mt-2">
                      {Array.from({ length: 5 }, (_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.16 3.584a1 1 0 00.95.69h3.765c.969 0 1.371 1.24.588 1.81l-3.045 2.213a1 1 0 00-.364 1.118l1.16 3.584c.3.921-.755 1.688-1.538 1.118l-3.045-2.213a1 1 0 00-1.175 0l-3.045 2.213c-.783.57-1.838-.197-1.538-1.118l1.16-3.584a1 1 0 00-.364-1.118L2.546 8.999c-.783-.57-.38-1.81.588-1.81h3.765a1 1 0 00.95-.69l1.16-3.584z" />
                        </svg>
                      ))}
                      <span className="text-sm text-gray-500 ml-1">({rating})</span>
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white text-sm font-medium">
                    Detalii rapide →
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {selectedProvider && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl max-w-md w-full p-6 relative shadow-xl"
              >
                <button
                  className="absolute top-2 right-3 text-gray-400 hover:text-red-500 text-xl"
                  onClick={() => setSelectedProvider(null)}
                >
                  ×
                </button>

                <h3 className="text-2xl font-bold text-gray-800 mb-2">{selectedProvider.title}</h3>
                <p className="text-sm text-gray-500 mb-1 uppercase">{selectedProvider.category}</p>
                <div className="mb-4 text-sm text-yellow-500 font-medium">
                  Rating: {selectedProvider.rating} / 5
                </div>
                <div className="text-gray-600 text-sm leading-relaxed mb-4">
                  Acest furnizor este ideal pentru evenimente speciale. Poate oferi servicii personalizate, atmosferă de neuitat și profesionalism garantat.
                </div>

                <div className="bg-gray-100 rounded-lg p-4 text-sm text-gray-700">
                  <p className="mb-2 font-semibold">Date disponibile:</p>
                  <ul className="list-disc pl-5 mb-4">
                    {selectedProvider.disponibil?.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>

                  {selectedProvider.email ? (
                    <a
                      href={`mailto:${selectedProvider.email}`}
                      className="block w-full text-center mt-2 bg-[#FA3E3E] text-white py-2 px-4 rounded-md font-medium hover:bg-red-700 transition"
                    >
                      Contactează furnizorul
                    </a>
                  ) : (
                    <p className="text-red-500 text-center">Email indisponibil</p>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}