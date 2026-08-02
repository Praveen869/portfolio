import { projects } from "../data/portfolioData";

export default function Projects() {
  return (
    <section id="projects" className="bg-creamy-pattern py-24 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="mesh-bg" />
      <div className="watermark">PROJECTS</div>

      <div className="max-w-[1240px] mx-auto relative z-10">
        <div className="text-center mb-32 reveal">
          <p className="text-indigo-600 text-sm font-black tracking-[0.3em] uppercase mb-4 opacity-80">
            MY WORK
          </p>
          <h2 className="text-5xl md:text-7xl font-bold mb-8 text-gradient">
            Featured Projects
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full shadow-[0_0_20px_rgba(99,102,241,0.5)]" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch">
          {projects.map((project, index) => (
            <div
              key={project.title}
              style={{ animationDelay: `${index * 150}ms` }}
              className="group bg-white border border-gray-200 p-8 rounded-3xl hover:border-indigo-300 transition-all duration-700 hover:-translate-y-3 flex flex-col h-full reveal hover:shadow-2xl"
            >
              {/* Project Image */}
              <div className="relative w-full h-52 mb-8 overflow-hidden rounded-2xl border border-gray-100 group-hover:border-indigo-300 transition-all duration-500">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                  <span className="text-white text-xs font-bold tracking-widest uppercase">Project Preview</span>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors duration-300">
                {project.title}
              </h3>

              <p className="text-gray-700 text-base leading-relaxed mb-8 flex-1 opacity-90 group-hover:opacity-100 transition-opacity">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-10">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="bg-indigo-50 text-gray-800 text-xs font-semibold px-3 py-1.5 rounded-lg border border-indigo-100 group-hover:border-indigo-300 transition-all duration-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-900 text-sm font-bold py-3 rounded-xl border border-gray-300 transition-all duration-300 shadow-sm"
                >
                  <img src="https://api.iconify.design/logos:github-icon.svg" className="w-4 h-4" alt="Github" />
                  Code
                </a>

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-sm font-bold py-3 rounded-xl shadow-[0_5px_15px_rgba(99,102,241,0.2)] hover:shadow-[0_8px_20px_rgba(99,102,241,0.3)] transition-all duration-300"
                  >
                    <img src="https://api.iconify.design/ion:rocket-outline.svg" className="w-4 h-4" alt="Live" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}