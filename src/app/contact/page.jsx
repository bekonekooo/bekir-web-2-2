import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactContext from "./ContactContext";

export const metadata = { title: "İletişim | ACME Endüstriyel" };

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <ContactContext />
      <Footer />
    </>
  );
}
