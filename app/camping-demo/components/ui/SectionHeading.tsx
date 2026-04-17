export default function SectionHeading({
  label,
  title,
  className = "",
}: {
  label?: string;
  title: string;
  className?: string;
}) {
  return (
    <div className={`text-center mb-10 ${className}`}>
      {label && (
        <p className="text-sm tracking-[3px] text-secondary mb-2 uppercase">
          {label}
        </p>
      )}
      <h2 className="text-3xl font-bold text-primary">{title}</h2>
    </div>
  );
}
