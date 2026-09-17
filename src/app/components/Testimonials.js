"use client";

import { MessageSquare, Play } from "lucide-react";
import Reveal from "./Reveal";

const REVIEWS = [
  {
    quote:
      "This task manager has completely transformed the way my team works. We now collaborate in real-time and always meet deadlines.",
    author: "John D.",
    role: "Marketing Lead",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
    tall: true,
  },
  {
    quote: "An essential tool for anyone looking to manage their tasks better.",
    author: "Sarah W.",
    role: "Freelance Designer",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
  },
  {
    quote:
      "The built-in analytics give me a complete overview of our team's productivity.",
    author: "Sam J.",
    role: "Project Coordinator",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
  },
  {
    quote:
      "I love how easy it is to create and assign tasks. The platform's interface makes work feel less overwhelming.",
    author: "Daniela T.",
    role: "Operations Manager",
    avatar:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80",
  },
  {
    quote:
      "The time-tracking feature has been a game-changer for my freelance projects. It helps me stay organized and productive.",
    author: "Alex M.",
    role: "Freelance Developer",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 bg-white relative overflow-hidden"
    >
      <Reveal>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="inline-block px-4 py-1.5 bg-slate-100 text-slate-600 rounded-full text-xs font-semibold">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
              People just like you are already using{" "}
              <span className="inline-flex items-baseline">
                <span className="text-base align-baseline mr-0.5">F</span>
                <span>FLOW</span>
                <span className="text-blue-600">DECK</span>
              </span>
            </h2>
          </div>

          {/* Floating Chat Bubble Icon */}
          <div className="relative">
            <div className="hidden lg:flex absolute -left-6 top-10 bg-white p-3 rounded-2xl shadow-xl border border-slate-100 text-slate-400 z-10">
              <MessageSquare className="w-5 h-5 fill-slate-100 text-slate-400" />
            </div>

            {/* Testimonials Masonry / Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Column 1 */}
              <div className="space-y-6 flex flex-col justify-between">
                <div className="bg-slate-50/80 border border-slate-100 rounded-3xl p-6 flex flex-col justify-between min-h-[220px]">
                  <p className="text-xs text-slate-700 leading-relaxed font-medium">
                    "{REVIEWS[0].quote}"
                  </p>
                  <div className="flex items-center gap-3 mt-6">
                    <img
                      src={REVIEWS[0].avatar}
                      alt={REVIEWS[0].author}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">
                        {REVIEWS[0].author}
                      </h4>
                      <p className="text-[10px] text-slate-400">
                        {REVIEWS[0].role}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50/80 border border-slate-100 rounded-3xl p-6 flex flex-col justify-between min-h-[180px]">
                  <p className="text-xs text-slate-700 leading-relaxed font-medium">
                    "{REVIEWS[3].quote}"
                  </p>
                  <div className="flex items-center gap-3 mt-6">
                    <img
                      src={REVIEWS[3].avatar}
                      alt={REVIEWS[3].author}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">
                        {REVIEWS[3].author}
                      </h4>
                      <p className="text-[10px] text-slate-400">
                        {REVIEWS[3].role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Column 2 */}
              <div className="space-y-6 flex flex-col justify-between">
                <div className="bg-slate-50/80 border border-slate-100 rounded-3xl p-6 flex flex-col justify-between min-h-[160px]">
                  <p className="text-xs text-slate-700 leading-relaxed font-medium">
                    "{REVIEWS[1].quote}"
                  </p>
                  <div className="flex items-center gap-3 mt-4">
                    <img
                      src={REVIEWS[1].avatar}
                      alt={REVIEWS[1].author}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">
                        {REVIEWS[1].author}
                      </h4>
                      <p className="text-[10px] text-slate-400">
                        {REVIEWS[1].role}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50/80 border border-slate-100 rounded-3xl p-6 flex flex-col justify-between flex-1">
                  <p className="text-xs text-slate-700 leading-relaxed font-medium">
                    "{REVIEWS[4].quote}"
                  </p>
                  <div className="flex items-center gap-3 mt-6">
                    <img
                      src={REVIEWS[4].avatar}
                      alt={REVIEWS[4].author}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">
                        {REVIEWS[4].author}
                      </h4>
                      <p className="text-[10px] text-slate-400">
                        {REVIEWS[4].role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Column 3 (Includes Video Review Card) */}
              <div className="space-y-6 flex flex-col justify-between">
                <div className="bg-slate-50/80 border border-slate-100 rounded-3xl p-6 flex flex-col justify-between min-h-[160px]">
                  <p className="text-xs text-slate-700 leading-relaxed font-medium">
                    "{REVIEWS[2].quote}"
                  </p>
                  <div className="flex items-center gap-3 mt-4">
                    <img
                      src={REVIEWS[2].avatar}
                      alt={REVIEWS[2].author}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">
                        {REVIEWS[2].author}
                      </h4>
                      <p className="text-[10px] text-slate-400">
                        {REVIEWS[2].role}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Video Thumbnail Card */}
                <button
                  type="button"
                  className="relative rounded-3xl overflow-hidden h-64 shadow-md group cursor-pointer text-left"
                >
                  <img
                    src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&auto=format&fit=crop&q=80"
                    alt="Team member giving a video testimonial"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />

                  {/* Floating Play Badge */}
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg text-[10px] font-semibold text-slate-800">
                    Watch video review
                  </div>

                  <div className="absolute -bottom-2 -right-2 bg-red-600 text-white p-3 rounded-2xl shadow-lg">
                    <Play className="w-4 h-4 fill-white" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
