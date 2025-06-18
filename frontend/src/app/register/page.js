"use client";

import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg border border-gray-200 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900">Ce tip de cont dorești?</h2>
        <p className="text-gray-600">Alege tipul de cont pentru a continua înregistrarea.</p>

        <div className="flex flex-col gap-6 mt-8">
          <Link
            href="/register/user"
            className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-4 rounded-md font-medium text-center transition"
          >
            Cont Utilizator
          </Link>

          <Link
            href="/register/furnizor"
            className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-4 rounded-md font-medium text-center transition"
          >
            Cont Furnizor
          </Link>
        </div>
      </div>
    </div>
  );
}
