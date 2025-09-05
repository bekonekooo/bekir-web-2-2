"use client";

import Section from "../components/Section";
import FaqAccordion from "./fagAccordion";
import { useCountry } from "@/app/context/CountryContext";

// 5 dil sözlüğü
const dict = {
  tr: {
    title: "Sıkça Sorulan Sorular",
    faqs: [
      { q: "Teklif süreciniz nasıl ilerliyor?", a: "İhtiyaç formu → aynı gün ön görüşme → 48 saat içinde teklif." },
      { q: "Minimum sipariş miktarı var mı?", a: "Ürün gruplarına göre değişebilir; çoğu parça için esneğiz." },
      { q: "Kalite belgeleriniz neler?", a: "ISO 9001, tedarikçi doğrulama, test raporları ve CE uygunluğu." },
      { q: "Lojistik ve gümrükte destek veriyor musunuz?", a: "Evet, evrak ve süreçlerin tamamını koordine ediyoruz." },
    ],
  },
  en: {
    title: "Frequently Asked Questions",
    faqs: [
      { q: "How does your quoting process work?", a: "Need form → same-day intro call → quote within 48 hours." },
      { q: "Is there a minimum order quantity?", a: "Depends on product groups; we’re flexible for most parts." },
      { q: "What quality certificates do you hold?", a: "ISO 9001, supplier verification, test reports and CE compliance." },
      { q: "Do you handle logistics and customs?", a: "Yes, we coordinate all paperwork and processes end-to-end." },
    ],
  },
  de: {
    title: "Häufig gestellte Fragen",
    faqs: [
      { q: "Wie läuft Ihr Angebotsprozess ab?", a: "Bedarfsformular → Gespräch am selben Tag → Angebot binnen 48 Std." },
      { q: "Gibt es eine Mindestbestellmenge?", a: "Je nach Produktgruppe; bei den meisten Teilen flexibel." },
      { q: "Welche Qualitätszertifikate haben Sie?", a: "ISO 9001, Lieferantenprüfung, Prüfberichte und CE-Konformität." },
      { q: "Übernehmen Sie Logistik und Zoll?", a: "Ja, wir koordinieren die Unterlagen und Prozesse End-to-End." },
    ],
  },
  fr: {
    title: "Questions fréquentes",
    faqs: [
      { q: "Comment se déroule votre processus de devis ?", a: "Formulaire de besoin → échange le jour même → devis sous 48h." },
      { q: "Y a-t-il une quantité minimale de commande ?", a: "Selon les familles de produits ; flexibles pour la plupart des pièces." },
      { q: "Quelles certifications qualité avez-vous ?", a: "ISO 9001, vérification fournisseurs, rapports d’essai et conformité CE." },
      { q: "Gérez-vous la logistique et la douane ?", a: "Oui, nous coordonnons l’ensemble des formalités et processus." },
    ],
  },
  es: {
    title: "Preguntas frecuentes",
    faqs: [
      { q: "¿Cómo funciona su proceso de cotización?", a: "Formulario de necesidad → llamada el mismo día → cotización en 48 h." },
      { q: "¿Existe cantidad mínima de pedido?", a: "Depende del producto; solemos ser flexibles en la mayoría." },
      { q: "¿Qué certificaciones de calidad tienen?", a: "ISO 9001, verificación de proveedores, informes y cumplimiento CE." },
      { q: "¿Manejan logística y aduanas?", a: "Sí, coordinamos toda la documentación y el proceso de punta a punta." },
    ],
  },
  ru: {
  title: "Часто задаваемые вопросы",
  faqs: [
    { q: "Как проходит процесс составления коммерческого предложения?", a: "Форма потребностей → предварительная встреча в тот же день → предложение в течение 48 часов." },
    { q: "Есть ли минимальный объем заказа?", a: "Зависит от групп продуктов; для большинства деталей мы гибки." },
    { q: "Какие у вас сертификаты качества?", a: "ISO 9001, проверка поставщиков, тестовые отчеты и соответствие CE." },
    { q: "Оказываете ли вы поддержку в логистике и таможне?", a: "Да, мы координируем все документы и процессы." },
  ],
},

};

export default function FAQContent() {
  const { locale } = useCountry();
  const t = dict[locale] || dict.en;

  return (
    <Section title={t.title}>
      <FaqAccordion faqs={t.faqs} />
    </Section>
  );
}