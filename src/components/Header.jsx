import React from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { CupSoda, House, Phone, UtensilsCrossed } from "lucide-react";
import { GlassButton, PrimaryButton } from "./Reusable";

function Header() {
  return (
    <>
      {/* desktop navbar */}
      <header className="fixed top-6 left-1/2 transform hidden md:block -translate-x-1/2 z-50 text-nowrap">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full px-8 py-2 flex items-center justify-between gap-8">
          <Link href="/" className="mr-10 md:mr-20">
            <img
              src={Logo}
              alt="Fitrd Logo"
              className="min-w-20 object-cover"
              width={80}
              height={20}
            />
          </Link>

          <div className="hidden md:flex space-x-6">
            <Link
              href="#features"
              className="text-white font-md transition-all duration-300 hover:text-cyan-400 cursor-pointer"
            >
              Feature
            </Link>
            <Link
              href="#pricing"
              className="text-white font-md transition-all duration-300 hover:text-cyan-400 cursor-pointer"
            >
              Pricing
            </Link>
            <Link
              href="#contact"
              className="text-white font-md transition-all duration-300 hover:text-cyan-400 cursor-pointer"
            >
              Contact
            </Link>
          </div>
          <div className="flex items-center gap-3 ml-10 md:ml-20">
            <GlassButton>
              <span>Login</span>
            </GlassButton>
            <PrimaryButton>
              <span>Sign Up</span>
            </PrimaryButton>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navbar */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-black/90 backdrop-blur-md md:hidden">
        <div className="flex items-center justify-around py-3">
          <Link
            to="/"
            className="flex flex-col items-center gap-1 text-white transition hover:text-yellow-400"
          >
            <House size={20} />
            <span className="text-xs">Home</span>
          </Link>
          <Link
            to="/"
            className="flex flex-col items-center gap-1 text-white transition hover:text-yellow-400"
          >
            <House size={20} />
            <span className="text-xs">Programs</span>
          </Link>

          <Link
            to="/menu"
            className="flex flex-col items-center gap-1 text-white transition hover:text-yellow-400"
          >
            <UtensilsCrossed size={20} />
            <span className="text-xs">Trainer</span>
          </Link>

          <Link
            to="/about"
            className="flex flex-col items-center gap-1 text-white transition hover:text-yellow-400"
          >
            <CupSoda size={20} />
            <span className="text-xs">Pricing</span>
          </Link>

          <Link
            to="/"
            className="flex flex-col items-center gap-1 text-white transition hover:text-yellow-400"
          >
            <Phone size={20} />
            <span className="text-xs">Contact</span>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Header;
