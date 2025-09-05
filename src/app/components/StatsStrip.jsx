export default function StatsStrip() {
 export const dict = {
  tr: {
    home: "Ana Sayfa",
    about: "Hakkımızda",
    services: "Hizmetler",
    projects: "Projeler",
    faq: "SSS",
    stats: [
      { k: "12+", v: "Yıllık Tecrübe" },
      { k: "30+", v: "Ülkeye İhracat" },
      { k: "250+", v: "Tamamlanan Proje" },
      { k: "98%", v: "Müşteri Memnuniyeti" },
    ],
  },
  en: {
    home: "Home",
    about: "About",
    services: "Services",
    projects: "Projects",
    faq: "FAQ",
    stats: [
      { k: "12+", v: "Years of Experience" },
      { k: "30+", v: "Exporting Countries" },
      { k: "250+", v: "Completed Projects" },
      { k: "98%", v: "Customer Satisfaction" },
    ],
  },
  de: {
    home: "Startseite",
    about: "Über uns",
    services: "Dienstleistungen",
    projects: "Projekte",
    faq: "FAQ",
    stats: [
      { k: "12+", v: "Jahre Erfahrung" },
      { k: "30+", v: "Exportländer" },
      { k: "250+", v: "Abgeschlossene Projekte" },
      { k: "98%", v: "Kundenzufriedenheit" },
    ],
  },
  fr: {
    home: "Accueil",
    about: "À propos",
    services: "Services",
    projects: "Projets",
    faq: "FAQ",
    stats: [
      { k: "12+", v: "Années d'expérience" },
      { k: "30+", v: "Pays d'exportation" },
      { k: "250+", v: "Projets terminés" },
      { k: "98%", v: "Satisfaction client" },
    ],
  },
  es: {
    home: "Inicio",
    about: "Acerca de",
    services: "Servicios",
    projects: "Proyectos",
    faq: "FAQ",
    stats: [
      { k: "12+", v: "Años de experiencia" },
      { k: "30+", v: "Países de exportación" },
      { k: "250+", v: "Proyectos completados" },
      { k: "98%", v: "Satisfacción del cliente" },
    ],
  },
  ru: {
    home: "Главная",
    about: "О нас",
    services: "Услуги",
    projects: "Проекты",
    faq: "Вопросы",
    stats: [
      { k: "12+", v: "Лет опыта" },
      { k: "30+", v: "Страны экспорта" },
      { k: "250+", v: "Завершённых проектов" },
      { k: "98%", v: "Удовлетворённость клиентов" },
    ],
  },
};

  return (
    <div className="bg-white border-y border-gray-100">
      <div className="container-max grid grid-cols-2 md:grid-cols-4">
        {stats.map((s, i) => (
          <div key={i} className="py-6 text-center">
            <div className="text-2xl font-semibold text-brand-700">{s.k}</div>
            <div className="text-sm text-gray-600">{s.v}</div>
          </div>
        ))}
      </div>
    </div>
  );
}