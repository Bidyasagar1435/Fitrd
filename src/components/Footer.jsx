import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-slate-900 py-16 border-t border-white/10">
      <div className="px-8 lg:px-16 flex flex-col md:flex-row gap-12 md:gap-8 max-w-7xl mx-auto">
        <div className="flex-1 flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 text-white font-bold text-xl">
              F
            </div>
            <span className="text-2xl font-bold text-white">
              FITRD<span className="text-cyan-400">.</span>
            </span>
          </div>

          <p className="text-slate-400 text-sm leading-relaxed">
            Intelligent fitness made simple — powerful workouts, real results.
            Your transformation starts now.
          </p>

          
        </div>

        <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold text-lg mb-2">Product</h4>
            <ul className="flex flex-col gap-3 text-sm text-slate-400">
              <li>
                <a href="#" className="transition-colors hover:text-cyan-400">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-cyan-400">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-cyan-400">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold text-lg mb-2">Company</h4>
            <ul className="flex flex-col gap-3 text-sm text-slate-400">
              <li>
                <a href="#" className="transition-colors hover:text-cyan-400">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-cyan-400">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-cyan-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold text-lg mb-2">Resources</h4>
            <ul className="flex flex-col gap-3 text-sm text-slate-400">
              <li>
                <a href="#" className="transition-colors hover:text-cyan-400">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-cyan-400">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-cyan-400">
                  Developers
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold text-lg mb-2">Legal</h4>
            <ul className="flex flex-col gap-3 text-sm text-slate-400">
              <li>
                <a href="#" className="transition-colors hover:text-cyan-400">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-cyan-400">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-cyan-400">
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-white/10 pt-8 px-8 lg:px-16">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} FITRD. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-slate-400 text-xs">
            <span>Terms of Service</span>
            <span>Privacy Policy</span>
            <span>Cookie Settings</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
