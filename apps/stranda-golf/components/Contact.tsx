import { MapPin, Phone, Mail, Facebook, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section id="kontakt" className="bg-[#1a3a2a] py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[#c9a84c] text-sm font-bold tracking-[0.2em] uppercase mb-3">
            Finn oss
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold text-white"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Kontakt oss
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="flex flex-col gap-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#c9a84c]/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-[#c9a84c]" />
              </div>
              <div>
                <h3 className="text-white font-bold mb-1">Adresse</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Haslevegen 26
                  <br />
                  6200 Stranda, Norge
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#c9a84c]/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-[#c9a84c]" />
              </div>
              <div>
                <h3 className="text-white font-bold mb-1">Telefon</h3>
                <a
                  href="tel:+4770262133"
                  className="text-white/60 hover:text-[#c9a84c] text-sm transition-colors block"
                >
                  +47 70 26 21 33 (Banen)
                </a>
                <a
                  href="tel:+4795142520"
                  className="text-white/60 hover:text-[#c9a84c] text-sm transition-colors block mt-0.5"
                >
                  +47 951 42 520 (Kontor)
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#c9a84c]/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-[#c9a84c]" />
              </div>
              <div>
                <h3 className="text-white font-bold mb-1">E-post</h3>
                <a
                  href="mailto:klubbkontor@strandagolf.no"
                  className="text-white/60 hover:text-[#c9a84c] text-sm transition-colors"
                >
                  klubbkontor@strandagolf.no
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#c9a84c]/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-[#c9a84c]" />
              </div>
              <div>
                <h3 className="text-white font-bold mb-1">Turneringer</h3>
                <p className="text-white/60 text-sm">
                  Tirsdager kl. 17:00–21:00
                  <br />
                  <span className="text-white/40 text-xs">
                    Prioritet for medlemmer
                  </span>
                </p>
              </div>
            </div>

            <a
              href="https://www.facebook.com/strandagolf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white/60 hover:text-[#c9a84c] transition-colors w-fit mt-2"
            >
              <Facebook className="w-5 h-5" />
              <span className="text-sm font-medium">
                Følg oss på Facebook
              </span>
            </a>
          </div>

          {/* Map placeholder */}
          <div className="rounded-2xl overflow-hidden bg-[#2a5040] h-80 relative">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-40"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1548407260-da850faa41e3?w=800&q=80')",
              }}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-[#c9a84c] flex items-center justify-center mb-3 shadow-lg">
                <MapPin className="w-6 h-6 text-[#1a3a2a]" />
              </div>
              <p className="text-white font-bold text-lg">Overvoll Golf</p>
              <p className="text-white/70 text-sm">Stranda, Sunnmøre</p>
              <a
                href="https://maps.google.com/?q=Haslevegen+26+6200+Stranda"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-[#c9a84c] text-sm font-semibold hover:underline"
              >
                Åpne i Google Maps →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
