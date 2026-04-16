import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const membershipPlans = [
  {
    type: "Junior / Barn",
    age: "t.o.m. 19 år",
    price: "195",
    originalPrice: "390",
    greenFeeDay: "200",
    greenFeeSeason: "1 500",
    highlight: false,
  },
  {
    type: "Senior",
    age: "20 år og eldre",
    price: "395",
    originalPrice: "790",
    greenFeeDay: "300",
    greenFeeSeason: "2 400",
    highlight: true,
  },
  {
    type: "Par",
    age: "To voksne",
    price: "695",
    originalPrice: "1 390",
    greenFeeDay: null,
    greenFeeSeason: null,
    highlight: false,
  },
  {
    type: "Familie",
    age: "Med barn/juniorer",
    price: "995",
    originalPrice: "1 990",
    greenFeeDay: null,
    greenFeeSeason: null,
    highlight: false,
  },
];

const included = [
  "Tilgang til Overvoll golfbane",
  "Sesongkort for golfsimulator",
  "Tilgang til Golfbox-portalen",
  "Nyhetsbrev og oppdateringer",
  "Ukentlige turneringer",
  "Første år i VTG-bane inkludert",
];

export default function Membership() {
  return (
    <section id="medlemskap" className="bg-[#1a3a2a] py-24 sm:py-32 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#c9a84c]/5 rounded-full -translate-y-48 translate-x-48" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#c9a84c]/5 rounded-full translate-y-32 -translate-x-32" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[#c9a84c] text-sm font-bold tracking-[0.2em] uppercase mb-3">
            Fjernmedlemskap
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold text-white"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Velg din plan
          </h2>
          <p className="mt-4 text-white/60 text-lg max-w-xl mx-auto">
            Alle priser er vist med{" "}
            <span className="text-[#c9a84c] font-semibold">50% høstrabatt</span>{" "}
            — bli med i dag.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {membershipPlans.map((plan) => (
            <div
              key={plan.type}
              className={`rounded-2xl p-8 border transition-all duration-300 ${
                plan.highlight
                  ? "bg-[#c9a84c] border-[#c9a84c] scale-105 shadow-2xl"
                  : "bg-white/5 border-white/10 hover:border-white/20"
              }`}
            >
              {plan.highlight && (
                <Badge className="bg-[#1a3a2a] text-[#c9a84c] border-0 mb-4 text-xs font-bold tracking-widest uppercase w-fit">
                  Mest populær
                </Badge>
              )}
              <h3
                className={`text-xl font-bold mb-1 ${
                  plan.highlight ? "text-[#1a3a2a]" : "text-white"
                }`}
              >
                {plan.type}
              </h3>
              <p
                className={`text-sm mb-6 ${
                  plan.highlight ? "text-[#1a3a2a]/70" : "text-white/50"
                }`}
              >
                {plan.age}
              </p>
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span
                    className={`text-4xl font-black ${
                      plan.highlight ? "text-[#1a3a2a]" : "text-white"
                    }`}
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`text-sm font-medium ${
                      plan.highlight ? "text-[#1a3a2a]/70" : "text-white/60"
                    }`}
                  >
                    kr/år
                  </span>
                </div>
                <p
                  className={`text-xs mt-1 line-through ${
                    plan.highlight ? "text-[#1a3a2a]/50" : "text-white/30"
                  }`}
                >
                  Ord. pris: {plan.originalPrice} kr
                </p>
              </div>

              {plan.greenFeeDay && (
                <div
                  className={`text-xs rounded-lg p-3 mb-6 ${
                    plan.highlight ? "bg-[#1a3a2a]/10" : "bg-white/5"
                  }`}
                >
                  <p
                    className={plan.highlight ? "text-[#1a3a2a]/70" : "text-white/50"}
                  >
                    Greenfee dagskort:{" "}
                    <span
                      className={`font-bold ${
                        plan.highlight ? "text-[#1a3a2a]" : "text-white"
                      }`}
                    >
                      {plan.greenFeeDay} kr
                    </span>
                  </p>
                  <p
                    className={`mt-1 ${plan.highlight ? "text-[#1a3a2a]/70" : "text-white/50"}`}
                  >
                    Sesongkort:{" "}
                    <span
                      className={`font-bold ${
                        plan.highlight ? "text-[#1a3a2a]" : "text-white"
                      }`}
                    >
                      {plan.greenFeeSeason} kr
                    </span>
                  </p>
                </div>
              )}

              <Button
                nativeButton={false} render={<a href="https://strandagolf.no" target="_blank" rel="noopener noreferrer" />}
                className={`w-full font-bold rounded-full ${
                  plan.highlight
                    ? "bg-[#1a3a2a] hover:bg-[#2a5040] text-white"
                    : "bg-[#c9a84c] hover:bg-[#e2c068] text-[#1a3a2a]"
                }`}
              >
                Meld deg inn
              </Button>
            </div>
          ))}
        </div>

        {/* Included features */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 max-w-3xl mx-auto">
          <h3
            className="text-white font-bold text-xl mb-6 text-center"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Alle medlemskap inkluderer
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {included.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#c9a84c]/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-[#c9a84c]" />
                </div>
                <span className="text-white/80 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
