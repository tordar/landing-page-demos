import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt oss | Os Gravferdsbyrå AS",
  description:
    "Ta kontakt med Os Gravferdsbyrå - vi er tilgjengelige døgnet rundt.",
};

export default function KontaktPage() {
  return (
    <div className="pt-24 pb-20">
      <section className="max-w-7xl mx-auto px-8">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary block mb-4">
            Kontakt
          </span>
          <h1 className="font-headline text-5xl md:text-7xl font-light text-primary leading-tight mb-8">
            Vi er her for deg.
          </h1>
          <p className="text-xl text-on-surface-variant font-light leading-relaxed mb-16">
            Når du trenger oss, er vi bare en telefonsamtale unna. Vår
            døgnbemannede vakttelefon sørger for at du alltid kan nå oss.
          </p>
        </div>

        {/* Two-column layout: left info + right form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left column */}
          <div className="space-y-12">
            {/* Besøk oss */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">
                  location_on
                </span>
                <h2 className="font-headline text-3xl">Besøk oss</h2>
              </div>
              <div className="bg-surface-container-low rounded-xl p-6">
                <h3 className="font-bold text-on-background text-lg">
                  Brugata 50
                </h3>
                <p className="text-on-surface-variant mb-4">
                  5200 Os, Norge
                </p>
                <div className="rounded-lg overflow-hidden h-[220px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1975.5!2d5.4685!3d60.1885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x463cf95a5b0e5c3d%3A0x0!2sBrugata%2050%2C%205200%20Os!5e0!3m2!1sno!2sno!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Os Gravferdsbyrå AS - Brugata 50, 5200 Os"
                  />
                </div>
              </div>
            </div>

            {/* E-post */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">
                  mail
                </span>
                <h2 className="font-headline text-3xl">E-post</h2>
              </div>
              <div className="space-y-3">
                <EmailCard
                  label="Hovedkontor"
                  email="post@osgravferdsbyraa.no"
                />
                <EmailCard
                  label="Agnethe"
                  email="agnethe@osgravferdsbyraa.no"
                />
                <EmailCard
                  label="Jorunn"
                  email="jorunn@osgravferdsbyraa.no"
                />
              </div>
            </div>
          </div>

          {/* Right column: contact form */}
          <div className="bg-surface-container-lowest rounded-xl p-8 md:p-12 shadow-sm border border-outline-variant/10 h-fit">
            <h2 className="font-headline text-3xl text-on-background mb-4">
              Send oss en melding
            </h2>
            <p className="text-on-surface-variant mb-10">
              Fyll ut skjemaet under, så kontakter vi deg så snart som mulig.
              Ved akutt behov for hjelp, vennligst bruk vår døgnvaktstelefon.
            </p>

            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField label="Ditt navn" placeholder="Navn Navnesen" />
                <FormField
                  label="Telefonnummer"
                  placeholder="+47 00 00 00 00"
                  type="tel"
                />
              </div>
              <FormField
                label="E-postadresse"
                placeholder="navn@eksempel.no"
                type="email"
              />
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-on-background mb-3">
                  Hva gjelder henvendelsen?
                </label>
                <textarea
                  rows={5}
                  placeholder="Skriv din melding her..."
                  className="w-full bg-transparent border-b border-outline-variant/30 focus:border-primary outline-none text-on-background placeholder:text-on-surface-variant/50 resize-none pb-2 transition-colors"
                />
              </div>
              <button
                type="submit"
                className="bg-primary text-on-primary px-8 py-4 rounded-xl font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
              >
                Send melding
                <span className="material-symbols-outlined text-xl">send</span>
              </button>
              <p className="text-xs text-on-surface-variant/70 italic">
                Ved å sende inn skjemaet samtykker du til at vi behandler dine
                opplysninger i tråd med våre personvernregler.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

function EmailCard({ label, email }: { label: string; email: string }) {
  return (
    <a
      href={`mailto:${email}`}
      className="block bg-surface-container-low rounded-xl px-6 py-4 hover:bg-surface-container transition-colors"
    >
      <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant/60 mb-1">
        {label}
      </p>
      <p className="font-medium text-on-background">{email}</p>
    </a>
  );
}

function FormField({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label className="block text-xs font-bold uppercase tracking-widest text-on-background mb-3">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full bg-transparent border-b border-outline-variant/30 focus:border-primary outline-none text-on-background placeholder:text-on-surface-variant/50 pb-2 transition-colors"
      />
    </div>
  );
}
