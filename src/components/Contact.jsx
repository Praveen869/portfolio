import { personalInfo } from "../data/portfolioData";
import { useState } from "react";
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setError(null);
    setSent(false);

    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      message: form.message,
      to_name: personalInfo.name,
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setSent(true);
          setForm({ name: "", email: "", message: "" });
          setIsSending(false);
          // Hide success message after 5 seconds
          setTimeout(() => setSent(false), 5000);
        },
        (err) => {
          console.error("FAILED...", err);
          setError("Failed to send message. Please try again later.");
          setIsSending(false);
        }
      );
  };

  const socialLinks = [
    { 
      icon: "logos:google-gmail", 
      label: "Email", 
      value: personalInfo.email, 
      href: `mailto:${personalInfo.email}`,
      color: "from-blue-500/20 to-cyan-500/20"
    },
    { 
      icon: "logos:linkedin-icon", 
      label: "LinkedIn", 
      value: "LinkedIn Profile", 
      href: personalInfo.linkedin,
      color: "from-indigo-500/20 to-blue-500/20"
    },
    { 
      icon: "logos:github-icon", 
      label: "GitHub", 
      value: personalInfo.github.replace("https://github.com/", ""), 
      href: personalInfo.github,
      color: "from-purple-500/20 to-pink-500/20"
    },
  ];

  return (
    <section id="contact" className="bg-gray-950 py-24 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="mesh-bg" />
      <div className="watermark">CONTACT</div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20 reveal">
          <p className="text-indigo-400 text-sm font-black tracking-[0.3em] uppercase mb-4 opacity-80">
            GET IN TOUCH
          </p>
          <h2 className="text-5xl md:text-7xl font-bold mb-8 text-gradient">
            Contact Me
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full shadow-[0_0_20px_rgba(99,102,241,0.5)] mb-8" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Looking for a developer or want to collaborate on something interesting? 
            I'm always open to new opportunities and conversations.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Social Links */}
          <div className="lg:col-span-2 space-y-6">
            {socialLinks.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                style={{ animationDelay: `${index * 150}ms` }}
                className="group flex items-center gap-6 bg-gray-900/40 backdrop-blur-xl border border-white/5 hover:border-indigo-500/30 rounded-3xl p-6 transition-all duration-500 hover:-translate-y-2 reveal"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                  <img 
                    src={`https://api.iconify.design/${item.icon}.svg`} 
                    className="w-8 h-8 transition-all duration-300" 
                    alt={item.label} 
                  />
                </div>
                <div>
                  <div className="text-indigo-400 text-xs font-black tracking-widest uppercase mb-1 opacity-60">
                    {item.label}
                  </div>
                  <div className="text-white text-lg font-bold group-hover:text-indigo-400 transition-colors truncate max-w-[200px] md:max-w-full">
                    {item.value}
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <form 
              onSubmit={handleSubmit} 
              className="bg-gray-900/40 backdrop-blur-xl border border-white/5 p-10 rounded-[2.5rem] shadow-2xl reveal relative overflow-hidden"
              style={{ animationDelay: "450ms" }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-3xl" />
              
              <h3 className="text-2xl font-bold text-white mb-8">Send a Message</h3>
              
              {sent && (
                <div className="bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm px-6 py-4 rounded-2xl mb-8 animate-pulse-soft">
                  ✨ Message sent! I'll get back to you soon.
                </div>
              )}
              
              {error && (
                <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-sm px-6 py-4 rounded-2xl mb-8">
                  ❌ {error}
                </div>
              )}
              
              <div className="space-y-6">
                <div className="group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 focus:border-indigo-500/50 text-white placeholder-gray-500 rounded-2xl px-6 py-4 outline-none transition-all duration-300 focus:bg-white/10"
                  />
                </div>
                
                <div className="group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 focus:border-indigo-500/50 text-white placeholder-gray-500 rounded-2xl px-6 py-4 outline-none transition-all duration-300 focus:bg-white/10"
                  />
                </div>
                
                <div className="group">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-white/5 border border-white/10 focus:border-indigo-500/50 text-white placeholder-gray-500 rounded-2xl px-6 py-4 outline-none transition-all duration-300 focus:bg-white/10 resize-none"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSending}
                  className={`w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold py-4 rounded-2xl transition-all duration-300 hover:scale-[1.02] shadow-[0_10px_30px_rgba(99,102,241,0.3)] active:scale-95 ${isSending ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSending ? 'Sending... ⏳' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}