"use client";
import { useState } from "react";
import { useCountry } from "@/app/context/CountryContext";


const dict = {
  tr: {
    name: "Ad Soyad",
    email: "E-posta",
    company: "Firma (opsiyonel)",
    subject: "Konu",
    message: "Mesajınız",
    send: "Gönder",
    success: "Teşekkürler! (Demo) Mesajınız konsola yazdırıldı.",
  },
  en: {
    name: "Full Name",
    email: "Email",
    company: "Company (optional)",
    subject: "Subject",
    message: "Your message",
    send: "Send",
    success: "Thanks! (Demo) Your message was logged to console.",
  },
  de: {
    name: "Vollständiger Name",
    email: "E-Mail",
    company: "Firma (optional)",
    subject: "Betreff",
    message: "Ihre Nachricht",
    send: "Senden",
    success: "Danke! (Demo) Ihre Nachricht wurde in die Konsole geloggt.",
  },
  fr: {
    name: "Nom complet",
    email: "E-mail",
    company: "Société (optionnel)",
    subject: "Objet",
    message: "Votre message",
    send: "Envoyer",
    success: "Merci ! (Démo) Votre message a été enregistré dans la console.",
  },
  es: {
    name: "Nombre completo",
    email: "Correo electrónico",
    company: "Empresa (opcional)",
    subject: "Asunto",
    message: "Tu mensaje",
    send: "Enviar",
    success: "¡Gracias! (Demo) Tu mensaje se registró en la consola.",
  },
};

export default function ContactForm() {
  const { locale } = useCountry();
  const t = dict[locale] || dict.en;

  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    console.log("Form data (demo):", data);
    setSent(true);
  }

  return (
    <form key={locale} onSubmit={handleSubmit} className="card p-6 grid gap-4">
      <div className="grid md:grid-cols-2 gap-4">
        <input required name="name" className="card px-3 py-2" placeholder={t.name} />
        <input required type="email" name="email" className="card px-3 py-2" placeholder={t.email} />
      </div>
      <input name="company" className="card px-3 py-2" placeholder={t.company} />
      <input required name="subject" className="card px-3 py-2" placeholder={t.subject} />
      <textarea required name="message" rows={5} className="card px-3 py-2" placeholder={t.message} />
      <button className="btn" type="submit">{t.send}</button>
      {sent && (
        <p className="text-green-700" aria-live="polite">
          {t.success}
        </p>
      )}
    </form>
  );
}
