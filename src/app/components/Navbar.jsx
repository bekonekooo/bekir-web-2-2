"use client";
import { useState } from "react";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import ReactCountryFlag from "react-country-flag";
import { useCountry } from "../../app/context/CountryContext";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

// 1) Çeviri sözlüğü (Rusça eklendi)
const dict = {
  tr: { home: "Ana Sayfa", about: "Hakkımızda", services: "Hizmetler", projects: "Referanslar", faq: "SSS", contact: "İletişim", countrySelect: "Ülke Seç" },
  en: { home: "Home", about: "About", services: "Services", projects: "Projects", faq: "FAQ", contact: "Contact", countrySelect: "Select Country" },
  de: { home: "Startseite", about: "Über uns", services: "Leistungen", projects: "Referenzen", faq: "FAQ", contact: "Kontakt", countrySelect: "Land wählen" },
  fr: { home: "Accueil", about: "À propos", services: "Services", projects: "Références", faq: "FAQ", contact: "Contact", countrySelect: "Choisir le pays" },
  es: { home: "Inicio", about: "Nosotros", services: "Servicios", projects: "Proyectos", faq: "Preguntas", contact: "Contacto", countrySelect: "Elegir país" },
  ru: { home: "Главная", about: "О нас", services: "Услуги", projects: "Проекты", faq: "Вопросы", contact: "Контакты", countrySelect: "Выбрать страну" },
};

// 2) Ülkeler listesi (Rusya eklendi)
const countries = [
  { code: "TR", label: "Türkiye" },
  { code: "US", label: "United States" },
  { code: "DE", label: "Deutschland" },
  { code: "FR", label: "France" },
  { code: "ES", label: "España" },
  { code: "RU", label: "Россия" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [cOpen, setCOpen] = useState(false);
  const { country, setCountry, locale } = useCountry();

  const t = dict[locale] || dict.en;
  const current = countries.find((c) => c.code === country) || countries[0];

  const nav = [
    { href: "/", label: t.home },
    { href: "/about", label: t.about },
    { href: "/services", label: t.services },
    { href: "/projects", label: t.projects },
    { href: "/faq", label: t.faq },
    { href: "/contact", label: t.contact },
  ];

  function onSelectCountry(c) {
    setCountry(c.code);
    setCOpen(false);
  }

  const pathname = usePathname();
  const normalize = (p) => {
    if (!p) return "/";
    const n = p.replace(/\/+$/, "");
    return n === "" ? "/" : n;
  };
  const isActive = (href) => {
    const a = normalize(pathname);
    const h = normalize(href);
    return a === h || (h !== "/" && a.startsWith(h));
  };


  console.log("country:", country, "locale:", locale, "dict[locale]:", dict[locale]);


  return (
    
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
      <div className="container-max flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/globe.svg" width={32} height={32} alt="logo" />
          <span className="font-semibold">GLOBAL ORIENT</span>
        </Link>

        {/* Masaüstü */}
        <nav className="hidden md:flex items-center gap-6">
          {nav.map((i) => {
            const active = isActive(i.href);
            return (
              <div key={i.href} className="relative">
                <Link
                  href={i.href}
                  className={`relative px-1.5 py-1 font-medium transition-colors ${
                    active ? "text-gray-900" : "text-gray-700 hover:text-gray-900"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  {i.label}
                </Link>
                {active && (
                  <motion.span
                    layoutId="nav-active-underline"
                    className="absolute left-0 right-0 -bottom-1 h-[2px] rounded-full bg-gray-900"
                    transition={{ type: "spring", stiffness: 500, damping: 40 }}
                  />
                )}
              </div>
            );
          })}

          {/* Ülke dropdown */}
          <div
            className="relative"
            onBlur={(e) => !e.currentTarget.contains(e.relatedTarget) && setCOpen(false)}
          >
            <button
              onClick={() => setCOpen((v) => !v)}
              className="flex items-center gap-2 px-3 py-1.5 border border-gray-200 rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-gray-300"
              aria-haspopup="listbox"
              aria-expanded={cOpen}
              aria-label={t.countrySelect}
              title={t.countrySelect}
            >
              <ReactCountryFlag countryCode={current.code} svg style={{ width: "1.1em", height: "1.1em" }} />
              <span className="text-sm font-medium">{current.code}</span>
              <FiChevronDown className={`transition-transform ${cOpen ? "rotate-180" : ""}`} />
            </button>

            {cOpen && (
              <ul
                role="listbox"
                className="absolute right-0 mt-2 w-52 rounded-xl border border-gray-200 bg-white shadow-lg"
              >
                {countries.map((c) => (
                  <li key={c.code}>
                    <button
                      role="option"
                      aria-selected={current.code === c.code}
                      onClick={() => onSelectCountry(c)}
                      className={`w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-gray-50 ${
                        current.code === c.code ? "font-semibold text-gray-900" : "text-gray-700"
                      }`}
                    >
                      <ReactCountryFlag countryCode={c.code} svg style={{ width: "1.1em", height: "1.1em" }} />
                      <span className="truncate">{c.label}</span>
                      <span className="ml-auto text-xs text-gray-400">{c.code}</span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </nav>

        {/* Mobil buton */}
        <button className="md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Menu">
          {open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobil menü */}
      {open && (
        <div className="md:hidden border-t border-gray-100">
          <div className="container-max py-3 flex flex-col gap-3">
            {nav.map((i) => (
              <Link
                key={i.href}
                href={i.href}
                className={`rounded-lg px-3 py-2 text-sm transition ${
                  isActive(i.href) ? "font-semibold text-gray-900 bg-gray-50" : "text-gray-700 hover:bg-gray-50"
                }`}
                onClick={() => setOpen(false)}
              >
                {i.label}
              </Link>
            ))}

            {/* Mobil ülke listesi */}
            <div className="mt-2 rounded-lg border border-gray-200">
              {countries.map((c) => (
                <button
                  key={c.code}
                  onClick={() => onSelectCountry(c)}
                  className={`w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-gray-50 ${
                    current.code === c.code ? "font-semibold text-gray-900" : "text-gray-700"
                  }`}
                >
                  <ReactCountryFlag countryCode={c.code} svg style={{ width: "1.1em", height: "1.1em" }} />
                  {c.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
