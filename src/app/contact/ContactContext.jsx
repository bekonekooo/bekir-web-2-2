"use client";
import Section from "../components/Section";
import ContactForm from "./ContactForm";
import { useCountry } from "@/app/context/CountryContext";

const dict = {
  tr: {
    title: "İletişim",
    subtitle: "Adres, telefon ve hızlı irtibat formu.",
    cardTitle: "Adres & Bilgi",
    address: "Organize Sanayi Bölgesi, No:10, İstanbul",
    phone: "+90 (212) 000 00 00",
    email: "info@ornek.com",
    mapTitle: "Harita",
  },
  en: {
    title: "Contact",
    subtitle: "Address, phone and quick contact form.",
    cardTitle: "Address & Info",
    address: "Organized Industrial Zone, No:10, Istanbul",
    phone: "+90 (212) 000 00 00",
    email: "info@example.com",
    mapTitle: "Map",
  },
  de: {
    title: "Kontakt",
    subtitle: "Adresse, Telefon und schnelles Kontaktformular.",
    cardTitle: "Adresse & Infos",
    address: "Industriegebiet, Nr.10, Istanbul",
    phone: "+90 (212) 000 00 00",
    email: "info@beispiel.de",
    mapTitle: "Karte",
  },
  fr: {
    title: "Contact",
    subtitle: "Adresse, téléphone et formulaire de contact rapide.",
    cardTitle: "Adresse & Infos",
    address: "Zone industrielle, N°10, Istanbul",
    phone: "+90 (212) 000 00 00",
    email: "info@exemple.fr",
    mapTitle: "Carte",
  },
  es: {
    title: "Contacto",
    subtitle: "Dirección, teléfono y formulario rápido.",
    cardTitle: "Dirección e información",
    address: "Zona industrial, N.º 10, Estambul",
    phone: "+90 (212) 000 00 00",
    email: "info@ejemplo.com",
    mapTitle: "Mapa",
  },
};

export default function ContactContext() {
  const { locale } = useCountry();
  const t = dict[locale] || dict.en;

  return (
    <Section title={t.title} subtitle={t.subtitle}>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="card p-6">
          <h3 className="font-semibold">{t.cardTitle}</h3>
          <p className="text-gray-700 mt-2">{t.address}</p>
          <p className="text-gray-700">{t.phone}</p>
          <p className="text-gray-700">{t.email}</p>
          <div className="mt-4">
            <iframe
              title={t.mapTitle}
              className="w-full h-56 rounded-2xl border border-gray-200"
              src="https://maps.google.com/maps?q=istanbul%20osb&t=&z=13&ie=UTF8&iwloc=&output=embed"
            />
          </div>
        </div>

        {/* Form (client) — dil değişimini anında yansıtır */}
        <ContactForm />
      </div>
    </Section>
  );
}