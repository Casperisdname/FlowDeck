"use client";

import {
  ArrowRight,
  MessageSquare,
  Calendar,
  Flag,
  Lightbulb,
  CheckSquare,
  Clock,
  Hourglass,
  Timer,
  ChevronRight,
} from "lucide-react";
import Reveal from "./Reveal";

export function Footer() {
  return (
    <footer className="bg-[#f8f9fa] pt-16 pb-8 border-t border-slate-200/60 font-sans">
      <Reveal>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Top Header Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
            {/* Left Brand Title & Headline */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-2">
                {/* Logo Grid Dots */}
                <div className="grid grid-cols-2 gap-0.5 w-4 h-4">
                  <span className="w-1.5 h-1.5 bg-slate-900 rounded-sm"></span>
                  <span className="w-1.5 h-1.5 bg-slate-900 rounded-sm"></span>
                  <span className="w-1.5 h-1.5 bg-slate-900 rounded-sm"></span>
                  <span className="w-1.5 h-1.5 bg-slate-900 rounded-sm"></span>
                </div>
                <span className="text-xl font-extrabold tracking-tight text-slate-900">
                  <span className="text-sm md:text-base mr-0.5">F</span>
                  <span>FLOW</span>
                  <span className="text-blue-600">DECK</span>
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 tracking-tight leading-tight max-w-md">
                Stay organized and boost your productivity
              </h2>
            </div>

            {/* Right Navigation Links */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-8 text-sm text-slate-600 pt-2 md:pl-20">
              <ul className="space-y-3">
                {[
                  { name: "About Us", href: "#" },
                  { name: "Contact", href: "#" },
                  { name: "What's New", href: "#" },
                  { name: "Careers", href: "#" },
                ].map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="flex items-center gap-2 hover:text-slate-900 transition-colors group"
                    >
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                      <span>{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>

              <ul className="space-y-3">
                {[
                  { name: "Product", href: "#" },
                  { name: "Solutions", href: "#" },
                  { name: "Integrations", href: "#" },
                  { name: "Price", href: "#" },
                ].map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="flex items-center gap-2 hover:text-slate-900 transition-colors group"
                    >
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                      <span>{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Floating Icons Canvas */}
          <div className="relative py-12 px-4 mb-16 bg-gradient-to-b from-transparent via-slate-100/50 to-transparent rounded-3xl">
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 max-w-5xl mx-auto">
              {/* 3D App Tile Cards */}
              <div className="w-16 h-16 bg-white rounded-2xl shadow-md border border-slate-100 flex items-center justify-center text-slate-400">
                <MessageSquare className="w-6 h-6 text-slate-400" />
              </div>

              <div className="w-16 h-16 bg-white rounded-2xl shadow-md border border-slate-100 flex items-center justify-center font-bold text-slate-700 text-lg">
                20
              </div>

              <div className="w-16 h-16 bg-white rounded-2xl shadow-md border border-slate-100 flex items-center justify-center">
                <CheckSquare className="w-6 h-6 text-blue-500 fill-blue-500" />
              </div>

              <div className="w-16 h-16 bg-slate-900 rounded-2xl shadow-md flex items-center justify-center text-white">
                <Clock className="w-6 h-6 text-white" />
              </div>

              <div className="w-16 h-16 bg-white rounded-2xl shadow-md border border-slate-100 flex items-center justify-center">
                <Flag className="w-6 h-6 text-blue-600 fill-blue-600" />
              </div>

              <div className="w-16 h-16 bg-white rounded-2xl shadow-md border border-slate-100 flex items-center justify-center">
                <Hourglass className="w-6 h-6 text-sky-500" />
              </div>

              <div className="w-16 h-16 bg-white rounded-2xl shadow-md border border-slate-100 flex items-center justify-center">
                <Calendar className="w-6 h-6 text-slate-400" />
              </div>

              <div className="w-16 h-16 bg-white rounded-2xl shadow-md border border-slate-100 flex items-center justify-center">
                <Timer className="w-6 h-6 text-slate-700" />
              </div>

              <div className="w-16 h-16 bg-white rounded-2xl shadow-md border border-slate-100 flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-amber-500 fill-amber-500" />
              </div>

              <div className="w-16 h-16 bg-white rounded-2xl shadow-md border border-slate-100 flex items-center justify-center">
                <ChevronRight className="w-6 h-6 text-blue-500 stroke-[3]" />
              </div>
            </div>
          </div>

          {/* Bottom Legal Copyright Bar */}
          <div className="pt-6 border-t border-slate-200/80 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
            <p>
              © 2026 <span className="text-[8px]">F</span>FLOW
              <span className="text-blue-600">DECK</span>. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-slate-600 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-slate-600 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </footer>
  );
}
