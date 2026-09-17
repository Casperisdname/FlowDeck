"use client";

import {
  Globe,
  Mail,
  Calendar,
  MessageSquare,
  Shield,
  Folder,
} from "lucide-react";
import Reveal from "./Reveal";

const INTEGRATIONS = [
  {
    icon: <Folder className="w-6 h-6 text-emerald-500" />,
    name: "Drive",
  },
  {
    icon: <Mail className="w-6 h-6 text-red-500" />,
    name: "Gmail",
  },
  {
    icon: <Calendar className="w-6 h-6 text-blue-500" />,
    name: "Calendar",
  },
  {
    icon: <MessageSquare className="w-6 h-6 text-purple-500" />,
    name: "Slack",
  },
  {
    icon: <Globe className="w-6 h-6 text-amber-500" />,
    name: "Web",
  },
  {
    icon: <Shield className="w-6 h-6 text-indigo-500" />,
    name: "Security",
  },
];

export function Integrations() {
  return (
    <section className="py-20 bg-slate-50/50">
      <Reveal>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="inline-block px-4 py-1.5 bg-white border border-slate-200 text-slate-600 rounded-full text-xs font-semibold mb-3 shadow-sm">
            Integrations
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-12">
            Connect integrations you use every day
          </h2>

          {/* Floating App Icons */}
          <div className="flex flex-wrap justify-center items-start gap-6 max-w-4xl mx-auto">
            {INTEGRATIONS.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2">
                <div
                  className="w-16 h-16 bg-white rounded-2xl shadow-md border border-slate-100 flex items-center justify-center hover:scale-110 transition-transform"
                  role="img"
                  aria-label={item.name}
                >
                  {item.icon}
                </div>
                <span className="text-[11px] font-medium text-slate-500">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
