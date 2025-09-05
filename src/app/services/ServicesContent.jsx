"use client";
import React, { useMemo } from "react";
import { motion } from "framer-motion";

import Section from '../components/Section'
import {useCountry} from '../context/CountryContext'

import {
  FiGlobe, FiTruck, FiCpu, FiCompass,
  FiCheckCircle, FiClipboard, FiShield
} from "react-icons/fi";



const dict = {
  tr: {
    hero: {
      chip: "Hizmetlerimiz",
      title: "İhtiyaca özel, uçtan uca endüstriyel çözümler.",
      desc: "Tedarikten teslimata; kalite, hız ve şeffaflık odaklı süreç yönetimi.",
      tags: ["İthalat", "İhracat", "Üretim", "Danışmanlık"],
    },
    packages: {
      title: "Çözüm Paketleri",
      subtitle: "Her bir hizmet, net kapsam ve ölçülebilir çıktılarla tasarlandı.",
      items: [
        {
          title: "İthalat",
          desc: "Global tedarik, tedarikçi denetimi, gümrük ve lojistik koordinasyonu.",
          bullets: ["Tedarikçi doğrulama", "Numune & kalite raporu", "Incoterms danışmanlığı"],
        },
        {
          title: "İhracat",
          desc: "Belgelendirme, paketleme/etiketleme, uluslararası teslim ve müşteri desteği.",
          bullets: ["Pazar araştırması", "Teklif & sözleşme", "Teslim & satış sonrası"],
        },
        {
          title: "Üretim",
          desc: "ISO standartlarında üretim, süreç izlenebilirliği ve kalite kontrol.",
          bullets: ["Teknik çizim/doğrulama", "Prototip & seri üretim", "Final kalite kontrol"],
        },
        {
          title: "Danışmanlık",
          desc: "Teknik/mali fizibilite, mevzuat uyumu ve süreç optimizasyonu.",
          bullets: ["Proses analizi", "Maliyet düşürme", "CE/UL/AT uygunluğu"],
        },
      ],
    },
    process: {
      title: "Süreç Nasıl İşliyor?",
      subtitle: "Tek irtibat noktasıyla uçtan uca yönetim.",
      steps: [
        { n: "01", title: "İhtiyaç Analizi", desc: "Teknik gereksinimleri ve hedefleri netleştiririz." },
        { n: "02", title: "Teklif & Sözleşme", desc: "Kapsamı, zaman planını ve maliyeti şeffafça belirleriz." },
        { n: "03", title: "Uygulama & Takip", desc: "Tedarik/üretim, kalite kontrol ve lojistiği koordine ederiz." },
        { n: "04", title: "Teslim & Sonrası", desc: "Belgelendirme, devreye alma ve satış sonrası desteği sağlarız." },
      ],
    },
    scope: {
      features: [
        { key: "docs", title: "Dokümantasyon", desc: "Test raporları, kalite kayıtları ve mevzuata uygun evrak akışı." },
        { key: "quality", title: "Kalite & Uyum", desc: "ISO 9001, CE/UL/AT uygunluğu ve tedarikçi doğrulama süreçleri." },
        { key: "logistics", title: "Lojistik Koordinasyon", desc: "Teslim şartlarına uygun, uçtan uca sevkiyat yönetimi." },
      ],
    },
    sectors: {
      title: "Hizmet Verdiğimiz Sektörler",
      subtitle: "Farklı dikeylerde edindiğimiz deneyimle hızlı adaptasyon.",
      items: ["Metalurji", "Gıda", "Su & Atık", "Lojistik", "Enerji", "Kimya", "Ambalaj"],
    },
    cta: {
      title: "Projenizi Konuşalım",
      subtitle: "Kısa bir ön görüşme planlayalım; aynı gün geri dönüş yapalım.",
      cardTitle: "Teklif veya Teknik Değerlendirme",
      cardDesc: "İhtiyacınızı kısaca iletin; ekibimiz size dönüş yapsın.",
      button: "İletişime Geç",
    },
  },

  en: {
    hero: {
      chip: "Our Services",
      title: "End-to-end industrial solutions tailored to your needs.",
      desc: "From sourcing to delivery: quality, speed, and transparency.",
      tags: ["Import", "Export", "Manufacturing", "Consulting"],
    },
    packages: {
      title: "Solution Packages",
      subtitle: "Each service is designed with clear scope and measurable outputs.",
      items: [
        {
          title: "Import",
          desc: "Global sourcing, supplier audits, customs and logistics coordination.",
          bullets: ["Supplier verification", "Samples & quality reports", "Incoterms advisory"],
        },
        {
          title: "Export",
          desc: "Certification, packaging/labeling, international delivery and customer support.",
          bullets: ["Market research", "Quotation & contract", "Delivery & after-sales"],
        },
        {
          title: "Manufacturing",
          desc: "ISO-compliant production, process traceability and quality control.",
          bullets: ["Technical drawing/validation", "Prototype & mass production", "Final quality check"],
        },
        {
          title: "Consulting",
          desc: "Technical/financial feasibility, compliance and process optimization.",
          bullets: ["Process analysis", "Cost reduction", "CE/UL/AT compliance"],
        },
      ],
    },
    process: {
      title: "How the Process Works",
      subtitle: "End-to-end management with a single point of contact.",
      steps: [
        { n: "01", title: "Needs Analysis", desc: "We clarify technical requirements and goals." },
        { n: "02", title: "Quote & Contract", desc: "We define scope, timeline and cost transparently." },
        { n: "03", title: "Execution & Tracking", desc: "We coordinate sourcing/production, QC and logistics." },
        { n: "04", title: "Delivery & Aftercare", desc: "Documentation, commissioning and after-sales support." },
      ],
    },
    scope: {
      features: [
        { key: "docs", title: "Documentation", desc: "Test reports, quality records and regulatory paperwork." },
        { key: "quality", title: "Quality & Compliance", desc: "ISO 9001, CE/UL/AT conformity and supplier verification." },
        { key: "logistics", title: "Logistics Coordination", desc: "End-to-end shipment management per delivery terms." },
      ],
    },
    sectors: {
      title: "Industries We Serve",
      subtitle: "Fast adaptation thanks to cross-vertical experience.",
      items: ["Metallurgy", "Food", "Water & Waste", "Logistics", "Energy", "Chemicals", "Packaging"],
    },
    cta: {
      title: "Let’s Discuss Your Project",
      subtitle: "Schedule a quick intro; we’ll get back the same day.",
      cardTitle: "Quote or Technical Evaluation",
      cardDesc: "Tell us briefly what you need; our team will reach out.",
      button: "Get in Touch",
    },
  },

  de: {
    hero: {
      chip: "Leistungen",
      title: "End-to-End-Industrie­lösungen, maßgeschneidert für Ihre Bedürfnisse.",
      desc: "Von Beschaffung bis Lieferung: Qualität, Tempo und Transparenz.",
      tags: ["Import", "Export", "Fertigung", "Beratung"],
    },
    packages: {
      title: "Lösungspakete",
      subtitle: "Jeder Service mit klarem Umfang und messbaren Ergebnissen.",
      items: [
        {
          title: "Import",
          desc: "Globales Sourcing, Lieferantenaudits, Zoll- und Logistikkoordination.",
          bullets: ["Lieferantenauthentifizierung", "Muster & Qualitätsberichte", "Incoterms-Beratung"],
        },
        {
          title: "Export",
          desc: "Zertifizierung, Verpackung/Kennzeichnung, internationale Lieferung und Support.",
          bullets: ["Marktanalyse", "Angebot & Vertrag", "Lieferung & After-Sales"],
        },
        {
          title: "Fertigung",
          desc: "ISO-konforme Produktion, Rückverfolgbarkeit und Qualitätskontrolle.",
          bullets: ["Technische Zeichnung/Validierung", "Prototyp & Serie", "Endkontrolle"],
        },
        {
          title: "Beratung",
          desc: "Technische/finanzielle Machbarkeit, Compliance und Prozessoptimierung.",
          bullets: ["Prozessanalyse", "Kostensenkung", "CE/UL/AT-Konformität"],
        },
      ],
    },
    process: {
      title: "Ablauf",
      subtitle: "End-to-End-Steuerung über einen zentralen Ansprechpartner.",
      steps: [
        { n: "01", title: "Bedarfsanalyse", desc: "Wir präzisieren Anforderungen und Ziele." },
        { n: "02", title: "Angebot & Vertrag", desc: "Transparenter Umfang, Zeitplan und Kosten." },
        { n: "03", title: "Umsetzung & Tracking", desc: "Koordination von Beschaffung/Produktion, QS und Logistik." },
        { n: "04", title: "Lieferung & Aftercare", desc: "Dokumentation, Inbetriebnahme und Support." },
      ],
    },
    scope: {
      features: [
        { key: "docs", title: "Dokumentation", desc: "Prüfberichte, Qualitätsaufzeichnungen und Unterlagen." },
        { key: "quality", title: "Qualität & Compliance", desc: "ISO 9001, CE/UL/AT und Lieferantenverifikation." },
        { key: "logistics", title: "Logistik­koordination", desc: "End-to-End-Transportmanagement gemäß Lieferkonditionen." },
      ],
    },
    sectors: {
      title: "Branchen",
      subtitle: "Schnelle Anpassung dank Erfahrung in mehreren Vertikalen.",
      items: ["Metallurgie", "Lebensmittel", "Wasser & Abfall", "Logistik", "Energie", "Chemie", "Verpackung"],
    },
    cta: {
      title: "Sprechen wir über Ihr Projekt",
      subtitle: "Kurzes Vorgespräch – Rückmeldung am selben Tag.",
      cardTitle: "Angebot oder Technische Bewertung",
      cardDesc: "Teilen Sie Ihren Bedarf – unser Team meldet sich.",
      button: "Kontakt aufnehmen",
    },
  },

  fr: {
    hero: {
      chip: "Nos services",
      title: "Des solutions industrielles de bout en bout, adaptées à vos besoins.",
      desc: "De l’approvisionnement à la livraison : qualité, rapidité et transparence.",
      tags: ["Importation", "Exportation", "Fabrication", "Conseil"],
    },
    packages: {
      title: "Offres clés en main",
      subtitle: "Chaque service propose un périmètre clair et des résultats mesurables.",
      items: [
        {
          title: "Importation",
          desc: "Achats mondiaux, audits fournisseurs, coordination douane et logistique.",
          bullets: ["Vérification fournisseur", "Échantillons & rapports qualité", "Conseil Incoterms"],
        },
        {
          title: "Exportation",
          desc: "Certification, emballage/étiquetage, livraison internationale et support.",
          bullets: ["Étude de marché", "Devis & contrat", "Livraison & après-vente"],
        },
        {
          title: "Fabrication",
          desc: "Production conforme ISO, traçabilité des processus et contrôle qualité.",
          bullets: ["Plan/validation technique", "Prototype & série", "Contrôle final"],
        },
        {
          title: "Conseil",
          desc: "Faisabilité technique/financière, conformité et optimisation des processus.",
          bullets: ["Analyse de processus", "Réduction des coûts", "Conformité CE/UL/AT"],
        },
      ],
    },
    process: {
      title: "Comment ça marche ?",
      subtitle: "Gestion de bout en bout avec un interlocuteur unique.",
      steps: [
        { n: "01", title: "Analyse du besoin", desc: "Nous clarifions les exigences et objectifs techniques." },
        { n: "02", title: "Devis & contrat", desc: "Périmètre, planning et coûts en toute transparence." },
        { n: "03", title: "Exécution & suivi", desc: "Coordination achats/production, CQ et logistique." },
        { n: "04", title: "Livraison & suite", desc: "Documentation, mise en service et support après-vente." },
      ],
    },
    scope: {
      features: [
        { key: "docs", title: "Documentation", desc: "Rapports d’essai, enregistrements qualité et conformité." },
        { key: "quality", title: "Qualité & Conformité", desc: "ISO 9001, CE/UL/AT et vérification des fournisseurs." },
        { key: "logistics", title: "Coordination logistique", desc: "Gestion des expéditions de bout en bout." },
      ],
    },
    sectors: {
      title: "Secteurs servis",
      subtitle: "Adaptation rapide grâce à une expérience multi-verticale.",
      items: ["Métallurgie", "Agroalimentaire", "Eau & Déchets", "Logistique", "Énergie", "Chimie", "Emballage"],
    },
    cta: {
      title: "Parlons de votre projet",
      subtitle: "Planifions un échange rapide ; retour dans la journée.",
      cardTitle: "Devis ou évaluation technique",
      cardDesc: "Présentez brièvement votre besoin ; notre équipe vous contacte.",
      button: "Nous contacter",
    },
  },

  es: {
    hero: {
      chip: "Servicios",
      title: "Soluciones industriales integrales adaptadas a tus necesidades.",
      desc: "De la compra a la entrega: calidad, rapidez y transparencia.",
      tags: ["Importación", "Exportación", "Manufactura", "Consultoría"],
    },
    packages: {
      title: "Paquetes de solución",
      subtitle: "Cada servicio tiene un alcance claro y resultados medibles.",
      items: [
        {
          title: "Importación",
          desc: "Abastecimiento global, auditorías de proveedores, aduanas y coordinación logística.",
          bullets: ["Verificación de proveedor", "Muestras e informes de calidad", "Asesoría Incoterms"],
        },
        {
          title: "Exportación",
          desc: "Certificación, empaque/etiquetado, entrega internacional y soporte.",
          bullets: ["Análisis de mercados", "Cotización y contrato", "Entrega y postventa"],
        },
        {
          title: "Manufactura",
          desc: "Producción conforme a ISO, trazabilidad de procesos y control de calidad.",
          bullets: ["Plano/validación técnica", "Prototipo y serie", "Control final"],
        },
        {
          title: "Consultoría",
          desc: "Viabilidad técnica/financiera, cumplimiento y optimización de procesos.",
          bullets: ["Análisis de procesos", "Reducción de costos", "Conformidad CE/UL/AT"],
        },
      ],
    },
    process: {
      title: "¿Cómo funciona?",
      subtitle: "Gestión integral con un único punto de contacto.",
      steps: [
        { n: "01", title: "Análisis de necesidades", desc: "Aclaramos requisitos y objetivos técnicos." },
        { n: "02", title: "Cotización y contrato", desc: "Alcance, cronograma y costos con transparencia." },
        { n: "03", title: "Ejecución y seguimiento", desc: "Coordinamos compras/producción, CQ y logística." },
        { n: "04", title: "Entrega y soporte", desc: "Documentación, puesta en marcha y postventa." },
      ],
    },
    scope: {
      features: [
        { key: "docs", title: "Documentación", desc: "Informes de ensayo, registros de calidad y normativa." },
        { key: "quality", title: "Calidad y Cumplimiento", desc: "ISO 9001, CE/UL/AT y verificación de proveedores." },
        { key: "logistics", title: "Coordinación logística", desc: "Gestión integral de envíos según condiciones de entrega." },
      ],
    },
    sectors: {
      title: "Sectores a los que servimos",
      subtitle: "Rápida adaptación gracias a la experiencia multi vertical.",
      items: ["Metalurgia", "Alimentos", "Agua y Residuos", "Logística", "Energía", "Química", "Empaque"],
    },
    cta: {
      title: "Hablemos de tu proyecto",
      subtitle: "Agendemos una breve llamada; respondemos el mismo día.",
      cardTitle: "Cotización o evaluación técnica",
      cardDesc: "Cuéntanos brevemente tu necesidad; te contactamos.",
      button: "Contactar",
    },
  },

  ru: {
  hero: {
    chip: "Наши услуги",
    title: "Промышленные решения под ключ, адаптированные под ваши потребности.",
    desc: "От поставки до доставки; управление процессами с акцентом на качество, скорость и прозрачность.",
    tags: ["Импорт", "Экспорт", "Производство", "Консалтинг"],
  },
  packages: {
    title: "Пакеты решений",
    subtitle: "Каждая услуга разработана с четким охватом и измеримыми результатами.",
    items: [
      {
        title: "Импорт",
        desc: "Глобальные поставки, аудит поставщиков, таможня и координация логистики.",
        bullets: ["Проверка поставщика", "Образец и отчет о качестве", "Консультации по Incoterms"],
      },
      {
        title: "Экспорт",
        desc: "Сертификация, упаковка/маркировка, международная доставка и поддержка клиентов.",
        bullets: ["Анализ рынка", "Коммерческое предложение и контракт", "Доставка и постпродажное сопровождение"],
      },
      {
        title: "Производство",
        desc: "Производство по стандартам ISO, отслеживаемость процессов и контроль качества.",
        bullets: ["Технический чертеж/проверка", "Прототипирование и серийное производство", "Финальный контроль качества"],
      },
      {
        title: "Консалтинг",
        desc: "Технико-финансовая экспертиза, соответствие нормативам и оптимизация процессов.",
        bullets: ["Анализ процессов", "Снижение затрат", "Соответствие CE/UL/AT"],
      },
    ],
  },
  process: {
    title: "Как работает процесс?",
    subtitle: "Управление от начала до конца через одну точку контакта.",
    steps: [
      { n: "01", title: "Анализ потребностей", desc: "Четко определяем технические требования и цели." },
      { n: "02", title: "Коммерческое предложение и контракт", desc: "Прозрачно устанавливаем объем, сроки и стоимость." },
      { n: "03", title: "Реализация и контроль", desc: "Координируем поставки/производство, контроль качества и логистику." },
      { n: "04", title: "Доставка и постобслуживание", desc: "Документация, ввод в эксплуатацию и постпродажная поддержка." },
    ],
  },
  scope: {
    features: [
      { key: "docs", title: "Документация", desc: "Тестовые отчеты, записи о качестве и документация в соответствии с нормативами." },
      { key: "quality", title: "Качество и соответствие", desc: "Соответствие ISO 9001, CE/UL/AT и процессы проверки поставщиков." },
      { key: "logistics", title: "Координация логистики", desc: "Управление поставками от начала до конца в соответствии с условиями доставки." },
    ],
  },
  sectors: {
    title: "Отрасли, в которых мы работаем",
    subtitle: "Быстрая адаптация благодаря опыту в различных вертикалях.",
    items: ["Металлургия", "Пищевая промышленность", "Вода и отходы", "Логистика", "Энергетика", "Химия", "Упаковка"],
  },
  cta: {
    title: "Обсудим ваш проект",
    subtitle: "Запланируем короткую предварительную встречу; ответим в тот же день.",
    cardTitle: "Коммерческое предложение или техническая оценка",
    cardDesc: "Кратко опишите ваши потребности; наша команда свяжется с вами.",
    button: "Связаться",
  },
},



};

