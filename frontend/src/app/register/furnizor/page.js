"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function RegisterFurnizor() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    company: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { company, phone, email, password, confirmPassword } = formData;

    if (!company || !phone || !email || !password || !confirmPassword) {
      setError("Completează toate câmpurile.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Parolele nu se potrivesc.");
      return;
    }

    setError("");
    console.log("Furnizor Register ✅", formData);

    // TODO: trimite datele către server
    router.push("/log-in");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg border border-gray-200">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Creează cont furnizor
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            sau
            <Link
              href="/log-in"
              className="font-medium text-[#854d82] hover:text-[#71396e] ml-1"
            >
              ai deja cont?
            </Link>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <input
              name="company"
              type="text"
              required
              placeholder="Nume companie"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-3 py-3 border border-gray-300 rounded-md focus:ring-[#854d82] focus:border-[#854d82]"
            />
            <input
              name="phone"
              type="tel"
              required
              placeholder="Număr de telefon"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-3 border border-gray-300 rounded-md focus:ring-[#854d82] focus:border-[#854d82]"
            />
            <input
              name="email"
              type="email"
              required
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-3 border border-gray-300 rounded-md focus:ring-[#854d82] focus:border-[#854d82]"
            />
            <input
              name="password"
              type="password"
              required
              placeholder="Parolă"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-3 border border-gray-300 rounded-md focus:ring-[#854d82] focus:border-[#854d82]"
            />
            <input
              name="confirmPassword"
              type="password"
              required
              placeholder="Confirmă parola"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-3 py-3 border border-gray-300 rounded-md focus:ring-[#854d82] focus:border-[#854d82]"
            />
          </div>

          {error && <p className="text-[#854d82] text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full bg-[#854d82] hover:bg-[#71396e] text-white py-3 px-4 rounded-md font-medium transition"
          >
            Creează cont
          </button>
        </form>
      </div>
    </div>
  );
}
