"use client";

import Section from "../components/Section";
import { FiTarget, FiEye, FiShield, FiUsers, FiCheckCircle } from "react-icons/fi";
import { useCountry } from "@/app/context/CountryContext";
import { motion } from "framer-motion";


const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeInScale = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};


// Sözlük
const dict = {
  tr: {
    chip: "Hakkımızda",
    heroTitle: "Mühendislik, şeffaflık ve güven üzerine kurulu bir yolculuk.",
    heroDesc:
      "ACME Endüstriyel; ithalat, ihracat, üretim ve danışmanlıkta uçtan uca değer sunar. Kalite, hız ve açık iletişim bizim iş yapış kültürümüzdür.",
    stats: [
      { k: "12+", v: "Yıl deneyim" },
      { k: "250+", v: "Tamamlanan proje" },
      { k: "30+", v: "Ülkeye ihracat" },
      { k: "98%", v: "Müşteri memnuniyeti" },
    ],
    mvvTitle: "Misyon, Vizyon ve Değerler",
    mvvSubtitle: "Ne üretiyorsak, verdiğimiz sözün arkasında durarak yapıyoruz.",
    mission: {
      title: "Misyon",
      desc: "Müşterilerimizin operasyonlarını hızlandıran, ölçülebilir değer üreten çözümler geliştirmek.",
    },
    vision: {
      title: "Vizyon",
      desc: "Küresel pazarda güven ve kalite denince akla gelen ilk çözüm ortağı olmak.",
    },
    values: {
      title: "Değerler",
      bullets: ["Şeffaflık ve güven", "Kalite ve mevzuat uyumu", "Hızlı iletişim ve sonuç odaklılık"],
    },
    timelineTitle: "Kısa Tarihçe",
    timelineSubtitle: "Büyümemizi belirleyen bazı dönüm noktaları.",
    timeline: [
      { y: "2012", t: "Kuruluş", d: "İstanbul’da ilk ofis ve operasyon ekibi." },
      { y: "2015", t: "İhracat Ağı", d: "10+ ülkeye düzenli sevkiyat." },
      { y: "2018", t: "Üretim Hattı", d: "ISO standartlarında üretim kabiliyeti." },
      { y: "2023", t: "Ar-Ge & Danışmanlık", d: "Teknik fizibilite ve verimlilik projeleri." },
    ],
    teamTitle: "Ekibimiz",
    teamSubtitle: "Çok disiplinli bir kadroyla hizmet veriyoruz.",
    team: [
      { n: "Ayşe Atıl", r: "Operasyon Müdürü" },
      { n: "Mert Deniz", r: "Dış Ticaret Uzmanı" },
      { n: "Selin Kar", r: "Kalite Mühendisi" },
    ],
    compliancesLabel: "Uygunluk & Standartlar:",
    compliances: ["ISO 9001", "CE", "RoHS"],
  },

  en: {
    chip: "About",
    heroTitle: "A journey built on engineering, transparency, and trust.",
    heroDesc:
      "ACME Industrial delivers end-to-end value in import, export, manufacturing and consulting. Quality, speed and open communication define our culture.",
    stats: [
      { k: "12+", v: "Years of experience" },
      { k: "250+", v: "Projects completed" },
      { k: "30+", v: "Countries exported" },
      { k: "98%", v: "Customer satisfaction" },
    ],
    mvvTitle: "Mission, Vision & Values",
    mvvSubtitle: "We stand behind every promise we make.",
    mission: {
      title: "Mission",
      desc: "Build solutions that accelerate our customers’ operations and create measurable value.",
    },
    vision: {
      title: "Vision",
      desc: "Be the first partner that comes to mind for trust and quality in global markets.",
    },
    values: {
      title: "Values",
      bullets: ["Transparency & trust", "Quality & compliance", "Fast communication & results"],
    },
    timelineTitle: "Milestones",
    timelineSubtitle: "Key moments that shaped our growth.",
    timeline: [
      { y: "2012", t: "Founded", d: "First office and ops team in Istanbul." },
      { y: "2015", t: "Export Network", d: "Regular shipments to 10+ countries." },
      { y: "2018", t: "Manufacturing Line", d: "ISO-compliant production capability." },
      { y: "2023", t: "R&D & Consulting", d: "Technical feasibility and efficiency programs." },
    ],
    teamTitle: "Our Team",
    teamSubtitle: "We serve with a multidisciplinary crew.",
    team: [
      { n: "Ayşe Atıl", r: "Operations Manager" },
      { n: "Mert Deniz", r: "Foreign Trade Specialist" },
      { n: "Selin Kar", r: "Quality Engineer" },
    ],
    compliancesLabel: "Compliance & Standards:",
    compliances: ["ISO 9001", "CE", "RoHS"],
  },

  de: {
    chip: "Über uns",
    heroTitle: "Eine Reise, gegründet auf Technik, Transparenz und Vertrauen.",
    heroDesc:
      "ACME Industrial liefert End-to-End-Mehrwert in Import, Export, Fertigung und Beratung. Qualität, Tempo und offene Kommunikation prägen unsere Kultur.",
    stats: [
      { k: "12+", v: "Jahre Erfahrung" },
      { k: "250+", v: "Abgeschlossene Projekte" },
      { k: "30+", v: "Exportländer" },
      { k: "98%", v: "Kundenzufriedenheit" },
    ],
    mvvTitle: "Mission, Vision & Werte",
    mvvSubtitle: "Wir stehen zu jedem gegebenen Versprechen.",
    mission: {
      title: "Mission",
      desc: "Lösungen bauen, die die Abläufe unserer Kunden beschleunigen und messbaren Wert schaffen.",
    },
    vision: {
      title: "Vision",
      desc: "Erster Partner für Vertrauen und Qualität in globalen Märkten sein.",
    },
    values: {
      title: "Werte",
      bullets: ["Transparenz & Vertrauen", "Qualität & Compliance", "Schnelle Kommunikation & Ergebnisse"],
    },
    timelineTitle: "Kurzchronik",
    timelineSubtitle: "Prägende Meilensteine unseres Wachstums.",
    timeline: [
      { y: "2012", t: "Gründung", d: "Erstes Büro und Ops-Team in Istanbul." },
      { y: "2015", t: "Exportnetz", d: "Regelmäßige Lieferungen in 10+ Länder." },
      { y: "2018", t: "Fertigungslinie", d: "ISO-konforme Fertigungskapazität." },
      { y: "2023", t: "F&E & Beratung", d: "Technische Machbarkeit und Effizienzprogramme." },
    ],
    teamTitle: "Team",
    teamSubtitle: "Wir arbeiten mit einem multidisziplinären Team.",
    team: [
      { n: "Ayşe Atıl", r: "Operations Managerin" },
      { n: "Mert Deniz", r: "Außenhandelsspezialist" },
      { n: "Selin Kar", r: "Qualitätsingenieurin" },
    ],
    compliancesLabel: "Konformität & Standards:",
    compliances: ["ISO 9001", "CE", "RoHS"],
  },

  fr: {
    chip: "À propos",
    heroTitle: "Un voyage fondé sur l’ingénierie, la transparence et la confiance.",
    heroDesc:
      "ACME Industrial offre une valeur de bout en bout dans l’import, l’export, la fabrication et le conseil. La qualité, la rapidité et la communication ouverte définissent notre culture.",
    stats: [
      { k: "12+", v: "Années d’expérience" },
      { k: "250+", v: "Projets réalisés" },
      { k: "30+", v: "Pays exportés" },
      { k: "98%", v: "Satisfaction client" },
    ],
    mvvTitle: "Mission, Vision & Valeurs",
    mvvSubtitle: "Nous respectons chaque promesse faite.",
    mission: {
      title: "Mission",
      desc: "Développer des solutions qui accélèrent les opérations de nos clients et créent une valeur mesurable.",
    },
    vision: {
      title: "Vision",
      desc: "Être le premier partenaire synonyme de confiance et de qualité sur les marchés mondiaux.",
    },
    values: {
      title: "Valeurs",
      bullets: ["Transparence & confiance", "Qualité & conformité", "Communication rapide & résultats"],
    },
    timelineTitle: "Chronologie",
    timelineSubtitle: "Moments clés qui ont façonné notre croissance.",
    timeline: [
      { y: "2012", t: "Création", d: "Premier bureau et équipe à Istanbul." },
      { y: "2015", t: "Réseau d’exportation", d: "Expéditions régulières vers 10+ pays." },
      { y: "2018", t: "Ligne de production", d: "Capacité de production conforme à l’ISO." },
      { y: "2023", t: "R&D & Conseil", d: "Projets de faisabilité technique et d’efficacité." },
    ],
    teamTitle: "Notre équipe",
    teamSubtitle: "Nous travaillons avec une équipe multidisciplinaire.",
    team: [
      { n: "Ayşe Atıl", r: "Directrice des opérations" },
      { n: "Mert Deniz", r: "Spécialiste du commerce extérieur" },
      { n: "Selin Kar", r: "Ingénieure qualité" },
    ],
    compliancesLabel: "Conformité & Normes :",
    compliances: ["ISO 9001", "CE", "RoHS"],
  },

  es: {
    chip: "Sobre nosotros",
    heroTitle: "Un viaje basado en la ingeniería, la transparencia y la confianza.",
    heroDesc:
      "ACME Industrial ofrece valor integral en importación, exportación, fabricación y consultoría. La calidad, la rapidez y la comunicación abierta definen nuestra cultura.",
    stats: [
      { k: "12+", v: "Años de experiencia" },
      { k: "250+", v: "Proyectos completados" },
      { k: "30+", v: "Países exportados" },
      { k: "98%", v: "Satisfacción del cliente" },
    ],
    mvvTitle: "Misión, Visión & Valores",
    mvvSubtitle: "Cumplimos cada promesa que hacemos.",
    mission: {
      title: "Misión",
      desc: "Construir soluciones que aceleren las operaciones de nuestros clientes y generen valor medible.",
    },
    vision: {
      title: "Visión",
      desc: "Ser el primer socio asociado a la confianza y la calidad en los mercados globales.",
    },
    values: {
      title: "Valores",
      bullets: ["Transparencia & confianza", "Calidad & cumplimiento", "Comunicación rápida & resultados"],
    },
    timelineTitle: "Hitos",
    timelineSubtitle: "Momentos clave que marcaron nuestro crecimiento.",
    timeline: [
      { y: "2012", t: "Fundación", d: "Primera oficina y equipo en Estambul." },
      { y: "2015", t: "Red de exportación", d: "Envíos regulares a más de 10 países." },
      { y: "2018", t: "Línea de producción", d: "Capacidad de producción conforme a ISO." },
      { y: "2023", t: "I+D & Consultoría", d: "Proyectos de viabilidad técnica y eficiencia." },
    ],
    teamTitle: "Nuestro equipo",
    teamSubtitle: "Trabajamos con un equipo multidisciplinario.",
    team: [
      { n: "Ayşe Atıl", r: "Directora de Operaciones" },
      { n: "Mert Deniz", r: "Especialista en comercio exterior" },
      { n: "Selin Kar", r: "Ingeniera de calidad" },
    ],
    compliancesLabel: "Cumplimiento & Normas:",
    compliances: ["ISO 9001", "CE", "RoHS"],
  },

  ru: {
    chip: "О нас",
    heroTitle: "Путь, основанный на инженерии, прозрачности и доверии.",
    heroDesc:
      "ACME Industrial предоставляет комплексные решения в области импорта, экспорта, производства и консалтинга. Качество, скорость и открытость — основа нашей культуры работы.",
    stats: [
      { k: "12+", v: "Лет опыта" },
      { k: "250+", v: "Реализованных проектов" },
      { k: "30+", v: "Стран экспорта" },
      { k: "98%", v: "Удовлетворенность клиентов" },
    ],
    mvvTitle: "Миссия, Видение и Ценности",
    mvvSubtitle: "Мы выполняем каждое данное обещание.",
    mission: {
      title: "Миссия",
      desc: "Разрабатывать решения, ускоряющие процессы клиентов и создающие измеримую ценность.",
    },
    vision: {
      title: "Видение",
      desc: "Стать первым партнером, ассоциирующимся с доверием и качеством на мировом рынке.",
    },
    values: {
      title: "Ценности",
      bullets: ["Прозрачность и доверие", "Качество и соответствие стандартам", "Быстрая коммуникация и результативность"],
    },
    timelineTitle: "Краткая история",
    timelineSubtitle: "Ключевые этапы, определившие наше развитие.",
    timeline: [
      { y: "2012", t: "Основание", d: "Первый офис и команда в Стамбуле." },
      { y: "2015", t: "Экспортная сеть", d: "Регулярные поставки в 10+ стран." },
      { y: "2018", t: "Производственная линия", d: "Производственные мощности по стандартам ISO." },
      { y: "2023", t: "R&D и консалтинг", d: "Проекты по технической эффективности и исследованиям." },
    ],
    teamTitle: "Наша команда",
    teamSubtitle: "Мы работаем с междисциплинарным коллективом.",
    team: [
      { n: "Айше Атыл", r: "Операционный директор" },
      { n: "Мерт Дениз", r: "Специалист по внешней торговле" },
      { n: "Селин Кар", r: "Инженер по качеству" },
    ],
    compliancesLabel: "Соответствие и стандарты:",
    compliances: ["ISO 9001", "CE", "RoHS"],
  },
};

  // fr / es istersen ekleriz


