"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FurnizoriPage() {
  const providers = [
    { title: 'Salon Evenimente Royal', image: '/images/salon.jpg', category: 'Salon' },
    { title: 'DJ Andrei Events', image: '/images/dj.jpg', category: 'DJ' },
    { title: 'FotoStudio Memories', image: '/images/foto.jpg', category: 'Fotograf' },
    { title: 'Formația Armonia', image: '/images/formatie.jpg', category: 'Formație' },
    { title: 'Salon Lux Events', image: '/images/dj.jpg', category: 'DJ' },
    { title: 'DJ PartyMania', image: '/images/dj.jpg', category: 'DJ' },
    { title: 'FotoStudio LightFrame', image: '/images/salon.jpg', category: 'Salon' },
    { title: 'Formația FreshSound', image: '/images/formatie.jpg', category: 'Formație' },
    { title: 'Salon Paradise', image: '/images/dj.jpg', category: 'DJ' },
    { title: 'DJ ElectroBeat', image: '/images/dj.jpg', category: 'DJ' },
    { title: 'FotoZoom Studio', image: '/images/salon.jpg', category: 'Salon' },
    { title: 'Formația EpicWave', image: '/images/dj.jpg', category: 'DJ' },
    { title: 'Salon Bella Notte', image: '/images/formatie.jpg', category: 'Formație' },
    { title: 'DJ FusionX', image: '/images/formatie.jpg', category: 'Formație' },
    { title: 'FotoStudio Dream', image: '/images/foto.jpg', category: 'Fotograf' },
    { title: 'Formația MagicTone', image: '/images/dj.jpg', category: 'DJ' },
    { title: 'Salon Elite Venue', image: '/images/salon.jpg', category: 'Salon' },
    { title: 'DJ RhythmRider', image: '/images/formatie.jpg', category: 'Formație' },
    { title: 'FotoSnap Moments', image: '/images/formatie.jpg', category: 'Formație' },
    { title: 'Formația StarBeats', image: '/images/salon.jpg', category: 'Salon' },
    { title: 'Salon Golden Crown', image: '/images/formatie.jpg', category: 'Formație' },
    { title: 'DJ SoundDrive', image: '/images/formatie.jpg', category: 'Formație' },
    { title: 'FotoCapture Studio', image: '/images/foto.jpg', category: 'Fotograf' },
    { title: 'Formația GrandLive', image: '/images/salon.jpg', category: 'Salon' },
    { title: 'Salon Imperial', image: '/images/formatie.jpg', category: 'Formație' },
    { title: 'DJ ClubMix', image: '/images/formatie.jpg', category: 'Formație' },
    { title: 'FotoVision Art', image: '/images/salon.jpg', category: 'Salon' },
    { title: 'Formația UrbanRhythm', image: '/images/salon.jpg', category: 'Salon' },
    { title: 'Salon Sunset Garden', image: '/images/foto.jpg', category: 'Fotograf' },
    { title: 'DJ VibeLord', image: '/images/dj.jpg', category: 'DJ' },
    { title: 'FotoMaster Studio', image: '/images/foto.jpg', category: 'Fotograf' },
    { title: 'Formația ElegantSound', image: '/images/foto.jpg', category: 'Fotograf' },
    { title: 'Salon Crystal Venue', image: '/images/formatie.jpg', category: 'Formație' },
    { title: 'DJ Neon Pulse', image: '/images/foto.jpg', category: 'Fotograf' },
    { title: 'FotoFlash Studio', image: '/images/formatie.jpg', category: 'Formație' },
    { title: 'Formația VelvetGroove', image: '/images/salon.jpg', category: 'Salon' },
    { title: 'Salon Platinum', image: '/images/foto.jpg', category: 'Fotograf' },
    { title: 'DJ MixStar', image: '/images/salon.jpg', category: 'Salon' },
    { title: 'FotoAura Studio', image: '/images/salon.jpg', category: 'Salon' },
    { title: 'Formația EliteBand', image: '/images/salon.jpg', category: 'Salon' },
    { title: 'Salon Royal Bliss', image: '/images/formatie.jpg', category: 'Formație' },
    { title: 'DJ BassStorm', image: '/images/formatie.jpg', category: 'Formație' },
    { title: 'FotoFocus Pro', image: '/images/dj.jpg', category: 'DJ' },
    { title: 'Formația GoldNotes', image: '/images/formatie.jpg', category: 'Formație' },
    { title: 'Salon Moonlight', image: '/images/foto.jpg', category: 'Fotograf' },
    { title: 'DJ SonicWave', image: '/images/formatie.jpg', category: 'Formație' },
    { title: 'FotoSharp Studio', image: '/images/salon.jpg', category: 'Salon' },
    { title: 'Formația MelodyLine', image: '/images/formatie.jpg', category: 'Formație' },
    { title: 'Salon WhitePearl', image: '/images/foto.jpg', category: 'Fotograf' },
    { title: 'DJ GrooveOn', image: '/images/foto.jpg', category: 'Fotograf' },
    { title: 'FotoLuxe', image: '/images/foto.jpg', category: 'Fotograf' },
    { title: 'Formația EchoVibes', image: '/images/dj.jpg', category: 'DJ' },
    { title: 'Salon DreamCatcher', image: '/images/foto.jpg', category: 'Fotograf' },
    { title: 'DJ AudioRush', image: '/images/formatie.jpg', category: 'Formație' },
    // ... restul furnizorilor
  ];

  const [filter, setFilter] = useState('Toate');
  const [search, setSearch] = useState('');

  const categories = ['Toate', 'Salon', 'DJ', 'Fotograf', 'Formație'];

  const filteredProviders = providers.filter(p => {
    const matchesCategory = filter === 'Toate' || p.category === filter;
    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="w-full py-16 px-6 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">
          Toți Furnizorii
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          <div className="flex gap-3 flex-wrap justify-center md:justify-start">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
                  filter === cat
                    ? 'bg-[#854d82] text-white border-[#854d82]'
                    : 'text-gray-600 border-gray-300 hover:bg-gray-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <input
            type="text"
            placeholder="Caută furnizor..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="border border-gray-300 rounded-full px-4 py-2 w-full max-w-xs text-sm focus:outline-none focus:ring-2 focus:ring-[#854d82]"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <AnimatePresence>
            {filteredProviders.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition"
              >
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
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
