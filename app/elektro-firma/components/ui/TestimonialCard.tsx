interface TestimonialCardProps {
  quote: string;
  name: string;
  location: string;
  initials: string;
}

export default function TestimonialCard({
  quote,
  name,
  location,
  initials,
}: TestimonialCardProps) {
  return (
    <div className="bg-surface p-8 rounded-xl border border-outline-variant/10 shadow-sm">
      <p className="italic text-on-surface-variant mb-6 text-lg leading-relaxed">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary font-bold">
          {initials}
        </div>
        <div>
          <p className="font-bold">{name}</p>
          <p className="text-xs text-on-surface-variant uppercase tracking-wider">
            {location}
          </p>
        </div>
      </div>
    </div>
  );
}
