import { personalInfo } from "../data/portfolioData";

export default function About() {
  return (
    <section id="about" className="bg-creamy-pattern py-24 px-6 relative overflow-hidden border-y border-gray-200">
      {/* Background decoration */}
      <div className="mesh-bg" />
      <div className="watermark">ABOUT</div>
      <div className="absolute top-0 left-0 w-80 h-80 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center relative z-10">
        {/* Left Column - Image/Avatar */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-72 h-72 md:w-[500px] md:h-[500px] group">
            <div className="w-full h-full rounded-2xl bg-white border border-gray-200 overflow-hidden shadow-2xl transition-all duration-300 group-hover:border-indigo-500/50">
              <img
                src="/profile.png"
                alt="Profile"
                className="w-full h-full object-cover transition-all duration-300 scale-100 group-hover:scale-105"
              />
            </div>
            {/* Subtle decorative border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-indigo-500/20 rounded-2xl -z-10 transition-all duration-300 group-hover:border-indigo-500/40" />
          </div>
        </div>

        {/* Right Column - Text Content */}
        <div className="space-y-10">
          <div>
            <p className="text-indigo-600 text-sm font-black tracking-[0.3em] uppercase mb-4 opacity-80">
              About Me
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Engineering solutions with precision and purpose
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              {personalInfo.about}
            </p>
          </div>

          {/* Highlights Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-3">
              <span className="w-8 h-px bg-indigo-500/50"></span>
              What I Do
            </h3>
            <ul className="grid grid-cols-1 gap-4">
              {personalInfo.highlights.map((item, index) => (
                <li key={index} className="flex items-start gap-4 group p-4 rounded-2xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-200">
                  <span className="flex-shrink-0 w-6 h-6 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-600 text-sm group-hover:scale-110 transition-transform">
                    ✔
                  </span>
                  <span className="text-gray-800 text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Full Width Education & Action Section */}
      <div className="max-w-7xl mx-auto mt-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-8 p-1 sm:p-2">
          {/* Education Info - Even more compact */}
          <div className="flex-1 p-6 rounded-2xl bg-white/60 backdrop-blur-xl border border-gray-200 space-y-3 shadow-xl relative overflow-hidden group max-w-xl">
            <div className="absolute top-0 right-0 w-20 h-20 bg-indigo-500/10 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-indigo-500/20 transition-colors" />

            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="space-y-1">
                <p className="text-indigo-600 text-xs font-black uppercase tracking-[0.3em]">Education Background</p>
                <h3 className="text-gray-900 font-black text-xl md:text-2xl tracking-tight leading-none group-hover:text-indigo-600 transition-colors">
                  {personalInfo.education[0].degree}
                </h3>
              </div>
              <div className="text-right">
                <div className="inline-block text-indigo-900 text-[10px] font-bold bg-indigo-100/50 px-3 py-1 rounded-full border border-indigo-200 backdrop-blur-md">
                  {personalInfo.education[0].year}
                </div>
              </div>
            </div>

            <p className="text-gray-700 text-base font-medium flex items-center gap-3">
              <span className="w-4 h-px bg-indigo-500/30"></span>
              {personalInfo.education[0].school}
            </p>
            {personalInfo.education[0].cgpa && (
              <p className="text-indigo-700 text-sm font-semibold flex items-center gap-3">
                <span className="w-4 h-px bg-indigo-500/30"></span>
                CGPA: <span className="text-indigo-900">{personalInfo.education[0].cgpa}</span>
              </p>
            )}
          </div>

          {/* Action Button */}
          <div className="flex-shrink-0 flex items-center">
            <a
              href="/resume.pdf"
              download="Praveen_Dwivedi_Resume.pdf"
              target="_blank"
              className="w-full lg:w-auto inline-flex items-center justify-center gap-4 bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 text-white font-black text-xl px-16 py-8 rounded-[2rem] shadow-[0_20px_40px_rgba(99,102,241,0.3)] hover:shadow-[0_25px_50px_rgba(99,102,241,0.5)] hover:-translate-y-2 active:scale-95 transition-all duration-500 whitespace-nowrap group"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}