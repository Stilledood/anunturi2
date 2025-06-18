"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRightIcon,
  UserGroupIcon,
  BuildingOffice2Icon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="relative bg-white text-gray-700 mt-24 overflow-hidden shadow-md">
      {/* Top subtle red wave */}
      <div className="absolute -top-1 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-8"
          viewBox="0 0 1440 50"
          preserveAspectRatio="none"
        >
          <path
            d="M0,30 C360,10 1080,50 1440,30 L1440,0 L0,0 Z"
            fill="rgba(220,38,38,0.15)"
          />
          <path
            d="M0,40 C360,20 1080,60 1440,40 L1440,0 L0,0 Z"
            fill="rgba(220,38,38,0.3)"
          />
        </svg>
      </div>

      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-8 py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">
        {/* Brand & Social */}
        <div className="space-y-8">
          <h2 className="text-3xl font-extrabold text-gray-900">Eventra</h2>
          <p className="text-gray-600 leading-relaxed max-w-xs">
            Găsește și rezervă localul perfect pentru nunți, botezuri, petreceri
            private și evenimente corporate.
          </p>
          <div className="flex space-x-6">
            <Link
              href="/contact"
              aria-label="Contact"
              className="bg-red-100 text-red-600 p-4 rounded-full hover:bg-red-600 hover:text-white shadow-md transition-shadow duration-300"
            >
              <EnvelopeIcon className="h-6 w-6" />
            </Link>
            <Link
              href="/furnizori"
              aria-label="Furnizori"
              className="bg-red-100 text-red-600 p-4 rounded-full hover:bg-red-600 hover:text-white shadow-md transition-shadow duration-300"
            >
              <UserGroupIcon className="h-6 w-6" />
            </Link>
          </div>
        </div>

        {/* Navigare */}
        <div>
          <h3 className="text-xl font-semibold text-red-600 uppercase mb-8 flex items-center justify-center lg:justify-start gap-3">
            <span className="border-t-2 border-red-600 flex-grow" />
            Navigare
            <span className="border-t-2 border-red-600 flex-grow" />
          </h3>
          <ul className="space-y-5 text-gray-800 text-base">
            <li className="flex items-center space-x-3 hover:text-red-600 transition">
              <ArrowRightIcon className="w-6 h-6 text-red-400 flex-shrink-0" />
              <Link href="/" className="hover:underline">Acasă</Link>
            </li>
            <li className="flex items-center space-x-3 hover:text-red-600 transition">
              <ArrowRightIcon className="w-6 h-6 text-red-400 flex-shrink-0" />
              <Link href="/furnizori" className="hover:underline">Furnizori</Link>
            </li>
            <li className="flex items-center space-x-3 hover:text-red-600 transition">
              <ArrowRightIcon className="w-6 h-6 text-red-400 flex-shrink-0" />
              <Link href="/adauga-anunt" className="hover:underline">Adaugă Anunț</Link>
            </li>
            <li className="flex items-center space-x-3 hover:text-red-600 transition">
              <ArrowRightIcon className="w-6 h-6 text-red-400 flex-shrink-0" />
              <Link href="/contact" className="hover:underline">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Tipuri Evenimente */}
        <div>
          <h3 className="text-xl font-semibold text-red-600 uppercase mb-8 flex items-center justify-center lg:justify-start gap-3">
            <span className="border-t-2 border-red-600 flex-grow" />
            Tipuri Evenimente
            <span className="border-t-2 border-red-600 flex-grow" />
          </h3>
          <ul className="space-y-5 text-gray-800 text-base">
            <li className="flex items-center space-x-3 hover:text-red-600 transition">
              <UserGroupIcon className="w-6 h-6 flex-shrink-0" />
              <a href="#">Evenimente Private</a>
            </li>
            <li className="flex items-center space-x-3 hover:text-red-600 transition">
              <BuildingOffice2Icon className="w-6 h-6 flex-shrink-0" />
              <a href="#">Evenimente Corporate</a>
            </li>
            <li className="flex items-center space-x-3 hover:text-red-600 transition">
              <svg
                className="w-6 h-6 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-2v13" />
                <circle cx="6" cy="18" r="3" />
                <circle cx="18" cy="16" r="3" />
              </svg>
              <a href="#">Evenimente Recreative</a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold text-red-600 uppercase mb-8 flex items-center justify-center lg:justify-start gap-3">
            <span className="border-t-2 border-red-600 flex-grow" />
            Abonează-te la noutăți
            <span className="border-t-2 border-red-600 flex-grow" />
          </h3>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row sm:items-center gap-4 max-w-md">
            <input
              type="email"
              placeholder="Email-ul tău"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-300 focus:outline-none transition"
              required
            />
            <button
              type="submit"
              className={`px-8 py-3 rounded-lg font-semibold transition ${
                subscribed
                  ? "bg-green-600 hover:bg-green-700 text-white"
                  : "bg-red-600 hover:bg-red-700 text-white shadow-md hover:shadow-lg"
              }`}
            >
              {subscribed ? "Mulțumim!" : "Trimite"}
            </button>
          </form>
          {subscribed && (
            <p className="mt-4 text-sm text-green-600">Te-ai abonat cu succes!</p>
          )}
        </div>
      </div>

      {/* Bottom subtle red wave */}
      <div className="absolute bottom-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-8 rotate-180"
          viewBox="0 0 1440 50"
          preserveAspectRatio="none"
        >
          <path d="M0,30 C360,10 1080,50 1440,30 L1440,0 L0,0 Z" fill="rgba(220,38,38,0.15)" />
          <path d="M0,40 C360,20 1080,60 1440,40 L1440,0 L0,0 Z" fill="rgba(220,38,38,0.3)" />
        </svg>
      </div>

      {/* Copyright */}
      <div className="relative text-center text-sm text-gray-500 py-6">
        © 2025 Eventra. Toate drepturile rezervate.
      </div>
    </footer>
  );
}
