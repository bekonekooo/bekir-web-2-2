"use client";

import Section from "../components/Section";
import { useCountry } from "@/app/context/CountryContext";

const PHONE_DISPLAY = "0544 345 74 14";
const WHATSAPP_URL = "https://wa.me/905443457414";

const dict = {
  tr: {
    title: "İletişim",
    subtitle: "WhatsApp üzerinden bize doğrudan ulaşabilirsiniz.",
    cardTitle: "WhatsApp",
    action: "WhatsApp'tan yazın",
  },
  en: {
    title: "Contact",
    subtitle: "You can contact us directly via WhatsApp.",
    cardTitle: "WhatsApp",
    action: "Message us on WhatsApp",
  },
  de: {
    title: "Kontakt",
    subtitle: "Sie können uns direkt über WhatsApp kontaktieren.",
    cardTitle: "WhatsApp",
    action: "Über WhatsApp schreiben",
  },
  fr: {
    title: "Contact",
    subtitle: "Vous pouvez nous contacter directement via WhatsApp.",
    cardTitle: "WhatsApp",
    action: "Écrivez-nous sur WhatsApp",
  },
  es: {
    title: "Contacto",
    subtitle: "Puede contactarnos directamente por WhatsApp.",
    cardTitle: "WhatsApp",
    action: "Escríbanos por WhatsApp",
  },
  ru: {
    title: "Контакты",
    subtitle: "Свяжитесь с нами напрямую через WhatsApp.",
    cardTitle: "WhatsApp",
    action: "Написать в WhatsApp",
  },
};

export default function ContactContext() {
  const { locale } = useCountry();
  const t = dict[locale] || dict.en;

  return (
    <Section title={t.title} subtitle={t.subtitle}>
      <div className="mx-auto max-w-xl">
        <div className="card p-6 text-center">
          <h3 className="font-semibold">{t.cardTitle}</h3>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-lg font-semibold text-brand-700 hover:underline"
            aria-label={`${t.action}: ${PHONE_DISPLAY}`}
          >
            {PHONE_DISPLAY}
          </a>
          <div className="mt-5">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn inline-flex"
            >
              {t.action}
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
