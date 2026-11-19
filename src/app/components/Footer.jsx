"use client";

import Link from "next/link";
import { useCountry } from "../../app/context/CountryContext";

const PHONE_DISPLAY = "0544 345 74 14";
const WHATSAPP_URL = "https://wa.me/905443457414";

const dict = {
  tr: {
    footer: {
      company: {
        name: "GLOBAL ORIENT",
        desc: "İthalat • İhracat • Üretim • Danışmanlık. Güvenilir çözüm ortağınız.",
      },
      quick: {
        title: "Hızlı Erişim",
        links: [
          { href: "/services", label: "Hizmetler" },
          { href: "/projects", label: "Referanslar" },
          { href: "/faq", label: "SSS" },
        ],
      },
      contact: { title: "İletişim", action: "WhatsApp'tan yazın" },
      rights: "Tüm hakları saklıdır.",
    },
  },
  en: {
    footer: {
      company: {
        name: "GLOBAL ORIENT",
        desc: "Import • Export • Manufacturing • Consulting. Your trusted partner.",
      },
      quick: {
        title: "Quick Links",
        links: [
          { href: "/services", label: "Services" },
          { href: "/projects", label: "Projects" },
          { href: "/faq", label: "FAQ" },
        ],
      },
      contact: { title: "Contact", action: "Message us on WhatsApp" },
      rights: "All rights reserved.",
    },
  },
  de: {
    footer: {
      company: {
        name: "GLOBAL ORIENT",
        desc: "Import • Export • Fertigung • Beratung. Ihr zuverlässiger Partner.",
      },
      quick: {
        title: "Schnellzugriff",
        links: [
          { href: "/services", label: "Leistungen" },
          { href: "/projects", label: "Projekte" },
          { href: "/faq", label: "FAQ" },
        ],
      },
      contact: { title: "Kontakt", action: "Über WhatsApp schreiben" },
      rights: "Alle Rechte vorbehalten.",
    },
  },
  fr: {
    footer: {
      company: {
        name: "GLOBAL ORIENT",
        desc: "Import • Export • Fabrication • Conseil. Votre partenaire de confiance.",
      },
      quick: {
        title: "Accès rapide",
        links: [
          { href: "/services", label: "Services" },
          { href: "/projects", label: "Projets" },
          { href: "/faq", label: "FAQ" },
        ],
      },
      contact: { title: "Contact", action: "Écrivez-nous sur WhatsApp" },
      rights: "Tous droits réservés.",
    },
  },
  es: {
    footer: {
      company: {
        name: "GLOBAL ORIENT",
        desc: "Importación • Exportación • Manufactura • Consultoría. Su socio confiable.",
      },
      quick: {
        title: "Acceso rápido",
        links: [
          { href: "/services", label: "Servicios" },
          { href: "/projects", label: "Proyectos" },
          { href: "/faq", label: "FAQ" },
        ],
      },
      contact: { title: "Contacto", action: "Escríbanos por WhatsApp" },
      rights: "Todos los derechos reservados.",
    },
  },
  ru: {
    footer: {
      company: {
        name: "GLOBAL ORIENT",
        desc: "Импорт • Экспорт • Производство • Консалтинг. Ваш надёжный партнёр.",
      },
      quick: {
        title: "Быстрые ссылки",
        links: [
          { href: "/services", label: "Услуги" },
          { href: "/projects", label: "Проекты" },
          { href: "/faq", label: "Вопросы и ответы" },
        ],
      },
      contact: { title: "Контакты", action: "Написать в WhatsApp" },
      rights: "Все права защищены.",
    },
  },
};

export default function Footer() {
  const { locale } = useCountry();
  const t = dict[locale] || dict.en;

  return (
    <footer className="mt-20 border-t border-gray-100 bg-white">
      <div className="container-max py-10 grid gap-8 md:grid-cols-3">
        <div>
          <h4 className="font-semibold mb-2">{t.footer.company.name}</h4>
          <p className="text-sm text-gray-600">{t.footer.company.desc}</p>
        </div>

        <div>
          <h5 className="font-medium mb-2">{t.footer.quick.title}</h5>
          <ul className="space-y-2 text-sm">
            {t.footer.quick.links.map((link) => (
              <li key={link.href}>
                <Link className="link" href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="font-medium mb-2">{t.footer.contact.title}</h5>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="link text-sm"
            aria-label={`${t.footer.contact.action}: ${PHONE_DISPLAY}`}
          >
            {PHONE_DISPLAY}
          </a>
        </div>
      </div>

      <div className="border-t border-gray-100 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} {t.footer.company.name}. {t.footer.rights}
      </div>
    </footer>
  );
}
