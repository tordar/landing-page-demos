import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 w-full py-16 px-8 text-white">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto mb-16">
        <div>
          <div className="text-xl font-black text-white mb-6 uppercase tracking-tighter font-headline">
            EL-KRAFT
          </div>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            Presisjon og lidenskap for elektrisk faget siden 2012. Din
            foretrukne partner på Østlandet.
          </p>
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-sm bg-slate-800 flex items-center justify-center hover:bg-secondary transition-colors cursor-pointer">
              <span className="material-symbols-outlined text-sm">public</span>
            </div>
            <div className="w-8 h-8 rounded-sm bg-slate-800 flex items-center justify-center hover:bg-secondary transition-colors cursor-pointer">
              <span className="material-symbols-outlined text-sm">share</span>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-yellow-400 uppercase text-xs tracking-widest font-headline">
            Tjenester
          </h4>
          <ul className="space-y-4">
            <li>
              <Link
                href="/tjenester"
                className="text-slate-400 hover:text-white transition-all hover:translate-x-1 inline-block"
              >
                Boliginstallasjon
              </Link>
            </li>
            <li>
              <Link
                href="/tjenester"
                className="text-slate-400 hover:text-white transition-all hover:translate-x-1 inline-block"
              >
                Næringsbygg
              </Link>
            </li>
            <li>
              <Link
                href="/tjenester"
                className="text-slate-400 hover:text-white transition-all hover:translate-x-1 inline-block"
              >
                Industri &amp; Automasjon
              </Link>
            </li>
            <li>
              <Link
                href="/tjenester"
                className="text-slate-400 hover:text-white transition-all hover:translate-x-1 inline-block"
              >
                Serviceavtaler
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-yellow-400 uppercase text-xs tracking-widest font-headline">
            Sertifiseringer
          </h4>
          <ul className="space-y-4">
            <li className="text-slate-400">NELFO Certified</li>
            <li className="text-slate-400">Startbank</li>
            <li className="text-slate-400">Nemko</li>
            <li className="text-slate-400">Miljøfyrtårn</li>
            <li className="text-slate-400">Lærlingbedrift</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-yellow-400 uppercase text-xs tracking-widest font-headline">
            Kontakt Detaljer
          </h4>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-slate-400">
              <span className="material-symbols-outlined text-secondary text-lg">
                location_on
              </span>
              Elektroveien 1, 0123 Oslo
            </li>
            <li className="flex items-center gap-3 text-slate-400">
              <span className="material-symbols-outlined text-secondary text-lg">
                phone
              </span>
              +47 22 11 00 00
            </li>
            <li className="flex items-center gap-3 text-slate-400">
              <span className="material-symbols-outlined text-secondary text-lg">
                mail
              </span>
              post@el-kraft.no
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-wide text-slate-500">
        <p>&copy; 2024 El-Kraft. Precision Kineticism in Electrical Engineering.</p>
        <div className="flex gap-8">
          <Link href="#" className="hover:underline decoration-yellow-400">
            Personvern
          </Link>
          <Link href="#" className="hover:underline decoration-yellow-400">
            Vilkår
          </Link>
          <Link href="#" className="hover:underline decoration-yellow-400">
            Cookies
          </Link>
        </div>
      </div>
    </footer>
  );
}
