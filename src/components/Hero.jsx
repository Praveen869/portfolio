import { personalInfo } from "../data/portfolioData";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen bg-creamy-pattern flex items-center justify-center relative overflow-hidden"
    >
      {/* Background glow effects - refined for subtle depth */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/20 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-pink-500/20 rounded-full blur-[120px] pointer-events-none animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto space-y-8 animate-fade-in-up pt-10">
        {/* Subtle top indicator */}
        <div className="space-y-6">
          <div className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-white/80 border border-gray-200 shadow-md backdrop-blur-md hover:scale-105 transition-transform duration-300 gap-3">
            <span className="text-xl animate-bounce">👋</span>
            <div className="flex flex-col items-start text-left">
              <p className="text-indigo-600 text-[10px] font-black tracking-[0.2em] uppercase leading-none mb-1">
                {personalInfo.role}
              </p>
              <p className="text-gray-600 text-[9px] font-bold tracking-[0.1em] uppercase leading-none">
                {personalInfo.subRole}
              </p>
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-gray-900 mt-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-600 drop-shadow-xl hover:from-indigo-600 hover:to-purple-600 transition-all duration-1000">
              {personalInfo.name}
            </span>
            <span className="text-indigo-600 animate-pulse">.</span>
          </h1>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <p className="text-lg md:text-xl font-bold text-gray-900 leading-tight">
              Building{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-cyan-500">scalable</span>,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">high-performance</span>{" "}
              applications with <span className="underline decoration-indigo-500/50 decoration-2 underline-offset-4">AI</span> and{" "}
              <span className="text-indigo-600">real-time</span> technologies.
            </p>
            <p className="text-gray-700 text-sm md:text-base font-semibold leading-relaxed max-w-2xl mx-auto">
              I build modern web applications using{" "}
              <span className="text-indigo-600">Python</span>,{" "}
              <span className="text-cyan-600">React</span>, backend frameworks (
              <span className="text-purple-600">Django</span>,{" "}
              <span className="text-blue-600">FastAPI</span>,{" "}
              <span className="text-emerald-600">Flask</span>), and databases like{" "}
              <span className="text-emerald-500">MongoDB</span> and{" "}
              <span className="text-sky-600">PostgreSQL</span>.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-y-6 gap-x-10 py-8 px-6 md:px-12 bg-white/60 backdrop-blur-xl rounded-[2.5rem] border border-gray-200 shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <div className="flex items-center gap-4 group/icon">
              <img src="https://api.iconify.design/logos:python.svg" className="w-8 h-8 group-hover/icon:scale-125 transition-transform" alt="Python" />
              <img src="https://api.iconify.design/logos:django-icon.svg" className="w-8 h-8 group-hover/icon:scale-125 transition-transform" alt="Django" />
              <img src="https://api.iconify.design/logos:fastapi-icon.svg" className="w-9 h-9 group-hover/icon:scale-125 transition-transform" alt="FastAPI" />
              <img src="https://api.iconify.design/logos:flask.svg" className="w-8 h-8 bg-white rounded-md p-1 group-hover/icon:scale-125 transition-transform" alt="Flask" />
            </div>
            <div className="h-6 w-px bg-gray-200 hidden md:block" />
            <div className="flex items-center gap-4 group/icon">
              <img src="https://api.iconify.design/logos:react.svg" className="w-8 h-8 group-hover/icon:scale-125 transition-transform" alt="React" />
              <img src="https://api.iconify.design/logos:tailwindcss-icon.svg" className="w-8 h-8 group-hover/icon:scale-125 transition-transform" alt="Tailwind" />
              <img src="https://api.iconify.design/logos:javascript.svg" className="w-8 h-8 rounded-md group-hover/icon:scale-125 transition-transform" alt="JavaScript" />
              <img src="https://api.iconify.design/logos:vitejs.svg" className="w-8 h-8 group-hover/icon:scale-125 transition-transform" alt="Vite" />
            </div>
            <div className="h-6 w-px bg-gray-200 hidden md:block" />
            <div className="flex items-center gap-4 group/icon">
              <img src="https://api.iconify.design/logos:mongodb-icon.svg" className="w-8 h-8 group-hover/icon:scale-125 transition-transform" alt="MongoDB" />
              <img src="https://api.iconify.design/logos:postgresql.svg" className="w-8 h-8 group-hover/icon:scale-125 transition-transform" alt="PostgreSQL" />
              <img src="https://api.iconify.design/vscode-icons:file-type-sql.svg" className="w-8 h-8 group-hover/icon:scale-125 transition-transform" alt="SQL" />
              <img src="https://api.iconify.design/logos:mysql-icon.svg" className="w-8 h-8 group-hover/icon:scale-125 transition-transform" alt="MySQL" />
            </div>
          </div>

          <p className="text-gray-700 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto">
            {personalInfo.subheading}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-5 justify-center pt-8">
          <a
            href="#projects"
            className="group relative inline-flex items-center justify-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-bold px-10 py-4 rounded-full transition-all duration-300 hover:shadow-[0_0_40px_rgba(99,102,241,0.4)] hover:-translate-y-1 overflow-hidden"
          >
            <span className="relative z-10">View Projects</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>

          <a
            href="#contact"
            className="group inline-flex items-center justify-center bg-white border-2 border-gray-200 text-gray-800 font-bold px-10 py-4 rounded-full transition-all duration-300 hover:border-indigo-400 hover:text-indigo-600 hover:shadow-xl hover:-translate-y-1"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* CSS for custom animation if needed, but Tailwind classes are preferred */}
      <style>{`
        @keyframes fadeInUps {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUps 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
}