import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight, Building2, Home, Smartphone } from "lucide-react";

export function ServiceModules() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Våre tjenester</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Vi tilbyr et bredt spekter av elektrotjenester tilpasset dine behov
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Næring og offentlig */}
          <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                <Building2 className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl">Næring og offentlig</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <CardDescription className="text-center space-y-3">
                <p>HGN elektro tilbyr alle elektrotjenester til næring- og offentlig sektor.</p>
                <p>Vi har en bred erfaringshistorikk innenfor hoteller, kontor, industri, skoler og butikker.</p>
                <p>Sammen med våre leverandører og samarbeidspartnere, skreddersyr vi løsninger etter ditt ønske.</p>
              </CardDescription>
              <div className="text-center">
                <Button variant="outline" asChild>
                  <Link href="/tjenester/naering-offentlig">
                    Les mer
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Privat */}
          <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                <Home className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl">Privat</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <CardDescription className="text-center space-y-3">
                <p>Vi tilbyr både service og nyinstallasjon til privatkunder i både nye og gamle hjem.</p>
                <p>Vi er også oppdatert på det siste innen elbil-lading, enøktiltak, smarthusløsninger, og trender innen belysning.</p>
              </CardDescription>
              <div className="text-center">
                <Button variant="outline" asChild>
                  <Link href="/tjenester/privat">
                    Les mer
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Smarthus */}
          <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                <Smartphone className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl">Smarthus</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <CardDescription className="text-center space-y-3">
                <p>Et smarthussystem kan hjelpe deg i hverdagen, og gi deg praktisk informasjon om elforbruk og tilstandsstatus.</p>
                <p>Vi kan finne løsningen som passer for deg og dine behov, slik at smarthussystemet gir deg den utnyttelsen du forventer.</p>
              </CardDescription>
              <div className="text-center">
                <Button variant="outline" asChild>
                  <Link href="/tjenester/smarthus">
                    Les mer
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
} 