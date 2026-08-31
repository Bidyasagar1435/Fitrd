import React from "react";
import GlareHover from "./GlareHover";

const PRICING_DATA = [
  {
    id: 1,
    title: "Monthly",
    price: "$16",
    per: "/ month",
    description: "Perfect for trying out the service",
    popular: false,
    features: [
      { name: "AI Workout Generator" },
      { name: "Progress Tracking" },
      { name: "Basic Nutrition Guide" },
      { name: "Custom Meal Plans" },
      { name: "1-on-1 AI Coaching" },
    ],
  },
  {
    id: 2,
    title: "Yearly",
    price: "$120",
    per: "/ year",
    description: "Best value for long-term users",
    popular: true,
    features: [
      { name: "AI Workout Generator" },
      { name: "Progress Tracking" },
      { name: "Basic Nutrition Guide" },
      { name: "Custom Meal Plans" },
      { name: "1-on-1 AI Coaching" },
    ],
  },
];

const CheckIcon = () => (
  <svg
    className="w-4 h-4 text-cyan-400 flex-shrink-0"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2.5}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const XIcon = () => (
  <svg
    className="w-4 h-4 text-slate-600 flex-shrink-0"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const Pricing = () => {
  return (
    <div className="w-full py-16 md:py-20 md:px-20 bg-slate-900 overflow-hidden flex flex-col items-center">
      {/* Header */}
      <div className="flex flex-col items-center text-center px-6 mb-12">
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-cyan-400 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-5 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          Simple Pricing
        </div>
        <h2 className="text-white font-black text-4xl sm:text-5xl md:text-6xl leading-tight tracking-normal mb-5">
          Choose Your{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400">
            Plan
          </span>
        </h2>
        <p className="text-slate-400 text-base sm:text-lg max-w-xl leading-relaxed">
          Start free, scale when ready. All plans include a 7-day free trial —
          no credit card required.
        </p>
      </div>

      {/* Divider */}
      <div className="flex items-center justify-center gap-3 mb-12">
        <div className="h-px w-16 bg-gradient-to-r from-transparent to-blue-500/60 rounded-full" />
        <div className="w-2 h-2 rounded-full bg-blue-500/60 animate-pulse" />
        <div className="h-px w-24 bg-gradient-to-r from-blue-500/60 to-purple-500/60 rounded-full" />
        <div className="w-2 h-2 rounded-full bg-purple-500/60 animate-pulse" />
        <div className="h-px w-16 bg-gradient-to-r from-purple-500/60 to-transparent rounded-full" />
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-3xl px-6 lg:px-0">
        {PRICING_DATA.map((plan) => (
          <div key={plan.id} className="relative">
            {/* Popular badge */}
            {plan.popular && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
                <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full shadow-lg shadow-cyan-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  Best Value
                </span>
              </div>
            )}

            <GlareHover
              width="100%"
              height="100%"
              background={
                plan.popular
                  ? "linear-gradient(135deg, rgba(59,130,246,0.18) 0%, rgba(103,232,249,0.12) 45%, rgba(236,72,153,0.15) 100%)"
                  : "transparent"
              }
              borderRadius="16px"
              borderColor={
                plan.popular ? "rgba(103,232,249,0.3)" : "rgba(255,255,255,0.1)"
              }
              glareColor="#67e8f9"
              glareOpacity={0.1}
              glareAngle={-45}
              glareSize={260}
              transitionDuration={900}
              style={{ padding: "28px" }}
              className={`backdrop-blur-lg transition-all duration-500 ${plan.popular ? "shadow-xl hover:shadow-cyan-500/10" : ""}`}
            >
              {/* Plan title & price */}
              <div className="mb-6">
                <h3 className="text-white font-bold text-xl mb-1">
                  {plan.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4">
                  {plan.description}
                </p>
                <div className="flex items-end gap-1">
                  <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400">
                    {plan.price}
                  </span>
                  <span className="text-slate-500 text-sm mb-2">
                    {plan.per}
                  </span>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px w-full bg-white/10 mb-6" />

              {/* Features list */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    {plan.popular ? <CheckIcon /> : <XIcon />}
                    <span className="text-sm text-slate-400">
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                className={`w-full py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  plan.popular
                    ? "bg-gradient-to-r from-blue-800 via-purple-800 to-cyan-800 text-white hover:opacity-90 hover:shadow-lg hover:shadow-cyan-500/30 hover:-translate-y-0.5"
                    : "bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20"
                }`}
              >
                {plan.popular ? "Get Started — Best Value" : "Start Monthly"}
              </button>
            </GlareHover>
          </div>
        ))}
      </div>

      {/* Footer note */}
      <p className="mt-10 text-slate-500 text-xs text-center">
        All plans include a 7-day free trial. Cancel anytime. No hidden fees.
      </p>
    </div>
  );
};

export default Pricing;
