"use client";

import Link from "next/link";
import { useCountry } from "../../app/context/CountryContext";
const dict = {
  tr: {
    footer: {
      company: {
        name: "ACME Endüstriyel",
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
      contact: {
        title: "İletişim",
        address: "Organize Sanayi Bölgesi, No:10, İstanbul",
        phone: "+90 (212) 000 00 00",
        email: "info@ornek.com",
      },
      newsletter: {
        title: "Bülten",
        placeholder: "E-posta adresiniz",
        button: "Abone Ol",
      },
      rights: "Tüm hakları saklıdır.",
    },
  },

  en: {
    footer: {
      company: {
        name: "ACME Industrial",
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
      contact: {
        title: "Contact",
        address: "Organized Industrial Zone, No:10, Istanbul",
        phone: "+90 (212) 000 00 00",
        email: "info@example.com",
      },
      newsletter: {
        title: "Newsletter",
        placeholder: "Your email address",
        button: "Subscribe",
      },
      rights: "All rights reserved.",
    },
  },

  de: {
    footer: {
      company: {
        name: "ACME Industrie",
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
      contact: {
        title: "Kontakt",
        address: "Industriegebiet, Nr.10, Istanbul",
        phone: "+90 (212) 000 00 00",
        email: "info@beispiel.de",
      },
      newsletter: {
        title: "Newsletter",
        placeholder: "Ihre E-Mail-Adresse",
        button: "Abonnieren",
      },
      rights: "Alle Rechte vorbehalten.",
    },
  },

  fr: {
    footer: {
      company: {
        name: "ACME Industriel",
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
      contact: {
        title: "Contact",
        address: "Zone industrielle, N°10, Istanbul",
        phone: "+90 (212) 000 00 00",
        email: "info@exemple.fr",
      },
      newsletter: {
        title: "Bulletin",
        placeholder: "Votre adresse e-mail",
        button: "S’abonner",
      },
      rights: "Tous droits réservés.",
    },
  },

  es: {
    footer: {
      company: {
        name: "ACME Industrial",
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
      contact: {
        title: "Contacto",
        address: "Zona industrial, N°10, Estambul",
        phone: "+90 (212) 000 00 00",
        email: "info@ejemplo.com",
      },
      newsletter: {
        title: "Boletín",
        placeholder: "Su correo electrónico",
        button: "Suscribirse",
      },
      rights: "Todos los derechos reservados.",
    },
  },
  ru: {
  footer: {
    company: {
      name: "ACME Индустриальный",
      desc: "Импорт • Экспорт • Производство • Консалтинг. Ваш надежный партнёр.",
    },
    quick: {
      title: "Быстрые ссылки",
      links: [
        { href: "/services", label: "Услуги" },
        { href: "/projects", label: "Проекты" },
        { href: "/faq", label: "Вопросы и ответы" },
      ],
    },
    contact: {
      title: "Контакты",
      address: "Промышленная зона, №10, Стамбул",
      phone: "+90 (212) 000 00 00",
      email: "info@primer.ru",
    },
    newsletter: {
      title: "Новостная рассылка",
      placeholder: "Ваш email",
      button: "Подписаться",
    },
    rights: "Все права защищены.",
  },
},

};
export default function Footer() {
  const { locale } = useCountry();
  const t = dict[locale] || dict.en;

  return (
    <footer className="mt-20 border-t border-gray-100 bg-white">
      <div className="container-max py-10 grid gap-8 md:grid-cols-4">
        {/* Şirket */}
        <div>
          <h4 className="font-semibold mb-2">{t.footer.company.name}</h4>
          <p className="text-sm text-gray-600">{t.footer.company.desc}</p>
        </div>

        {/* Hızlı Erişim */}
        <div>
          <h5 className="font-medium mb-2">{t.footer.quick.title}</h5>
          <ul className="space-y-2 text-sm">
            {t.footer.quick.links.map((l, i) => (
              <li key={i}>
                <Link className="link" href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* İletişim */}
        <div>
          <h5 className="font-medium mb-2">{t.footer.contact.title}</h5>
          <p className="text-sm text-gray-600">{t.footer.contact.address}</p>
          <p className="text-sm text-gray-600">{t.footer.contact.phone}</p>
          <p className="text-sm text-gray-600">{t.footer.contact.email}</p>
        </div>

        {/* Bülten */}
        <div>
          <h5 className="font-medium mb-2 ml-5">{t.footer.newsletter.title}</h5>
          <form className="flex gap-2">
            <input
              className="card w-full px-3 py-2 "
              placeholder={t.footer.newsletter.placeholder}
            />
            <button className="btn" type="button">{t.footer.newsletter.button}</button>
          </form>
        </div>
      </div>

      {/* Telif */}
      <div className="border-t border-gray-100 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} {t.footer.company.name}. {t.footer.rights}
      </div>
    </footer>
  );
}