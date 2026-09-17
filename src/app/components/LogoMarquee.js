"use client";

const LOGOS = [
  { name: "Stripe", label: "stripe" },
  { name: "Vercel", label: "▲ Vercel" },
  { name: "Figma", label: "❖ Figma" },
  { name: "Linear", label: "⧉ Linear" },
  { name: "Notion", label: "N Notion" },
  { name: "GitHub", label: "GitHub" },
];

export function LogoMarquee() {
  return (
    <section className="py-12 bg-white border-y border-slate-100 overflow-hidden relative">
      {/* Gradient Masking Edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 mb-6 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
          Trusted by engineering and operations teams worldwide
        </p>
      </div>

      <div className="flex overflow-hidden select-none">
        <div className="animate-marquee items-center gap-16 pr-16">
          {[...LOGOS, ...LOGOS, ...LOGOS].map((logo, idx) => (
            <div
              key={idx}
              className="text-slate-800 font-extrabold text-xl md:text-2xl tracking-tight opacity-70 hover:opacity-100 transition-opacity cursor-pointer flex items-center gap-2"
            >
              {logo.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
