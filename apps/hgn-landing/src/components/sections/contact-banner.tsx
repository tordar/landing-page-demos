import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Phone, Mail } from "lucide-react";

export function ContactBanner() {
  return (
    <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Har du et spennende prosjekt på gang?
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Vi ønsker å arbeide med deg! Ta kontakt for en uforpliktende samtale om ditt prosjekt.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/kontakt-oss">
                Kontakt oss
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <div className="flex items-center justify-center space-x-6 text-sm">
              <a href="tel:22120003" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
                <Phone className="h-4 w-4" />
                <span>22 12 00 03</span>
              </a>
              <a href="mailto:post@hgnelektro.no" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
                <Mail className="h-4 w-4" />
                <span>post@hgnelektro.no</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 