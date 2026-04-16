import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Facebook, Linkedin, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Image
                src="/HGN logo.jpg"
                alt="HGN Elektro AS"
                width={80}
                height={40}
                className="h-8 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-muted-foreground italic">
              Vår visjon er å levere elektrotjenester av kvalitet gjennom stolthet til vårt yrke.
            </p>
            <div className="text-sm text-muted-foreground">
              <p>Org nr: NO 919 253 185 MVA</p>
              <p>© 2024 HGN Elektro AS</p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Kontakt HGN</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <a href="tel:22120003" className="hover:text-primary transition-colors">
                  22 12 00 03
                </a>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <a href="mailto:post@hgnelektro.no" className="hover:text-primary transition-colors">
                  post@hgnelektro.no
                </a>
              </div>
              <div className="flex items-start space-x-2 text-sm">
                <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                <div>
                  <p>HGN Elektro AS</p>
                  <p>Strømsveien 223</p>
                  <p>0668 Oslo</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Hurtiglenker</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/tjenester" className="text-sm hover:text-primary transition-colors">
                Tjenester
              </Link>
              <Link href="/portefolje" className="text-sm hover:text-primary transition-colors">
                Portefølje
              </Link>
              <Link href="/karriere" className="text-sm hover:text-primary transition-colors">
                Karriere
              </Link>
              <Link href="/kontakt-oss" className="text-sm hover:text-primary transition-colors">
                Kontakt oss
              </Link>
            </nav>
          </div>

          {/* Legal & Social */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Informasjon</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/personvern" className="text-sm hover:text-primary transition-colors">
                Personvern
              </Link>
              <Link href="/apenhetsloven" className="text-sm hover:text-primary transition-colors">
                Åpenhetsloven
              </Link>
            </nav>
            
            <div className="space-y-2">
              <h4 className="text-sm font-medium">Følg oss</h4>
              <div className="flex space-x-2">
                <a
                  href="#"
                  className="p-2 rounded-md bg-background hover:bg-accent transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-md bg-background hover:bg-accent transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© 2024 HGN Elektro AS - Alle rettigheter forbeholdt</p>
          <p className="mt-2 sm:mt-0">
            Utviklet med ❤️ for kvalitet og stolthet
          </p>
        </div>
      </div>
    </footer>
  );
} 