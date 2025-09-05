"use client";

import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Section from "./components/Section";
import ServicesSlider from "./components/ServicesSlider";
import Hero from "./components/Hero";
import { useCountry } from "./context/CountryContext";

import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const dict = {
  tr: {
    stats: [
      { k: "12+", v: "Yıllık Tecrübe" },
      { k: "30+", v: "Ülkeye İhracat" },
      { k: "250+", v: "Tamamlanan Proje" },
      { k: "98%", v: "Müşteri Memnuniyeti" },
    ],
    capabilities: {
      title: "Ana Faaliyet Alanlarımız",
      subtitle: "Endüstriyel ekipmanlarda bütüncül yaklaşım.",
      items: [
        { t: "İthalat", d: "Global tedarik, uygun maliyet ve hızlı teslim." },
        { t: "İhracat", d: "Yeni pazarlara açılma ve sürdürülebilir büyüme." },
        { t: "Üretim", d: "Standartlara uygun, izlenebilir ve kaliteli üretim." },
        { t: "Danışmanlık", d: "Strateji, mevzuat, kalite ve verimlilik." },
      ],
    },
    whyus: {
      title: "Neden Biz?",
      subtitle: "Şeffaf süreç, hızlı iletişim ve sonuç odaklı çalışma.",
      items: [
        { t: "Uçtan Uca Süreç", d: "Tek irtibat noktasıyla tedarikten teslimata." },
        { t: "Kalite & Uyum", d: "ISO, CE ve ilgili mevzuatlara tam uyum." },
        { t: "Hızlı İletişim", d: "Aynı gün teklif ve proje başlangıcı." },
      ],
    },
     cta: {
      title: "Projeniz İçin Birlikte Çalışalım",
      subtitle: "İhtiyacınızı anlatın, aynı gün dönüş yapalım.",
      cardTitle: "Teklif veya Ön Görüşme",
      cardDesc: "Kısa formu doldurun; teknik ekibimiz size ulaşsın.",
      button: "İletişime Geç",
    },
  },
 

  en: {
    stats: [
      { k: "12+", v: "Years of Experience" },
      { k: "30+", v: "Countries Exported" },
      { k: "250+", v: "Completed Projects" },
      { k: "98%", v: "Customer Satisfaction" },
    ],
    capabilities: {
      title: "Core Capabilities",
      subtitle: "A holistic approach to industrial equipment.",
      items: [
        { t: "Import", d: "Global sourcing, fair cost and fast delivery." },
        { t: "Export", d: "Expand to new markets with sustainable growth." },
        { t: "Manufacturing", d: "Standards-compliant, traceable, high-quality production." },
        { t: "Consulting", d: "Strategy, compliance, quality and efficiency." },
      ],
    },
    whyus: {
      title: "Why Us?",
      subtitle: "Transparent processes, fast communication, results-driven work.",
      items: [
        { t: "End-to-End Process", d: "Single point of contact from sourcing to delivery." },
        { t: "Quality & Compliance", d: "Full compliance with ISO, CE and regulations." },
        { t: "Fast Communication", d: "Same-day quotation and project kick-off." },
      ],
    },
     cta: {
      title: "Let's Work on Your Project",
      subtitle: "Tell us what you need; we’ll reply the same day.",
      cardTitle: "Quote or Intro Call",
      cardDesc: "Fill the short form and our engineering team will reach out.",
      button: "Get in Touch",
    },
  },

  

  de: {
    stats: [
      { k: "12+", v: "Jahre Erfahrung" },
      { k: "30+", v: "Exportländer" },
      { k: "250+", v: "Abgeschlossene Projekte" },
      { k: "98%", v: "Kundenzufriedenheit" },
    ],
    capabilities: {
      title: "Kernkompetenzen",
      subtitle: "Ganzheitlicher Ansatz für Industrieanlagen.",
      items: [
        { t: "Import", d: "Globales Sourcing, faire Kosten und schnelle Lieferung." },
        { t: "Export", d: "Neue Märkte erschließen, nachhaltig wachsen." },
        { t: "Fertigung", d: "Normkonform, rückverfolgbar und qualitativ hochwertig." },
        { t: "Beratung", d: "Strategie, Regularien, Qualität und Effizienz." },
      ],
    },
    whyus: {
      title: "Warum wir?",
      subtitle: "Transparente Prozesse, schnelle Kommunikation, ergebnisorientiert.",
      items: [
        { t: "End-to-End-Prozess", d: "Ein Ansprechpartner von Beschaffung bis Lieferung." },
        { t: "Qualität & Compliance", d: "Volle Konformität mit ISO, CE und Regularien." },
        { t: "Schnelle Kommunikation", d: "Angebot und Projektstart am selben Tag." },
      ],
    },
      cta: {
      title: "Lassen Sie uns an Ihrem Projekt arbeiten",
      subtitle: "Beschreiben Sie Ihren Bedarf; wir melden uns noch am selben Tag.",
      cardTitle: "Angebot oder Erstgespräch",
      cardDesc: "Füllen Sie das kurze Formular aus; unser Team meldet sich.",
      button: "Kontakt aufnehmen",
    },
  },
    


  fr: {
    stats: [
      { k: "12+", v: "Années d’expérience" },
      { k: "30+", v: "Pays exportés" },
      { k: "250+", v: "Projets réalisés" },
      { k: "98%", v: "Satisfaction client" },
    ],
    capabilities: {
      title: "Domaines d’activité",
      subtitle: "Approche holistique des équipements industriels.",
      items: [
        { t: "Importation", d: "Approvisionnement mondial, coût maîtrisé, livraison rapide." },
        { t: "Exportation", d: "Accès à de nouveaux marchés et croissance durable." },
        { t: "Fabrication", d: "Production conforme aux normes, traçable et de qualité." },
        { t: "Conseil", d: "Stratégie, conformité, qualité et efficacité." },
      ],
    },
    whyus: {
      title: "Pourquoi nous ?",
      subtitle: "Processus transparents, communication rapide, résultats concrets.",
      items: [
        { t: "Processus de bout en bout", d: "Un interlocuteur unique, de l’achat à la livraison." },
        { t: "Qualité & Conformité", d: "Conformité totale ISO, CE et réglementations." },
        { t: "Communication rapide", d: "Devis et lancement de projet le jour même." },
      ],
    },
     cta: {
      title: "Travaillons sur votre projet",
      subtitle: "Expliquez votre besoin ; réponse le jour même.",
      cardTitle: "Devis ou Prise de contact",
      cardDesc: "Remplissez le court formulaire ; notre équipe vous contacte.",
      button: "Nous contacter",
    },
  },
  

  es: {
    stats: [
      { k: "12+", v: "Años de experiencia" },
      { k: "30+", v: "Países exportados" },
      { k: "250+", v: "Proyectos completados" },
      { k: "98%", v: "Satisfacción del cliente" },
    ],
    capabilities: {
      title: "Áreas Principales",
      subtitle: "Enfoque holístico en equipos industriales.",
      items: [
        { t: "Importación", d: "Abastecimiento global, costo óptimo y entrega rápida." },
        { t: "Exportación", d: "Apertura a nuevos mercados con crecimiento sostenible." },
        { t: "Manufactura", d: "Producción trazable, de calidad y conforme a normas." },
        { t: "Consultoría", d: "Estrategia, normativa, calidad y eficiencia." },
      ],
    },
    whyus: {
      title: "¿Por qué nosotros?",
      subtitle: "Procesos transparentes, comunicación rápida y orientación a resultados.",
      items: [
        { t: "Proceso de extremo a extremo", d: "Un solo contacto desde compras hasta entrega." },
        { t: "Calidad y Cumplimiento", d: "Conformidad total con ISO, CE y normativas." },
        { t: "Comunicación rápida", d: "Cotización y arranque el mismo día." },
      ],
    },
     cta: {
      title: "Trabajemos en tu proyecto",
      subtitle: "Cuéntanos tu necesidad; respondemos el mismo día.",
      cardTitle: "Cotización o Llamada inicial",
      cardDesc: "Completa el formulario; nuestro equipo te contactará.",
      button: "Contactar",
    },
  },

  ru: {
  stats: [
    { k: "12+", v: "Лет опыта" },
    { k: "30+", v: "Стран экспорта" },
    { k: "250+", v: "Реализованных проектов" },
    { k: "98%", v: "Удовлетворенность клиентов" },
  ],
  capabilities: {
    title: "Основные направления деятельности",
    subtitle: "Комплексный подход к промышленному оборудованию.",
    items: [
      { t: "Импорт", d: "Глобальные поставки, оптимальная стоимость и быстрая доставка." },
      { t: "Экспорт", d: "Выход на новые рынки и устойчивый рост." },
      { t: "Производство", d: "Соответствие стандартам, отслеживаемое и качественное производство." },
      { t: "Консалтинг", d: "Стратегия, нормативы, качество и эффективность." },
    ],
  },
  whyus: {
    title: "Почему выбирают нас?",
    subtitle: "Прозрачные процессы, быстрая связь и ориентированность на результат.",
    items: [
      { t: "Комплексный процесс", d: "От поставки до доставки через одну точку контакта." },
      { t: "Качество & Соответствие", d: "Полное соответствие ISO, CE и действующим нормативам." },
      { t: "Быстрая связь", d: "Предложение и запуск проекта в тот же день." },
    ],
  },
  cta: {
    title: "Давайте работать над вашим проектом",
    subtitle: "Опишите ваши потребности, мы свяжемся с вами в тот же день.",
    cardTitle: "Запрос предложения или предварительная встреча",
    cardDesc: "Заполните короткую форму, наша техническая команда свяжется с вами.",
    button: "Связаться",
  },
}

 
};

