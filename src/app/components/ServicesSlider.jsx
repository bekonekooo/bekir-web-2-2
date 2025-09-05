"use client";
import { useState, useEffect } from "react";
import { useCountry } from "../../app/context/CountryContext";

// Dil sözlüğü
const dict = {
  tr: {
    heading: "Hizmetlerimiz",
    items: [
      { title: "İthalat", text: "Global tedarik, gümrük ve lojistikte uçtan uca çözüm." },
      { title: "İhracat", text: "Pazar analizi, belgelendirme, teslim ve satış sonrası desteği." },
      { title: "Üretim", text: "ISO standartlarında üretim, kalite kontrol ve izlenebilirlik." },
      { title: "Danışmanlık", text: "Teknik fizibilite, maliyet optimizasyonu ve mevzuat uyumu." },
    ],
  },
  en: {
    heading: "Our Services",
    items: [
      { title: "Import", text: "End-to-end solutions in global sourcing, customs, and logistics." },
      { title: "Export", text: "Market analysis, certification, delivery, and after-sales support." },
      { title: "Manufacturing", text: "ISO-compliant production, quality control, and traceability." },
      { title: "Consulting", text: "Technical feasibility, cost optimization, and regulatory compliance." },
    ],
  },
  de: {
    heading: "Leistungen",
    items: [
      { title: "Import", text: "End-to-End-Lösungen in Beschaffung, Zoll und Logistik." },
      { title: "Export", text: "Marktanalyse, Zertifizierung, Lieferung und After-Sales-Support." },
      { title: "Fertigung", text: "ISO-konforme Produktion, Qualitätskontrolle und Rückverfolgbarkeit." },
      { title: "Beratung", text: "Technische Machbarkeit, Kostenoptimierung und Compliance." },
    ],
  },
  fr: {
    heading: "Nos services",
    items: [
      { title: "Importation", text: "Solutions de bout en bout : achats, douane et logistique." },
      { title: "Exportation", text: "Analyse de marché, certification, livraison et support après-vente." },
      { title: "Fabrication", text: "Production conforme aux normes, contrôle qualité et traçabilité." },
      { title: "Conseil", text: "Faisabilité technique, optimisation des coûts et conformité." },
    ],
  },
  es: {
    heading: "Servicios",
    items: [
      { title: "Importación", text: "Soluciones integrales en compras, aduanas y logística." },
      { title: "Exportación", text: "Análisis de mercado, certificación, entrega y postventa." },
      { title: "Manufactura", text: "Producción conforme a ISO, control de calidad y trazabilidad." },
      { title: "Consultoría", text: "Viabilidad técnica, optimización de costos y cumplimiento normativo." },
    ],
  },
};

export default function ServicesSlider() {
  const { locale } = useCountry();
  const t = dict[locale] || dict.en;

  const [i, setI] = useState(0);

  // Dil değişince ilk slayta dön
  useEffect(() => {
    setI(0);
  }, [locale]);

  // Otomatik geçiş (dil veya eleman sayısı değişince yeniden kur)
  useEffect(() => {
    const len = t.items.length;
    const id = setInterval(() => setI((p) => (p + 1) % len), 4000);
    return () => clearInterval(id);
  }, [t.items]);

  return (
    <div key={locale} className="card p-6 md:p-8">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">{t.heading}</h3>
        <div className="flex gap-2">
          {t.items.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              className={`h-2 w-2 rounded-full ${i === idx ? "bg-brand-600" : "bg-gray-300"}`}
              aria-label={`slide ${idx + 1}`}
              aria-current={i === idx ? "true" : "false"}
            />
          ))}
        </div>
      </div>

      <div className="mt-4">
        <div className="text-brand-700 font-medium">{t.items[i].title}</div>
        <p className="text-gray-700 mt-1">{t.items[i].text}</p>
      </div>
    </div>
  );
}