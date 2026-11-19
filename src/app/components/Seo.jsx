export default function SEO() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "GLOBAL ORIENT",
    logo: "/logo.svg",
    description: "Endüstriyel ekipman ithalat, ihracat, üretim ve danışmanlık."
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
