"use client";

import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  ArrowRightIcon,
  UserGroupIcon,
  BuildingOffice2Icon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

const judeteOrase = {
  Alba: ["Alba Iulia", "Sebeș", "Aiud", "Cugir"],
  Arad: ["Arad", "Lipova", "Ineu", "Pâncota"],
  // poți completa cu restul
};

export default function AddListingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({
    titlu: "",
    tipLocatie: "",
    judet: "",
    oras: "",
    descriere: "",
    imagini: [],
    previewImagini: [],
    pret: "",
    disponibilitate: [],
    telefon: "",
    email: "",
  });

  const [emailFooter, setEmailFooter] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: null });
  };

  const handleImages = (e) => {
    const files = Array.from(e.target.files);
    const previews = files.map((file) => URL.createObjectURL(file));
    setForm({
      ...form,
      imagini: [...form.imagini, ...files],
      previewImagini: [...form.previewImagini, ...previews],
    });
    if (errors.imagini) setErrors({ ...errors, imagini: null });
  };

  const removeImage = (index) => {
    const newImagini = [...form.imagini];
    const newPreviews = [...form.previewImagini];
    newImagini.splice(index, 1);
    newPreviews.splice(index, 1);
    setForm({ ...form, imagini: newImagini, previewImagini: newPreviews });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.titlu.trim()) newErrors.titlu = "Titlul este obligatoriu.";
    if (!form.tipLocatie) newErrors.tipLocatie = "Selectează tipul locației.";
    if (!form.judet) newErrors.judet = "Selectează județul.";
    if (!form.oras) newErrors.oras = "Selectează orașul.";
    if (!form.descriere.trim()) newErrors.descriere = "Descrierea este obligatorie.";
    if (form.imagini.length === 0) newErrors.imagini = "Încarcă cel puțin o imagine.";
    if (!form.pret.trim()) newErrors.pret = "Completează prețul.";
    if (form.disponibilitate.length === 0) newErrors.disponibilitate = "Selectează cel puțin o dată.";
    if (!form.telefon.trim() && !form.email.trim()) newErrors.contact = "Completează telefon sau email.";
    if (form.email && !/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Email invalid.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      setSubmitStatus(null);
      return;
    }
    setSubmitStatus("loading");
    setTimeout(() => {
      setSubmitStatus("success");
      setForm({
        titlu: "",
        tipLocatie: "",
        judet: "",
        oras: "",
        descriere: "",
        imagini: [],
        previewImagini: [],
        pret: "",
        disponibilitate: [],
        telefon: "",
        email: "",
      });
      setErrors({});
    }, 1500);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (emailFooter.trim()) {
      setSubscribed(true);
      setEmailFooter("");
    }
  };

  return (
    <>
      {/* HEADER */}
      <header className="bg-white shadow-md relative z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-black select-none">Eventra</div>
          <div className="text-xl font-semibold text-gray-900">Adaugă Anunț</div>
          <div className="relative">
            <button
              className="text-gray-600 text-3xl"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Meniu"
            >
              ☰
            </button>
            {menuOpen && (
              <div className="absolute top-12 right-0 w-72 bg-white rounded-xl shadow-xl border p-5 z-50 animate-fadeIn">
                <div className="space-y-5 text-gray-700">
                  <div className="flex items-start gap-3 border-b pb-3">
                    <div>
                      <p className="font-semibold text-black">Eventra</p>
                      <p className="text-sm">Creează un cont și adaugă anunțuri pentru servicii de evenimente.</p>
                    </div>
                    <img src="/house-icon.png" alt="icon" className="w-10 h-10 object-contain" />
                  </div>
                  <div className="flex flex-col gap-3 text-sm">
                    <a href="#" className="hover:text-red-500">Adaugă Anunț</a>
                    <a href="#" className="hover:text-red-500">Găsește Servicii</a>
                    <a href="#" className="hover:text-red-500">Contact</a>
                    <a href="#" className="hover:text-red-500">Ajutor</a>
                    <hr />
                    <a href="#" className="hover:text-red-500">Log in</a>
                    <a href="#" className="bg-red-500 hover:bg-red-600 text-white rounded-full px-4 py-2 text-center w-fit">Register</a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* FORMULAR */}
      <main className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow mt-10 mb-20">
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          <div>
            <label htmlFor="titlu" className="block mb-1 font-semibold">Titlu anunț *</label>
            <input
              type="text"
              id="titlu"
              name="titlu"
              value={form.titlu}
              onChange={handleChange}
              className={`w-full border rounded px-3 py-2 focus:ring-2 focus:ring-red-500 ${errors.titlu ? "border-red-500" : "border-gray-300"}`}
              placeholder="Ex: DJ pentru nunta ta"
            />
            {errors.titlu && <p className="text-red-600 text-sm mt-1">{errors.titlu}</p>}
          </div>

          <div>
            <label htmlFor="tipLocatie" className="block mb-1 font-semibold">Tip locație *</label>
            <select
              id="tipLocatie"
              name="tipLocatie"
              value={form.tipLocatie}
              onChange={handleChange}
              className={`w-full border rounded px-3 py-2 focus:ring-2 focus:ring-red-500 ${errors.tipLocatie ? "border-red-500" : "border-gray-300"}`}
            >
              <option value="">Selectează</option>
              <option value="Salon">Salon</option>
              <option value="DJ">DJ</option>
              <option value="Fotograf">Fotograf</option>
              <option value="Formație">Formație</option>
            </select>
            {errors.tipLocatie && <p className="text-red-600 text-sm mt-1">{errors.tipLocatie}</p>}
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label htmlFor="judet" className="block mb-1 font-semibold">Județ *</label>
              <select
                id="judet"
                name="judet"
                value={form.judet}
                onChange={(e) => {
                  handleChange(e);
                  setForm((f) => ({ ...f, oras: "" }));
                }}
                className={`w-full border rounded px-3 py-2 focus:ring-2 focus:ring-red-500 ${errors.judet ? "border-red-500" : "border-gray-300"}`}
              >
                <option value="">Selectează</option>
                {Object.keys(judeteOrase).map((j) => (
                  <option key={j} value={j}>{j}</option>
                ))}
              </select>
              {errors.judet && <p className="text-red-600 text-sm mt-1">{errors.judet}</p>}
            </div>

            <div>
              <label htmlFor="oras" className="block mb-1 font-semibold">Oraș *</label>
              <select
                id="oras"
                name="oras"
                value={form.oras}
                onChange={handleChange}
                disabled={!form.judet}
                className={`w-full border rounded px-3 py-2 focus:ring-2 focus:ring-red-500 ${errors.oras ? "border-red-500" : "border-gray-300"}`}
              >
                <option value="">Selectează</option>
                {form.judet && judeteOrase[form.judet]?.map((o) => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>
              {errors.oras && <p className="text-red-600 text-sm mt-1">{errors.oras}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="descriere" className="block mb-1 font-semibold">Descriere *</label>
            <textarea
              id="descriere"
              name="descriere"
              value={form.descriere}
              onChange={handleChange}
              rows={5}
              className={`w-full border rounded px-3 py-2 focus:ring-2 focus:ring-red-500 resize-none ${errors.descriere ? "border-red-500" : "border-gray-300"}`}
              placeholder="Descrie serviciul tău..."
            />
            {errors.descriere && <p className="text-red-600 text-sm mt-1">{errors.descriere}</p>}
          </div>

          <div>
            <label className="block mb-1 font-semibold">Disponibilitate *</label>
            <DatePicker
              selected={null}
              onChange={(dates) => setForm({ ...form, disponibilitate: dates })}
              startDate={form.disponibilitate?.[0]}
              endDate={form.disponibilitate?.[1]}
              selectsRange
              inline
              monthsShown={2}
              minDate={new Date()}
              className="border border-gray-300 rounded"
            />
            {errors.disponibilitate && <p className="text-red-600 text-sm mt-1">{errors.disponibilitate}</p>}
          </div>

          <div>
            <label htmlFor="imagini" className="block mb-1 font-semibold">Imagini *</label>
            <input type="file" id="imagini" multiple accept="image/*" onChange={handleImages} />
            {errors.imagini && <p className="text-red-600 text-sm mt-1">{errors.imagini}</p>}
            <div className="mt-3 grid grid-cols-3 gap-4">
              {form.previewImagini.map((src, index) => (
                <div key={index} className="relative">
                  <img src={src} className="rounded shadow-md h-24 object-cover w-full" alt={`preview-${index}`} />
                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="absolute top-1 right-1 bg-black bg-opacity-60 text-white text-xs px-1.5 py-0.5 rounded"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="pret" className="block mb-1 font-semibold">Preț *</label>
            <input
              type="text"
              id="pret"
              name="pret"
              value={form.pret}
              onChange={handleChange}
              placeholder="Ex: 1500 RON"
              className={`w-full border rounded px-3 py-2 focus:ring-2 focus:ring-red-500 ${errors.pret ? "border-red-500" : "border-gray-300"}`}
            />
            {errors.pret && <p className="text-red-600 text-sm mt-1">{errors.pret}</p>}
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label htmlFor="telefon" className="block mb-1 font-semibold">Telefon</label>
              <input
                type="text"
                id="telefon"
                name="telefon"
                value={form.telefon}
                onChange={handleChange}
                placeholder="07xx xxx xxx"
                className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 font-semibold">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="exemplu@mail.com"
                className={`w-full border rounded px-3 py-2 focus:ring-2 focus:ring-red-500 ${errors.email ? "border-red-500" : "border-gray-300"}`}
              />
              {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
            </div>
          </div>

          <button
            type="submit"
            disabled={submitStatus === "loading"}
            className="w-full bg-red-600 text-white font-bold py-3 rounded-xl hover:bg-red-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {submitStatus === "loading" ? "Se încarcă..." : "Trimite anunț"}
          </button>
          {submitStatus === "success" && (
            <p className="text-green-600 font-semibold mt-4 text-center">Anunțul a fost trimis cu succes!</p>
          )}
        </form>
      </main>

      {/* FOOTER */}
      <footer className="relative bg-white text-gray-700 mt-24 overflow-hidden shadow-md">
        <div className="absolute -top-1 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-8" viewBox="0 0 1440 50" preserveAspectRatio="none">
            <path d="M0,30 C360,10 1080,50 1440,30 L1440,0 L0,0 Z" fill="rgba(220,38,38,0.15)" />
            <path d="M0,40 C360,20 1080,60 1440,40 L1440,0 L0,0 Z" fill="rgba(220,38,38,0.3)" />
          </svg>
        </div>
        <div className="relative max-w-7xl mx-auto px-8 py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">
          {/* Brand & Social */}
          <div className="space-y-8">
            <h2 className="text-3xl font-extrabold text-gray-900">Eventra</h2>
            <p className="text-gray-600 leading-relaxed max-w-xs">
              Găsește și rezervă localul perfect pentru nunți, botezuri, petreceri
              private și evenimente corporate.
            </p>
            <div className="flex space-x-6">
              {[{ Icon: EnvelopeIcon }, { Icon: UserGroupIcon }].map(({ Icon }, i) => (
                <a key={i} href="#" className="bg-red-100 text-red-600 p-4 rounded-full hover:bg-red-600 hover:text-white shadow-md transition-shadow duration-300">
                  <Icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigare */}
          <div>
            <h3 className="text-xl font-semibold text-red-600 uppercase mb-8 text-center lg:text-left">Navigare</h3>
            <ul className="space-y-5 text-gray-800 text-base">
              {["Acasă", "Servicii", "Adaugă Anunț", "Contact"].map((item) => (
                <li key={item} className="flex items-center space-x-3 hover:text-red-600 transition">
                  <ArrowRightIcon className="w-6 h-6 text-red-400 flex-shrink-0" />
                  <a href="#" className="hover:underline">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tipuri Evenimente */}
          <div>
            <h3 className="text-xl font-semibold text-red-600 uppercase mb-8 text-center lg:text-left">Tipuri Evenimente</h3>
            <ul className="space-y-5 text-gray-800 text-base">
              <li className="flex items-center space-x-3 hover:text-red-600 transition">
                <UserGroupIcon className="w-6 h-6 flex-shrink-0" />
                <a href="#">Evenimente Private</a>
              </li>
              <li className="flex items-center space-x-3 hover:text-red-600 transition">
                <BuildingOffice2Icon className="w-6 h-6 flex-shrink-0" />
                <a href="#">Evenimente Corporate</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold text-red-600 uppercase mb-8 text-center lg:text-left">Abonează-te la noutăți</h3>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row sm:items-center gap-4 max-w-md">
              <input
                type="email"
                placeholder="Email-ul tău"
                value={emailFooter}
                onChange={(e) => setEmailFooter(e.target.value)}
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
            {subscribed && <p className="mt-4 text-sm text-green-600">Te-ai abonat cu succes!</p>}
          </div>
        </div>
        <div className="absolute bottom-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-8 rotate-180" viewBox="0 0 1440 50" preserveAspectRatio="none">
            <path d="M0,30 C360,10 1080,50 1440,30 L1440,0 L0,0 Z" fill="rgba(220,38,38,0.15)" />
            <path d="M0,40 C360,20 1080,60 1440,40 L1440,0 L0,0 Z" fill="rgba(220,38,38,0.3)" />
          </svg>
        </div>
        <div className="relative text-center text-sm text-gray-500 py-6">
          © 2025 Eventra. Toate drepturile rezervate.
        </div>
      </footer>
    </>
  );
}
