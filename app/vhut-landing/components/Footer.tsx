import Link from "next/link";
import { cn } from "@/app/vhut-landing/lib/utils";
import { Button } from "@/app/vhut-landing/components/ui/button";
import { footer } from "@/app/vhut-landing/lib/content";

export function Footer({ className }: { className?: string }) {
  return (
    <footer
      className={cn(
        "border-t border-border bg-background py-4",
        className
      )}
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-2 px-4 text-center">
        <div className="flex gap-2">
          <Button variant="ghost" size="sm" asChild>
            <Link
              href={footer.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {footer.facebookLabel}
            </Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link href={footer.newsletterHref}>{footer.newsletterLabel}</Link>
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">{footer.copyright}</p>
      </div>
    </footer>
  );
}
