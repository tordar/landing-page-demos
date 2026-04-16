import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { ServiceModules } from "@/components/sections/service-modules";
import { ContactBanner } from "@/components/sections/contact-banner";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="outline" className="text-sm">
              Elektrotjenester av kvalitet
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
              HGN Elektro AS
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Vår visjon er å levere elektrotjenester av kvalitet gjennom stolthet til vårt arbeid
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/kontakt-oss">
                  Kontakt oss
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/portefolje">
                  Se våre prosjekter
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Slider */}
      <FeaturedProjects />

      {/* Service Modules */}
      <ServiceModules />

      {/* Contact Banner */}
      <ContactBanner />
    </div>
  );
}
