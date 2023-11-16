import { useEffect, useState } from "react";
import About from "../components/About";
import BackToTop from "../components/BackToTop";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Skills from "../components/Skills";

export default function Home() {
  const [displayTop, setDisplayTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setDisplayTop(true);
      } else {
        setDisplayTop(false);
      }
    });
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Contact />
      <Footer />
      {displayTop ? <BackToTop /> : null}
    </>
  );
}
