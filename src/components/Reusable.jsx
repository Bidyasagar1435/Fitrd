export const PrimaryButton = ({ children }) => {
  return (
    <button className="backdrop-blur-lg bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 rounded-lg text-white border-transparent hover:shadow-2xl hover:shadow-blue-500/25 hover:transform hover:scale-105 transition-all duration-400">
      {children}
    </button>
  );
};


export const GlassButton = ({children})=>{
  return(
    <button className="backdrop-blur-lg bg-white/10 px-4 py-2 rounded-lg text-white border-white/20 hover:bg-white/20 hover:transform hover:scale-105 transition-all duration-400">
      {children}
    </button>
  )
}