import { FEATURES_DATA } from "../lib/data";
import GlareHover from "./GlareHover";

import { Badge } from "./ui/badge";

function Feature() {
  return (
    <>
      <div className="w-full py-16 md:py-20 md:px-20 bg-slate-900 overflow-hidden flex flex-col items-center">
        <div className="px-12 py-4 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
          <h2 className="text-white font-black text-4xl sm:text-5xl md:text-6xl leading-tight tracking-normal mb-5">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-8 lg:px-0 gap-5 py-6">
          {FEATURES_DATA.map((feature, index) => (
            <GlareHover
              key={index}
              width="100%"
              height="100%"
              background="transparent"
              borderRadius="12px"
              borderColor="rgba(255,255,255,0.1)"
              glareColor="#67e8f9"
              glareOpacity={0.12}
              glareAngle={-45}
              glareSize={250}
              transitionDuration={900}
              className="group backdrop-blur-lg cursor-default transition-all duration-500 hover:border-cyan-500/40"
              style={{ padding: "20px" }}
            >
              <div
                className="inline-flex items-center justify-center p-2.5 bg-white/5 text-xl rounded-md
                border border-white/10 transition-all duration-500"
              >
                {feature.icon}
              </div>

              <h2 className="font-semibold text-xl mb-3 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent mt-3">
                {feature.title}
              </h2>
              <p className="text-slate-400 text-sm text-center leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                {feature.description}
              </p>
            </GlareHover>
          ))}
        </div>
      </div>
    </>
  );
}

export default Feature;
