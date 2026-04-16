import { Trophy, MapPin, Monitor, Users } from "lucide-react";

const features = [
  {
    icon: Trophy,
    title: "35 år med golf",
    desc: "Grunnlagt i 1991 — en av de mest erfarne golfklubbene på Sunnmøre med sterk klubbkultur og dedikerte medlemmer.",
  },
  {
    icon: MapPin,
    title: "9 hull · Overvoll",
    desc: "Vakker 9-hulls bane i naturskjønne omgivelser ved Overvoll utenfor Stranda. Åpen for spill uten forhåndsreservasjon.",
  },
  {
    icon: Monitor,
    title: "Trackman 4 + IO",
    desc: "Moderne innebanegolf hele vinteren med Trackman 4 og Trackman IO simulatorer. Hold formen gjennom hele året.",
  },
  {
    icon: Users,
    title: "Ukentlige turneringer",
    desc: "Fast tirsdagsturnering med 18 hull for alle nivåer. Sosialt og engasjerende miljø som ønsker alle velkomne.",
  },
];

export default function WhyStranda() {
  return (
    <section id="om-oss" className="bg-[#f8f5ee] py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[#c9a84c] text-sm font-bold tracking-[0.2em] uppercase mb-3">
            Hvorfor Stranda
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold text-[#1a3a2a]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Din golfklubb på Sunnmøre
          </h2>
          <p className="mt-4 text-[#6b6b6b] text-lg max-w-2xl mx-auto">
            Vi vil gjerne være din klubb — uansett om du er nybegynner eller
            erfaren golfer.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-[#e2ddd4] group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#1a3a2a]/10 flex items-center justify-center mb-5 group-hover:bg-[#c9a84c]/20 transition-colors duration-300">
                <f.icon className="w-6 h-6 text-[#1a3a2a] group-hover:text-[#c9a84c] transition-colors duration-300" />
              </div>
              <h3 className="text-[#1a3a2a] font-bold text-lg mb-2">
                {f.title}
              </h3>
              <p className="text-[#6b6b6b] text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
