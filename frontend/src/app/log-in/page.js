"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email === "" || formData.password === "") {
      setError("Completează toate câmpurile.");
    } else {
      setError("");
      console.log("Log in... ✅", formData);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-xl border border-gray-200">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-1">
            Bine ai revenit 👋
          </h2>
          <p className="text-sm text-center text-gray-600 mb-6">
            Autentifică-te pentru a adăuga sau gestiona anunțurile tale. <br />
            sau{" "}
            <Link
              href="/register"
              className="font-semibold text-red-600 hover:underline"
            >
              creează un cont nou
            </Link>
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            {/* Email */}
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">📧</span>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="pl-10 pr-3 py-3 w-full border border-gray-300 rounded-md text-sm focus:ring-red-500 focus:border-red-500"
                placeholder="Email"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">🔒</span>
              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="pl-10 pr-3 py-3 w-full border border-gray-300 rounded-md text-sm focus:ring-red-500 focus:border-red-500"
                placeholder="Parolă"
              />
            </div>
          </div>

          {error && <p className="text-red-600 text-sm">{error}</p>}

          <div>
            <button
              type="submit"
              className="w-full py-3 px-4 text-sm font-semibold rounded-md text-white bg-red-600 hover:bg-red-700 hover:shadow-lg transition-all duration-300"
            >
              Autentificare
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
