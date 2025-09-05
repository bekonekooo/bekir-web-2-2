import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Section from "../components/Section";
import ServicesContent from "./ServicesContent";

 export const metadata = { title: "Hizmetler | ACME Endüstriyel" };


export default function ServicesPage() {


  return (
    <>
      <Navbar />
      <ServicesContent />
    
      <Footer />
    </>
  );
}