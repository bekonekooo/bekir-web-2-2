

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Section from "../components/Section";
import { useCountry } from "../context/CountryContext";
import AboutContent from "./AboutContent";

import { FiTarget, FiEye, FiShield, FiUsers, FiCheckCircle } from "react-icons/fi";

export const metadata = { title: "Hakkımızda | GLOBAL Orient Endüstriyel" };

export default function AboutPage() {

  return (
    <>
      <Navbar/>
<AboutContent/>

      <Footer/>
    </>
  );
}
