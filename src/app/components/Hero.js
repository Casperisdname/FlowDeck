"use client";

import { motion } from "framer-motion";
import { Check, Activity, MoreHorizontal } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden mt-16 pt-12 pb-16 md:pt-20 md:pb-28 bg-gradient-to-b from-sky-50/50 via-white to-white min-h-[calc(100vh-80px)] flex flex-col justify-center items-center"
    >
      <div className="max-w-7xl mx-auto px-6 relative w-full flex flex-col items-center">
        {/* --- FLOATING WIDGET 1: TOP LEFT (Webhook) --- */}
        <motion.div
          initial={{ opacity: 0, x: -30, y: -20, rotate: -6 }}
          animate={{ opacity: 1, x: 0, y: [0, -10, 0], rotate: -6 }}
          transition={{
            opacity: { duration: 0.6 },
            y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
          }}
          className="hidden 2xl:flex absolute top-2 left-4 2xl:left-8 bg-emerald-50/90 backdrop-blur-md border border-emerald-200/60 p-3.5 rounded-2xl shadow-sm w-48 flex-col gap-1.5 z-10"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-emerald-700 font-semibold text-xs">
              <Activity className="w-3.5 h-3.5" />
              <span>Webhook</span>
            </div>
            <span className="bg-emerald-500/20 text-emerald-800 text-[9px] font-bold px-2 py-0.5 rounded-full uppercase">
              Live
            </span>
          </div>
          <p className="text-[11px] text-emerald-900/70 font-mono bg-emerald-100/50 p-1.5 rounded border border-emerald-200/40 truncate">
            https://api.flowdeck.io/v1/hook
          </p>
        </motion.div>

        {/* --- FLOATING WIDGET 2: BOTTOM LEFT (Reminders) --- */}
        <motion.div
          initial={{ opacity: 0, x: -40, y: 30, rotate: -4 }}
          animate={{ opacity: 1, x: 0, y: [0, 8, 0], rotate: -4 }}
          transition={{
            opacity: { duration: 0.6, delay: 0.2 },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
          }}
          className="hidden 2xl:flex absolute bottom-2 left-2 2xl:left-6 bg-white/95 backdrop-blur-md border border-slate-100 p-3.5 rounded-2xl shadow-xl shadow-slate-200/50 w-52 flex-col gap-2.5 z-10"
        >
          <div className="flex items-center justify-between border-b border-slate-100 pb-1.5">
            <span className="font-bold text-slate-800 text-xs">Reminders</span>
            <MoreHorizontal className="w-3.5 h-3.5 text-slate-400" />
          </div>
          <div className="grid grid-cols-7 gap-1 text-center text-[9px] text-slate-400 font-medium">
            <span>M</span>
            <span>T</span>
            <span>W</span>
            <span>T</span>
            <span>F</span>
            <span>S</span>
            <span>S</span>
          </div>
          <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-semibold text-slate-700">
            <span className="text-slate-300">28</span>
            <span className="text-slate-300">29</span>
            <span className="text-slate-300">30</span>
            <span className="text-slate-300">31</span>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
            <span>7</span>
            <span>8</span>
            <span>9</span>
            <span>10</span>
            <span>11</span>
            <span>12</span>
            <span>13</span>
            <span className="bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
              14
            </span>
            <span>15</span>
            <span>16</span>
          </div>
        </motion.div>

        {/* --- CENTER HERO CONTENT --- */}
        <div className="max-w-3xl text-center z-20 space-y-6 my-auto py-6 md:py-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1]"
          >
            Where work flows without friction.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed"
          >
            FlowDeck unifies your team's tasks, API triggers, and operations on
            one dynamic visual canvas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-2"
          >
            <button
              type="button"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-3.5 rounded-2xl transition-all shadow-lg shadow-blue-500/25 active:scale-95 text-sm sm:text-base"
            >
              Start Free Trial
            </button>
            <button
              type="button"
              className="bg-slate-100 hover:bg-slate-200/80 text-slate-700 font-semibold px-7 py-3.5 rounded-2xl border border-slate-200/60 transition-all active:scale-95 text-sm sm:text-base"
            >
              Watch Demo
            </button>
          </motion.div>
        </div>

        {/* --- FLOATING WIDGET 3: TOP RIGHT (Kanban) --- */}
        <motion.div
          initial={{ opacity: 0, x: 30, y: -20, rotate: 5 }}
          animate={{ opacity: 1, x: 0, y: [0, -12, 0], rotate: 5 }}
          transition={{
            opacity: { duration: 0.6, delay: 0.1 },
            y: {
              duration: 5.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.2,
            },
          }}
          className="hidden 2xl:flex absolute top-4 right-4 2xl:right-8 bg-white/95 backdrop-blur-md border border-slate-100 p-3.5 rounded-2xl shadow-xl shadow-slate-200/50 w-56 flex-col gap-2.5 z-10"
        >
          <div className="flex items-center justify-between border-b border-slate-100 pb-1.5">
            <span className="font-bold text-slate-800 text-xs">Kanban</span>
            <MoreHorizontal className="w-3.5 h-3.5 text-slate-400" />
          </div>
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 bg-rose-50/60 border border-rose-100 p-1.5 rounded-xl text-[11px] text-rose-900 font-medium">
              <span className="w-3.5 h-3.5 rounded-full border border-rose-300 flex items-center justify-center" />
              <span>Test progress</span>
            </div>
            <div className="flex items-center gap-2 bg-emerald-50/60 border border-emerald-100 p-1.5 rounded-xl text-[11px] text-emerald-900 font-medium">
              <span className="w-3.5 h-3.5 rounded-full bg-emerald-500 flex items-center justify-center text-white">
                <Check className="w-2.5 h-2.5" />
              </span>
              <span>Task done</span>
            </div>
          </div>
          <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden mt-1">
            <div className="bg-blue-600 h-full w-[75%]" />
          </div>
        </motion.div>

        {/* --- FLOATING WIDGET 4: BOTTOM RIGHT (Analytics) --- */}
        <motion.div
          initial={{ opacity: 0, x: 40, y: 30, rotate: 3 }}
          animate={{ opacity: 1, x: 0, y: [0, 10, 0], rotate: 3 }}
          transition={{
            opacity: { duration: 0.6, delay: 0.25 },
            y: {
              duration: 6.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.8,
            },
          }}
          className="hidden 2xl:flex absolute bottom-4 right-2 2xl:right-6 bg-white/95 backdrop-blur-md border border-slate-100 p-3.5 rounded-2xl shadow-xl shadow-slate-200/50 w-52 flex-col gap-2 z-10"
        >
          <div className="flex items-center justify-between">
            <span className="font-bold text-slate-800 text-xs">Analytics</span>
            <MoreHorizontal className="w-3.5 h-3.5 text-slate-400" />
          </div>
          <div className="h-12 w-full flex items-end pt-1">
            <svg
              className="w-full h-full text-blue-500"
              viewBox="0 0 100 40"
              fill="none"
            >
              <path
                d="M0 35 Q 20 10, 40 25 T 80 15 T 100 5"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </motion.div>
      </div>

      {/* --- MOBILE / TABLET / SMALL-LAPTOP GRID (all 4 widgets, shown below 2xl) --- */}
      <div className="2xl:hidden w-full px-6 mt-10 max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-emerald-50/90 border border-emerald-200/60 p-4 rounded-2xl shadow-sm flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-emerald-700 font-semibold text-xs">
              <Activity className="w-4 h-4" />
              <span>Webhook Trigger</span>
            </div>
            <span className="bg-emerald-500/20 text-emerald-800 text-[9px] font-bold px-2 py-0.5 rounded-full uppercase">
              Live
            </span>
          </div>
          <p className="text-xs text-emerald-900/70 font-mono bg-emerald-100/50 p-2 rounded border border-emerald-200/40 truncate">
            https://api.flowdeck.io/v1/hook
          </p>
        </div>

        <div className="bg-white border border-slate-100 p-4 rounded-2xl shadow-sm flex flex-col gap-2">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <span className="font-bold text-slate-800 text-xs">
              Kanban Progress
            </span>
            <MoreHorizontal className="w-4 h-4 text-slate-400" />
          </div>
          <div className="flex items-center justify-between text-xs text-slate-700 font-medium pt-1">
            <span>Tasks Completed</span>
            <span className="font-bold text-blue-600">75%</span>
          </div>
          <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
            <div className="bg-blue-600 h-full w-[75%]" />
          </div>
        </div>

        <div className="bg-white border border-slate-100 p-4 rounded-2xl shadow-sm flex flex-col gap-2">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <span className="font-bold text-slate-800 text-xs">Reminders</span>
            <MoreHorizontal className="w-4 h-4 text-slate-400" />
          </div>
          <div className="flex items-center justify-between text-xs text-slate-700 font-medium pt-1">
            <span>Next reminder</span>
            <span className="font-bold text-blue-600">Sep 14</span>
          </div>
        </div>

        <div className="bg-white border border-slate-100 p-4 rounded-2xl shadow-sm flex flex-col gap-2">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <span className="font-bold text-slate-800 text-xs">Analytics</span>
            <MoreHorizontal className="w-4 h-4 text-slate-400" />
          </div>
          <div className="h-8 w-full flex items-end">
            <svg
              className="w-full h-full text-blue-500"
              viewBox="0 0 100 40"
              fill="none"
            >
              <path
                d="M0 35 Q 20 10, 40 25 T 80 15 T 100 5"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
