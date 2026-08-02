import { useState, useEffect } from "react";
import { personalInfo } from "../data/portfolioData";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = ["About", "Skills", "Projects", "Contact"];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 bg-gradient-to-r from-rose-50/90 via-pink-50/90 to-rose-100/90 backdrop-blur-md border-b border-rose-200 ${scrolled ? "shadow-md" : "shadow-sm"}`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="text-2xl font-bold text-gray-900 tracking-tight">
          {personalInfo.name.split(" ")[0]}
          <span className="text-indigo-600">.</span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-gray-700 hover:text-indigo-600 transition-colors duration-200 text-sm font-medium"
              >
                {link}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/resume.pdf"
              target="_blank"
              className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors duration-200"
            >
              View Resume
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-900 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className={`w-6 h-0.5 bg-gray-900 mb-1.5 transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <div className={`w-6 h-0.5 bg-gray-900 mb-1.5 transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <div className={`w-6 h-0.5 bg-gray-900 transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gradient-to-r from-rose-50/95 via-pink-50/95 to-rose-100/95 backdrop-blur-md px-6 pb-6 border-b border-rose-200 shadow-sm">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-gray-700 hover:text-indigo-600 transition-colors border-b border-gray-100 text-sm font-medium"
            >
              {link}
            </a>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            onClick={() => setMenuOpen(false)}
            className="block py-4 text-indigo-600 font-bold text-sm tracking-widest uppercase hover:text-indigo-800 transition-colors"
          >
            View Resume
          </a>
        </div>
      )}
    </nav>
  );
}