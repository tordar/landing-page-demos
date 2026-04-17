export default function PageHero({
  title,
  subtitle,
  image,
}: {
  title: string;
  subtitle?: string;
  image: string;
}) {
  return (
    <section className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden">
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
        width={1600}
        height={400}
      />
      <div className="absolute inset-0 bg-primary/60" />
      <div className="relative text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">{title}</h1>
        {subtitle && (
          <p className="text-lg text-blue-200">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
