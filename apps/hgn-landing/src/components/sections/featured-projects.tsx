import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function FeaturedProjects() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Utvalgte prosjekter</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Se noen av de spennende prosjektene vi har jobbet med
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="group hover:shadow-lg transition-shadow overflow-hidden p-0">
            <div className="relative h-56 w-full">
              <Image
                src="/images/featured-projects/OHF.jpg"
                alt="Oslo Handelstands Forening project"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardHeader className="px-6 pt-4 pb-2">
              <CardTitle>Oslo Handelstands Forening</CardTitle>
              <CardDescription>
                Et spennende prosjekt med smarte løsninger og intelligent styring
              </CardDescription>
            </CardHeader>
            <CardContent className="px-6 pb-6 pt-2">
              <Button variant="outline" size="sm" asChild>
                <Link href="/portefolje/oslo-handelstands-forening">
                  Se prosjektet
                  <ArrowRight className="ml-2 h-3 w-3" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-shadow overflow-hidden p-0">
            <div className="relative h-56 w-full">
              <Image
                src="/images/featured-projects/brand-factory.jpg"
                alt="Brand Factory project"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardHeader className="px-6 pt-4 pb-2">
              <CardTitle>Brand Factory</CardTitle>
              <CardDescription>
                Spennende og lyskrevende lokaler for Brand Factory
              </CardDescription>
            </CardHeader>
            <CardContent className="px-6 pb-6 pt-2">
              <Button variant="outline" size="sm" asChild>
                <Link href="/portefolje/brand-factory">
                  Se prosjektet
                  <ArrowRight className="ml-2 h-3 w-3" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-shadow overflow-hidden p-0">
            <div className="relative h-56 w-full">
              <Image
                src="/images/featured-projects/grenseveien.jpeg"
                alt="Grenseveien 88 project"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardHeader className="px-6 pt-4 pb-2">
              <CardTitle>Grenseveien 88</CardTitle>
              <CardDescription>
                Et moderne kontorbygg skapt for fremtidens arbeidsplasser
              </CardDescription>
            </CardHeader>
            <CardContent className="px-6 pb-6 pt-2">
              <Button variant="outline" size="sm" asChild>
                <Link href="/portefolje/grenseveien-88">
                  Se prosjektet
                  <ArrowRight className="ml-2 h-3 w-3" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
} 