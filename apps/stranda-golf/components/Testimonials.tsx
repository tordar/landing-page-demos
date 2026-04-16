"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Knut Aa.",
    text: "Igjen tusen takk for utrolig god service. Det er alltid en glede å spille på Overvoll!",
    role: "Klubbmedlem",
  },
  {
    name: "Morten B.",
    text: "Takker for rask og hyggelig service. Stranda Golfklubb vet virkelig hvordan man tar vare på medlemmene sine.",
    role: "Klubbmedlem",
  },
  {
    name: "Wenche Ø.",
    text: "Takk igjen. Også i år kjempeservice!! Gleder meg til neste sesong på banen.",
    role: "Klubbmedlem",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section className="bg-[#f8f5ee] py-24 sm:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-[#c9a84c] text-sm font-bold tracking-[0.2em] uppercase mb-3">
          Hva sier medlemmene?
        </p>
        <h2
          className="text-4xl sm:text-5xl font-bold text-[#1a3a2a] mb-16"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Ord fra våre medlemmer
        </h2>

        {/* Testimonial card */}
        <div className="relative">
          <div className="bg-white rounded-3xl shadow-lg border border-[#e2ddd4] p-10 sm:p-14">
            {/* Stars */}
            <div className="flex justify-center gap-1 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-[#c9a84c] fill-[#c9a84c]"
                />
              ))}
            </div>

            {/* Quote */}
            <blockquote
              className="text-[#2d2d2d] text-xl sm:text-2xl leading-relaxed mb-8"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              &ldquo;{testimonials[current].text}&rdquo;
            </blockquote>

            {/* Author */}
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#1a3a2a] flex items-center justify-center">
                <span className="text-[#c9a84c] font-bold text-sm">
                  {testimonials[current].name[0]}
                </span>
              </div>
              <div className="text-left">
                <p className="text-[#1a3a2a] font-bold text-sm">
                  {testimonials[current].name}
                </p>
                <p className="text-[#6b6b6b] text-xs">
                  {testimonials[current].role}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-white border border-[#e2ddd4] flex items-center justify-center hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors shadow-sm"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex gap-2 items-center">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all duration-200 ${
                    i === current
                      ? "w-6 h-2 bg-[#c9a84c]"
                      : "w-2 h-2 bg-[#e2ddd4] hover:bg-[#c9a84c]/40"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-white border border-[#e2ddd4] flex items-center justify-center hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors shadow-sm"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
