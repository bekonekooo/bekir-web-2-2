import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Section from "../components/Section";
import ServicesSlider from "../components/ServicesSlider";
import ProjectsContext from "./ProjectsContext";

export const metadata = { title: "Referanslar | GLOBAL ORIENT" };



export default function ProjectsPage() {
  return (
    <>
      <Navbar/>
     
      <ProjectsContext/>
      <Footer/>
    </>
  );
}
