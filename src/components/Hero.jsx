import React from "react";
import HeroBg from "../assets/hero-bg.png";
import HeroImg from "../assets/hero-img.png";
import Header from "./Header";
import { Badge } from "./ui/badge";

function Hero() {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-slate-900 min-h-screen text-white overflow-x-hidden">
        {/* Background img */}
        <div className="absolute inset-0 -z-10">
          <img src={HeroBg} alt="Fitness background" className="object-cover w-full h-full" />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* foreground content */}
        <Header />

        
      </div>
    </>
  );
}
export default Hero;
