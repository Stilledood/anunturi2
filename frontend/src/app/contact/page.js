"use client";

import { useState } from "react";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    reason: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", reason: "", message: "" });
  };

  return (
    <div className="max-w-6xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-12 text-center">
        Contactează-ne
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* FORMULAR */}
        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-white shadow-md rounded-lg p-8 border-l-4 border-red-600"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Nume complet
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-red-500 focus:border-red-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Adresă de email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-red-500 focus:border-red-500"
            />
          </div>

          <div>
            <label htmlFor="reason" className="block text-sm font-medium text-gray-700">
              Motivul contactului
            </label>
            <select
              name="reason"
              id="reason"
              value={formData.reason}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-red-500 focus:border-red-500"
            >
              <option value="">Selectează un motiv</option>
              <option value="tehnice">Probleme tehnice</option>
              <option value="colaborare">Propunere colaborare</option>
              <option value="altul">Alt motiv</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Mesajul tău
            </label>
            <textarea
              name="message"
              id="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-red-500 focus:border-red-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition"
          >
            Trimite mesajul
          </button>

          {submitted && (
            <p className="text-green-600 mt-4 text-sm">Mesajul a fost trimis cu succes!</p>
          )}
        </form>

        {/* CONTACT + QR */}
        <div className="bg-white shadow-md rounded-lg p-8 border-l-4 border-red-600 space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-gray-900">Date de contact</h2>
            <p className="text-base text-gray-700">
              Ne poți contacta oricând pentru întrebări sau colaborări.
            </p>
          </div>

          <ul className="space-y-2 text-base text-gray-800">
            <li className="flex items-center gap-3">
              <PhoneIcon className="h-5 w-5 text-red-600" />
              <span>
                <strong className="text-gray-900">Telefon 1:</strong>{" "}
                <a href="tel:+40740123456" className="text-red-600 hover:underline">
                  0740 123 456
                </a>
              </span>
            </li>
            <li className="flex items-center gap-3">
              <PhoneIcon className="h-5 w-5 text-red-600" />
              <span>
                <strong className="text-gray-900">Telefon 2:</strong>{" "}
                <a href="tel:+40788987654" className="text-red-600 hover:underline">
                  0788 987 654
                </a>
              </span>
            </li>
            <li className="flex items-center gap-3">
              <EnvelopeIcon className="h-5 w-5 text-red-600" />
              <span>
                <strong className="text-gray-900">Email:</strong>{" "}
                <a href="mailto:contact@eventra.ro" className="text-red-600 hover:underline">
                  contact@eventra.ro
                </a>
              </span>
            </li>
          </ul>

          {/* QR CODE WhatsApp */}
          <div className="pt-6">
            <h3 className="text-base font-semibold text-gray-900 mb-3 text-center">
              Scanează pentru contact instant
            </h3>
            <div className="flex justify-center">
              <div className="relative p-2 border-2 border-red-600 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(239,68,68,0.6)] cursor-pointer">
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://wa.me/40740123456"
                  alt="WhatsApp QR"
                  className="rounded-md w-[180px] h-[180px]"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                  alt="WhatsApp logo"
                  className="absolute bottom-1 right-1 w-6 h-6 bg-white rounded-full p-0.5 shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
