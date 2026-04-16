interface JobCardProps {
  title: string;
  description: string;
  type: string;
  location: string;
}

export default function JobCard({
  title,
  description,
  type,
  location,
}: JobCardProps) {
  return (
    <div className="group bg-surface-container-lowest p-8 rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-6 transition-all border border-transparent hover:border-secondary/10 hover:shadow-xl hover:shadow-blue-900/5">
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-secondary text-xs font-bold uppercase tracking-wider bg-secondary/10 px-2 py-0.5 rounded-sm">
            {type}
          </span>
          <span className="text-on-surface-variant text-xs font-medium">
            {location}
          </span>
        </div>
        <h3 className="text-2xl font-bold group-hover:text-secondary transition-colors font-headline">
          {title}
        </h3>
        <p className="text-on-surface-variant mt-2 max-w-2xl leading-relaxed">
          {description}
        </p>
      </div>
      <div className="flex items-center">
        <button className="bg-secondary text-on-secondary px-8 py-3 rounded-lg font-bold hover:opacity-90 active:scale-95 transition-all cursor-pointer">
          Søk her
        </button>
      </div>
    </div>
  );
}
