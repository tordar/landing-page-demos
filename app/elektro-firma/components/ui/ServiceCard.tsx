import Link from "next/link";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  href?: string;
  variant?: "default" | "dark" | "blue";
}

export default function ServiceCard({
  icon,
  title,
  description,
  href = "/tjenester",
  variant = "default",
}: ServiceCardProps) {
  const variants = {
    default: {
      container:
        "bg-surface-container-low p-8 rounded-lg flex flex-col h-full transition-all duration-300 hover:bg-surface-container-high hover:-translate-y-1",
      icon: "bg-secondary text-white",
      title: "text-on-surface",
      description: "text-on-surface-variant",
      link: "text-secondary",
    },
    dark: {
      container:
        "bg-primary-container p-8 rounded-lg flex flex-col h-full transition-all duration-300 hover:-translate-y-1",
      icon: "bg-tertiary-fixed text-on-tertiary-fixed",
      title: "text-white",
      description: "text-blue-100/70",
      link: "text-tertiary-fixed",
    },
    blue: {
      container:
        "bg-secondary p-8 rounded-lg flex flex-col h-full transition-all duration-300 hover:-translate-y-1 text-white",
      icon: "bg-white text-secondary",
      title: "text-white",
      description: "text-white/80",
      link: "text-white",
    },
  };

  const v = variants[variant];

  return (
    <div className={`group ${v.container}`}>
      <div
        className={`mb-6 inline-flex items-center justify-center w-14 h-14 rounded-sm shadow-md group-hover:scale-110 transition-transform ${v.icon}`}
      >
        <span className="material-symbols-outlined text-3xl">{icon}</span>
      </div>
      <h3 className={`text-xl font-headline font-bold mb-3 ${v.title}`}>
        {title}
      </h3>
      <p className={`mb-8 flex-grow leading-relaxed ${v.description}`}>
        {description}
      </p>
      <Link
        href={href}
        className={`font-bold inline-flex items-center gap-2 group-hover:underline ${v.link}`}
      >
        Les mer
        <span className="material-symbols-outlined icon-inline">arrow_forward</span>
      </Link>
    </div>
  );
}
