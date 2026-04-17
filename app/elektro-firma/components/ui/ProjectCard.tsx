import Image from "next/image";

interface ProjectCardProps {
  image: string;
  imageAlt: string;
  category: string;
  year: string;
  title: string;
  description: string;
  variant?: "default" | "featured";
}

export default function ProjectCard({
  image,
  imageAlt,
  category,
  year,
  title,
  description,
  variant = "default",
}: ProjectCardProps) {
  if (variant === "featured") {
    return (
      <article className="md:col-span-2 group relative bg-primary-container rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col md:flex-row">
        <div className="md:w-1/2 aspect-video md:aspect-auto overflow-hidden">
          <Image
            src={image}
            alt={imageAlt}
            width={640}
            height={480}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
          />
        </div>
        <div className="md:w-1/2 p-10 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-tertiary-fixed text-on-tertiary-fixed text-[10px] font-bold px-2 py-1 rounded-sm uppercase tracking-wider">
              {category}
            </span>
          </div>
          <h3 className="text-3xl font-extrabold text-white mb-4 leading-tight font-headline">
            {title}
          </h3>
          <p className="text-on-primary-container leading-relaxed text-base mb-8">
            {description}
          </p>
          <div className="flex items-center text-tertiary-fixed font-bold text-sm group-hover:gap-2 transition-all">
            Les casestudie
            <span className="material-symbols-outlined icon-inline ml-1">open_in_new</span>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group relative bg-surface-container-low rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col">
      <div className="aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={imageAlt}
          width={640}
          height={480}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
      </div>
      <div className="p-8 flex flex-col flex-grow">
        <div className="flex items-center gap-2 mb-4">
          <span className="bg-secondary/10 text-secondary text-[10px] font-bold px-2 py-1 rounded-sm uppercase tracking-wider">
            {category}
          </span>
          <span className="text-on-surface-variant/40 text-[10px] font-medium uppercase tracking-widest">
            — {year}
          </span>
        </div>
        <h3 className="text-2xl font-bold text-primary mb-3 leading-snug font-headline">
          {title}
        </h3>
        <p className="text-on-surface-variant leading-relaxed text-sm mb-6 flex-grow">
          {description}
        </p>
        <div className="flex items-center text-secondary font-bold text-sm group-hover:gap-2 transition-all">
          Se detaljer
          <span className="material-symbols-outlined icon-inline ml-1">arrow_forward</span>
        </div>
      </div>
    </article>
  );
}
