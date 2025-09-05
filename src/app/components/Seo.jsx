export default function SEO() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "GLOBAL ORIENT",
    url: "https://www.ornek.com",
    logo: "/logo.svg",
    sameAs: [
      "https://www.linkedin.com/company/ornek",
      "https://twitter.com/ornek"
    ],
    description: "Endüstriyel ekipman ithalat, ihracat, üretim ve danışmanlık."
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
