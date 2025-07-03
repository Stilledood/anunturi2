import Link from "next/link";

const carduri = [
  { titlu: "Evenimente Private", slug: "private", img: "/private.jpg" },
  { titlu: "Evenimente Corporate", slug: "corporate", img: "/corporate.jpg" },
  { titlu: "Evenimente Recreative", slug: "recreative", img: "/recreative.jpg" },
];

export default function TipuriEvenimente() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto py-12">
      {carduri.map((card) => (
        <Link key={card.slug} href={`/evenimente/${card.slug}`}>
          <div className="bg-white rounded-2xl shadow-md p-4 cursor-pointer hover:shadow-xl transition">
            <img
              src={card.img}
              alt={card.titlu}
              className="w-full h-48 object-cover rounded-lg"
            />
            <h3 className="text-[#854d82] font-semibold mt-4">{card.titlu}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
}
