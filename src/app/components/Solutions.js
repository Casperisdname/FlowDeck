"use client";

import {
  Sparkles,
  ListTodo,
  ShieldCheck,
  Check,
  TrendingUp,
} from "lucide-react";
import Reveal from "./Reveal";

export function Solutions() {
  return (
    <section id="solution" className="pt-8 pb-24 bg-white">
      <Reveal>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Header Badge & Title */}
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="inline-block px-4 py-1.5 bg-slate-100 text-slate-600 rounded-full text-xs font-semibold">
              Solutions
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
              Solve your team's biggest challenges
            </h2>
          </div>

          {/* Feature Value Props Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-center md:text-left">
            <div className="p-4 flex flex-col items-center md:items-start space-y-2">
              <Sparkles className="w-5 h-5 text-amber-500" />
              <p className="text-xs text-slate-600 leading-relaxed">
                Ensure your team is always on the same page with task sharing
                and transparent updates.
              </p>
            </div>
            <div className="p-4 flex flex-col items-center md:items-start space-y-2">
              <ListTodo className="w-5 h-5 text-amber-500" />
              <p className="text-xs text-slate-600 leading-relaxed">
                Prioritize and manage tasks effectively so your team can focus
                on what matters most.
              </p>
            </div>
            <div className="p-4 flex flex-col items-center md:items-start space-y-2">
              <ShieldCheck className="w-5 h-5 text-amber-500" />
              <p className="text-xs text-slate-600 leading-relaxed">
                Hold everyone accountable without the need for constant
                check-ins.
              </p>
            </div>
          </div>

          {/* App Dashboard Mockup Container */}
          <div className="relative bg-gradient-to-b from-sky-400 to-blue-600 rounded-3xl p-4 md:p-8 shadow-2xl overflow-hidden">
            {/* Decorative glow */}
            <div className="absolute -top-16 -right-16 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative bg-white rounded-2xl p-6 shadow-lg border border-slate-100 min-h-[400px]">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                <div className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-sky-400 flex items-center justify-center text-white text-xs font-bold">
                    A
                  </span>
                  <span className="text-sm font-bold text-slate-800">
                    Good morning, Amanda
                  </span>
                </div>
                <span className="text-xs text-slate-400 font-mono hidden sm:inline">
                  Monday, September 30
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* To Do List */}
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-xs font-bold text-slate-700">
                      To do list
                    </p>
                    <span className="text-[10px] text-slate-400 font-mono">
                      2/4
                    </span>
                  </div>
                  <div className="space-y-2 text-xs text-slate-600">
                    <div className="bg-white p-2 rounded-lg shadow-sm border border-slate-100 flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
                        <Check className="w-2.5 h-2.5 text-white" />
                      </span>
                      <span className="line-through text-slate-400">
                        Finish sales presentation
                      </span>
                    </div>
                    <div className="bg-white p-2 rounded-lg shadow-sm border border-slate-100 flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full border-2 border-slate-200 flex-shrink-0" />
                      <span>Review marketing budget</span>
                    </div>
                  </div>
                </div>

                {/* Time Tracker */}
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-center flex flex-col justify-center items-center">
                  <p className="text-xs text-slate-400 mb-1">Time tracker</p>
                  <p className="text-2xl font-black font-mono text-slate-800">
                    04:21:58
                  </p>
                  <span className="mt-2 inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Running
                  </span>
                </div>

                {/* Activity Ring (fixed: real % + label) */}
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex flex-col items-center">
                  <div className="flex items-center gap-1.5 mb-2 self-start">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-500" />
                    <p className="text-xs font-bold text-slate-700">Activity</p>
                  </div>
                  <div
                    className="relative w-16 h-16 rounded-full flex items-center justify-center my-1"
                    style={{
                      background:
                        "conic-gradient(#10b981 0% 68%, #e2e8f0 68% 100%)",
                    }}
                  >
                    <div className="absolute inset-[5px] bg-slate-50 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-slate-800">
                        68%
                      </span>
                    </div>
                  </div>
                  <p className="text-[10px] text-slate-400 mt-1">
                    of weekly goal
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