export default function AboutContent() {
  const { locale } = useCountry();
  const t = dict[locale] || dict.en;

 return (
  <>
    {/* HERO */}
    <motion.section
      className="container-max my-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
    >
      <motion.div className="card p-0 overflow-hidden" variants={fadeInScale}>
        <div className="grid md:grid-cols-2">
          {/* Sol metin */}
          <motion.div className="p-8 md:p-12" variants={fadeInUp}>
            <span className="inline-flex items-center gap-2 text-sm px-3 py-1 rounded-full bg-brand-50 text-brand-700 border border-brand-100">
              {t.chip}
            </span>
            <h1 className="mt-4 text-3xl md:text-4xl font-semibold">{t.heroTitle}</h1>
            <p className="mt-4 text-gray-700">{t.heroDesc}</p>

            {/* Mini istatistik kartları */}
            <motion.div className="mt-6 grid grid-cols-2 gap-4" variants={staggerContainer}>
              {t.stats.map((s, i) => (
                <motion.div
                  key={i}
                  className="rounded-xl border border-gray-100 bg-white p-4"
                  variants={fadeInUp}
                >
                  <div className="text-2xl font-semibold text-brand-700">{s.k}</div>
                  <div className="text-sm text-gray-600">{s.v}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Sağ görsel/gradient */}
          <motion.div
            className="relative min-h-[280px] md:min-h-full bg-gradient-to-br from-brand-100 to-brand-300"
            variants={fadeInUp}
          >
            <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_20%,white,transparent_60%),radial-gradient(circle_at_70%_80%,white,transparent_60%)]" />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/60 to-transparent" />
          </motion.div>
        </div>
      </motion.div>
    </motion.section>

    {/* Misyon • Vizyon • Değerler */}
    <Section title={t.mvvTitle} subtitle={t.mvvSubtitle}>
      <motion.div
        className="grid md:grid-cols-3 gap-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {[t.mission, t.vision, t.values].map((item, idx) => (
          <motion.div key={idx} className="card p-6" variants={fadeInUp}>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-brand-100 grid place-content-center">
                {idx === 0 && <FiTarget className="text-brand-700" />}
                {idx === 1 && <FiEye className="text-brand-700" />}
                {idx === 2 && <FiShield className="text-brand-700" />}
              </div>
              <h3 className="font-semibold">{item.title}</h3>
            </div>
            <p className="mt-3 text-gray-700">{item.desc || null}</p>
            {item.bullets && (
              <ul className="mt-3 text-gray-700 space-y-2 list-disc pl-5">
                {item.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            )}
          </motion.div>
        ))}
      </motion.div>
    </Section>

    {/* Kısa Tarihçe (Timeline) */}
    <Section title={t.timelineTitle} subtitle={t.timelineSubtitle}>
      <motion.ol className="relative border-s border-gray-200 ml-3" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
        {t.timeline.map((it, i) => (
          <motion.li key={i} className="ms-6 mb-8" variants={fadeInUp}>
            <span className="absolute -left-3.5 h-7 w-7 rounded-full bg-brand-600 grid place-content-center text-white text-xs">{it.y}</span>
            <h4 className="font-medium">{it.t}</h4>
            <p className="text-gray-600 mt-1">{it.d}</p>
          </motion.li>
        ))}
      </motion.ol>
    </Section>

    {/* Ekip Önizleme */}
    <Section title={t.teamTitle} subtitle={t.teamSubtitle}>
      <motion.div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
        {t.team.map((m, i) => (
          <motion.div key={i} className="card p-6 flex items-center gap-4" variants={fadeInUp}>
            <div className="h-14 w-14 rounded-full bg-gradient-to-br from-brand-200 to-brand-400 grid place-content-center text-white font-semibold">
              {m.n.split(" ").map(s => s[0]).slice(0,2).join("")}
            </div>
            <div>
              <div className="font-medium">{m.n}</div>
              <div className="text-sm text-gray-600">{m.r}</div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>

    {/* Sertifikalar / Uygunluk Şeridi */}
    <motion.section className="container-max mt-6" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeInUp}>
      <div className="card p-6 flex flex-wrap items-center justify-center gap-3 md:gap-6">
        <span className="inline-flex items-center gap-2 text-sm text-gray-600">
          <FiCheckCircle className="text-brand-700" /> {t.compliancesLabel}
        </span>
        {t.compliances.map((tag) => (
          <span key={tag} className="px-3 py-1 rounded border bg-gray-50 text-sm text-gray-700">{tag}</span>
        ))}
      </div>
    </motion.section>
  </>
);
}