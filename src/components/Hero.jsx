import { personalInfo } from "../data/portfolioData";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen bg-gray-950 flex items-center justify-center relative overflow-hidden"
    >
      {/* Background glow effects - refined for subtle depth */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto space-y-8 animate-fade-in-up">
        {/* Subtle top indicator */}
        <div className="space-y-4">
          <div className="space-y-1">
            <p className="text-indigo-400 text-xs md:text-sm font-bold tracking-[0.3em] uppercase">
              {personalInfo.role}
            </p>
            <p className="text-white/30 text-[10px] md:text-xs font-medium tracking-[0.2em] uppercase">
              {personalInfo.subRole}
            </p>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-500 group-hover:from-indigo-400 group-hover:to-purple-400 transition-all duration-1000">
              {personalInfo.name}
            </span>
            <span className="text-indigo-600 animate-pulse">.</span>
          </h1>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <p className="text-lg md:text-xl font-bold text-white leading-tight">
              Building{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">scalable</span>,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">high-performance</span>{" "}
              applications with <span className="underline decoration-indigo-500/50 decoration-2 underline-offset-4">AI</span> and{" "}
              <span className="text-indigo-400">real-time</span> technologies.
            </p>
            <p className="text-white/80 text-sm md:text-base font-semibold leading-relaxed max-w-2xl mx-auto">
              I build modern web applications using{" "}
              <span className="text-indigo-400">Python</span>,{" "}
              <span className="text-cyan-400">React</span>, backend frameworks (
              <span className="text-purple-400">Django</span>,{" "}
              <span className="text-blue-400">FastAPI</span>,{" "}
              <span className="text-green-400">Flask</span>), and databases like{" "}
              <span className="text-emerald-400">MongoDB</span> and{" "}
              <span className="text-sky-400">PostgreSQL</span>.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-y-6 gap-x-10 py-10 border-y border-white/5 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <div className="flex items-center gap-4 group/icon">
              <img src="https://api.iconify.design/logos:python.svg" className="w-8 h-8 group-hover/icon:scale-125 transition-transform" alt="Python" />
              <img src="https://api.iconify.design/logos:django-icon.svg" className="w-8 h-8 group-hover/icon:scale-125 transition-transform" alt="Django" />
              <img src="https://api.iconify.design/logos:fastapi-icon.svg" className="w-9 h-9 group-hover/icon:scale-125 transition-transform" alt="FastAPI" />
              <img src="https://api.iconify.design/logos:flask.svg" className="w-8 h-8 bg-white rounded-md p-1 group-hover/icon:scale-125 transition-transform" alt="Flask" />
            </div>
            <div className="h-6 w-px bg-white/10 hidden md:block" />
            <div className="flex items-center gap-4 group/icon">
              <img src="https://api.iconify.design/logos:react.svg" className="w-8 h-8 group-hover/icon:scale-125 transition-transform" alt="React" />
              <img src="https://api.iconify.design/logos:tailwindcss-icon.svg" className="w-8 h-8 group-hover/icon:scale-125 transition-transform" alt="Tailwind" />
            </div>
            <div className="h-6 w-px bg-white/10 hidden md:block" />
            <div className="flex items-center gap-4 group/icon">
              <img src="https://api.iconify.design/logos:mongodb-icon.svg" className="w-4 h-8 group-hover/icon:scale-125 transition-transform" alt="MongoDB" />
              <img src="https://api.iconify.design/logos:postgresql.svg" className="w-8 h-8 group-hover/icon:scale-125 transition-transform" alt="PostgreSQL" />
            </div>
          </div>

          <p className="text-gray-400 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto opacity-70">
            {personalInfo.subheading}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-5 justify-center pt-8">
          <a
            href="#projects"
            className="group relative bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-10 py-4 rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(79,70,229,0.3)] hover:-translate-y-1"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white font-bold px-10 py-4 rounded-xl transition-all duration-300 hover:bg-white/5 hover:-translate-y-1"
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