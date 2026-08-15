import React from "react";
import Header from "./Header";
import { Badge } from "./ui/badge";
import { Play, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

function Hero() {
  return (
    <>
      <div className="relative bg-slate-900 text-white overflow-x-hidden">
        <Header />

        <div className="hidden lg:flex lg:absolute lg:top-32 lg:left-20 z-10 animate-in fade-in-50 slide-in-from-left-4 duration-500">
          <Badge className="bg-white/10 border border-white/20 text-gray-300 font-semibold px-5 py-3 rounded-full hover:text-white hover:bg-white/20 transition-all duration-300 cursor-pointer text-sm tracking-wide">
            🚀 6-Week Transformation Challenge
          </Badge>
        </div>

        <main className="flex items-start md:items-center justify-center min-h-screen px-5 sm:px-8 md:px-12 pt-24 sm:pt-28 md:pt-40">
          <div className="w-full max-w-5xl text-center animate-in slide-in-from-bottom-8 fade-in-50 duration-700">
            <div className="flex justify-center mb-6 lg:hidden">
              <Badge className="bg-white/10 border border-white/20 text-gray-300 font-semibold px-4 sm:px-5 py-2.5 rounded-full hover:text-white hover:bg-white/20 transition-all duration-300 cursor-pointer text-xs sm:text-sm tracking-wide">
                🚀 6-Week Transformation Challenge
              </Badge>
            </div>

            <h1 className="font-black leading-none tracking-tight mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
              <span className="block mb-1">Train With Purpose.</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 animate-pulse">
                Transform With Results.
              </span>
            </h1>

            <p className="text-slate-300 leading-relaxed mx-auto mb-10 text-sm sm:text-base md:text-lg lg:text-xl max-w-xl sm:max-w-2xl">
              Join a community of individuals committed to their fitness
              journey. Unlock your full potential with our proven fitness
              system.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 mb-14 sm:mb-16">
              <Button variant="primary">
                <span className="flex items-center gap-2">
                  <Sparkles size={17} />
                  Start 6-Week Challenge
                </span>
              </Button>
              <Button variant="glass">
                <span className="flex items-center gap-2">
                  <Play size={17} />
                  Watch Success Stories
                </span>
              </Button>
            </div>

            <div className="grid grid-cols-3 border-t border-white/10 pt-8 max-w-xs sm:max-w-lg md:max-w-2xl mx-auto">
              <div className="flex flex-col items-center px-2 sm:px-4 py-2">
                <div className="font-black text-cyan-400 mb-1 text-4xl sm:text-5xl md:text-6xl">
                  3x
                </div>
                <div className="text-slate-400 tracking-wide text-xs sm:text-sm md:text-base">
                  Faster Results
                </div>
              </div>

              <div className="flex flex-col items-center px-2 sm:px-4 py-2 border-x border-white/10">
                <div className="font-black text-cyan-400 mb-1 text-4xl sm:text-5xl md:text-6xl">
                  98%
                </div>
                <div className="text-slate-400 tracking-wide text-xs sm:text-sm md:text-base">
                  Success Rate
                </div>
              </div>

              <div className="flex flex-col items-center px-2 sm:px-4 py-2">
                <div className="font-black text-cyan-400 mb-1 text-4xl sm:text-5xl md:text-6xl">
                  24/7
                </div>
                <div className="text-slate-400 tracking-wide text-xs sm:text-sm md:text-base">
                  Coaching
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
export default Hero;
