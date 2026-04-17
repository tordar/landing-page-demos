export default function CertificationsRibbon() {
  return (
    <section className="py-16 bg-surface-container-highest">
      <div className="max-w-7xl mx-auto px-8">
        <p className="text-center font-label text-xs font-bold uppercase tracking-[0.2em] mb-10 text-on-surface-variant">
          Sertifisert og godkjent av
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="text-2xl font-black font-headline tracking-tighter hover:text-blue-900 transition-colors">
            NELFO
          </div>
          <div className="text-xl font-bold font-headline tracking-tight hover:text-red-600 transition-colors">
            Startbank
          </div>
          <div className="text-2xl font-extrabold font-headline italic hover:text-blue-700 transition-colors">
            Nemko
          </div>
          <div className="text-xl font-bold font-headline flex items-center gap-1 hover:text-green-600 transition-colors">
            <span className="material-symbols-outlined text-green-600">eco</span>
            Miljøfyrtårn
          </div>
          <div className="text-lg font-bold font-headline uppercase hover:text-orange-600 transition-colors">
            Lærlingbedrift
          </div>
          <div className="text-xl font-black font-headline hover:text-blue-800 transition-colors">
            NHO Elektro
          </div>
        </div>
      </div>
    </section>
  );
}
