"use client";

import React from "react";

export default function Carousel() {
  const messages = [
    "🚀 Welcome to my Next.js App!",
    "🔥 Fast, SEO-friendly, and modern.",
    "⚡ Built with React and Tailwind CSS.",
    "🎉 Infinite moving text carousel!",
  ];

  // We duplicate the list to ensure a seamless, infinite loop transition
  const extendedMessages = [...messages, ...messages];

  return (
    <div className="flex justify-center items-center h-48 bg-gray-950">
      {/* The visible window that crops overflowing text */}
      <div className="relative w-[350px] h-16 overflow-hidden rounded-xl border-2 border-pink-500 bg-gray-900 flex items-center group">
        {/* The moving track containing the items */}
        <div className="flex w-max animate-[scroll_12s_linear_infinite] group-hover:[animation-play-state:paused]">
          {extendedMessages.map((msg, index) => (
            <div
              key={index}
              className="w-[346px] shrink-0 flex items-center justify-center text-white font-bold text-lg px-4 text-center"
            >
              {msg}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
