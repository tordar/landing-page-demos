import { regler } from "@/app/vhut-landing/lib/content";

export function Regler() {
  return (
    <section className="px-4 py-20">
      <div className="mx-auto w-full max-w-3xl space-y-10">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {regler.title}
          </h2>
        </div>

        <div className="space-y-4 text-muted-foreground">
          {regler.intro.map((p, i) => (
            <p key={i} className="text-lg leading-relaxed">
              {p}
            </p>
          ))}
        </div>

        <ol className="space-y-5 list-none pl-0">
          {regler.rules.map((rule) => (
            <li key={rule.number} className="flex gap-4">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center bg-primary text-primary-foreground text-xs font-bold tabular-nums">
                {rule.number}
              </span>
              <p className="text-base leading-relaxed text-foreground pt-0.5">
                {rule.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
