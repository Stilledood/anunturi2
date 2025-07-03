"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [rol, setRol] = useState("client"); // default: client

  const handleLogin = (e) => {
    e.preventDefault();

    // aici ar veni autentificarea reală

    if (rol === "client") {
      router.push("/client/rezervari");
    } else if (rol === "furnizor") {
      router.push("/dashboard");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-md space-y-6">
        <h2 className="text-2xl font-bold text-center text-[#854d82]">Autentificare</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#854d82] focus:border-[#854d82] text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Tip cont</label>
            <select
              value={rol}
              onChange={(e) => setRol(e.target.value)}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm"
            >
              <option value="client">Client</option>
              <option value="furnizor">Furnizor</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-[#854d82] text-white py-2 rounded-md hover:bg-[#733b6f] transition"
          >
            Continuă
          </button>
        </form>
      </div>
    </div>
  );
}
