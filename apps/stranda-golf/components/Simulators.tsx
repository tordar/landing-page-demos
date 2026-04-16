import { Zap, Wind, Target } from "lucide-react";

const specs = [
  {
    icon: Zap,
    title: "Trackman 4",
    desc: "Industristandarden innen golfsimulering. Radar-basert sporing for presise målinger av ball og kølle.",
  },
  {
    icon: Wind,
    title: "Trackman IO",
    desc: "Kompakt og kraftig simulatorteknologi for indoor trening og morsomme runder hele vinteren.",
  },
  {
    icon: Target,
    title: "Oktober–Oktober",
    desc: "Simulatortilgang er inkludert i alle VTG-kurs og sesongkort. Hold formen selv når det er snø ute.",
  },
];

export default function Simulators() {
  return (
    <section id="banen" className="bg-[#2d2d2d] py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: image */}
          <div className="relative">
            <div
              className="rounded-2xl overflow-hidden h-96 bg-cover bg-center shadow-2xl"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?w=800&q=80')",
              }}
            />
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-[#c9a84c] rounded-2xl p-5 shadow-xl">
              <p className="text-[#1a3a2a] font-black text-2xl" style={{ fontFamily: "var(--font-playfair)" }}>
                Helårs
              </p>
              <p className="text-[#1a3a2a]/80 text-xs font-medium">golf</p>
            </div>
          </div>

          {/* Right: content */}
          <div>
            <p className="text-[#c9a84c] text-sm font-bold tracking-[0.2em] uppercase mb-3">
              Innendørs golf
            </p>
            <h2
              className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Golf hele året —
              <br />
              <span className="text-[#c9a84c]">uansett vær</span>
            </h2>
            <p className="text-white/60 text-lg mb-10 leading-relaxed">
              Med Trackman 4 og Trackman IO-simulatorer kan du trene, spille
              virtuelle baner og konkurrere med andre medlemmer gjennom hele
              vinteren.
            </p>

            <div className="flex flex-col gap-6">
              {specs.map((s) => (
                <div key={s.title} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#c9a84c]/10 flex items-center justify-center flex-shrink-0">
                    <s.icon className="w-5 h-5 text-[#c9a84c]" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1">{s.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
