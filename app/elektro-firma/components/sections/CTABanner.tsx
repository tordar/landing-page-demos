import Link from "next/link";

interface CTABannerProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref?: string;
  variant?: "dark" | "light";
}

export default function CTABanner({
  title,
  description,
  buttonText,
  buttonHref = "/kontakt",
  variant = "dark",
}: CTABannerProps) {
  if (variant === "dark") {
    return (
      <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-8">
          <div className="relative bg-primary-container rounded-3xl p-12 md:p-20 overflow-hidden">
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-white font-headline text-4xl md:text-6xl font-extrabold mb-8 tracking-tight">
                {title}
              </h2>
              <p className="text-primary-fixed-dim text-lg mb-10">{description}</p>
              <Link
                href={buttonHref}
                className="inline-block bg-tertiary-fixed text-on-tertiary-fixed px-10 py-5 rounded-lg font-extrabold text-xl hover:scale-105 active:scale-95 transition-all"
              >
                {buttonText}
              </Link>
            </div>
            <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-secondary/10 skew-x-12 translate-x-1/2" />
            <div className="absolute -right-20 -bottom-20 w-80 h-80 border-4 border-white/5 rounded-full" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-8 py-24">
      <div className="relative bg-surface-container-highest rounded-2xl p-12 md:p-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-secondary/5 to-transparent pointer-events-none" />
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 leading-tight font-headline">
            {title}
          </h2>
          <p className="text-on-surface-variant text-lg mb-10 leading-relaxed">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={buttonHref}
              className="bg-tertiary-fixed text-on-tertiary-fixed px-8 py-4 rounded-sm font-bold text-lg hover:brightness-105 transition-all shadow-md text-center"
            >
              {buttonText}
            </Link>
            <Link
              href="/kontakt"
              className="bg-white text-secondary px-8 py-4 rounded-sm font-bold text-lg border border-outline-variant/30 hover:bg-surface transition-all text-center"
            >
              Kontakt oss
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
