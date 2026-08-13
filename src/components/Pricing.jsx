import { PrimaryButton } from "./Reusable";

function Pricing() {
  return (
    <>
      <div className="w-full md:pt-36 sm:pt-10 md:px-20 bg-slate-900 overflow-hidden flex flex-col items-center">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Simple{" "}
            <span className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent pb-6">
              Pricing
            </span>
          </h2>

          <p className="text-xl text-gray-300">
            Start free and upgrade when you need more power. No hidden fees,
            cancel anytime.
          </p>
        </div>
      </div>
    </>
  );
}
export default Pricing;
