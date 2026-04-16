import { Badge } from "@/components/ui/badge";
import { Sparkles, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SpecialOffer() {
  return (
    <section id="tilbud" className="bg-[#c9a84c] relative overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #1a3a2a 0, #1a3a2a 1px, transparent 0, transparent 50%)",
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left: Main offer */}
          <div className="text-center md:text-left">
            <Badge className="bg-[#1a3a2a] text-[#c9a84c] border-0 mb-4 text-xs font-bold tracking-widest uppercase">
              ⚡ Begrenset tilbud
            </Badge>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#1a3a2a] mb-3"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Halvpris Medlemskap
            </h2>
            <p className="text-[#1a3a2a]/80 text-lg font-medium">
              Meld deg inn nå og få 50% rabatt på årsmedlemskapet
            </p>
          </div>

          {/* Right: Bonus offer */}
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <div className="bg-[#1a3a2a] rounded-2xl p-6 text-center min-w-52">
              <Gift className="w-8 h-8 text-[#c9a84c] mx-auto mb-2" />
              <p className="text-white font-bold text-sm">
                Hver 50. nye medlem
              </p>
              <p className="text-[#c9a84c] font-black text-xl mt-1">
                GRATIS!
              </p>
              <p className="text-white/70 text-xs mt-1">
                Fullt årsmedlemskap
              </p>
            </div>
            <Button
              nativeButton={false} render={<a href="#medlemskap" />}
              size="lg"
              className="bg-[#1a3a2a] hover:bg-[#2a5040] text-white font-bold px-8 py-6 rounded-full whitespace-nowrap"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Sikre deg plassen
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
