import { personalInfo } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-white/5 py-12 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-sm font-medium">
          <p className="text-gray-500 tracking-wider">
            © 2026 {personalInfo.name}
          </p>
          <span className="hidden md:inline text-gray-800">|</span>
          <div className="text-gradient font-bold">
            Designed & Developed by {personalInfo.name}
          </div>
        </div>
        
        <div className="flex justify-center items-center gap-6 text-sm font-bold tracking-widest uppercase">
          <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-indigo-400 transition-all duration-300">GitHub</a>
          <span className="text-gray-800 font-normal">|</span>
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-indigo-400 transition-all duration-300">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}