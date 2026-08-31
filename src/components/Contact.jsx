import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section className="w-full py-16 md:py-24 md:px-20 bg-slate-900 overflow-hidden flex flex-col items-center">
      {/* Header */}
      <div className="flex flex-col items-center text-center px-6 mb-12">
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-cyan-400 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-5 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          Get In Touch
        </div>
        <h2 className="text-white font-black text-4xl sm:text-5xl md:text-6xl leading-tight tracking-normal mb-5">
          Contact{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400">
            Us
          </span>
        </h2>
        <p className="text-slate-400 text-base sm:text-lg max-w-xl leading-relaxed">
          Have a question or want to know more? We'd love to hear from you.
          Drop us a message and we'll get back within 24 hours.
        </p>
      </div>

      {/* Divider */}
      <div className="flex items-center justify-center gap-3 mb-12">
        <div className="h-px w-16 bg-gradient-to-r from-transparent to-blue-500/60 rounded-full" />
        <div className="w-2 h-2 rounded-full bg-blue-500/60" />
        <div className="h-px w-24 bg-gradient-to-r from-blue-500/60 to-purple-500/60 rounded-full" />
        <div className="w-2 h-2 rounded-full bg-purple-500/60" />
        <div className="h-px w-16 bg-gradient-to-r from-purple-500/60 to-transparent rounded-full" />
      </div>

      {/* Content grid */}
      <div className="w-full max-w-5xl px-6 lg:px-0 grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* Left — Info panel */}
        <div className="flex flex-col gap-6">
          {/* Info card */}
          <div className="backdrop-blur-lg bg-white/3 border border-white/10 rounded-2xl p-8 flex flex-col gap-8">
            <div>
              <h3 className="text-white font-bold text-xl mb-2">Let's talk</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Whether you're curious about features, pricing, or a free trial
                — we're ready to answer any and all questions.
              </p>
            </div>

            {/* Contact items */}
            <div className="flex flex-col gap-5">
              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-slate-500 text-xs uppercase tracking-widest mb-0.5">Email</p>
                  <a href="mailto:hello@fitrd.app" className="text-slate-300 text-sm hover:text-cyan-400 transition-colors">
                    hello@fitrd.app
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-slate-500 text-xs uppercase tracking-widest mb-0.5">Based in</p>
                  <p className="text-slate-300 text-sm">India, IN</p>
                </div>
              </div>

              {/* Response time */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-slate-500 text-xs uppercase tracking-widest mb-0.5">Response time</p>
                  <p className="text-slate-300 text-sm">Within 24 hours</p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-white/10" />

            {/* Social links */}
            <div className="flex items-center gap-3">
              {[
                {
                  label: "Twitter",
                  href: "#",
                  icon: (
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                  ),
                },
                {
                  label: "Instagram",
                  href: "#",
                  icon: (
                    <>
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </>
                  ),
                },
                {
                  label: "LinkedIn",
                  href: "#",
                  icon: (
                    <>
                      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </>
                  ),
                },
              ].map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400/30 hover:bg-cyan-400/5 transition-all duration-300"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    {icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right — Form */}
        <div className="backdrop-blur-lg bg-white/3 border border-white/10 rounded-2xl p-8">
          {sent ? (
            <div className="h-full flex flex-col items-center justify-center gap-4 text-center py-12">
              <div className="w-14 h-14 rounded-full bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center">
                <svg className="w-7 h-7 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="text-white font-bold text-xl">Message sent!</h4>
              <p className="text-slate-400 text-sm max-w-xs">
                Thanks for reaching out. We'll get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <h3 className="text-white font-bold text-xl mb-1">Send a message</h3>

              {/* Name */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-name" className="text-slate-400 text-xs font-semibold uppercase tracking-widest">
                  Your Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  placeholder="John Doe"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600
                    focus:outline-none focus:border-cyan-500/50 focus:bg-white/8 transition-all duration-300"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-email" className="text-slate-400 text-xs font-semibold uppercase tracking-widest">
                  Email Address
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600
                    focus:outline-none focus:border-cyan-500/50 focus:bg-white/8 transition-all duration-300"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-message" className="text-slate-400 text-xs font-semibold uppercase tracking-widest">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us how we can help..."
                  value={form.message}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600
                    focus:outline-none focus:border-cyan-500/50 focus:bg-white/8 transition-all duration-300 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl font-semibold text-sm text-white
                  bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500
                  hover:opacity-90 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-500/30
                  transition-all duration-300 mt-1"
              >
                Send Message →
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;

