import { Check, BookOpen } from "lucide-react";
import { Button } from "@/app/stranda-golf/components/ui/button";

const included = [
  "Minimum 12 timers kurs (~9 timer praktisk instruksjon)",
  "Treningskort som læreplan",
  "E-læringskurs i golfregler",
  "Lånt utstyr i hele kursperioden",
  "Første års klubbmedlemskap",
  "Sesongkort for golfsimulator",
  "Starthandicap 54 ved fullføring",
  "Voksne: Norsk Golf-magasin (8 utgaver/år)",
];

export default function VeienTilGolf() {
  return (
    <section id="veien-til-golf" className="bg-[#f8f5ee] py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: content */}
          <div>
            <p className="text-[#c9a84c] text-sm font-bold tracking-[0.2em] uppercase mb-3">
              Nybegynner?
            </p>
            <h2
              className="text-4xl sm:text-5xl font-bold text-[#1a3a2a] mb-6 leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Veien til Golf
            </h2>
            <p className="text-[#6b6b6b] text-lg mb-8 leading-relaxed">
              Aldri spilt golf før? Veien til Golf er det offisielle
              introduksjonsprogrammet som gir deg alt du trenger for å komme i
              gang — fra null til godkjent golfer med handicap 54.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {included.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#1a3a2a]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-[#1a3a2a]" />
                  </div>
                  <span className="text-[#2d2d2d] text-sm leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <Button
              nativeButton={false} render={<a href="https://strandagolf.no" target="_blank" rel="noopener noreferrer" />}
              size="lg"
              className="bg-[#1a3a2a] hover:bg-[#2a5040] text-white font-bold px-8 py-6 rounded-full"
            >
              <BookOpen className="w-4 h-4 mr-2" />
              Registrer deg
            </Button>
          </div>

          {/* Right: pricing cards */}
          <div className="flex flex-col gap-6">
            {/* Image */}
            <div
              className="rounded-2xl overflow-hidden h-56 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=800&q=80')",
              }}
            />

            {/* Pricing */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-6 border border-[#e2ddd4] shadow-sm text-center">
                <p className="text-[#6b6b6b] text-xs font-medium uppercase tracking-widest mb-2">
                  Barn & Junior
                </p>
                <p
                  className="text-4xl font-black text-[#1a3a2a]"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  2 590
                </p>
                <p className="text-[#6b6b6b] text-sm mt-1">kr · t.o.m. 19 år</p>
              </div>
              <div className="bg-[#1a3a2a] rounded-2xl p-6 border border-[#1a3a2a] shadow-sm text-center">
                <p className="text-[#c9a84c] text-xs font-medium uppercase tracking-widest mb-2">
                  Voksen
                </p>
                <p
                  className="text-4xl font-black text-white"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  4 040
                </p>
                <p className="text-white/60 text-sm mt-1">kr · 20 år og eldre</p>
              </div>
            </div>

            <div className="bg-[#c9a84c]/10 border border-[#c9a84c]/30 rounded-xl p-4">
              <p className="text-[#1a3a2a] text-sm font-medium">
                💡 Kurset gjennomføres på innendørs golfsimulator gjennom
                vinteren — ingen forhåndskrav, bare møt opp!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
