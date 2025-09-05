import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Section from "../components/Section";
import FAQContent from "./FaqContext";

export const metadata = { title: "SSS | GLOBAL ORIENT" };

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <FAQContent />
      <Footer />
    </>
  );
}