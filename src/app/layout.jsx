import "./globals.css";
import Providers from "./provider";

export const metadata = {
  title: "GLOBAL ORIENT | İthalat • İhracat • Üretim • Danışmanlık",
  description:
    "Endüstriyel ekipmanlarda güvenilir çözüm ortağınız. İthalat, ihracat, üretim ve danışmanlık.",
  icons: { icon: "/logo.svg" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className="bg-gray-50 text-gray-800">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}