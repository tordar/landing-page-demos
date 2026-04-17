import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface-container-highest w-full py-12 px-8 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="max-w-xs space-y-4">
          <h4 className="text-base font-headline text-primary">
            Os Gravferdsbyrå AS
          </h4>
          <p className="text-on-background/60 text-xs uppercase tracking-widest">
            Brugata 50, 5200 Os
          </p>
          <p className="text-on-background/60 text-xs uppercase tracking-widest">
            Døgnvakt: 56 57 49 50
          </p>
          <p className="text-on-background/60 text-sm normal-case tracking-normal mt-4">
            En verdig avskjed i trygge hender. Vi bistår med alt det praktiske
            rundt dødsfall i Os og omegn.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          <div className="flex flex-col gap-4">
            <p className="text-xs uppercase tracking-widest font-bold text-primary">
              Snarveier
            </p>
            <nav className="flex flex-col gap-2">
              <FooterLink href="#">Bestill blomster</FooterLink>
              <FooterLink href="#">Dødsannonser</FooterLink>
              <FooterLink href="#">Våre minnesider</FooterLink>
            </nav>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-xs uppercase tracking-widest font-bold text-primary">
              Kontakt
            </p>
            <nav className="flex flex-col gap-2">
              <FooterLink href="#">Prisliste (PDF)</FooterLink>
              <FooterLink href="/kontakt">Brugata 50, 5200 Os</FooterLink>
            </nav>
          </div>
          <div className="hidden md:flex flex-col gap-4">
            <p className="text-xs uppercase tracking-widest font-bold text-primary">
              Ressurser
            </p>
            <nav className="flex flex-col gap-2">
              <FooterLink href="/om-oss">Om oss</FooterLink>
              <FooterLink href="/ved-dodsfall/praktisk-info">
                Praktisk info
              </FooterLink>
            </nav>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-outline-variant/20">
        <p className="text-xs uppercase tracking-widest text-on-background/60 text-center md:text-left">
          © {new Date().getFullYear()} Os Gravferdsbyrå AS. Alt innhold er
          beskyttet.
        </p>
      </div>
    </footer>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-xs uppercase tracking-widest text-on-background/60 hover:text-on-background transition-opacity"
    >
      {children}
    </Link>
  );
}
