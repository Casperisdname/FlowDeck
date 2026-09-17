"use client";

import {
  Users,
  Calendar,
  FastForward,
  Clock,
  ChevronRight,
} from "lucide-react";
import Reveal from "./Reveal";

export function Features() {
  return (
    <section id="features" className="py-24 bg-white font-sans">
      <Reveal>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Header Badge, Title & Subtitle */}
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="inline-block px-4 py-1.5 bg-slate-100 text-slate-600 rounded-full text-xs font-semibold shadow-sm">
              Features
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
              Keep everything in one place
            </h2>
            <p className="text-sm text-slate-500">
              Forget complex project management tools.
            </p>
          </div>

          {/* Asymmetric Bento Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
            {/* Card 1: Seamless Collaboration (Span 5) */}
            <div className="lg:col-span-5 bg-[#f8f9fa] border border-slate-100 rounded-3xl p-8 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              {/* Visual Mockup */}
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 mb-8 space-y-3 relative">
                <div className="flex items-center gap-2 text-[11px] font-bold text-slate-700 pb-2 border-b border-slate-50">
                  <Users className="w-3.5 h-3.5 text-blue-500" />
                  <span>MY WORKSPACE</span>
                </div>
                <div className="space-y-1.5 text-xs text-slate-600">
                  <div className="p-2 bg-slate-50 rounded-lg flex justify-between items-center">
                    <span>Branding & identity</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  </div>
                  <div className="p-2 bg-slate-50 rounded-lg flex justify-between items-center">
                    <span>Marketing Team</span>
                    <span className="text-[10px] text-slate-400">
                      Members 3
                    </span>
                  </div>
                </div>
                {/* Floating Avatar Card */}
                <div className="absolute right-4 bottom-2 bg-white p-2.5 rounded-xl shadow-lg border border-slate-100 flex items-center gap-2 text-xs">
                  <div className="flex -space-x-1">
                    <span className="w-5 h-5 rounded-full bg-amber-400 border border-white inline-block"></span>
                    <span className="w-5 h-5 rounded-full bg-blue-400 border border-white inline-block"></span>
                  </div>
                  <span className="text-[10px] font-semibold text-slate-700">
                    + Invite members
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-slate-900">
                  Seamless Collaboration
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Work together with your team effortlessly, share tasks, and
                  update progress in real time.
                </p>
              </div>
            </div>

            {/* Card 2: Time Management Tools (Span 7) */}
            <div className="lg:col-span-7 bg-[#f8f9fa] border border-slate-100 rounded-3xl p-8 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              {/* Visual Mockup */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 mb-8 items-center">
                {/* Bar Chart Mockup */}
                <div className="sm:col-span-5 bg-white p-4 rounded-2xl shadow-sm border border-slate-100 space-y-2">
                  <div className="text-[10px] text-slate-400 font-mono">
                    weekly activity
                  </div>
                  <div className="flex items-end gap-2 h-20 pt-2">
                    <div className="w-full bg-sky-400 rounded-t h-[60%]"></div>
                    <div className="w-full bg-sky-500 rounded-t h-[90%]"></div>
                    <div className="w-full bg-sky-400 rounded-t h-[40%]"></div>
                  </div>
                </div>

                {/* Schedule List & Donut Chart */}
                <div className="sm:col-span-7 grid grid-cols-2 gap-3">
                  <div className="bg-white p-3 rounded-2xl shadow-sm border border-slate-100 space-y-2 text-[10px]">
                    <p className="font-bold text-slate-700">Weekly schedule</p>
                    <div className="p-1.5 bg-slate-50 rounded flex items-center justify-between">
                      <span>Meeting with team</span>
                      <Calendar className="w-3 h-3 text-blue-500" />
                    </div>
                    <div className="p-1.5 bg-slate-50 rounded flex items-center justify-between">
                      <span>Meeting with client</span>
                      <Calendar className="w-3 h-3 text-emerald-500" />
                    </div>
                  </div>

                  <div className="bg-white p-3 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center">
                    <p className="text-[10px] text-slate-400 mb-1">
                      Team workload
                    </p>
                    <div
                      className="relative w-12 h-12 rounded-full flex items-center justify-center"
                      style={{
                        background:
                          "conic-gradient(#fbbf24 0% 75%, #f1f5f9 75% 100%)",
                      }}
                    >
                      <div className="absolute inset-1 bg-white rounded-full flex items-center justify-center">
                        <span className="text-[10px] font-bold text-slate-800">
                          75%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-slate-900">
                  Time Management Tools
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Optimize your time with integrated tools like timers,
                  reminders, and schedules.
                </p>
              </div>
            </div>

            {/* Card 3: Advanced Task Tracking (Span 8) */}
            <div className="lg:col-span-8 bg-[#f8f9fa] border border-slate-100 rounded-3xl p-8 flex flex-col lg:flex-row gap-8 justify-between items-center overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="space-y-3 max-w-xs">
                <div className="w-10 h-10 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-600">
                  <FastForward className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  Advanced Task Tracking
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  A bird's eye view of your entire behavior and productivity.
                </p>
              </div>

              {/* Visual Task Board Mockup */}
              <div className="w-full lg:w-3/5 bg-white p-4 rounded-2xl shadow-sm border border-slate-100 space-y-3">
                <div className="flex justify-between items-center text-[11px] font-bold text-slate-700 pb-2 border-b border-slate-100">
                  <span>Project timeline</span>
                  <span className="text-[10px] text-slate-400 font-mono">
                    Tasks 4
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="bg-amber-50 border border-amber-200/60 p-2.5 rounded-xl text-xs flex justify-between items-center">
                    <span className="font-semibold text-amber-900">
                      New Ideas for campaign
                    </span>
                    <span className="text-[10px] bg-amber-200/50 text-amber-800 px-2 py-0.5 rounded-full">
                      In progress
                    </span>
                  </div>
                  <div className="bg-sky-50 border border-sky-200/60 p-2.5 rounded-xl text-xs flex justify-between items-center">
                    <span className="font-semibold text-sky-900">
                      New Brandbook
                    </span>
                    <span className="text-[10px] bg-sky-200/50 text-sky-800 px-2 py-0.5 rounded-full">
                      Review
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4: Customizable Workspaces (Span 4, Dotted Border) */}
            <div className="lg:col-span-4 bg-[#f8f9fa] border-2 border-dashed border-slate-200 rounded-3xl p-8 flex flex-col justify-between items-center text-center shadow-sm hover:shadow-md transition-shadow">
              {/* Widget Icons Canvas */}
              <div className="flex items-center justify-center gap-2 mb-6">
                <div className="bg-white p-2.5 rounded-xl shadow-sm border border-slate-100 text-[10px] text-slate-500 font-medium">
                  Themes
                </div>
                <div className="bg-amber-400 text-slate-900 p-3 rounded-2xl shadow-md font-mono font-bold text-sm flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>04:21</span>
                </div>
                <div className="bg-white p-2.5 rounded-xl shadow-sm border border-slate-100 text-[10px] text-slate-500 font-medium">
                  Tasks View
                </div>
              </div>

              {/* Content */}
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-slate-900">
                  Customizable Workspaces
                </h3>
              </div>
            </div>
          </div>

          {/* Footer Caption */}
          <div className="text-center pt-4">
            <button
              type="button"
              className="text-xs font-semibold text-slate-400 tracking-wide hover:text-slate-600 transition-colors inline-flex items-center gap-1"
            >
              and a lot more features... <ChevronRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