function IconForIndex(idx) {
  const map = [FiGlobe, FiTruck, FiCpu, FiCompass];
  const Ico = map[idx] ?? FiCheckCircle;
  return <Ico className="text-brand-700" />;
}

// Framer Motion Animasyon Variants
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.75 }
  })
};

const ServicesContent = () => {
  const { locale } = useCountry();
  const t = dict[locale] || dict.en;

  const items = useMemo(() => t.packages.items, [t]);

  return (
    <div key={locale}>
      {/* Üst Bant: Hero */}
      <motion.section
        className="container-max my-12"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <div className="card p-0 overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12">
              <motion.span
                className="inline-flex items-center gap-2 text-sm px-3 py-1 rounded-full bg-brand-50 text-brand-700 border border-brand-100"
                variants={fadeUp}
              >
                {t.hero.chip}
              </motion.span>
              <motion.h1
                className="mt-4 text-3xl md:text-4xl font-semibold"
                variants={fadeUp}
              >
                {t.hero.title}
              </motion.h1>
              <motion.p className="mt-4 text-gray-700" variants={fadeUp}>
                {t.hero.desc}
              </motion.p>
              <motion.div className="mt-6 flex flex-wrap gap-3" variants={fadeUp}>
                {t.hero.tags.map((tag, idx) => (
                  <motion.span
                    key={tag}
                    className="px-3 py-1 rounded border bg-gray-50 text-sm text-gray-700"
                    custom={idx}
                    variants={fadeUp}
                  >
                    {tag}
                  </motion.span>
                ))}
              </motion.div>
            </div>
            <div className="relative min-h-[240px] bg-gradient-to-br from-brand-100 to-brand-300">
              <motion.div
                className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_20%,white,transparent_60%),radial-gradient(circle_at_70%_80%,white,transparent_60%)]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                transition={{ duration: 1 }}
              />
              <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white/60 to-transparent" />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Çözüm Paketleri */}
      <Section title={t.packages.title} subtitle={t.packages.subtitle}>
        <motion.div
          className="grid md:grid-cols-2 gap-6"
          initial="hidden"
          animate="visible"
        >
          {items.map((s, i) => (
            <motion.div
              key={i}
              className="card p-6 hover:shadow-lg transition-shadow"
              custom={i}
              variants={fadeUp}
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-brand-100 grid place-content-center">
                  {IconForIndex(i)}
                </div>
                <h3 className="text-xl font-semibold">{s.title}</h3>
              </div>
              <p className="text-gray-700 mt-3">{s.desc}</p>
              <ul className="mt-4 space-y-2">
                {s.bullets.map((b, idx) => (
                  <motion.li key={idx} className="flex items-start gap-2" variants={fadeUp} custom={idx}>
                    <FiCheckCircle className="mt-1 shrink-0 text-brand-700" />
                    <span className="text-gray-700">{b}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Süreç Nasıl İşliyor? */}
      <Section title={t.process.title} subtitle={t.process.subtitle}>
        <motion.div className="grid md:grid-cols-4 gap-6" initial="hidden" animate="visible">
          {t.process.steps.map((step, i) => (
            <motion.div key={i} className="card p-6" custom={i} variants={fadeUp}>
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-600 text-white font-semibold">
                {step.n}
              </div>
              <h4 className="mt-4 font-semibold">{step.title}</h4>
              <p className="text-gray-600 mt-1">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Kapsam & Güvence */}
      <Section title="" subtitle="">
        <motion.div className="card p-6 grid md:grid-cols-3 gap-6" initial="hidden" animate="visible">
          {t.scope.features.map((f, i) => (
            <motion.div key={f.key} className="flex items-start gap-3" custom={i} variants={fadeUp}>
              <div className="h-10 w-10 rounded-xl bg-brand-100 grid place-content-center">
                {f.key === "docs" ? <FiClipboard className="text-brand-700" /> :
                 f.key === "quality" ? <FiShield className="text-brand-700" /> :
                 <FiTruck className="text-brand-700" />}
              </div>
              <div>
                <div className="font-semibold">{f.title}</div>
                <p className="text-gray-600 text-sm">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Sektörler */}
      <Section title={t.sectors.title} subtitle={t.sectors.subtitle}>
        <motion.div className="flex flex-wrap gap-2" initial="hidden" animate="visible">
          {t.sectors.items.map((s, i) => (
            <motion.span
              key={s}
              className="px-3 py-1 rounded border bg-gray-50 text-sm text-gray-700"
              custom={i}
              variants={fadeUp}
            >
              {s}
            </motion.span>
          ))}
        </motion.div>
      </Section>

      {/* CTA */}
      <Section id="cta" title={t.cta.title} subtitle={t.cta.subtitle}>
        <motion.div className="card p-6 flex flex-col md:flex-row items-center justify-between gap-4" initial="hidden" animate="visible" variants={fadeUp}>
          <div>
            <h3 className="text-xl font-semibold">{t.cta.cardTitle}</h3>
            <p className="text-gray-600">{t.cta.cardDesc}</p>
          </div>
          <a href="/contact" className="btn">{t.cta.button}</a>
        </motion.div>
      </Section>
    </div>
  );
};

export default ServicesContent;