export default function Home() {
   const { locale } = useCountry();
  const t = dict[locale] || dict.en; // <-- BURADA TANIMLA

  return (
     <div>
    <Navbar />

    {/* HERO */}
    <div>
      <Hero />
    </div>

    {/* İSTATİSTİK ŞERİDİ */}
    <motion.div
      className="bg-white border-y border-gray-100"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container-max grid grid-cols-2 md:grid-cols-4">
        {t.stats.map((s, i) => (
          <motion.div key={i} className="py-6 text-center" variants={fadeInUp}>
            <div className="text-2xl font-semibold text-brand-700">{s.k}</div>
            <div className="text-sm text-gray-600">{s.v}</div>
          </motion.div>
        ))}
      </div>
    </motion.div>

    {/* ANA FAALİYETLER */}
    <Section
      id="capabilities"
      title={t.capabilities.title}
      subtitle={t.capabilities.subtitle}
    >
      <motion.div
        className="grid md:grid-cols-4 gap-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {t.capabilities.items.map((c, idx) => (
          <motion.div key={idx} className="card p-6" variants={fadeInUp}>
            <h3 className="font-semibold">{c.t}</h3>
            <p className="text-gray-600 mt-2">{c.d}</p>
          </motion.div>
        ))}
      </motion.div>
    </Section>

    {/* HİZMETLER SLIDER */}
    <div className="container-max">
      <ServicesSlider />
    </div>

    {/* NEDEN BİZ? */}
    <Section
      id="whyus"
      title={t.whyus.title}
      subtitle={t.whyus.subtitle}
    >
      <motion.div
        className="grid md:grid-cols-3 gap-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {t.whyus.items.map((b, i) => (
          <motion.div key={i} className="card p-6" variants={fadeInUp}>
            <h4 className="font-semibold">{b.t}</h4>
            <p className="text-gray-600 mt-2">{b.d}</p>
          </motion.div>
        ))}
      </motion.div>
    </Section>

    {/* CTA */}
    <Section
      id="cta"
      title={t.cta.title}
      subtitle={t.cta.subtitle}
    >
      <motion.div
        className="card p-6 flex flex-col md:flex-row items-center justify-between gap-4"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div>
          <h3 className="text-xl font-semibold">{t.cta.cardTitle}</h3>
          <p className="text-gray-600">{t.cta.cardDesc}</p>
        </div>
        <a href="/contact" className="btn">{t.cta.button}</a>
      </motion.div>
    </Section>

    <Footer />
  </div>
  );
}
