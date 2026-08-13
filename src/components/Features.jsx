import { FEATURES_DATA } from "../lib/data";

import { Badge } from "./ui/badge";

function Feature() {
  return (
    <>
      <div className="w-full py-16 md:py-20 md:px-20 bg-slate-900 overflow-hidden flex flex-col items-center">
        <div className="px-12 py-4 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
          <h2 className="text-white font-black text-4xl sm:text-5xl md:text-6xl leading-tight tracking-tight mb-5">
            Why Choose{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400">
              FITRD?
            </span>
          </h2>
        </div>
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-cyan-400 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-5 backdrop-blur-sm">
          <Badge>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Powered by AI
          </Badge>
        </div>

        <div className="flex items-center justify-center px-12 py-2 text-center">
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed tracking-wide">
            Everything you need to transform your body and mindset — all in one
            intelligent platform built for real results.
          </p>
        </div>

        <div className="flex items-center justify-center gap-3 mt-8 pb-10">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-blue-500/60 rounded-full" />
          <div className="w-2 h-2 rounded-full bg-blue-500/60" />
          <div className="h-px w-24 bg-gradient-to-r from-blue-500/60 to-purple-500/60 rounded-full" />
          <div className="w-2 h-2 rounded-full bg-purple-500/60" />
          <div className="h-px w-16 bg-gradient-to-r from-purple-500/60 to-transparent rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 py-6">
          {FEATURES_DATA.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white/5 p-5 border border-white/10 rounded-xl
                transition-all duration-500 cursor-default overflow-hidden
                hover:border-cyan-500/40
                hover:bg-white/10
                hover:shadow-[0_0_25px_rgba(6,182,212,0.08),inset_0_0_25px_rgba(99,102,241,0.05)]"
            >
              <div
                className="absolute inset-0 rounded-xl bg-gradient-to-tl from-blue-500/10 via-purple-600/10 to-cyan-500/10
                group-hover:from-blue-500/10 group-hover:via-purple-600/5 group-hover:to-cyan-500/8
                transition-all duration-500 pointer-events-none"
              />

              <div
                className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-blue-500/0
                group-hover:bg-blue-500/20 blur-xl transition-all duration-500 pointer-events-none"
              />

              <div
                className="relative inline-flex items-center justify-center p-2.5 bg-white/5 text-xl rounded-md
                border border-white/5 group-hover:border-blue-500/30 group-hover:bg-blue-500/10
                group-hover:shadow-[0_0_12px_rgba(59,130,246,0.25)] transition-all duration-400"
              >
                {feature.icon}
              </div>

              <h2 className="relative font-semibold text-xl mb-3 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent mt-3">
                {feature.title}
              </h2>
              <p className="relative text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                {feature.description}
              </p>

              {/* Bottom border glow line */}
              <div
                className="absolute bottom-0 left-4 right-4 h-px
                bg-gradient-to-r from-transparent via-blue-500/20 to-transparent
                group-hover:via-cyan-400/20 transition-all duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Feature;
