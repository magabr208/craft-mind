import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Warnings from "./components/Warnings";
import Departments from "./components/Departments";
import MarqueeDepartments from "./components/MarqueeDepartments";
import Footer from "./components/Footer";
import LaptopHero from "./components/LaptopHero";
import TitlesWithSideImage from "./components/TitlesWithSideImage";
import TitlesWithSideImageReversed from "./components/TitlesWithSideImageReversed";
import TitlesWithSideImageRight from "./components/TitlesWithSideImageRight";
import MegaFooter from "./components/MegaFooter";






export default function App() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto p-6 flex flex-col md:flex-row items-center justify-between gap-10 pt-24">
        <Hero />
      
      </main>
       <LaptopHero />
      <Benefits />
      <Warnings />
      <Departments />
      <MarqueeDepartments />
      <TitlesWithSideImage />
      <TitlesWithSideImageReversed />
      <TitlesWithSideImageRight />
      <Footer />
      <MegaFooter/>
    </>
  );
}