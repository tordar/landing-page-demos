import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=1920&q=80')",
        }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a3a2a]/70 via-[#1a3a2a]/50 to-[#1a3a2a]/80" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <p className="text-[#c9a84c] text-sm font-semibold tracking-[0.2em] uppercase mb-6">
          Etablert 1991 · Overvoll, Stranda
        </p>
        <h1
          className="text-5xl sm:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Golf i hjertet
          <br />
          <span className="text-[#c9a84c]">av Sunnmøre</span>
        </h1>
        <p className="text-white/80 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Bli en del av Stranda Golfklubb — over 1 450 medlemmer, 9 vakre hull
          ved Overvoll, og helårstrening med moderne Trackman-simulatorer.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            nativeButton={false} render={<a href="#medlemskap" />}
            size="lg"
            className="bg-[#c9a84c] hover:bg-[#e2c068] text-[#1a3a2a] font-bold text-base px-8 py-6 rounded-full shadow-xl"
          >
            Bli Medlem
          </Button>
          <Button
            nativeButton={false} render={<a href="#veien-til-golf" />}
            size="lg"
            variant="outline"
            className="border-white/60 text-white bg-white/10 hover:bg-white/20 hover:text-white font-semibold text-base px-8 py-6 rounded-full backdrop-blur-sm"
          >
            Prøv Gratis
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          {[
            { num: "35+", label: "År med golf" },
            { num: "1 450", label: "Medlemmer" },
            { num: "9", label: "Hull ved Overvoll" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div
                className="text-3xl font-bold text-[#c9a84c]"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {s.num}
              </div>
              <div className="text-white/70 text-xs mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#tilbud"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
      >
        <ChevronDown className="w-6 h-6" />
      </a>
    </section>
  );
}
