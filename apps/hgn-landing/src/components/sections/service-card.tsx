import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
  imageAlt?: string;
}

export function ServiceCard({ title, description, image, href, imageAlt }: ServiceCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden p-0">
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={image}
          alt={imageAlt || title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <CardHeader className="px-6 pt-4 pb-2">
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 px-6 pb-6 pt-2">
        <CardDescription className="text-sm leading-relaxed">
          {description}
        </CardDescription>
        <Button variant="outline" size="sm" asChild className="w-full">
          <Link href={href}>
            Les mer
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
} 