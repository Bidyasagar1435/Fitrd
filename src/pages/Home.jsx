import Footer from "@/components/Footer";
import Features from "@/components/Features";
import FloatingShapes from "@/components/FloatingShapes";
import Hero from "@/components/Hero";
import Program from "@/components/Pricing";
import React from "react";
import Contact from "@/components/Contact";

function Home() {
  return (
    <>
      <Hero />
      <FloatingShapes />
      <Features />
      <Program />
      <Contact />
      <Footer />
    </>
  );
}
export default Home;
