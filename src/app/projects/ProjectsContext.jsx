"use client";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import Section from "../components/Section";
import { useCountry } from "../context/CountryContext";
 // dict yolunu kendi projenize göre ayarlayın

const dict = {
  tr: {
    title: "Referans Projeler",
    subtitle: "Seçili çalışmalarımızdan bazıları.",
    items: [
      { name: "Çelik Haddehane Modernizasyonu", sector: "Metalurji", result: "Enerjide %12 tasarruf" },
      { name: "Gıda Dolum Hattı", sector: "Gıda", result: "Kapasite %28 artış" },
      { name: "Pompa-İstasyon Revizyonu", sector: "Su & Atık", result: "Arıza %40 azalma" },
      { name: "Paketleme Otomasyonu", sector: "Lojistik", result: "Hata oranı %0,7" },
    ],
    labels: { sector: "Sektör", result: "Sonuç" },
  },

  en: {
    title: "Reference Projects",
    subtitle: "Some of our selected works.",
    items: [
      { name: "Steel Rolling Mill Modernization", sector: "Metallurgy", result: "12% energy savings" },
      { name: "Food Filling Line", sector: "Food", result: "28% capacity increase" },
      { name: "Pump Station Overhaul", sector: "Water & Waste", result: "40% fewer breakdowns" },
      { name: "Packaging Automation", sector: "Logistics", result: "0.7% error rate" },
    ],
    labels: { sector: "Sector", result: "Result" },
  },

  de: {
    title: "Referenzprojekte",
    subtitle: "Einige unserer ausgewählten Arbeiten.",
    items: [
      { name: "Modernisierung Walzwerk", sector: "Metallurgie", result: "12% Energieeinsparung" },
      { name: "Lebensmittelabfüllanlage", sector: "Lebensmittel", result: "28% Kapazitätssteigerung" },
      { name: "Pumpstation-Überholung", sector: "Wasser & Abfall", result: "40% weniger Ausfälle" },
      { name: "Verpackungsautomatisierung", sector: "Logistik", result: "0,7% Fehlerquote" },
    ],
    labels: { sector: "Branche", result: "Ergebnis" },
  },

  fr: {
    title: "Projets de référence",
    subtitle: "Quelques-unes de nos réalisations sélectionnées.",
    items: [
      { name: "Modernisation du laminoir à acier", sector: "Métallurgie", result: "12% d’économie d’énergie" },
      { name: "Ligne de remplissage alimentaire", sector: "Agroalimentaire", result: "28% d’augmentation de capacité" },
      { name: "Révision de station de pompage", sector: "Eau & Déchets", result: "40% de pannes en moins" },
      { name: "Automatisation de l’emballage", sector: "Logistique", result: "0,7% taux d’erreur" },
    ],
    labels: { sector: "Secteur", result: "Résultat" },
  },

  es: {
    title: "Proyectos de referencia",
    subtitle: "Algunos de nuestros trabajos seleccionados.",
    items: [
      { name: "Modernización de laminador de acero", sector: "Metalurgia", result: "12% ahorro de energía" },
      { name: "Línea de llenado de alimentos", sector: "Alimentos", result: "28% aumento de capacidad" },
      { name: "Revisión de estación de bombeo", sector: "Agua y Residuos", result: "40% menos averías" },
      { name: "Automatización de empaques", sector: "Logística", result: "0,7% tasa de error" },
    ],
    labels: { sector: "Sector", result: "Resultado" },
  },
};


const ProjectsContext = () => {
  const { locale } = useCountry();
  const t = dict[locale] || dict.en;

  // Framer Motion variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: 450 }, // sağdan dışarıdan geliyor gibi
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  return (
    <div key={locale}>
      <Section title={t.title} subtitle={t.subtitle}>
        <motion.div
          className="grid md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {t.items.map((p, i) => (
            <motion.div
              key={i}
              className="card p-6"
              variants={cardVariants}
            >
              <h3 className="font-semibold">{p.name}</h3>
              <p className="text-gray-600 mt-2">
                {t.labels.sector}: {p.sector}
              </p>
              <p className="text-gray-700 mt-1">
                {t.labels.result}: {p.result}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Section>
    </div>
  );
};

export default ProjectsContext;
