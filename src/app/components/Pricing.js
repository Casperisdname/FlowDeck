"use client";

import { Check, Zap } from "lucide-react";
import Reveal from "./Reveal";

const PLANS = [
  {
    name: "Basic plan",
    tagline: "Perfect for individuals.",
    price: "$5",
    period: "/mo",
    popular: false,
    ctaText: "Get started",
    features: [
      "1 User workspace",
      "Up to 10 active projects",
      "5 GB File storage",
      "Kanban & list views",
      "Standard support",
    ],
  },
  {
    name: "Pro plan",
    tagline: "Ideal for small teams.",
    price: "$9",
    period: "/mo",
    subtext: "Best choice",
    popular: true,
    ctaText: "Get started",
    features: [
      "Up to 5 team members",
      "Unlimited projects & tasks",
      "100 GB File storage",
      "Webhook & API triggers",
      "Automated calendar reminders",
      "Priority email support",
    ],
  },
  {
    name: "Advanced plan",
    tagline: "Best for large organizations.",
    price: "$15",
    period: "/mo",
    popular: false,
    ctaText: "Get started",
    features: [
      "Unlimited team members",
      "Unlimited projects & storage",
      "Everything in Pro plan",
      "Advanced visual analytics",
      "Custom role permissions",
      "24/7 Dedicated support",
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-slate-50/50">
      <Reveal>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Section Header */}
          <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
            <span className="inline-block px-4 py-1.5 bg-white border border-slate-200 text-slate-600 rounded-full text-xs font-semibold shadow-sm">
              Pricing
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
              Simple pricing plans
            </h2>
          </div>

          {/* Pricing Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-6">
            {PLANS.map((plan, idx) => (
              <div
                key={idx}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  plan.popular
                    ? "bg-blue-600 text-white shadow-2xl shadow-blue-500/30 scale-105 z-10 my-0"
                    : "bg-white text-slate-900 border border-slate-200/80 shadow-xl shadow-slate-100 my-4"
                }`}
              >
                {/* Lightning Icon Badge for Featured Plan */}
                {plan.popular && (
                  <div className="absolute -top-5 right-6 bg-white p-3 rounded-2xl shadow-md border border-slate-100 text-amber-500">
                    <Zap className="w-6 h-6 fill-amber-400 text-amber-400" />
                  </div>
                )}

                {/* Plan Header */}
                <div>
                  <h3 className="text-xl font-bold">{plan.name}</h3>
                  <p
                    className={`text-sm mt-1 ${
                      plan.popular ? "text-blue-100" : "text-slate-500"
                    }`}
                  >
                    {plan.tagline}
                  </p>

                  {/* Pricing Display */}
                  <div className="my-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl md:text-5xl font-black tracking-tight">
                        {plan.price}
                      </span>
                      <span
                        className={`text-sm font-medium ${
                          plan.popular ? "text-blue-100" : "text-slate-400"
                        }`}
                      >
                        {plan.period}
                      </span>
                    </div>
                    {plan.subtext && (
                      <span className="text-xs font-medium text-blue-100 mt-1 block">
                        {plan.subtext}
                      </span>
                    )}
                  </div>

                  {/* Call To Action Button */}
                  <button
                    className={`w-full py-3 px-6 rounded-xl font-semibold text-sm transition-all shadow-sm ${
                      plan.popular
                        ? "bg-white text-blue-600 hover:bg-slate-50"
                        : "bg-blue-600 text-white hover:bg-blue-700"
                    }`}
                  >
                    {plan.ctaText}
                  </button>

                  {/* Features List */}
                  <ul className="mt-8 space-y-3">
                    {plan.features.map((feature, fIdx) => (
                      <li
                        key={fIdx}
                        className="flex items-center gap-3 text-sm"
                      >
                        <Check
                          className={`w-4 h-4 shrink-0 ${
                            plan.popular ? "text-white" : "text-slate-700"
                          }`}
                        />
                        <span
                          className={
                            plan.popular ? "text-blue-50" : "text-slate-600"
                          }
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Learn More Footer Link */}
                <div className="mt-8">
                  <a
                    href="#"
                    className={`text-xs underline font-medium hover:opacity-80 ${
                      plan.popular ? "text-white" : "text-slate-500"
                    }`}
                  >
                    Learn more
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
