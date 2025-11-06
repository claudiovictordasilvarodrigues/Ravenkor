import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Habilidades from "./components/Habilidades";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <main style={{ minHeight: "calc(100vh - 160px)" }}>
        <About />
        <Habilidades />
        <Contact />
      </main>
      <Footer />
    </>
  );
}