export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Fundal blurat mai slab */}
      <img
        src="/hero-bg.jpg"
        alt="Eveniment blurat"
        className="absolute inset-0 w-full h-full object-cover blur-[2px] opacity-100"
      />

      {/* Overlay întunecat peste imagine */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Conținut text */}
      <div className="relative z-10 max-w-4xl px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
          Găsește locația perfectă<br className="hidden md:inline" /> pentru evenimentul tău
        </h1>
        <p className="text-gray-200 text-lg md:text-xl mb-8">
          Descoperă cele mai bune saloane, DJ, fotografi și formații pentru orice ocazie specială
        </p>

        <a
          href="/furnizori"
          className="inline-block bg-[#f97316] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-red-700 hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-400"
        >
          Explorează anunțurile
        </a>
      </div>

      {/* Scroll Indicator animat */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <svg
          className="w-6 h-6 text-white opacity-70"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
