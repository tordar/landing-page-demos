import Image from "next/image";
import { about, history } from "@/lib/content";

const OM_PHOTO = "/img/Vestfjellet-scaled.jpg";
const UTMB_INDEX_LOGO = "/img/logo-utmb-index.png";

export function About() {
  return (
    <section className="px-4 py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-[minmax(0,380px)_1fr] md:gap-12">
        {/* Left: static (sticky) image */}
        <div className="relative md:sticky md:top-8 md:self-start">
          <div className="relative aspect-[3/4] w-full overflow-hidden bg-muted">
            <Image
              src={OM_PHOTO}
              alt="Vestfjellet 634 moh. – høyeste punkt i Vestfold"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 380px"
            />
          </div>
        </div>

        {/* Right: scrollable content */}
        <div className="min-w-0 space-y-16">
          <div className="space-y-6 text-center md:text-left">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {about.title}
            </h2>
            <div className="space-y-4 text-muted-foreground">
              {about.paragraphs.map((p, i) => (
                <p key={i} className="text-lg leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </div>

          <div className="flex justify-center md:justify-start">
            <Image
              src={UTMB_INDEX_LOGO}
              alt="UTMB Index"
              width={260}
              height={104}
              className="h-auto w-auto max-w-[260px] object-contain"
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-center text-2xl font-bold tracking-tight sm:text-3xl md:text-left">
              {history.title}
            </h2>
            <div className="space-y-4 text-muted-foreground">
              {history.paragraphs.map((p, i) => (
                <p key={i} className="text-lg leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
            <p className="text-right font-medium text-foreground">
              {history.author}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
