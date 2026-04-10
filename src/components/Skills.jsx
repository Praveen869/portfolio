import { skillCategories } from "../data/portfolioData";

export default function Skills() {
  return (
    <section id="skills" className="bg-gray-950 py-24 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="mesh-bg" />
      <div className="watermark">SKILLS</div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/5 rounded-full blur-3xl -z-0" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-24 reveal">
          <p className="text-indigo-400 text-sm font-black tracking-[0.3em] uppercase mb-4 opacity-80">
            TECHNICAL ARSENAL
          </p>
          <h2 className="text-5xl md:text-7xl font-bold mb-8 text-gradient">
            My Skills
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full shadow-[0_0_20px_rgba(99,102,241,0.5)]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              style={{ animationDelay: `${index * 100}ms` }}
              className="bg-gray-900/40 backdrop-blur-xl border border-white/5 hover:border-indigo-500/30 transition-all duration-700 p-8 rounded-3xl group hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(99,102,241,0.15)] flex flex-col h-full reveal"
            >
              <div className="flex items-center gap-5 mb-10">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-2xl flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-500 border border-white/5">
                  {category.emoji}
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors duration-300">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 bg-white/5 backdrop-blur-md text-white text-sm font-medium py-2 px-4 rounded-xl border border-white/5 hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all duration-300 cursor-default group/tag"
                  >
                    <div className="w-7 h-7 flex items-center justify-center bg-white rounded-lg p-1 shadow-sm flex-shrink-0 transition-transform group-hover/tag:scale-110">
                      <img
                        src={`https://api.iconify.design/${skill.icon}.svg`}
                        alt={skill.name}
                        className="w-full h-full object-contain transition-transform duration-300 group-hover/tag:scale-110"
                      />
                    </div>
                    <span className="truncate opacity-70 group-hover/tag:opacity-100 transition-opacity whitespace-nowrap">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}