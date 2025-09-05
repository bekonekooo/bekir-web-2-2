"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useCountry } from "../../app/context/CountryContext"; 
import Image from "next/image";

// Basit sözlük (istersen ayrı dosyaya taşıyabiliriz)
const dict = {
  tr: {
    title_1: "Endüstriyel Ekipmanlarda ",
    title_bold: "Güvenilir",
    title_2: " Çözüm Ortağınız",
    subtitle:
      "İthalat, ihracat, üretim ve danışmanlıkta uçtan uca değer sunuyor; kalite, hız ve şeffaflıkla ilerliyoruz.",
    cta_services: "Hizmetlerimiz",
    cta_quote: "Teklif İste",
  },
  en: {
    title_1: "Your ",
    title_bold: "Trusted",
    title_2: " Partner in Industrial Equipment",
    subtitle:
      "We deliver end-to-end value in import, export, manufacturing and consulting—with quality, speed and transparency.",
    cta_services: "Our Services",
    cta_quote: "Get a Quote",
  },
  de: {
    title_1: "Ihr ",
    title_bold: "Zuverlässiger",
    title_2: " Partner für Industrieausrüstung",
    subtitle:
      "Wir bieten End-to-End-Mehrwert in Import, Export, Fertigung und Beratung – mit Qualität, Tempo und Transparenz.",
    cta_services: "Leistungen",
    cta_quote: "Angebot anfordern",
  },
  fr: {
    title_1: "Votre partenaire ",
    title_bold: "Fiable",
    title_2: " en équipements industriels",
    subtitle:
      "Valeur de bout en bout en import, export, fabrication et conseil — avec qualité, rapidité et transparence.",
    cta_services: "Nos services",
    cta_quote: "Demander un devis",
  },
  es: {
    title_1: "Tu socio ",
    title_bold: "Confiable",
    title_2: " en equipos industriales",
    subtitle:
      "Aportamos valor integral en importación, exportación, manufactura y consultoría—con calidad, rapidez y transparencia.",
    cta_services: "Servicios",
    cta_quote: "Solicitar Cotización",
  },
  ru: {
  title_1: "Ваш ",
  title_bold: "Надежный",
  title_2: " партнер в сфере промышленного оборудования",
  subtitle:
    "Мы предоставляем комплексные решения в области импорта, экспорта, производства и консалтинга — с качеством, скоростью и прозрачностью.",
  cta_services: "Наши услуги",
  cta_quote: "Запросить предложение",
},
};



export default function Hero() {
  const { locale } = useCountry();
  const t = dict[locale] || dict.en;
  console.log("HERO locale:", locale);

  return (
    <div className="relative overflow-hidden">
      <div key={locale} className="relative overflow-hidden">
   <div className="absolute inset-0 -z-10">
  <Image
    src="/photos/heroPhoto.jpg"
    alt="Hero Background"
    fill
    className="object-cover"
    priority // ilk yüklemede net gelsin
  />
</div>
      <div className="bg-white/60 backdrop-blur-sm">
        <div className="container-max py-20 md:py-28">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-semibold max-w-3xl"
          >
            {t.title_1}
            <span className="text-brand-700">{t.title_bold}</span>
            {t.title_2}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mt-4 text-lg text-gray-700 max-w-2xl"
          >
            {t.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-8 flex gap-3"
          >
            <Link href="/services" className="btn">
              {t.cta_services}
            </Link>
            <Link href="/contact" className="btn-outline">
              {t.cta_quote}
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
    </div>
  );
}